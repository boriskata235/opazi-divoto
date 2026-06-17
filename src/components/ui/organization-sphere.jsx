/* ============================================================
   organization-sphere.jsx (.tsx екв.)
   Интерактивна 3D сфера с лога на организации
   ============================================================ */

const { useState: useS, useEffect: useE, useRef: useR, useCallback: useCB } = React;

// ==========================================
// SPHERE MATH HELPERS
// ==========================================

const SPHERE_MATH = {
  degreesToRadians: (degrees) => degrees * (Math.PI / 180),
  radiansToDegrees: (radians) => radians * (180 / Math.PI),

  sphericalToCartesian: (radius, theta, phi) => ({
    x: radius * Math.sin(phi) * Math.cos(theta),
    y: radius * Math.cos(phi),
    z: radius * Math.sin(phi) * Math.sin(theta),
  }),

  normalizeAngle: (angle) => {
    while (angle > 180) angle -= 360;
    while (angle < -180) angle += 360;
    return angle;
  },
};

// ==========================================
// MAIN COMPONENT
// ==========================================

function OrganizationSphere({
  organizations = [],
  containerSize = 600,
  sphereRadius = 200,
  dragSensitivity = 0.8,
  momentumDecay = 0.96,
  maxRotationSpeed = 6,
  baseImageScale = 0.15,
  hoverScale = 1.3,
  perspective = 1000,
  autoRotate = true,
  autoRotateSpeed = 0.2,
  className = "",
}) {
  const [isMounted, setIsMounted] = useS(false);
  const [rotation, setRotation] = useS({ x: 15, y: 15, z: 0 });
  const [velocity, setVelocity] = useS({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useS(false);
  const [imagePositions, setImagePositions] = useS([]);
  const [hoveredIndex, setHoveredIndex] = useS(null);
  const [hasDragged, setHasDragged] = useS(false);

  const containerRef = useR(null);
  const lastMousePos = useR({ x: 0, y: 0 });
  const animationFrame = useR(null);
  const dragStartPos = useR({ x: 0, y: 0 });

  const actualSphereRadius = sphereRadius || containerSize * 0.5;
  const baseImageSize = containerSize * baseImageScale;

  // Generate Fibonacci sphere positions
  const generateSpherePositions = useCB(() => {
    const positions = [];
    const imageCount = organizations.length;
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    const angleIncrement = (2 * Math.PI) / goldenRatio;

    for (let i = 0; i < imageCount; i++) {
      const t = i / imageCount;
      const inclination = Math.acos(1 - 2 * t);
      const azimuth = angleIncrement * i;

      let phi = inclination * (180 / Math.PI);
      let theta = (azimuth * (180 / Math.PI)) % 360;

      const poleBonus = Math.pow(Math.abs(phi - 90) / 90, 0.6) * 35;
      if (phi < 90) {
        phi = Math.max(5, phi - poleBonus);
      } else {
        phi = Math.min(175, phi + poleBonus);
      }

      phi = 15 + (phi / 180) * 150;

      const randomOffset = (Math.random() - 0.5) * 20;
      theta = (theta + randomOffset) % 360;
      phi = Math.max(0, Math.min(180, phi + (Math.random() - 0.5) * 10));

      positions.push({ theta, phi, radius: actualSphereRadius });
    }

    return positions;
  }, [organizations.length, actualSphereRadius]);

  // Calculate world positions with rotation
  const calculateWorldPositions = useCB(() => {
    const positions = imagePositions.map((pos, index) => {
      const thetaRad = SPHERE_MATH.degreesToRadians(pos.theta);
      const phiRad = SPHERE_MATH.degreesToRadians(pos.phi);
      const rotXRad = SPHERE_MATH.degreesToRadians(rotation.x);
      const rotYRad = SPHERE_MATH.degreesToRadians(rotation.y);

      let x = pos.radius * Math.sin(phiRad) * Math.cos(thetaRad);
      let y = pos.radius * Math.cos(phiRad);
      let z = pos.radius * Math.sin(phiRad) * Math.sin(thetaRad);

      const x1 = x * Math.cos(rotYRad) + z * Math.sin(rotYRad);
      const z1 = -x * Math.sin(rotYRad) + z * Math.cos(rotYRad);
      x = x1;
      z = z1;

      const y2 = y * Math.cos(rotXRad) - z * Math.sin(rotXRad);
      const z2 = y * Math.sin(rotXRad) + z * Math.cos(rotXRad);
      y = y2;
      z = z2;

      const worldPos = { x, y, z };

      const fadeZoneStart = -10;
      const fadeZoneEnd = -30;
      const isVisible = worldPos.z > fadeZoneEnd;

      let fadeOpacity = 1;
      if (worldPos.z <= fadeZoneStart) {
        fadeOpacity = Math.max(0, (worldPos.z - fadeZoneEnd) / (fadeZoneStart - fadeZoneEnd));
      }

      const isPoleImage = pos.phi < 30 || pos.phi > 150;
      const distanceFromCenter = Math.sqrt(worldPos.x * worldPos.x + worldPos.y * worldPos.y);
      const maxDistance = actualSphereRadius;
      const distanceRatio = Math.min(distanceFromCenter / maxDistance, 1);

      const distancePenalty = isPoleImage ? 0.4 : 0.7;
      const centerScale = Math.max(0.3, 1 - distanceRatio * distancePenalty);
      const depthScale = (worldPos.z + actualSphereRadius) / (2 * actualSphereRadius);
      const scale = centerScale * Math.max(0.5, 0.8 + depthScale * 0.3);

      return {
        ...worldPos,
        scale,
        zIndex: Math.round(1000 + worldPos.z),
        isVisible,
        fadeOpacity,
        originalIndex: index,
      };
    });

    // Collision detection
    const adjustedPositions = [...positions];
    for (let i = 0; i < adjustedPositions.length; i++) {
      const pos = adjustedPositions[i];
      if (!pos.isVisible) continue;

      let adjustedScale = pos.scale;
      const imageSize = baseImageSize * adjustedScale;

      for (let j = 0; j < adjustedPositions.length; j++) {
        if (i === j) continue;
        const other = adjustedPositions[j];
        if (!other.isVisible) continue;

        const otherSize = baseImageSize * other.scale;
        const dx = pos.x - other.x;
        const dy = pos.y - other.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const minDistance = (imageSize + otherSize) / 2 + 25;

        if (distance < minDistance && distance > 0) {
          const overlap = minDistance - distance;
          const reductionFactor = Math.max(0.4, 1 - (overlap / minDistance) * 0.6);
          adjustedScale = Math.min(adjustedScale, adjustedScale * reductionFactor);
        }
      }

      adjustedPositions[i] = { ...pos, scale: Math.max(0.25, adjustedScale) };
    }

    return adjustedPositions;
  }, [imagePositions, rotation, actualSphereRadius, baseImageSize]);

  const clampRotationSpeed = useCB(
    (speed) => Math.max(-maxRotationSpeed, Math.min(maxRotationSpeed, speed)),
    [maxRotationSpeed]
  );

  // Physics & momentum
  const updateMomentum = useCB(() => {
    if (isDragging) return;

    setVelocity((prev) => {
      const newVelocity = { x: prev.x * momentumDecay, y: prev.y * momentumDecay };
      if (!autoRotate && Math.abs(newVelocity.x) < 0.01 && Math.abs(newVelocity.y) < 0.01) {
        return { x: 0, y: 0 };
      }
      return newVelocity;
    });

    setRotation((prev) => {
      let newY = prev.y;
      if (autoRotate) newY += autoRotateSpeed;
      newY += clampRotationSpeed(velocity.y);
      return {
        x: SPHERE_MATH.normalizeAngle(prev.x + clampRotationSpeed(velocity.x)),
        y: SPHERE_MATH.normalizeAngle(newY),
        z: prev.z,
      };
    });
  }, [isDragging, momentumDecay, velocity, clampRotationSpeed, autoRotate, autoRotateSpeed]);

  // Event handlers
  const handleMouseDown = useCB((e) => {
    e.preventDefault();
    setIsDragging(true);
    setHasDragged(false);
    setVelocity({ x: 0, y: 0 });
    lastMousePos.current = { x: e.clientX, y: e.clientY };
    dragStartPos.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handleMouseMove = useCB(
    (e) => {
      if (!isDragging) return;

      const deltaX = e.clientX - lastMousePos.current.x;
      const deltaY = e.clientY - lastMousePos.current.y;

      const totalMoved =
        Math.abs(e.clientX - dragStartPos.current.x) +
        Math.abs(e.clientY - dragStartPos.current.y);
      if (totalMoved > 5) setHasDragged(true);

      const rotationDelta = {
        x: -deltaY * dragSensitivity,
        y: deltaX * dragSensitivity,
      };

      setRotation((prev) => ({
        x: SPHERE_MATH.normalizeAngle(prev.x + clampRotationSpeed(rotationDelta.x)),
        y: SPHERE_MATH.normalizeAngle(prev.y + clampRotationSpeed(rotationDelta.y)),
        z: prev.z,
      }));

      setVelocity({
        x: clampRotationSpeed(rotationDelta.x),
        y: clampRotationSpeed(rotationDelta.y),
      });

      lastMousePos.current = { x: e.clientX, y: e.clientY };
    },
    [isDragging, dragSensitivity, clampRotationSpeed]
  );

  const handleMouseUp = useCB(() => setIsDragging(false), []);

  const handleTouchStart = useCB((e) => {
    e.preventDefault();
    const touch = e.touches[0];
    setIsDragging(true);
    setHasDragged(false);
    setVelocity({ x: 0, y: 0 });
    lastMousePos.current = { x: touch.clientX, y: touch.clientY };
    dragStartPos.current = { x: touch.clientX, y: touch.clientY };
  }, []);

  const handleTouchMove = useCB(
    (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const touch = e.touches[0];
      const deltaX = touch.clientX - lastMousePos.current.x;
      const deltaY = touch.clientY - lastMousePos.current.y;

      const totalMoved =
        Math.abs(touch.clientX - dragStartPos.current.x) +
        Math.abs(touch.clientY - dragStartPos.current.y);
      if (totalMoved > 5) setHasDragged(true);

      const rotationDelta = {
        x: -deltaY * dragSensitivity,
        y: deltaX * dragSensitivity,
      };

      setRotation((prev) => ({
        x: SPHERE_MATH.normalizeAngle(prev.x + clampRotationSpeed(rotationDelta.x)),
        y: SPHERE_MATH.normalizeAngle(prev.y + clampRotationSpeed(rotationDelta.y)),
        z: prev.z,
      }));

      setVelocity({
        x: clampRotationSpeed(rotationDelta.x),
        y: clampRotationSpeed(rotationDelta.y),
      });

      lastMousePos.current = { x: touch.clientX, y: touch.clientY };
    },
    [isDragging, dragSensitivity, clampRotationSpeed]
  );

  const handleTouchEnd = useCB(() => setIsDragging(false), []);

  const handleOrganizationClick = useCB(
    (url, e) => {
      e.stopPropagation();
      if (!hasDragged) {
        window.open(url, "_blank", "noopener,noreferrer");
      }
    },
    [hasDragged]
  );

  // Effects
  useE(() => {
    setIsMounted(true);
  }, []);

  useE(() => {
    setImagePositions(generateSpherePositions());
  }, [generateSpherePositions]);

  useE(() => {
    const animate = () => {
      updateMomentum();
      animationFrame.current = requestAnimationFrame(animate);
    };
    if (isMounted) animationFrame.current = requestAnimationFrame(animate);
    return () => {
      if (animationFrame.current) cancelAnimationFrame(animationFrame.current);
    };
  }, [isMounted, updateMomentum]);

  useE(() => {
    if (!isMounted) return;
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("touchend", handleTouchEnd);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isMounted, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  const worldPositions = calculateWorldPositions();

  const renderOrganizationNode = (org, index) => {
    const position = worldPositions[index];
    if (!position || !position.isVisible) return null;

    const imageSize = baseImageSize * position.scale;
    const isHovered = hoveredIndex === index;
    const finalScale = isHovered ? Math.min(hoverScale, hoverScale / position.scale) : 1;

    // Rendering: ако org.icon е React element, показваме него; иначе img
    const inner = org.icon ? (
      <div
        className="w-full h-full flex items-center justify-center"
        style={{
          backgroundColor: org.bg || "#ffffff",
          color: org.color || "#2D4A2B",
        }}
      >
        {org.icon}
      </div>
    ) : (
      <img
        src={org.src}
        alt={org.alt}
        className="w-full h-full object-contain p-2"
        draggable={false}
        loading={index < 3 ? "eager" : "lazy"}
      />
    );

    return (
      <div
        key={org.id}
        className="absolute cursor-pointer select-none transition-transform duration-200 ease-out group"
        style={{
          width: `${imageSize}px`,
          height: `${imageSize}px`,
          left: `${containerSize / 2 + position.x}px`,
          top: `${containerSize / 2 + position.y}px`,
          opacity: position.fadeOpacity,
          transform: `translate(-50%, -50%) scale(${finalScale})`,
          zIndex: position.zIndex,
        }}
        onMouseEnter={() => setHoveredIndex(index)}
        onMouseLeave={() => setHoveredIndex(null)}
        onClick={(e) => handleOrganizationClick(org.url, e)}
        title={`Посети ${org.name}`}
      >
        <div
          className="relative w-full h-full rounded-full overflow-hidden shadow-lg transition-colors"
          style={{
            border: isHovered
              ? "2px solid #8B2C2C"
              : "2px solid rgba(255,255,255,0.35)",
            backgroundColor: "#ffffff",
          }}
        >
          {inner}
        </div>

        {/* Tooltip */}
        {isHovered && (
          <div
            className="absolute left-1/2 -translate-x-1/2 -bottom-10 text-white text-xs px-3 py-1.5 rounded-md whitespace-nowrap shadow-lg pointer-events-none"
            style={{
              backgroundColor: "#2D4A2B",
              zIndex: 9999,
              fontFamily: "var(--font-sans)",
              fontWeight: 500,
              letterSpacing: "0.01em",
            }}
          >
            {org.name}
            <div
              className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45"
              style={{ backgroundColor: "#2D4A2B" }}
            />
          </div>
        )}
      </div>
    );
  };

  if (!isMounted) {
    return (
      <div
        className="rounded-lg flex items-center justify-center"
        style={{
          width: containerSize,
          height: containerSize,
          backgroundColor: "rgba(245, 241, 232, 0.05)",
        }}
      >
        <div style={{ color: "rgba(245, 241, 232, 0.5)" }}>Зареждане...</div>
      </div>
    );
  }

  if (!organizations.length) {
    return (
      <div
        className="rounded-lg border-2 border-dashed flex items-center justify-center"
        style={{
          width: containerSize,
          height: containerSize,
          borderColor: "rgba(245, 241, 232, 0.2)",
        }}
      >
        <div style={{ color: "rgba(245, 241, 232, 0.5)" }} className="text-center">
          <p>Няма организации</p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative select-none cursor-grab active:cursor-grabbing ${className}`}
      style={{
        width: containerSize,
        height: containerSize,
        perspective: `${perspective}px`,
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    >
      <div className="relative w-full h-full" style={{ zIndex: 10 }}>
        {organizations.map((org, index) => renderOrganizationNode(org, index))}
      </div>
    </div>
  );
}

window.OrganizationSphere = OrganizationSphere;
