/* ============================================================
   plant-detail-template.jsx
   ------------------------------------------------------------
   ЕДИНЕН шаблон за ВСИЧКИ детайлни страници на растения (ТИП 2).
   Структурата е ЕДНО КЪМ ЕДНО със страницата на животните
   (/animals/brown-bear), различава се само съдържанието.

   Секции (както при мечката):
     1. HERO
     2. СПЕЦИФИКАЦИЯ · ДЕТАЙЛИ  (текст + 4 факт-карти 2×2)
     3. ГАЛЕРИЯ                 (3 снимки + lightbox)
     4. БИОЛОГИЯ И ОСОБЕНОСТИ    (4 карти 2×2)
     5. ПРИРОДОЗАЩИТЕН СТАТУС + ОСНОВНИ ЗАПЛАХИ
     6. КАК ДА ПОМОГНЕМ          (4 номерирани карти)
     + бутон „← Назад към растенията“

   Картата и 3D моделът НЕ са тук, те са в parallax листинга
   /plants (ТИП 1), точно както при животните.
   ============================================================ */

const PDT_RRD = window.ReactRouterDOM || {};
const PDTLink =
  PDT_RRD.Link ||
  ((props) =>
    React.createElement("a", { ...props, href: props.to }, props.children));

const PDT_EYEBROW = {
  fontSize: "0.7rem",
  fontWeight: 600,
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  color: "rgba(168, 69, 69, 0.95)",
  marginBottom: "1rem",
};

/* --- Lightbox --- */
function PlantDTLightbox({ image, onClose }) {
  React.useEffect(() => {
    if (!image) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [image, onClose]);

  if (!image) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 100,
        background: "rgba(10, 18, 10, 0.92)",
        backdropFilter: "blur(8px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        cursor: "zoom-out",
        animation: "fadeInUp 0.25s ease",
      }}
    >
      <button
        onClick={onClose}
        aria-label="Затвори"
        style={{
          position: "absolute",
          top: 24,
          right: 24,
          width: 44,
          height: 44,
          borderRadius: "50%",
          border: "1px solid rgba(245, 241, 232, 0.25)",
          background: "rgba(26, 46, 26, 0.7)",
          color: "#F5F1E8",
          cursor: "pointer",
          fontSize: "1.5rem",
          lineHeight: 1,
        }}
      >
        ×
      </button>
      <img
        src={image.src}
        alt={image.alt}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "92vw",
          maxHeight: "88vh",
          borderRadius: "0.75rem",
          boxShadow: "0 24px 60px -12px rgba(0,0,0,0.7)",
          objectFit: "contain",
          cursor: "default",
        }}
      />
    </div>
  );
}

/* --- Райе placeholder за липсваща снимка --- */
function PDTImgPlaceholder({ label }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
        textAlign: "center",
        background:
          "repeating-linear-gradient(45deg, #243b22 0px, #243b22 14px, #2D4A2B 14px, #2D4A2B 28px)",
      }}
    >
      <p
        style={{
          color: "rgba(245, 241, 232, 0.5)",
          fontSize: "0.75rem",
          fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
          letterSpacing: "0.04em",
          lineHeight: 1.5,
          margin: 0,
        }}
      >
        {label}
        <br />
        <span style={{ opacity: 0.6 }}>ще бъде добавена</span>
      </p>
    </div>
  );
}

function PlantDetailTemplate({ data }) {
  const [lightbox, setLightbox] = React.useState(null);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const gallery = data.gallery || [];

  return (
    <div
      style={{ backgroundColor: "#1a2e1a", color: "#F5F1E8", minHeight: "100vh" }}
    >
      {/* ===== 1. HERO ===== */}
      <section
        className="relative w-full flex items-end overflow-hidden"
        style={{ height: "60vh", minHeight: 480 }}
      >
        {data.heroImage ? (
          <img
            src={data.heroImage}
            alt={data.name}
            className="absolute inset-0 w-full h-full"
            style={{
              objectFit: "cover",
              objectPosition: data.heroPosition || "center 50%",
              filter: "brightness(0.55)",
            }}
          />
        ) : (
          <PDTImgPlaceholder label={`СНИМКА · ${data.name}`} />
        )}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(26, 46, 26, 0.55) 0%, rgba(26, 46, 26, 0.3) 50%, rgba(26, 46, 26, 0.95) 100%)",
          }}
        />
        <div
          className="container-page relative z-10"
          style={{ paddingBottom: "3.5rem", paddingTop: "8rem" }}
        >
          <div className="max-w-3xl">
            <div
              style={{
                display: "inline-block",
                padding: "0.4rem 1rem",
                borderRadius: 999,
                fontSize: "0.8125rem",
                fontWeight: 500,
                backgroundColor: data.statusColor || "#A67C2A",
                color: "#fff",
                letterSpacing: "0.02em",
                marginBottom: "1.25rem",
              }}
            >
              {data.status}
            </div>
            <h1
              className="font-serif text-shadow-hero"
              style={{
                fontSize: "clamp(3rem, 7vw, 5.5rem)",
                fontWeight: 700,
                color: "#F5F1E8",
                lineHeight: 1.02,
                letterSpacing: "-0.025em",
                marginBottom: "0.75rem",
              }}
            >
              {data.name}
            </h1>
            <p
              className="font-serif"
              style={{
                fontSize: "clamp(1.125rem, 2vw, 1.5rem)",
                fontStyle: "italic",
                color: "rgba(245, 241, 232, 0.78)",
                fontWeight: 400,
              }}
            >
              {data.latin}
              {data.epithet ? ` · ${data.epithet}` : ""}
            </p>
          </div>
        </div>
      </section>

      {/* ===== 2. СПЕЦИФИКАЦИЯ ===== */}
      <section
        className="container-page"
        style={{ paddingTop: "5rem", paddingBottom: "4rem" }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12">
          <div className="max-w-md">
            <p style={PDT_EYEBROW}>Спецификация · Детайли</p>
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                color: "#F5F1E8",
                fontWeight: 600,
                lineHeight: 1.08,
                letterSpacing: "-0.02em",
                marginBottom: "1rem",
              }}
            >
              {data.specTitle || "Разгледай растението отблизо"}
            </h2>
            <div
              style={{
                width: "3rem",
                height: 2,
                background: "#a84545",
                borderRadius: 1,
                marginBottom: "1.25rem",
              }}
            />
            <p style={{ color: "rgba(245, 241, 232, 0.78)", lineHeight: 1.7 }}>
              {data.specDescription}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5" style={{ alignSelf: "center" }}>
            {(data.stats || []).map((s) => (
              <div
                key={s.label}
                style={{
                  padding: "1.5rem 1.25rem",
                  background: "rgba(26, 46, 26, 0.55)",
                  border: "1px solid rgba(168, 69, 69, 0.22)",
                  borderRadius: "1rem",
                }}
              >
                <div
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(245, 241, 232, 0.55)",
                    marginBottom: 8,
                  }}
                >
                  {s.label}
                </div>
                <div
                  className="font-serif"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "#F5F1E8",
                    lineHeight: 1.1,
                  }}
                >
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 3. ГАЛЕРИЯ ===== */}
      <section
        className="container-page"
        style={{ paddingTop: "3rem", paddingBottom: "4rem" }}
      >
        <p style={{ ...PDT_EYEBROW, marginBottom: "2rem" }}>Галерия</p>
        <div
          className="grid gap-5"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))" }}
        >
          {gallery.map((img, i) => (
            <button
              key={i}
              onClick={() => img.src && setLightbox(img)}
              style={{
                position: "relative",
                aspectRatio: "4 / 3",
                borderRadius: "0.875rem",
                overflow: "hidden",
                border: "1px solid rgba(168, 69, 69, 0.22)",
                cursor: img.src ? "zoom-in" : "default",
                padding: 0,
                background: "transparent",
              }}
            >
              {img.src ? (
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full transition-transform duration-500"
                  style={{ objectFit: "cover" }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.transform = "scale(1.06)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.transform = "scale(1)")
                  }
                />
              ) : (
                <PDTImgPlaceholder label={`СНИМКА ${i + 1}`} />
              )}
            </button>
          ))}
        </div>
      </section>

      {/* ===== 4. БИОЛОГИЯ И ОСОБЕНОСТИ ===== */}
      <section
        className="container-page"
        style={{ paddingTop: "3rem", paddingBottom: "4rem" }}
      >
        <p style={PDT_EYEBROW}>Биология</p>
        <h2
          className="font-serif"
          style={{
            fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            color: "#F5F1E8",
            fontWeight: 600,
            marginBottom: "2.5rem",
            letterSpacing: "-0.02em",
          }}
        >
          {data.biologyTitle || "Биология и особености"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {(data.biology || []).map((b) => (
            <div
              key={b.title}
              style={{
                padding: "1.75rem",
                background: "rgba(26, 46, 26, 0.55)",
                border: "1px solid rgba(168, 69, 69, 0.18)",
                borderRadius: "1rem",
              }}
            >
              <h3
                className="font-serif"
                style={{
                  fontSize: "1.5rem",
                  color: "#F5F1E8",
                  fontWeight: 600,
                  marginBottom: "0.75rem",
                  letterSpacing: "-0.015em",
                }}
              >
                {b.title}
              </h3>
              <p
                style={{
                  color: "rgba(245, 241, 232, 0.78)",
                  lineHeight: 1.7,
                  fontSize: "0.95rem",
                }}
              >
                {b.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ===== 5. ПРИРОДОЗАЩИТЕН СТАТУС + ЗАПЛАХИ ===== */}
      <section
        className="container-page"
        style={{ paddingTop: "3rem", paddingBottom: "4rem" }}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10"
          style={{
            background:
              "linear-gradient(135deg, rgba(139, 44, 44, 0.12) 0%, rgba(26, 46, 26, 0.6) 60%)",
            border: "1px solid rgba(168, 69, 69, 0.3)",
            borderRadius: "1.25rem",
            padding: "2.5rem",
          }}
        >
          <div>
            <p style={PDT_EYEBROW}>Природозащитен статус</p>
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2.25rem)",
                color: "#F5F1E8",
                fontWeight: 600,
                marginBottom: "1.5rem",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              {data.statusHeading || `${data.status} вид`}
            </h2>
            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
              <div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "rgba(245, 241, 232, 0.55)",
                    marginBottom: 6,
                  }}
                >
                  Категория
                </div>
                <div
                  className="font-serif"
                  style={{ fontSize: "1.65rem", fontWeight: 600, color: "#F5F1E8" }}
                >
                  {data.statusCategory}
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "rgba(245, 241, 232, 0.55)",
                    marginBottom: 6,
                  }}
                >
                  {data.statusCountLabel || "Численост в България"}
                </div>
                <div
                  className="font-serif"
                  style={{ fontSize: "1.65rem", fontWeight: 600, color: "#F5F1E8" }}
                >
                  {data.statusCount}
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3
              style={{
                fontSize: "0.85rem",
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "rgba(245, 241, 232, 0.65)",
                marginBottom: "1.25rem",
              }}
            >
              Основни заплахи
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "grid",
                gap: "0.75rem",
              }}
            >
              {(data.threats || []).map((t) => (
                <li
                  key={t}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                    color: "rgba(245, 241, 232, 0.85)",
                    lineHeight: 1.55,
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      width: 6,
                      height: 6,
                      marginTop: 9,
                      borderRadius: "50%",
                      background: "#a84545",
                      boxShadow: "0 0 6px rgba(168, 69, 69, 0.6)",
                    }}
                  />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== 6. КАК ДА ПОМОГНЕМ ===== */}
      <section
        className="container-page"
        style={{ paddingTop: "3rem", paddingBottom: "4rem" }}
      >
        <div className="max-w-3xl">
          <p style={PDT_EYEBROW}>Действия</p>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              color: "#F5F1E8",
              fontWeight: 600,
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Как да помогнем
          </h2>
          <p
            style={{
              color: "rgba(245, 241, 232, 0.78)",
              lineHeight: 1.7,
              marginBottom: "2rem",
              fontSize: "1.05rem",
            }}
          >
            {data.helpIntro}
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "grid",
              gap: "1rem",
            }}
          >
            {(data.help || []).map((a, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                  padding: "1rem 1.25rem",
                  background: "rgba(26, 46, 26, 0.55)",
                  border: "1px solid rgba(168, 69, 69, 0.18)",
                  borderRadius: "0.75rem",
                  color: "rgba(245, 241, 232, 0.88)",
                  lineHeight: 1.6,
                }}
              >
                <span
                  className="font-serif"
                  style={{
                    flexShrink: 0,
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "#a84545",
                    lineHeight: 1,
                    minWidth: "1.5rem",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== BACK BUTTON ===== */}
      <section
        className="container-page"
        style={{ paddingTop: "2rem", paddingBottom: "5rem", textAlign: "center" }}
      >
        <PDTLink
          to="/plants"
          onClick={() => {
            const saved = sessionStorage.getItem("scrollPosition");
            if (saved) {
              sessionStorage.setItem("pendingScrollRestore", "1");
              setTimeout(() => {
                window.scrollTo(0, parseInt(saved, 10));
                sessionStorage.removeItem("scrollPosition");
                sessionStorage.removeItem("pendingScrollRestore");
              }, 50);
            }
          }}
          className="btn btn-ghost"
          style={{ color: "#F5F1E8", borderColor: "rgba(245, 241, 232, 0.4)" }}
        >
          ← Назад към растенията
        </PDTLink>
      </section>

      <PlantDTLightbox image={lightbox} onClose={() => setLightbox(null)} />
    </div>
  );
}

window.PlantDetailTemplate = PlantDetailTemplate;
