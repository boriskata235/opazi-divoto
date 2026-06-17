/* ============================================================
   Animal3DViewer.jsx
   ------------------------------------------------------------
   Generic wrapper around Google's <model-viewer> web component.
   - Loads any .glb file
   - Auto-rotate, drag to rotate, scroll/pinch to zoom
   - Branded loading & error states
   ============================================================ */

function Animal3DViewer({
  src,
  alt = "3D модел",
  size = 352,
  cameraOrbit = "30deg 75deg 3.5m",
  fieldOfView = "32deg",
}) {
  const ref = React.useRef(null);
  const [status, setStatus] = React.useState("loading"); // 'loading' | 'ready' | 'error'
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onLoad = () => setStatus("ready");
    const onError = (e) => {
      console.error("Bear3DViewer: model-viewer error", e);
      setStatus("error");
    };
    const onProgress = (e) => {
      const pct = Math.round((e.detail?.totalProgress ?? 0) * 100);
      setProgress(pct);
    };

    el.addEventListener("load", onLoad);
    el.addEventListener("error", onError);
    el.addEventListener("progress", onProgress);

    // Fallback: if <model-viewer> custom element never upgrades (script blocked),
    // surface an error after a few seconds.
    const fallbackTimer = setTimeout(() => {
      if (
        typeof customElements !== "undefined" &&
        !customElements.get("model-viewer")
      ) {
        console.error("Bear3DViewer: <model-viewer> custom element not registered");
        setStatus("error");
      }
    }, 6000);

    return () => {
      el.removeEventListener("load", onLoad);
      el.removeEventListener("error", onError);
      el.removeEventListener("progress", onProgress);
      clearTimeout(fallbackTimer);
    };
  }, [src]);

  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        borderRadius: "0.75rem",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse at 50% 35%, #1f3a1f 0%, #0f1f0f 70%, #0a160a 100%)",
        border: "2px solid rgba(139, 44, 44, 0.35)",
        boxShadow: "0 12px 32px -10px rgba(0,0,0,0.6)",
      }}
    >
      {React.createElement("model-viewer", {
        ref,
        src,
        alt,
        "camera-controls": true,
        "auto-rotate": true,
        "auto-rotate-delay": 1500,
        "rotation-per-second": "18deg",
        "interaction-prompt": "none",
        "shadow-intensity": "1",
        "shadow-softness": "0.85",
        "environment-image": "neutral",
        exposure: "1.05",
        "min-camera-orbit": "auto auto 1.5m",
        "max-camera-orbit": "auto auto 6m",
        "camera-orbit": cameraOrbit,
        "field-of-view": fieldOfView,
        style: {
          width: "100%",
          height: "100%",
          display: "block",
          backgroundColor: "transparent",
          "--poster-color": "transparent",
          cursor: "grab",
        },
      })}

      {/* Loading overlay */}
      {status === "loading" && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.75rem",
            color: "rgba(245, 241, 232, 0.75)",
            fontSize: "0.8rem",
            letterSpacing: "0.08em",
            pointerEvents: "none",
            background:
              "radial-gradient(ellipse at 50% 35%, rgba(31,58,31,0.92) 0%, rgba(15,31,15,0.96) 70%, rgba(10,22,10,0.98) 100%)",
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              border: "2px solid rgba(245, 241, 232, 0.18)",
              borderTopColor: "#a84545",
              animation: "bearSpin 0.9s linear infinite",
            }}
          />
          <div style={{ textTransform: "uppercase" }}>
            Зареждане {progress > 0 ? `· ${progress}%` : ""}
          </div>
        </div>
      )}

      {/* Error overlay */}
      {status === "error" && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
            color: "rgba(245, 241, 232, 0.7)",
            fontSize: "0.85rem",
            textAlign: "center",
            lineHeight: 1.5,
            background:
              "radial-gradient(ellipse at 50% 35%, rgba(31,58,31,0.92) 0%, rgba(15,31,15,0.96) 70%, rgba(10,22,10,0.98) 100%)",
          }}
        >
          Не успяхме да заредим 3D модела.
        </div>
      )}

      {/* Subtle vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse at 50% 110%, rgba(0,0,0,0.45), transparent 55%)",
        }}
      />

      <style>{`
        @keyframes bearSpin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}

window.Animal3DViewer = Animal3DViewer;
// Backwards compat alias
window.Bear3DViewer = Animal3DViewer;
