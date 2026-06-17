/* ============================================================
   HermannsTortoiseDetail.jsx, /animals/hermanns-tortoise
   Детайлна страница за Шипоопашата костенурка (Testudo hermanni).

   ВСИЧКИ данни са от:
   - Червена книга на Р. България, том 2 (БАН & МОСВ, 2015)
     http://e-ecodb.bas.bg/rdb/bg/vol2/Tesherma.html
   - IUCN Red List
   - Българско херпетологично дружество
   - Дунав-Карпати програма на WWF България
   ============================================================ */

const HTD_RRD = window.ReactRouterDOM || {};
const HTDLink =
  HTD_RRD.Link ||
  ((props) =>
    React.createElement("a", { ...props, href: props.to }, props.children));

const HT_GALLERY = [
  {
    src: "public/images/animals/hermanns-tortoise-gallery/hermanns-tortoise-1.jpg",
    alt: "Шипоопашата костенурка сред средиземноморска растителност",
  },
  {
    src: "public/images/animals/hermanns-tortoise-gallery/hermanns-tortoise-2.jfif",
    alt: "Възрастна Testudo hermanni, характерен жълто-черен корубен орнамент",
  },
];

const HT_STATS = [
  { label: "Дължина (коруба)", value: "18 – 25 см" },
  { label: "Тегло", value: "1 – 3 кг" },
  { label: "Продължителност на живот", value: "50 – 100 г." },
  { label: "Полова зрялост", value: "8 – 12 г." },
];

const HT_BEHAVIOR = [
  {
    title: "Хранене",
    body:
      "Изцяло растителноядна. Храни се с треви, тревисти растения, листа, цветове, плодове, а понякога, с гъби и млади филизи. Изключително рядко включва безгръбначни (охлюви, насекоми). Обича цъфтящи бобови и цикорията. Пие вода от локви и роса, но издържа дълги периоди суша.",
  },
  {
    title: "Размножаване",
    body:
      "Активна е от март до октомври. Чифтосването е през пролетта и есента. Женската копае дупка в почвата и снася 3 – 9 яйца, понякога 2 – 3 пъти на сезон (май – юли). Мътенето трае 80 – 100 дни в зависимост от температурата на почвата. Полът на малките се определя от температурата, при по-висока излизат повече женски. Малките излизат на 3 – 4 см дълго, август – октомври.",
  },
  {
    title: "Зимен сън",
    body:
      "Хибернира от ноември до март, заровена в почва, листа или скални пукнатини. Метаболизмът се забавя драстично, температурата на тялото пада до 5 – 10°C. През топли зимни дни може да излезе кратко. Идеалното място за хибернация е сухо, защитено от вятъра и с леки склонове за оттичане на водата.",
  },
  {
    title: "Разпознаване",
    body:
      "Отличава се от шипобедрената костенурка по два белега: 1) Шип в края на опашката, твърд рогов израстък. 2) Разделена надопашна (супракаудална) пластина. Окраската на корубата е жълтокафява с контрастни черни шарки, които изсветляват с възрастта. Женските са по-едри от мъжките, а мъжките имат по-вдлъбнат пластрон (за нагласяне при чифтосване).",
  },
];

const HT_THREATS = [
  "Незаконно събиране за домашни любимци и сувенири",
  "Пожари, катастрофни в Странджа, Източни Родопи и Югозападна България",
  "Прегазване от автомобили, особено през пролетта при чифтосване",
  "Разоравани пасища и интензивно земеделие",
  "Фрагментация на местообитанията от пътища и инфраструктура",
  "Прекомерно нарушаване от туристи и любители",
  "Климатични промени, горещите и сухи лета намаляват ефикасността на мътене",
];

const HT_HELP = [
  "НЕ вземай костенурка от природата, това е незаконно и забранено по ЗБР",
  "Ако намериш костенурка на път, премести я внимателно в посоката, в която върви",
  "Никога не размествай костенурки между региони, може да разпространиш болести",
  "Подкрепи Българското херпетологично дружество и WWF България",
  "При намерена ранена или болна костенурка, обади се в Спасителен център Стара Загора",
  "Сигнализирай на 112 или РИОСВ при бракониерство, незаконно търговия или незаконно владение",
  "При работа с огън в природата, никога не я оставяй сама. Пожарите убиват хиляди костенурки годишно.",
];

const HT_SOURCES = [
  {
    label: "Червена книга на Р. България (БАН)",
    href: "http://e-ecodb.bas.bg/rdb/bg/vol2/Tesherma.html",
    note: "Том 2 · категория Застрашен (EN)",
  },
  {
    label: "IUCN Red List, Testudo hermanni",
    href: "https://www.iucnredlist.org/species/21648/97336728",
    note: "Глобален статус: Near Threatened",
  },
  {
    label: "Българско херпетологично дружество",
    href: "https://herpetology.eu",
    note: "Профил на вида и проекти за опазване",
  },
  {
    label: "Спасителен център за диви животни, Стара Загора",
    href: "https://greenbalkans-wrbc.org",
    note: "Зелени Балкани · приемен пункт за ранени костенурки",
  },
  {
    label: "WWF България, Дунав-Карпати",
    href: "https://wwf.bg",
    note: "Опазване на сухоземната херпетофауна",
  },
];

/* ============================================================
   Lightbox
   ============================================================ */
function HermannsTortoiseLightbox({ image, onClose }) {
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
function HermannsTortoiseDetail() {
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
          src="public/images/animals/hermanns-tortoise.jpg"
          alt="Шипоопашата костенурка (Testudo hermanni)"
          className="absolute inset-0 w-full h-full"
          style={{
            objectFit: "cover",
            objectPosition: "center 45%",
            filter: "brightness(0.5)",
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
                backgroundColor: "#C24914",
                color: "#fff",
                letterSpacing: "0.02em",
                marginBottom: "1.25rem",
              }}
            >
              Застрашен
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
              Шипоопашата костенурка
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
              Testudo hermanni
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
              Костенурката с шипа
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
              Шипоопашатата костенурка е{" "}
              <strong style={{ color: "#F5F1E8" }}>
                една от двете сухоземни костенурки
              </strong>{" "}
              в България. Отличава се от шипобедрената с{" "}
              <strong style={{ color: "#F5F1E8" }}>твърд рогов шип</strong> в
              края на опашката, оттам и името ѝ. Може да живее{" "}
              <strong style={{ color: "#F5F1E8" }}>до 100 години</strong>.
              Полът на малките се определя от{" "}
              <strong style={{ color: "#F5F1E8" }}>температурата</strong> на
              мътене, феномен особено уязвим към климатичните промени.
              Защитена по закон, отглеждането, търговията и притежанието са
              забранени.
            </p>
          </div>
          <div
            className="grid grid-cols-2 gap-5"
            style={{ alignSelf: "center" }}
          >
            {HT_STATS.map((s) => (
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
          {HT_GALLERY.map((img, i) => (
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
          {HT_BEHAVIOR.map((b) => (
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
              "linear-gradient(135deg, rgba(194, 73, 20, 0.15) 0%, rgba(26, 46, 26, 0.6) 60%)",
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
              Застрашен вид
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
                  Застрашен (EN)
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
                  ≈ 50 000
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
              CITES Прил. II; Директива 92/43/EEC Прил. II и IV, приоритетен
              вид. Отглеждането и притежанието без специално разрешение е
              забранено.
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
              {HT_THREATS.map((t) => (
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
            Костенурките са дълголетни, но с бавно размножаване, една изгубена
            възрастна женска не може лесно да бъде заместена. Огънят и
            нелегалното събиране са най-големите врагове.
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
            {HT_HELP.map((a, i) => (
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
            {HT_SOURCES.map((s) => (
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
        <HTDLink
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
        </HTDLink>
      </section>

      <HermannsTortoiseLightbox
        image={lightbox}
        onClose={() => setLightbox(null)}
      />
    </div>
  );
}

window.HermannsTortoiseDetail = HermannsTortoiseDetail;
