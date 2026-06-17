/* ============================================================
   ScrollBackground.jsx
   ------------------------------------------------------------
   Cinematic scroll-triggered zoom/crossfade between 3 fixed
   background photos for the Landing page.

   - Fixed-positioned, full viewport
   - Driven by framer-motion `useScroll` + `useTransform`
   - Each image: incoming → scale 1.3 → 1, outgoing → scale 1 → 1.3
   - Dark gradient overlay on top for legibility
   - Preloads all 3 images on mount
   - Mobile: gentler zoom (1.15) to avoid pixelation

   Implementation note: instead of `<motion.img>` we use plain
   `<img>` elements and subscribe to MotionValues imperatively
   via `.on('change', …)`. This avoids a noisy React key warning
   that framer-motion 11 emits from inside motion-component
   internals when three siblings are mounted at once.
   ============================================================ */

const SBG_FM = window.FramerMotion || window.Motion || {};
const sbgUseScroll = SBG_FM.useScroll;
const sbgUseTransform = SBG_FM.useTransform;

const SBG_IMAGES = [
  "public/images/backgrounds/landing-bg.jpg",
  "public/images/backgrounds/redbook-bg.jpg",
  "public/images/backgrounds/sphere-bg.jpg",
];

function ScrollBackground({ targetRef }) {
  const img1Ref = React.useRef(null);
  const img2Ref = React.useRef(null);
  const img3Ref = React.useRef(null);

  // Detect mobile (re-runs on resize so orientation flips work).
  const [isMobile, setIsMobile] = React.useState(
    typeof window !== "undefined" && window.innerWidth < 768
  );
  React.useEffect(() => {
    const onR = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", onR);
    return () => window.removeEventListener("resize", onR);
  }, []);

  const ZIN = isMobile ? 1.15 : 1.3;

  // Track scroll across the WHOLE landing page (Hero + RedBook + Sphere).
  const scrollObj = sbgUseScroll
    ? sbgUseScroll({
        target: targetRef,
        offset: ["start start", "end end"],
      })
    : { scrollYProgress: null };
  const scrollYProgress = scrollObj.scrollYProgress;

  /* --------------------------------------------------------
     Timeline (scrollYProgress 0 → 1 over the whole page):

       0.00 ───── 0.30 ── 0.45 ───────── 0.62 ── 0.80 ───── 1.00
        │           │      │              │      │           │
        │  bg1   ←──┘      │              │      │           │
        │  fade out + zoom-in             │      │           │
        │           ┌──→  bg2  ←──────────┘      │           │
        │           │  zoom-out, dwell, zoom-out │           │
        │           │                            │           │
        │           │                            └───→ bg3   │
        │           │                            zoom-out, dwell
     -------------------------------------------------------- */

  // We always call the same number of hooks regardless of FM availability.
  const noop = React.useMemo(
    () => ({ on: () => () => {}, get: () => 1 }),
    []
  );

  const opacity1 =
    scrollYProgress && sbgUseTransform
      ? sbgUseTransform(scrollYProgress, [0.0, 0.30, 0.45], [1, 1, 0])
      : noop;
  const scale1 =
    scrollYProgress && sbgUseTransform
      ? sbgUseTransform(scrollYProgress, [0.0, 0.45], [1, ZIN])
      : noop;

  const opacity2 =
    scrollYProgress && sbgUseTransform
      ? sbgUseTransform(
          scrollYProgress,
          [0.28, 0.45, 0.62, 0.80],
          [0, 1, 1, 0]
        )
      : noop;
  const scale2 =
    scrollYProgress && sbgUseTransform
      ? sbgUseTransform(
          scrollYProgress,
          [0.28, 0.45, 0.62, 0.80],
          [ZIN, 1, 1, ZIN]
        )
      : noop;

  const opacity3 =
    scrollYProgress && sbgUseTransform
      ? sbgUseTransform(scrollYProgress, [0.62, 0.80, 1.0], [0, 1, 1])
      : noop;
  const scale3 =
    scrollYProgress && sbgUseTransform
      ? sbgUseTransform(scrollYProgress, [0.62, 0.80, 1.0], [ZIN, 1, 1])
      : noop;

  // Subscribe imperatively, update the plain <img> styles whenever the
  // MotionValues change. We use rAF batching to coalesce paint work.
  React.useEffect(() => {
    let raf = 0;
    const pending = { 1: { o: 1, s: 1 }, 2: { o: 0, s: ZIN }, 3: { o: 0, s: ZIN } };
    let dirty = false;

    const apply = () => {
      raf = 0;
      dirty = false;
      const refs = [img1Ref.current, img2Ref.current, img3Ref.current];
      refs.forEach((el, i) => {
        if (!el) return;
        const p = pending[i + 1];
        el.style.opacity = p.o;
        el.style.transform = `scale(${p.s})`;
      });
    };

    const schedule = () => {
      if (!dirty) {
        dirty = true;
        raf = requestAnimationFrame(apply);
      }
    };

    // Seed with current values
    pending[1].o = opacity1.get?.() ?? 1;
    pending[1].s = scale1.get?.() ?? 1;
    pending[2].o = opacity2.get?.() ?? 0;
    pending[2].s = scale2.get?.() ?? ZIN;
    pending[3].o = opacity3.get?.() ?? 0;
    pending[3].s = scale3.get?.() ?? ZIN;
    schedule();

    const subs = [
      opacity1.on?.("change", (v) => { pending[1].o = v; schedule(); }),
      scale1.on?.("change",   (v) => { pending[1].s = v; schedule(); }),
      opacity2.on?.("change", (v) => { pending[2].o = v; schedule(); }),
      scale2.on?.("change",   (v) => { pending[2].s = v; schedule(); }),
      opacity3.on?.("change", (v) => { pending[3].o = v; schedule(); }),
      scale3.on?.("change",   (v) => { pending[3].s = v; schedule(); }),
    ];

    return () => {
      if (raf) cancelAnimationFrame(raf);
      subs.forEach((u) => typeof u === "function" && u());
    };
  }, [opacity1, scale1, opacity2, scale2, opacity3, scale3, ZIN]);

  // Preload images so the swap is instant.
  React.useEffect(() => {
    SBG_IMAGES.forEach((src) => {
      const im = new Image();
      im.decoding = "async";
      im.src = src;
    });
  }, []);

  const imgBase = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    willChange: "transform, opacity",
    transformOrigin: "center center",
    userSelect: "none",
    pointerEvents: "none",
  };

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        overflow: "hidden",
        backgroundColor: "#0a160a",
      }}
    >
      <img
        ref={img1Ref}
        src={SBG_IMAGES[0]}
        alt=""
        draggable="false"
        style={{ ...imgBase, opacity: 1, transform: "scale(1)" }}
      />
      <img
        ref={img2Ref}
        src={SBG_IMAGES[1]}
        alt=""
        draggable="false"
        style={{ ...imgBase, opacity: 0, transform: `scale(${ZIN})` }}
      />
      <img
        ref={img3Ref}
        src={SBG_IMAGES[2]}
        alt=""
        draggable="false"
        style={{ ...imgBase, opacity: 0, transform: `scale(${ZIN})` }}
      />

      {/* Dark gradient overlay for legibility */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(8, 18, 8, 0.55) 0%, rgba(8, 18, 8, 0.42) 45%, rgba(8, 18, 8, 0.62) 100%)",
        }}
      />
      {/* Subtle vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0) 55%, rgba(0,0,0,0.45) 100%)",
        }}
      />
    </div>
  );
}

window.ScrollBackground = ScrollBackground;
