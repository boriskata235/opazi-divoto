/* ============================================================
   parallax-scroll-feature-section.jsx (.tsx екв.)
   Parallax scroll секция за застрашени видове
   ============================================================ */

const PSFM_FM = window.Motion || window.FramerMotion || {};
const psfmMotion = PSFM_FM.motion || new Proxy({}, { get: () => (props) => React.createElement(props.as || "div", props, props.children) });
const useScroll = PSFM_FM.useScroll;
const useTransform = PSFM_FM.useTransform;
const PSFM_I = window.Icons;

function ParallaxScrollSection({
  items = [],
  pageTitle = "Застрашени видове",
  pageSubtitle = "Скролни надолу",
  pageEyebrow = "Фауна · Червена книга",
}) {
  // Един ref за всеки item
  const sectionRefs = items.map(() => React.useRef(null));

  // Един scroll прогрес за всеки item
  const scrollYProgress = items.map((_, index) =>
    useScroll({
      target: sectionRefs[index],
      offset: ["start end", "center start"],
    }).scrollYProgress
  );

  const opacityContents = scrollYProgress.map((p) => useTransform(p, [0, 0.7], [0, 1]));
  const clipProgresses = scrollYProgress.map((p) =>
    useTransform(p, [0, 0.7], ["inset(0 100% 0 0)", "inset(0 0% 0 0)"])
  );
  const translateContents = scrollYProgress.map((p) => useTransform(p, [0, 1], [-50, 0]));

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#1a2e1a", color: "#F5F1E8" }}
    >
      {/* Hero на страницата */}
      <div
        className="relative w-full flex flex-col items-center justify-center px-6 pt-32 pb-12 text-center overflow-hidden"
        style={{
          minHeight: "60vh",
          background:
            "linear-gradient(180deg, #1a2e1a 0%, #2D4A2B 55%, #1a2e1a 100%)",
        }}
      >
        {/* Soft radial accent */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 40%, rgba(139, 44, 44, 0.14), transparent 65%)",
          }}
        />
        <div className="relative z-10 flex flex-col items-center">
          <p
            className="mb-5"
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(168, 69, 69, 0.95)",
            }}
          >
            {pageEyebrow}
          </p>
          <h1
            className="font-serif"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              color: "#F5F1E8",
              maxWidth: "48rem",
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              textWrap: "balance",
            }}
          >
            {pageTitle}
          </h1>
          <div
            className="mt-6 mb-6"
            style={{
              width: "5rem",
              height: "2px",
              backgroundColor: "#a84545",
              borderRadius: "2px",
            }}
          />
          <p
            className="max-w-2xl"
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
              color: "rgba(245, 241, 232, 0.78)",
              lineHeight: 1.6,
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            {pageSubtitle}
          </p>
          <p
            className="mt-12 flex items-center gap-2 animate-soft-bounce"
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.22em",
              color: "rgba(245, 241, 232, 0.65)",
              fontWeight: 600,
            }}
          >
            СКРОЛНИ <PSFM_I.ArrowDown size={14} stroke={2} />
          </p>
        </div>
      </div>

      {/* Parallax секции */}
      <div className="flex flex-col px-6 md:px-0">
        {items.map((item, index) => (
          <React.Fragment key={item.id}>
          <div
            ref={sectionRefs[index]}
            className={`flex flex-col md:flex-row items-center justify-center md:gap-40 gap-10 ${
              item.id === 1 ? "pt-20 pb-8" : "min-h-screen py-20"
            } ${item.reverse ? "md:flex-row-reverse" : ""}`}
          >
            <psfmMotion.div style={{ y: translateContents[index] }} className="max-w-md">
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  color: "rgba(245, 241, 232, 0.6)",
                  fontSize: "0.9375rem",
                  marginBottom: "0.5rem",
                }}
              >
                {item.latinName}
              </p>
              <h2
                className="font-serif mb-4"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "#F5F1E8",
                  fontWeight: 600,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                }}
              >
                {item.title}
              </h2>

              {/* Status Badge */}
              <div
                className="inline-block rounded-full mb-6"
                style={{
                  padding: "0.4rem 1rem",
                  fontSize: "0.8125rem",
                  fontWeight: 500,
                  backgroundColor: item.statusColor,
                  color: "#fff",
                  letterSpacing: "0.02em",
                }}
              >
                {item.status}
              </div>

              <psfmMotion.div
                style={{ y: translateContents[index] }}
                className="space-y-4"
              >
                <div key="habitat">
                  <span style={{ color: "#a84545", fontWeight: 600 }}>Местообитание: </span>
                  <span style={{ color: "rgba(245, 241, 232, 0.85)" }}>{item.habitat}</span>
                </div>
                <div key="threats">
                  <span style={{ color: "#a84545", fontWeight: 600 }}>Заплахи: </span>
                  <span style={{ color: "rgba(245, 241, 232, 0.85)" }}>{item.threats}</span>
                </div>
                <p key="desc" style={{ color: "rgba(255, 255, 255, 0.72)", marginTop: "1.25rem", lineHeight: 1.7 }}>
                  {item.description}
                </p>
              </psfmMotion.div>
            </psfmMotion.div>

            {/* Снимка / 3D модел на животното */}
            <psfmMotion.div
              style={{
                opacity: opacityContents[index],
                clipPath: clipProgresses[index],
              }}
              className="relative"
            >
              {/* 3D модел за всяко животно, което има modelSrc */}
              {item.modelSrc && window.Animal3DViewer ? (
                <div className="flex flex-col items-center gap-4">
                  <Animal3DViewer
                    src={item.modelSrc}
                    alt={`3D модел: ${item.title}`}
                    size={352}
                  />
                  <a
                    href={item.detailHref || "#"}
                    onClick={() => {
                      if (item.detailHref) {
                        sessionStorage.setItem(
                          "scrollPosition",
                          String(window.scrollY)
                        );
                      }
                    }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.75rem 1.5rem",
                      backgroundColor: "#2D4A2B",
                      color: "#F5F1E8",
                      borderRadius: "0.625rem",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      border: "1px solid rgba(168, 69, 69, 0.4)",
                      transition: "all 220ms cubic-bezier(0.22, 1, 0.36, 1)",
                      cursor: "pointer",
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = "#8B2C2C";
                      e.currentTarget.style.transform = "translateY(-1px)";
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = "#2D4A2B";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    Виж повече →
                  </a>
                  <p
                    style={{
                      fontSize: "0.72rem",
                      color: "rgba(245, 241, 232, 0.45)",
                      fontStyle: "italic",
                      letterSpacing: "0.04em",
                      margin: 0,
                    }}
                  >
                    Завърти модела с мишка · скрол за zoom
                  </p>
                </div>
              ) : item.image ? (
                <a
                  href={item.detailHref || "#"}
                  onClick={() => {
                    if (item.detailHref) {
                      sessionStorage.setItem(
                        "scrollPosition",
                        String(window.scrollY)
                      );
                    }
                  }}
                  className="block group"
                  style={{
                    width: "22rem",
                    height: "22rem",
                    borderRadius: "0.75rem",
                    overflow: "hidden",
                    display: "block",
                    border: "2px solid rgba(139, 44, 44, 0.35)",
                    boxShadow: "0 12px 32px -10px rgba(0,0,0,0.6)",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                    style={{
                      cursor: item.detailHref ? "pointer" : "default",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                  {item.detailHref && (
                    <div
                      className="absolute bottom-3 right-3 flex items-center gap-2 px-3 py-2 rounded-full pointer-events-none"
                      style={{
                        background: "rgba(26, 46, 26, 0.85)",
                        border: "1px solid rgba(168, 69, 69, 0.4)",
                        backdropFilter: "blur(8px)",
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        letterSpacing: "0.16em",
                        textTransform: "uppercase",
                        color: "#F5F1E8",
                      }}
                    >
                      Виж повече →
                    </div>
                  )}
                </a>
              ) : (
                <div
                  className="rounded-lg flex items-center justify-center text-center p-4"
                  style={{
                    width: "20rem",
                    height: "20rem",
                    backgroundColor: "#2D4A2B",
                    border: "2px solid rgba(139, 44, 44, 0.3)",
                  }}
                >
                  <p style={{ color: "rgba(245, 241, 232, 0.4)", fontSize: "0.875rem", lineHeight: 1.5 }}>
                    Снимка на<br />{item.title}<br />ще бъде добавена
                  </p>
                </div>
              )}
            </psfmMotion.div>
          </div>
          {/* Spotlight, всяко животно може да има свой spotlight (име на регистриран на window компонент) */}
          {item.spotlight && window[item.spotlight] && (
            React.createElement(window[item.spotlight])
          )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

window.ParallaxScrollSection = ParallaxScrollSection;
