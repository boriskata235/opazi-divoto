/* ============================================================
   ImperialEagleDetail.jsx, /animals/imperial-eagle
   Детайлна страница за Царския орел (Aquila heliaca).

   ВСИЧКИ данни са от:
   - Червена книга на Р. България, том 2 (БАН & МОСВ, 2015)
     http://e-ecodb.bas.bg/rdb/bg/vol2/Aqheliac.html
   - IUCN Red List, Vulnerable (global)
   - БДЗП, Българско дружество за защита на птиците
   - LIFE проект „Светло бъдеще за царския орел в България“
   ============================================================ */

const IED_RRD = window.ReactRouterDOM || {};
const IEDLink =
  IED_RRD.Link ||
  ((props) =>
    React.createElement("a", { ...props, href: props.to }, props.children));

const IE_GALLERY = [
  {
    src: "public/images/animals/imperial-eagle-gallery/imperial-eagle-1.jpg",
    alt: "Царски орел в полет, широко разперени криле",
  },
  {
    src: "public/images/animals/imperial-eagle-gallery/imperial-eagle-2.jpg",
    alt: "Млад царски орел кацнал на скала",
  },
  {
    src: "public/images/animals/imperial-eagle-gallery/imperial-eagle-3.jpg",
    alt: "Aquila heliaca, портрет в естествена среда",
  },
];

const IE_STATS = [
  { label: "Дължина", value: "72 – 84 см" },
  { label: "Размах на крилете", value: "1.80 – 2.15 м" },
  { label: "Тегло", value: "2.4 – 4.5 кг" },
  { label: "Продължителност на живот", value: "25 – 30 г." },
];

const IE_BEHAVIOR = [
  {
    title: "Хранене",
    body:
      "Основният източник на храна е европейският лалугер (Spermophilus citellus), до 60% от диетата. Допълнително: таралежи, зайци, костенурки, наземно гнездящи птици и понякога мърша. Силната връзка с лалугера обяснява защо двата вида са в едновременен спад, изчезват колониите на лалугера, намалява и хранителната база на орела.",
  },
  {
    title: "Размножаване",
    body:
      "Гнезди двойки за цял живот. Гнездото е голяма платформа в короната на стар дъб, топола или върба, често на самотно дърво в открит ландшафт. Едно поколение годишно, 1 до 3 яйца, най-често 2. Мътенето трае 43 – 45 дни. Малките напускат гнездото на 65 – 77 дни и зависят от родителите още 2 – 3 месеца. Половата зрялост настъпва на 4 – 5 г.",
  },
  {
    title: "Миграция",
    body:
      "Частично прелетен вид. Възрастните в България често остават целогодишно, особено в Югоизточна България с по-меки зими. Младите птици мигрират по-далеч, до Близкия изток, Етиопия, Арабския полуостров. Първите 2 – 4 години прекарват в скитане, преди да се установят в гнездова територия.",
  },
  {
    title: "Външен вид",
    body:
      "Възрастните са тъмнокафяви с характерни бели „епилоти“ на раменете и златисто-жълт тил. Опашката е сива на черни ивици. Младите са светлокафяви с белезникави шарки, нужни са 4 – 6 години за достигане на пълния възрастен наряд. Един от най-големите орли в Европа след белоопашатия и скалния орел.",
  },
];

const IE_THREATS = [
  "Токови удари от далекопроводи, основната причина за гибел на млади птици",
  "Отрови, отровни примамки за хищници и илегални пестициди",
  "Спад на популацията на лалугера, основна храна",
  "Загуба на гнездови дървета, изсичане на самотни стари дъбове и тополи",
  "Безпокойство в гнездовите находища, горска техника, туризъм",
  "Незаконно отстрелване и разрушаване на гнезда",
  "Сблъсъци с вятърни турбини",
];

const IE_HELP = [
  "Подкрепи БДЗП и LIFE проекта „Светло бъдеще за царския орел“",
  "Не оставяй отровни примамки в природата, те убиват орли, лешояди и други хищници",
  "Подкрепяй опазване на пасищата и колониите на лалугера, основна храна на орела",
  "Сигнализирай за намерено мъртво или ранено птиче на 112 или РИОСВ",
  "При намерено гнездо, не доближавай и сигнализирай на БДЗП",
  "Подкрепяй изолирането на опасни далекопроводи в гнездовите райони",
];

const IE_SOURCES = [
  {
    label: "Червена книга на Р. България (БАН)",
    href: "http://e-ecodb.bas.bg/rdb/bg/vol2/Aqheliac.html",
    note: "Том 2 · категория Критично застрашен (CR)",
  },
  {
    label: "IUCN Red List, Aquila heliaca",
    href: "https://www.iucnredlist.org/species/22696048/200071000",
    note: "Глобален статус: Vulnerable",
  },
  {
    label: "БДЗП, Българско дружество за защита на птиците",
    href: "https://bspb.org",
    note: "Профил на вида, наблюдения и природозащитни проекти",
  },
  {
    label: "LIFE, Светло бъдеще за царския орел",
    href: "https://saveraptors.org",
    note: "Опазване на царския орел и ловния сокол в България",
  },
  {
    label: "Червена книга, Том 2 (МОСВ/БАН, 2015)",
    href: "https://www.moew.government.bg",
    note: "Защита по ЗБР · Бернска конв. Прил. II · Птици Прил. I",
  },
];

/* ============================================================
   Lightbox
   ============================================================ */
function ImperialEagleLightbox({ image, onClose }) {
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
function ImperialEagleDetail() {
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
          src="public/images/animals/imperial-eagle.jpg"
          alt="Царски орел (Aquila heliaca)"
          className="absolute inset-0 w-full h-full"
          style={{
            objectFit: "cover",
            objectPosition: "center 30%",
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
                backgroundColor: "#8B2C2C",
                color: "#fff",
                letterSpacing: "0.02em",
                marginBottom: "1.25rem",
              }}
            >
              Критично застрашен
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
              Царски орел
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
              Aquila heliaca
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
              Господарят на равнините
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
              Царският орел е{" "}
              <strong style={{ color: "#F5F1E8" }}>
                един от най-редките гнездящи орли в Европа
              </strong>, само около 30 двойки в България. С размах на крилете до 2.15 м
              и характерните си{" "}
              <strong style={{ color: "#F5F1E8" }}>бели „епилети“</strong>{" "}
              на раменете, той е лесно разпознаваем в небето. Тясно свързан с{" "}
              <strong style={{ color: "#F5F1E8" }}>европейския лалугер</strong>, съдбата на двата вида е свързана. Гнезди в самотни стари дъбове
              и тополи в открити пасищни ландшафти.
            </p>
          </div>
          <div
            className="grid grid-cols-2 gap-5"
            style={{ alignSelf: "center" }}
          >
            {IE_STATS.map((s) => (
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
          {IE_GALLERY.map((img, i) => (
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
          {IE_BEHAVIOR.map((b) => (
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
              "linear-gradient(135deg, rgba(139, 44, 44, 0.18) 0%, rgba(26, 46, 26, 0.6) 60%)",
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
              Критично застрашен вид
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
                  Критично застрашен (CR)
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
                  IUCN
                </div>
                <div
                  className="font-serif"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "#a84545",
                  }}
                >
                  Vulnerable
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
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "#F5F1E8",
                  }}
                >
                  ≈ 30 двойки
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
              Защитен вид по ЗБР Прил. II и III; Бернска конвенция Прил. II;
              CITES Прил. I; Директива 2009/147/EC (Птици) Прил. I; CMS Прил.
              I и II, приоритетен вид в българската мрежа Натура 2000.
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
              {IE_THREATS.map((t) => (
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
            Само 30 двойки означават, че всеки загинал орел е удар по
            популацията. Изолирането на далекопроводи в гнездовите райони и
            опазването на лалугеровите колонии са най-важните мерки за
            оцеляването на вида.
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
            {IE_HELP.map((a, i) => (
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
            {IE_SOURCES.map((s) => (
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
        <IEDLink
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
        </IEDLink>
      </section>

      <ImperialEagleLightbox
        image={lightbox}
        onClose={() => setLightbox(null)}
      />
    </div>
  );
}

window.ImperialEagleDetail = ImperialEagleDetail;
