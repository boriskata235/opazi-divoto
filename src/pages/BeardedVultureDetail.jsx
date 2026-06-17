/* ============================================================
   BeardedVultureDetail.jsx, /animals/bearded-vulture
   Детайлна страница за Брадатия лешояд (Gypaetus barbatus).

   ВСИЧКИ данни са от:
   - Червена книга на Р. България, том 2 (БАН & МОСВ, 2015)
     http://e-ecodb.bas.bg/rdb/bg/vol2/Gybabar.html
   - IUCN Red List
   - Зелени Балкани
   - Vulture Conservation Foundation (4vultures.org)
   - БДЗП
   ============================================================ */

const BVD_RRD = window.ReactRouterDOM || {};
const BVDLink =
  BVD_RRD.Link ||
  ((props) =>
    React.createElement("a", { ...props, href: props.to }, props.children));

const BV_GALLERY = [
  {
    src: "public/images/animals/bearded-vulture-gallery/bearded-vulture-1.jpg",
    alt: "Брадат лешояд, характерна оранжева гръд и черна брада",
  },
  {
    src: "public/images/animals/bearded-vulture-gallery/bearded-vulture-2.webp",
    alt: "Възрастен брадат лешояд в естествена среда",
  },
  {
    src: "public/images/animals/bearded-vulture-gallery/bearded-vulture-3.jpg",
    alt: "Gypaetus barbatus, портрет на единствения костояден лешояд",
  },
];

const BV_STATS = [
  { label: "Дължина", value: "94 – 125 см" },
  { label: "Размах на крилете", value: "2.35 – 2.82 м" },
  { label: "Тегло", value: "4.5 – 7 кг" },
  { label: "Продължителност на живот", value: "до 40 г." },
];

const BV_BEHAVIOR = [
  {
    title: "Хранене",
    body:
      "Единственият лешояд в света, който се храни почти изключително с кости, до 90% от диетата му. Поглъща малки кости цели; едрите носи на височина и ги пуска върху скали, за да се разчупят. Стомашната му киселина разтваря и най-твърдите кости. Допълнително, кожа, копита и сухи стави. Може да изчака седмици, докато месото на труп изчезне, преди да дойде на масата.",
  },
  {
    title: "Размножаване",
    body:
      "Гнезди двойки за цял живот в недостъпни скални ниши и пещери на височина 1000 – 3000 м. Едно поколение годишно, 1 до 2 яйца, но винаги оцелява само едно малко (старшото убива по-малкото). Мътенето трае 53 – 60 дни, най-дългото при европейските грабливи птици. Малкото остава в гнездото 110 – 130 дни, а с родителите си, до 2 години. Половата зрялост настъпва на 5 – 7 г.",
  },
  {
    title: "Външен вид",
    body:
      "Възрастните имат характерна оранжево-ръждива гръд и корем, оцветяват се сами, като се търкалят в желязно-окисни кални вани в скалите. Това е козметика, не пигмент: служи като сигнал за статус. Главата е бяла с черна „маска“ около очите и характерна черна „брада“ под човката. Младите са изцяло тъмнокафяви до 5-годишна възраст.",
  },
  {
    title: "Полет",
    body:
      "Един от най-добрите планински планери в света. Размахът на крилете до 2.82 м му позволява да издържа в планинските термични потоци часове наред. Среща се на височина 4000 – 7000 м (рекорд 7300 м в Хималаите). Не мигрира, двойките поддържат огромни територии до 200 – 700 км² целогодишно.",
  },
];

const BV_THREATS = [
  "Преследване в миналото, възприеман като опасност за домашни животни (погрешно)",
  "Отрови, отровни примамки за вълци и чакали убиват и лешояди",
  "Намалена хранителна база, изчезване на пасищно животновъдство и едри хищници",
  "Токови удари от далекопроводи в планински райони",
  "Сблъсъци с вятърни турбини на високите била",
  "Безпокойство в гнездовите находища от катерене и алпинизъм",
  "Бавно възпроизводство, едно малко на 2 години прави възстановяването трудно",
];

const BV_HELP = [
  "Подкрепи Зелени Балкани и програмата за реинтродукция в Централен Балкан и Източни Родопи",
  "Не оставяй отровни примамки в природата, те са основната причина за гибел на лешояди",
  "Подкрепяй традиционно пасищно животновъдство, то осигурява естествена хранителна база",
  "Сигнализирай за намерена ранена или мъртва птица на 112 или РИОСВ",
  "При планински туризъм и катерене, спазвай дистанция от скални ниши, ако забележиш гнездо",
  "Споделяй информация, много българи не знаят, че видът се завръща след 60 г. отсъствие",
];

const BV_TIMELINE = [
  {
    period: "До 19 век",
    title: "Широко разпространен",
    body:
      "Брадатият лешояд е гнездял във всички високи планини на България, Стара планина, Рила, Пирин, Родопи и Витоша. Изобразен в народни легенди и наричан „костоядец“.",
  },
  {
    period: "Първа половина на 20 в.",
    title: "Системно преследване",
    body:
      "Възприет като опасност за домашни животни и преследван със стрелба и капани. Премии за убити лешояди стимулират избиване. Числеността спада катастрофално.",
  },
  {
    period: "1950 – 1960",
    title: "Последни гнезда",
    body:
      "Последните потвърдени гнезда са в Западните Родопи (Триград, Буйновско ждрело) и Стара планина. Изолирани двойки оцеляват в най-недостъпните скални масиви.",
  },
  {
    period: "60-те години",
    title: "Изчезване",
    body:
      "Брадатият лешояд изчезва като гнездящ вид в България. Скитници от съседни страни (Гърция, Турция) рядко преминават през страната.",
  },
  {
    period: "2010 – днес",
    title: "Реинтродукция",
    body:
      "Стартира програма за реинтродукция в Източни Родопи и Централен Балкан с участието на Зелени Балкани, Vulture Conservation Foundation и LIFE проекти. През 2018 г. започват първите освобождавания на млади птици.",
  },
];

const BV_SOURCES = [
  {
    label: "Червена книга на Р. България (БАН)",
    href: "http://e-ecodb.bas.bg/rdb/bg/vol2/Gybabar.html",
    note: "Том 2 · категория Изчезнал (RE, Regionally Extinct)",
  },
  {
    label: "IUCN Red List, Gypaetus barbatus",
    href: "https://www.iucnredlist.org/species/22695174/154813652",
    note: "Глобален статус: Near Threatened",
  },
  {
    label: "Зелени Балкани, Брадат лешояд",
    href: "https://greenbalkans.org",
    note: "Програма за реинтродукция в България",
  },
  {
    label: "Vulture Conservation Foundation",
    href: "https://4vultures.org",
    note: "Международна реинтродукционна мрежа за вида",
  },
  {
    label: "БДЗП, Българско дружество за защита на птиците",
    href: "https://bspb.org",
    note: "Природозащитен профил и текущи проекти",
  },
];

/* ============================================================
   Lightbox
   ============================================================ */
function BeardedVultureLightbox({ image, onClose }) {
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
function BeardedVultureDetail() {
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
          src="public/images/animals/bearded-vulture.jpg"
          alt="Брадат лешояд (Gypaetus barbatus)"
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
                backgroundColor: "#3a3a3a",
                color: "#fff",
                letterSpacing: "0.02em",
                marginBottom: "1.25rem",
                border: "1px solid rgba(245, 241, 232, 0.18)",
              }}
            >
              Изчезнал от България
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
              Брадат лешояд
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
              Gypaetus barbatus
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
              Костоядецът на високите скали
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
              Брадатият лешояд е{" "}
              <strong style={{ color: "#F5F1E8" }}>
                единственият лешояд в света
              </strong>, който се храни почти изключително с{" "}
              <strong style={{ color: "#F5F1E8" }}>кости</strong>, до 90% от
              диетата му. С размах на крилете до 2.82 м, той е{" "}
              <strong style={{ color: "#F5F1E8" }}>
                най-големият планински планер
              </strong>{" "}
              в Европа. Природата му е дала и{" "}
              <strong style={{ color: "#F5F1E8" }}>козметика</strong>, оцветява
              сам гръдта си в оранжево с железен оксид от скалите. Изчезна от
              България през 60-те години, но реинтродукционна програма е в ход.
            </p>
          </div>
          <div
            className="grid grid-cols-2 gap-5"
            style={{ alignSelf: "center" }}
          >
            {BV_STATS.map((s) => (
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
          {BV_GALLERY.map((img, i) => (
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
          {BV_BEHAVIOR.map((b) => (
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

      {/* ХРОНОЛОГИЯ НА ИЗЧЕЗВАНЕТО И ЗАВРЪЩАНЕТО */}
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
          Хронология
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
          От изчезване към завръщане
        </h2>
        <div
          style={{
            position: "relative",
            paddingLeft: "1.75rem",
            borderLeft: "1px solid rgba(168, 69, 69, 0.35)",
            display: "grid",
            gap: "2rem",
          }}
        >
          {BV_TIMELINE.map((t, i) => (
            <div key={i} style={{ position: "relative" }}>
              <span
                style={{
                  position: "absolute",
                  left: "-2.05rem",
                  top: "0.4rem",
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background:
                    i === BV_TIMELINE.length - 1 ? "#3B7A3F" : "#a84545",
                  border: "3px solid #1a2e1a",
                  boxShadow:
                    i === BV_TIMELINE.length - 1
                      ? "0 0 0 2px #3B7A3F, 0 0 10px rgba(59, 122, 63, 0.6)"
                      : "0 0 0 2px rgba(168, 69, 69, 0.5)",
                }}
              />
              <div
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color:
                    i === BV_TIMELINE.length - 1
                      ? "#5e9c63"
                      : "rgba(245, 241, 232, 0.55)",
                  marginBottom: 6,
                }}
              >
                {t.period}
              </div>
              <h3
                className="font-serif"
                style={{
                  fontSize: "1.35rem",
                  color: "#F5F1E8",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                  letterSpacing: "-0.015em",
                }}
              >
                {t.title}
              </h3>
              <p
                style={{
                  color: "rgba(245, 241, 232, 0.75)",
                  lineHeight: 1.7,
                  fontSize: "0.95rem",
                  maxWidth: "48rem",
                }}
              >
                {t.body}
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
              "linear-gradient(135deg, rgba(58, 58, 58, 0.25) 0%, rgba(26, 46, 26, 0.6) 60%)",
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
              Изчезнал от България
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
                  Изчезнал (RE)
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
                  Near Threatened
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
                  Гнездящи в България
                </div>
                <div
                  className="font-serif"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "#F5F1E8",
                  }}
                >
                  0 двойки
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
              CITES Прил. II; Директива 2009/147/EC (Птици) Прил. I,
              приоритетен вид. Целеви вид на реинтродукционна програма в
              Централен Балкан и Източни Родопи.
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
              Причини за изчезването
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
              {BV_THREATS.map((t) => (
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
            Как да помогнем за завръщането
          </h2>
          <p
            style={{
              color: "rgba(245, 241, 232, 0.78)",
              lineHeight: 1.7,
              marginBottom: "2rem",
              fontSize: "1.05rem",
            }}
          >
            След 60 г. отсъствие, Брадатият лешояд бавно се завръща в България.
            Реинтродукционната програма в Централен Балкан и Източни Родопи
            изисква дългосрочна подкрепа, едно малко на 2 години прави
            възстановяването на популацията изключително бавно.
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
            {BV_HELP.map((a, i) => (
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
            {BV_SOURCES.map((s) => (
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
        <BVDLink
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
        </BVDLink>
      </section>

      <BeardedVultureLightbox
        image={lightbox}
        onClose={() => setLightbox(null)}
      />
    </div>
  );
}

window.BeardedVultureDetail = BeardedVultureDetail;
