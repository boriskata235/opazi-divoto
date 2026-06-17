/* ============================================================
   MonkSealDetail.jsx, /animals/monk-seal
   Детайлна страница за Тюлен монах (Monachus monachus).

   ВСИЧКИ данни са от:
   - Червена книга на Р. България, том 2 (БАН & МОСВ, 2015)
     http://e-ecodb.bas.bg/rdb/bg/vol2/Momonach.html
   - IUCN Red List (Endangered, 2023 reassessment)
   - MOm, Hellenic Society for the Study and Protection of the Monk Seal
   - Зелени Балкани · WWF
   ============================================================ */

const MSD_RRD = window.ReactRouterDOM || {};
const MSDLink =
  MSD_RRD.Link ||
  ((props) =>
    React.createElement("a", { ...props, href: props.to }, props.children));

const MONK_SEAL_GALLERY = [
  {
    src: "public/images/animals/monk-seal-gallery/monk-seal-1.webp",
    alt: "Тюлен монах на каменист бряг, лице в лице",
  },
  {
    src: "public/images/animals/monk-seal-gallery/monk-seal-2.jpg",
    alt: "Млад тюлен почива на крайбрежен пясък",
  },
  {
    src: "public/images/animals/monk-seal-gallery/monk-seal-3.jpg",
    alt: "Тюлен монах под вода в плитка крайбрежна зона",
  },
];

const MONK_SEAL_STATS = [
  { label: "Дължина (тяло)", value: "2.3 – 2.8 м" },
  { label: "Тегло", value: "240 – 300 кг" },
  { label: "Гмуркане", value: "до 80 м" },
  { label: "Продължителност на живот", value: "до 45 г." },
];

const MONK_SEAL_BEHAVIOR = [
  {
    title: "Хранене",
    body:
      "Опортюнистичен хищник. Храни се основно с риба (октопод, калмар, цаца, паламуд, кефал) и главоноги. Гмурка се на дълбочина до 80 м и може да остане под вода до 15 минути. Ловува предимно нощем и около зори в плитки крайбрежни зони и подводни рифове.",
  },
  {
    title: "Размножаване",
    body:
      "Малкото се ражда в усамотени морски пещери с подводен вход, единственото безопасно място, останало след изтласкването на вида от откритите плажове. Бременността продължава около 11 месеца. Едно малко (рядко две), с тегло 15–20 кг при раждане. Кърми се 4 месеца. Полова зрялост, 4–6 години.",
  },
  {
    title: "Поведение",
    body:
      "Изключително плашлив и чувствителен към човешко присъствие, една от основните причини видът да изчезне от шумни брегове. Обикновено живее самотно или в малки семейни групи. Сухоземната почивка днес е практически само в недостъпни морски пещери. В миналото е почивал открито на плажа.",
  },
  {
    title: "Адаптации",
    body:
      'Изящно плавателно тяло, силни задни перки за плуване и предни, за катерене по скали. Гъста козина с водоустойчив подкосъм. Затваря ноздрите и ушите при гмуркане. Името „монах" идва от тъмната, обла глава и нагънатата кожа на тила, които напомнят расо.',
  },
];

const MONK_SEAL_THREATS = [
  "Преследване от рибари през 19-ти и 20-ти век, възприеман като конкурент",
  "Безпокойство от туризъм и плажен отдих, изтласква вида от открити плажове",
  "Унищожаване на крайбрежни пещери при строежи и развитие на пристанища",
  "Замърсяване на Черно море, нефт, тежки метали, пестициди",
  "Прилов в рибарски мрежи, особено хрилни и тралови мрежи",
  "Свръхулов на риба, намалена хранителна база",
  "Намалена генетична свежест на оцелелата субпопулация в Източното Средиземноморие",
];

const MONK_SEAL_HELP = [
  "Подкрепи природозащитни организации за морски бозайници (WWF, MOm, Зелени Балкани)",
  "Сигнализирай на 112 или РИОСВ-Бургас/Варна при наблюдение на тюлен (вкл. скитник от Турция/Гърция)",
  "Спазвай дистанция от подводни пещери, ако се гмуркаш по Черноморието, рядко, но е възможно завръщане на скитник",
  "Подкрепяй морски защитени територии, Калиакра, Ропотамо, Странджа",
  "Намали потреблението на риба, уловена с тралови или хрилни мрежи, те са основна причина за прилов",
  "Споделяй информация, много българи не знаят, че Черно море някога е имало свой тюлен",
];

const MONK_SEAL_SOURCES = [
  {
    label: "Червена книга на Р. България (БАН)",
    href: "http://e-ecodb.bas.bg/rdb/bg/vol2/Momonach.html",
    note: "Том 2 · категория Изчезнал (RE, Regionally Extinct)",
  },
  {
    label: "IUCN Red List, Monachus monachus",
    href: "https://www.iucnredlist.org/species/13653/117647375",
    note: "Глобален статус: Endangered (2023, downlist от CR)",
  },
  {
    label: "MOm, Hellenic Society for the Monk Seal",
    href: "https://www.mom.gr/en",
    note: "Водеща организация за опазване на вида",
  },
  {
    label: "Червена книга, Том 2 (МОСВ/БАН, 2015)",
    href: "https://www.moew.government.bg",
    note: "Официално издание · ЗБР Прил. II и III · Бернска конв. Прил. II",
  },
];

const MONK_SEAL_TIMELINE = [
  {
    period: "Антич. – 19 в.",
    title: "Целогодишно присъствие",
    body:
      "Тюленът монах е бил често срещан по цялото българско Черноморие. Изобразен е по антични монети от Месамбрия (Несебър), символ на изобилие в морето.",
  },
  {
    period: "Първа половина на 20 в.",
    title: "Рязък спад",
    body:
      "Преследване от рибари (счита се за конкурент), развитие на крайбрежна индустрия, рибарски флоти. Към 50-те години видът вече е рядък.",
  },
  {
    period: "60-те – 70-те",
    title: "Изтегляне към Калиакра",
    body:
      "Видът се изтегля в най-недостъпните райони, нос Калиакра и Странджанското крайбрежие. Регистрират се само единични индивиди.",
  },
  {
    period: "Краят на 20 в.",
    title: "Изчезване",
    body:
      "Последните потвърдени наблюдения са от 90-те години, единични млади индивиди при Калиакра, вероятно скитници от турските колонии. Резидентната популация изчезва.",
  },
  {
    period: "Днес",
    title: "Надежда за завръщане",
    body:
      "Около 700 индивида в света, основно в Гърция и Турция. Регистрират се редки наблюдения на скитници в Северозападно Черноморие. При защита на крайбрежните пещери, възможно естествено връщане.",
  },
];

/* ============================================================
   Lightbox
   ============================================================ */
function MonkSealLightbox({ image, onClose }) {
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
function MonkSealDetail() {
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
          src="public/images/animals/monk-seal.jpg"
          alt="Тюлен монах (Monachus monachus)"
          className="absolute inset-0 w-full h-full"
          style={{
            objectFit: "cover",
            objectPosition: "center 50%",
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
              Тюлен монах
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
              Monachus monachus
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
              Морският монах
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
              Тюленът монах е{" "}
              <strong style={{ color: "#F5F1E8" }}>
                най-редкият морски бозайник в Европа
              </strong>{" "}
              и един от най-застрашените тюлени в света. С тегло до 300 кг и
              дължина почти 3 метра, той е{" "}
              <strong style={{ color: "#F5F1E8" }}>
                най-големият хищник
              </strong>, обитавал някога Черно море. Името „монах" идва от тъмната,
              гладка глава и кожните нагъвания на тила, които напомнят расо.
              Видът{" "}
              <strong style={{ color: "#F5F1E8" }}>изчезна от България</strong>
              {" "}през втората половина на 20 век под натиска на преследване,
              туризъм и замърсяване.
            </p>
          </div>
          <div
            className="grid grid-cols-2 gap-5"
            style={{ alignSelf: "center" }}
          >
            {MONK_SEAL_STATS.map((s) => (
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
          {MONK_SEAL_GALLERY.map((img, i) => (
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
          {MONK_SEAL_BEHAVIOR.map((b) => (
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

      {/* ХРОНОЛОГИЯ НА ИЗЧЕЗВАНЕТО */}
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
          Как изчезна от Черно море
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
          {MONK_SEAL_TIMELINE.map((t, i) => (
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
                    i === MONK_SEAL_TIMELINE.length - 1 ? "#a84545" : "#5b7a8c",
                  border: "3px solid #1a2e1a",
                  boxShadow:
                    i === MONK_SEAL_TIMELINE.length - 1
                      ? "0 0 0 2px #a84545, 0 0 10px rgba(168, 69, 69, 0.6)"
                      : "0 0 0 2px rgba(91, 122, 140, 0.5)",
                }}
              />
              <div
                style={{
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color:
                    i === MONK_SEAL_TIMELINE.length - 1
                      ? "#a84545"
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
                  Endangered
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
                  В света
                </div>
                <div
                  className="font-serif"
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 600,
                    color: "#F5F1E8",
                  }}
                >
                  ≈ 700
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
              CITES Прил. I; Директива 92/43/EEC Прил. II и IV, приоритетен
              вид. Включен в Световния списък на най-застрашените морски
              бозайници.
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
              {MONK_SEAL_THREATS.map((t) => (
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
            Има ли надежда за завръщане?
          </h2>
          <p
            style={{
              color: "rgba(245, 241, 232, 0.78)",
              lineHeight: 1.7,
              marginBottom: "2rem",
              fontSize: "1.05rem",
            }}
          >
            Турските и гръцките колонии се възстановяват, IUCN свали статуса
            от „Критично застрашен" на „Застрашен" през 2023 г. Скитници от
            тези популации периодично достигат до Северозападно Черноморие.
            При защитени крайбрежни пещери и чисто море, естествено връщане в
            български води е възможно.
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
            {MONK_SEAL_HELP.map((a, i) => (
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
            {MONK_SEAL_SOURCES.map((s) => (
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
        <MSDLink
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
        </MSDLink>
      </section>

      <MonkSealLightbox image={lightbox} onClose={() => setLightbox(null)} />
    </div>
  );
}

window.MonkSealDetail = MonkSealDetail;
