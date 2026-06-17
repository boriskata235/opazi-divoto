/* ============================================================
   BrownBearDetail.jsx, страница /animals/brown-bear
   Детайлна страница за Кафявата мечка
   ============================================================ */

const BBD_RRD = window.ReactRouterDOM || {};
const BBDLink = BBD_RRD.Link || ((props) => React.createElement("a", { ...props, href: props.to }, props.children));

const BEAR_GALLERY = [
  { src: "public/images/animals/bear-gallery/bear-1.jpg", alt: "Кафява мечка край вода" },
  { src: "public/images/animals/bear-gallery/bear-2.jpg", alt: "Кафява мечка в мъгла" },
  { src: "public/images/animals/bear-gallery/bear-3.jpg", alt: "Кафява мечка в сняг" },
];

const BEAR_STATS = [
  { label: "Дължина", value: "1.7 – 2.2 м" },
  { label: "Тегло", value: "100 – 350 кг" },
  { label: "Скорост", value: "50 км/ч" },
  { label: "Живот", value: "20 – 30 г." },
];

const BEHAVIOR_BLOCKS = [
  {
    title: "Хранене",
    body:
      "Кафявата мечка е всеяден хищник. Над 75% от храната ѝ е растителна, горски плодове, корени, семена, жълъди, букови орехи. През пролетта яде млади листа и треви, а през есента трупа мазнини с дренки и шипки. Не отказва мед, риба, насекоми, мърша и понякога нападнат добитък.",
  },
  {
    title: "Размножаване",
    body:
      "Чифтосването е през май–юли. След забавена имплантация, бременността е около 7–8 месеца. Малките (1–3 на брой) се раждат в бърлогата през януари–февруари, слепи, голи, с тегло 300–500 г. Остават с майката 2–3 години.",
  },
  {
    title: "Зимен сън",
    body:
      "От ноември до март–април мечката изпада в зимен сън в бърлога, естествена пещера, хралупа или изровена дупка. Не е истинска хибернация: телесната температура спада малко, но мечката може да се събуди при безпокойство. Точно тогава се раждат и малките.",
  },
  {
    title: "Поведение",
    body:
      "Самотно животно с добре изразена териториалност. Маркира територията си чрез одраскване на дървета, оставяне на миризма и тъпчене на пътеки. Има отлично обоняние, едно от най-добрите сред бозайниците. Зрението ѝ е средно, но слухът е остър.",
  },
];

const THREATS = [
  "Бракониерство",
  "Фрагментация на местообитанията",
  "Конфликти с хора (нападения над стада)",
  "Изграждане на пътища и магистрали",
  "Загуба на хабитат поради дърводобив",
];

const HELP_ACTIONS = [
  "Подкрепи природозащитни организации (БДЗП, WWF, Балкани)",
  "Не оставяй храна и боклук в гората, мечките започват да зависят от хора",
  "Спазвай правилата при срещи с мечки, не бягай, говори спокойно",
  "Сигнализирай за бракониерство на горските стопанства или 112",
];

/* ============================================================
   Lightbox за галерията
   ============================================================ */
function Lightbox({ image, onClose }) {
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

/* ============================================================
   Главен компонент
   ============================================================ */
function BrownBearDetail() {
  const [lightbox, setLightbox] = React.useState(null);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ backgroundColor: "#1a2e1a", color: "#F5F1E8", minHeight: "100vh" }}>
      {/* HERO */}
      <section
        className="relative w-full flex items-end overflow-hidden"
        style={{ height: "60vh", minHeight: 480 }}
      >
        <img
          src="public/images/animals/bear.jpg"
          alt="Кафява мечка"
          className="absolute inset-0 w-full h-full"
          style={{
            objectFit: "cover",
            objectPosition: "center 35%",
            filter: "brightness(0.55)",
          }}
        />
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
                backgroundColor: "#A67C2A",
                color: "#fff",
                letterSpacing: "0.02em",
                marginBottom: "1.25rem",
              }}
            >
              Уязвим
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
              Кафява мечка
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
              Ursus arctos
            </p>
          </div>
        </div>
      </section>

      {/* СПЕЦИФИКАЦИЯ */}
      <section className="container-page" style={{ paddingTop: "5rem", paddingBottom: "4rem" }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-12">
          <div className="max-w-md">
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(168, 69, 69, 0.95)",
                marginBottom: "1rem",
              }}
            >
              Спецификация · Детайли
            </p>
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
              Разгледай мечката отблизо
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
              Кафявата мечка достига до{" "}
              <strong style={{ color: "#F5F1E8" }}>2.8 метра</strong> на задните си крака и тежи
              между <strong style={{ color: "#F5F1E8" }}>100 и 350 кг</strong>. Характерният ѝ
              изпъкнал гръб е мускулна гърбица, която ѝ дава огромна сила при копаене.
            </p>
          </div>
          <div
            className="grid grid-cols-2 gap-5"
            style={{ alignSelf: "center" }}
          >
            {BEAR_STATS.map((s) => (
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
                    fontSize: "1.65rem",
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

      {/* ГАЛЕРИЯ */}
      <section className="container-page" style={{ paddingTop: "3rem", paddingBottom: "4rem" }}>
        <p
          style={{
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(168, 69, 69, 0.95)",
            marginBottom: "2rem",
          }}
        >
          Галерия
        </p>
        <div
          className="grid gap-5"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          }}
        >
          {BEAR_GALLERY.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightbox(img)}
              style={{
                position: "relative",
                aspectRatio: "4 / 3",
                borderRadius: "0.875rem",
                overflow: "hidden",
                border: "1px solid rgba(168, 69, 69, 0.22)",
                cursor: "zoom-in",
                padding: 0,
                background: "transparent",
              }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full transition-transform duration-500"
                style={{ objectFit: "cover" }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </button>
          ))}
        </div>
      </section>

      {/* ХАРАКТЕРИСТИКИ И ПОВЕДЕНИЕ */}
      <section className="container-page" style={{ paddingTop: "3rem", paddingBottom: "4rem" }}>
        <p
          style={{
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(168, 69, 69, 0.95)",
            marginBottom: "1rem",
          }}
        >
          Биология
        </p>
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
          Характеристики и поведение
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {BEHAVIOR_BLOCKS.map((b) => (
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

      {/* ПРИРОДОЗАЩИТЕН СТАТУС */}
      <section className="container-page" style={{ paddingTop: "3rem", paddingBottom: "4rem" }}>
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
            <p
              style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(168, 69, 69, 0.95)",
                marginBottom: "1rem",
              }}
            >
              Природозащитен статус
            </p>
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
              Уязвим вид
            </h2>
            <div
              style={{
                display: "flex",
                gap: "2rem",
                flexWrap: "wrap",
              }}
            >
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
                  Уязвим (VU)
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
                  Численост в България
                </div>
                <div
                  className="font-serif"
                  style={{ fontSize: "1.65rem", fontWeight: 600, color: "#F5F1E8" }}
                >
                  ~720 индивида
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
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.75rem" }}>
              {THREATS.map((t) => (
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

      {/* КАК ДА ПОМОГНЕМ */}
      <section className="container-page" style={{ paddingTop: "3rem", paddingBottom: "4rem" }}>
        <div className="max-w-3xl">
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(168, 69, 69, 0.95)",
              marginBottom: "1rem",
            }}
          >
            Действия
          </p>
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
            Запазването на кафявата мечка зависи от ежедневните решения на всеки от нас. Ето няколко
            конкретни неща, които можеш да направиш:
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
            {HELP_ACTIONS.map((a, i) => (
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

      {/* BACK BUTTON */}
      <section
        className="container-page"
        style={{ paddingTop: "2rem", paddingBottom: "5rem", textAlign: "center" }}
      >
        <BBDLink
          to="/animals"
          onClick={() => {
            // Маркирай за ScrollToTop, че трябва да възстанови позицията.
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
          style={{
            color: "#F5F1E8",
            borderColor: "rgba(245, 241, 232, 0.4)",
          }}
        >
          ← Назад към животните
        </BBDLink>
      </section>

      {/* Lightbox */}
      <Lightbox image={lightbox} onClose={() => setLightbox(null)} />
    </div>
  );
}

window.BrownBearDetail = BrownBearDetail;
