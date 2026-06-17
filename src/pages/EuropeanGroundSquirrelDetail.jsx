/* ============================================================
   EuropeanGroundSquirrelDetail.jsx, /animals/european-ground-squirrel
   Детайлна страница за Европейския лалугер.

   ВСИЧКИ научни данни са взети от:
   - Червена книга на Р. България, том 2 (Стефанов 2015, БАН & МОСВ)
     http://e-ecodb.bas.bg/rdb/bg/vol2/Spcitell.html
   - План за действие за опазване на европейския лалугер 2022–2031
     (Кошев Й., МОСВ, БДЗП)
   - IUCN Red List 2024 (повишен до Endangered, EN A3c)
   - БДЗП, bspb.org
   - Land For Life, Европейски лалугер
   ============================================================ */

const EGS_RRD = window.ReactRouterDOM || {};
const EGSLink =
  EGS_RRD.Link ||
  ((props) =>
    React.createElement("a", { ...props, href: props.to }, props.children));

const SQUIRREL_GALLERY = [
  {
    src: "public/images/animals/european-ground-squirrel-gallery/squirrel-1.jpg",
    alt: "Европейски лалугер изправен сред тревата",
  },
  {
    src: "public/images/animals/european-ground-squirrel-gallery/squirrel-2.jpg",
    alt: "Европейски лалугер в естественото си местообитание",
  },
  {
    src: "public/images/animals/european-ground-squirrel-gallery/squirrel-3.jpg",
    alt: "Лалугер с характерна изправена поза",
  },
];

const SQUIRREL_STATS = [
  { label: "Дължина", value: "18 – 23 см" },
  { label: "Тегло", value: "200 – 500 г" },
  { label: "Опашка", value: "5 – 7 см" },
  { label: "Живот", value: "8 – 10 г." },
];

const SQUIRREL_BEHAVIOR = [
  {
    title: "Хранене",
    body:
      "Тревопасен. Основна храна са листата на тревисти растения, ливадните треви и зелените части на бобовите. През лятото добавя и семена от житни култури. Лалугерът е ключов компонент в хранителната верига, основна плячка за царския орел и ловния сокол.",
  },
  {
    title: "Хибернация",
    body:
      "Между октомври и март (около 6–7 месеца) изпада в зимен сън в подземна жилищна камера. Тунелите достигат 150–315 см дължина, а жилищната камера е на дълбочина между 40 и 170 см. През есента засипва входа отвътре, за да се изолира от външния студ.",
  },
  {
    title: "Размножаване",
    body:
      "Размножителният период започва веднага след събуждане от зимен сън, февруари–март. Бременността трае около 28 дни. Женските раждат 5–8 малки (понякога до 11) през април–май. Малките прекарват първите 4 седмици в дупката. Полова зрялост, на втората си година.",
  },
  {
    title: "Социална структура",
    body:
      "Дневно активен вид. Живее на колонии, от няколко до стотици индивиди. Според Червената книга при благоприятни условия плътността достига 16–35 ind./ha, а на места, до 65–120 ind./ha. Има характерни тревожни писъци, които предупреждават колонията за опасност.",
  },
];

const SQUIRREL_THREATS = [
  "Разораване на пасища и ливади, основна причина за загубата на местообитания",
  "Употреба на пестициди и изкуствени торове",
  "Опожаряване на пасищата",
  "Изграждане на кариери, варови фабрики, нови лозови и плодови масиви",
  "Изчезване на пасищното животновъдство (лалугерът зависи от ниска тревна растителност)",
  "Изменение на климата, основна причина IUCN да го повиши до „Застрашен“ през 2024 г.",
];

const SQUIRREL_HELP = [
  "Подкрепи проекта на БДЗП „Земя за царския орел“, възстановява лалугерови колонии в Натура 2000",
  "Не подкрепяй обработването на пасища и ливади във вече фрагментирани местообитания",
  "При срещане с колония, спазвай дистанция, без шум, без кучета без каишка",
  "Подкрепи биологичното пасищно животновъдство, то поддържа подходящи местообитания",
  "Сигнализирай за унищожаване на колонии на тел. 112 или РИОСВ",
];

const SQUIRREL_SOURCES = [
  {
    label: "Червена книга на Р. България (БАН)",
    href: "http://e-ecodb.bas.bg/rdb/bg/vol2/Spcitell.html",
    note: "Том 2 · Животни · Стефанов 2015 · категория Уязвим (VU A1c)",
  },
  {
    label: "IUCN Red List, Spermophilus citellus",
    href: "https://www.iucnredlist.org/species/20472/219138148",
    note: "Endangered (EN A3c, 2024), повишен от Vulnerable (2020)",
  },
  {
    label: "БДЗП, Европейски лалугер",
    href: "https://bspb.org/tag/лалугер/",
    note: "Проект „Земя за царския орел“",
  },
  {
    label: "План за действие 2022–2031 (МОСВ/БДЗП/Кошев)",
    href: "https://www.researchgate.net/publication/361642244",
    note: "Национален план за опазване на вида",
  },
  {
    label: "Land For Life, Европейски лалугер",
    href: "https://www.landforlife.org/bg/Species/European-Souslik.html",
    note: "Профил и природозащитен статус",
  },
];

/* ============================================================
   Lightbox
   ============================================================ */
function SquirrelLightbox({ image, onClose }) {
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
function EuropeanGroundSquirrelDetail() {
  const [lightbox, setLightbox] = React.useState(null);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#1a2e1a",
        color: "#F5F1E8",
        minHeight: "100vh",
      }}
    >
      {/* HERO */}
      <section
        className="relative w-full flex items-end overflow-hidden"
        style={{ height: "60vh", minHeight: 480 }}
      >
        <img
          src="public/images/animals/european-ground-squirrel.jpg"
          alt="Европейски лалугер"
          className="absolute inset-0 w-full h-full"
          style={{
            objectFit: "cover",
            objectPosition: "center 40%",
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
              Европейски лалугер
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
              Spermophilus citellus
            </p>
          </div>
        </div>
      </section>

      {/* СПЕЦИФИКАЦИЯ */}
      <section
        className="container-page"
        style={{ paddingTop: "5rem", paddingBottom: "4rem" }}
      >
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
              Разгледай отблизо
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
              Лалугерът е{" "}
              <strong style={{ color: "#F5F1E8" }}>
                наземен гризач от семейство Катерицови
              </strong>
              . За разлика от родствената катерица, той живее в подземни тунели и
              никога не се качва по дървета. Известен е и с народните имена{" "}
              <em style={{ color: "rgba(245, 241, 232, 0.9)" }}>суек</em>,{" "}
              <em style={{ color: "rgba(245, 241, 232, 0.9)" }}>суяк</em> и{" "}
              <em style={{ color: "rgba(245, 241, 232, 0.9)" }}>еркюпек</em>.
              Среща се до{" "}
              <strong style={{ color: "#F5F1E8" }}>2 500 м н.в.</strong>
            </p>
          </div>
          <div
            className="grid grid-cols-2 gap-5"
            style={{ alignSelf: "center" }}
          >
            {SQUIRREL_STATS.map((s) => (
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

      {/* ГАЛЕРИЯ */}
      <section
        className="container-page"
        style={{ paddingTop: "3rem", paddingBottom: "4rem" }}
      >
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
          {SQUIRREL_GALLERY.map((img, i) => (
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
                onMouseOver={(e) =>
                  (e.currentTarget.style.transform = "scale(1.06)")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
            </button>
          ))}
        </div>
      </section>

      {/* ХАРАКТЕРИСТИКИ И ПОВЕДЕНИЕ */}
      <section
        className="container-page"
        style={{ paddingTop: "3rem", paddingBottom: "4rem" }}
      >
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
          {SQUIRREL_BEHAVIOR.map((b) => (
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
                  Червена книга
                </div>
                <div
                  className="font-serif"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "#F5F1E8",
                  }}
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
                  IUCN (2024)
                </div>
                <div
                  className="font-serif"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "#a84545",
                  }}
                >
                  Застрашен (EN)
                </div>
              </div>
            </div>
            <p
              style={{
                marginTop: "1.5rem",
                color: "rgba(245, 241, 232, 0.7)",
                fontSize: "0.875rem",
                lineHeight: 1.6,
                fontStyle: "italic",
                fontFamily: "var(--font-serif)",
              }}
            >
              В България, категория „Уязвим“ (Червена книга, Стефанов 2015). През
              2024 г. IUCN повиши вида до „Застрашен“ (EN A3c) поради прогнозиран
              спад >50% от изменението на климата.
            </p>
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
              {SQUIRREL_THREATS.map((t) => (
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
      <section
        className="container-page"
        style={{ paddingTop: "3rem", paddingBottom: "4rem" }}
      >
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
            Опазването на лалугера зависи от запазването на безлесните тревни
            местообитания. Без него царският орел и ловният сокол губят основната
            си плячка. Ето няколко конкретни неща, които можеш да направиш:
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
            {SQUIRREL_HELP.map((a, i) => (
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

      {/* ИЗТОЧНИЦИ */}
      <section
        className="container-page"
        style={{ paddingTop: "3rem", paddingBottom: "4rem" }}
      >
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
            Достоверни източници
          </p>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
              color: "#F5F1E8",
              fontWeight: 600,
              marginBottom: "0.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Източници
          </h2>
          <p
            style={{
              color: "rgba(245, 241, 232, 0.65)",
              fontSize: "0.9375rem",
              lineHeight: 1.6,
              fontStyle: "italic",
              fontFamily: "var(--font-serif)",
              marginBottom: "2rem",
            }}
          >
            Всички данни на тази страница са взети от официални научни и
            природозащитни източници.
          </p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "grid",
              gap: "0.75rem",
            }}
          >
            {SQUIRREL_SOURCES.map((s) => (
              <li key={s.href}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "1rem",
                    padding: "1rem 1.25rem",
                    background: "rgba(26, 46, 26, 0.55)",
                    border: "1px solid rgba(168, 69, 69, 0.18)",
                    borderRadius: "0.75rem",
                    color: "rgba(245, 241, 232, 0.92)",
                    textDecoration: "none",
                    transition: "all 220ms ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(168, 69, 69, 0.55)";
                    e.currentTarget.style.background =
                      "rgba(26, 46, 26, 0.75)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor =
                      "rgba(168, 69, 69, 0.18)";
                    e.currentTarget.style.background =
                      "rgba(26, 46, 26, 0.55)";
                  }}
                >
                  <div style={{ minWidth: 0 }}>
                    <div
                      style={{
                        fontSize: "0.9375rem",
                        fontWeight: 600,
                        color: "#F5F1E8",
                        marginBottom: 4,
                      }}
                    >
                      {s.label}
                    </div>
                    <div
                      style={{
                        fontSize: "0.8125rem",
                        color: "rgba(245, 241, 232, 0.6)",
                        fontStyle: "italic",
                        fontFamily: "var(--font-serif)",
                      }}
                    >
                      {s.note}
                    </div>
                  </div>
                  <span
                    aria-hidden="true"
                    style={{
                      color: "#a84545",
                      flexShrink: 0,
                      fontSize: "1.25rem",
                      lineHeight: 1,
                      marginTop: 2,
                    }}
                  >
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* BACK BUTTON */}
      <section
        className="container-page"
        style={{
          paddingTop: "2rem",
          paddingBottom: "5rem",
          textAlign: "center",
        }}
      >
        <EGSLink
          to="/animals"
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
          style={{
            color: "#F5F1E8",
            borderColor: "rgba(245, 241, 232, 0.4)",
          }}
        >
          ← Назад към животните
        </EGSLink>
      </section>

      <SquirrelLightbox image={lightbox} onClose={() => setLightbox(null)} />
    </div>
  );
}

window.EuropeanGroundSquirrelDetail = EuropeanGroundSquirrelDetail;
