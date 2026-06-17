/* ============================================================
   EurasianOtterDetail.jsx, /animals/eurasian-otter
   Детайлна страница за Видрата (Lutra lutra).

   ВСИЧКИ данни са от:
   - Червена книга на Р. България, том 2 (Спасов 2015, БАН & МОСВ)
     http://e-ecodb.bas.bg/rdb/bg/vol2/Lulutra.html
   - IUCN Red List
   - Сдружение „Зелени Балкани"
   ============================================================ */

const EOD_RRD = window.ReactRouterDOM || {};
const EODLink =
  EOD_RRD.Link ||
  ((props) =>
    React.createElement("a", { ...props, href: props.to }, props.children));

const OTTER_GALLERY = [
  {
    src: "public/images/animals/eurasian-otter-gallery/otter-1.jpg",
    alt: "Видра върху камък в реката",
  },
  {
    src: "public/images/animals/eurasian-otter-gallery/otter-2.jpg",
    alt: "Видра в природна среда",
  },
  {
    src: "public/images/animals/eurasian-otter-gallery/otter-3.jpg",
    alt: "Lutra lutra, характерен полуводен начин на живот",
  },
];

const OTTER_STATS = [
  { label: "Дължина (тяло)", value: "57 – 95 см" },
  { label: "Опашка", value: "35 – 45 см" },
  { label: "Тегло", value: "7 – 12 кг" },
  { label: "Гмуркане", value: "до 4 м" },
];

const OTTER_BEHAVIOR = [
  {
    title: "Хранене",
    body:
      "Изключително рибояден вид. Според Червената книга в Югоизточна България рибата формира до 93 % от храната на видрата. Допълнително, ракообразни (~14 %), жаби (~11 %), дребни бозайници, водни птици и влечуги. Сезонна разлика: 62 % риба пролет-лято, 74 % есен-зима. Гмурка се до 4 м дълбочина.",
  },
  {
    title: "Размножаване",
    body:
      "Чифтосването е във водата и може да става целогодишно. Бременността продължава ~60–63 дни. Малките (2–4) се раждат в бърлога между корените на крайречни дървета през цялата година, с пик март–август. Следват майката около 1 година. Полова зрялост, 18–24 месеца.",
  },
  {
    title: "Територия",
    body:
      "Силно териториален вид. Индивидуалната територия е 5–15 км по течението на река, или 2–5 км по бреговете на затворени водоеми и Черно море. Мъжкият припокрива територии на 1 или повече женски. Маркира с миризма и характерни „spraint“, фекални купчинки на видими камъни.",
  },
  {
    title: "Адаптации",
    body:
      "Гъста водоустойчива козина с подкосъм; плавателни мембрани между пръстите; мускулесто, сплеснато тяло за по-малко съпротивление във вода; силна опашка като рул и движещ елемент. Затворя ноздрите и ушите си при гмуркане. Видрата е индикатор за чисти, биоразнообразни водни екосистеми.",
  },
];

const OTTER_THREATS = [
  "Замърсяване на водите, основната заплаха според Червената книга",
  "Унищожаване на крайречната растителност и бърлогите",
  "Конфликти с рибовъди, щети по рибарници водят до незаконно отстрелване",
  "Прегазване от автомобили по пътища, пресичащи водни тела",
  "Намаление на рибните запаси поради преулов и ВЕЦ",
  "Фрагментация на местообитанията от язовири, баражи и инфраструктура",
  "Незаконно отстрелване в миналото за кожи (днес главно за конфликти)",
];

const OTTER_HELP = [
  "Не изхвърляй боклук и отпадъци край реки и езера, замърсяването на водата е основната заплаха",
  "Подкрепи природозащитни организации (WWF България, Зелени Балкани, Сдружение „БАЛКАНИ“)",
  "Не подкрепяй нови ВЕЦ-проекти върху малки планински реки, те разрушават местообитанията",
  "Сигнализирай за намерена ранена или мъртва видра на РИОСВ или 112",
  "Спазвай правилата при риболов, без свръхулов и без вредни за рибата химикали",
  "Не доближавай бърлоги в крайречната растителност, ако ги забележиш",
];

const OTTER_SOURCES = [
  {
    label: "Червена книга на Р. България (БАН)",
    href: "http://e-ecodb.bas.bg/rdb/bg/vol2/Lulutra.html",
    note: "Том 2 · Спасов 2015 · категория Уязвим (VU A4c,d,e+D1)",
  },
  {
    label: "IUCN Red List, Lutra lutra",
    href: "https://www.iucnredlist.org/species/12419/164578163",
    note: "Глобален статус: Near Threatened",
  },
  {
    label: "Зелени Балкани, Видра",
    href: "https://greenbalkans.org/bg/vidra-p1809h",
    note: "Профил, природозащитни проекти",
  },
  {
    label: "Червена книга, Том 2 (МОСВ/БАН, 2015)",
    href: "https://www.moew.government.bg",
    note: "Официално издание · защита по ЗБР Прил. II и III",
  },
];

/* ============================================================
   Lightbox
   ============================================================ */
function OtterLightbox({ image, onClose }) {
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
function EurasianOtterDetail() {
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
          src="public/images/animals/eurasian-otter.jpg"
          alt="Видра (Lutra lutra)"
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
              Видра
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
              Lutra lutra
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
              Видрата е{" "}
              <strong style={{ color: "#F5F1E8" }}>полуводен хищник</strong> с
              мускулесто, сплеснато тяло и силна опашка. Гмурка се на дълбочина{" "}
              <strong style={{ color: "#F5F1E8" }}>до 4 м</strong> и може да
              остане под вода до 30 секунди. Среща се{" "}
              <strong style={{ color: "#F5F1E8" }}>до 1 500 м н.в.</strong> по
              чисти планински реки. Един от най-добрите индикатори за чистата
              водна среда, наличието ѝ говори за здрава екосистема.
            </p>
          </div>
          <div
            className="grid grid-cols-2 gap-5"
            style={{ alignSelf: "center" }}
          >
            {OTTER_STATS.map((s) => (
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
          {OTTER_GALLERY.map((img, i) => (
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
          {OTTER_BEHAVIOR.map((b) => (
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
                  1 300 – 1 500
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
              CITES Прил. I; Директива 92/43/EEC Прил. II и IV. Приоритетен
              вид в българската мрежа Натура 2000.
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
              {OTTER_THREATS.map((t) => (
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
            Видрата зависи изцяло от чисти водни екосистеми. Опазването ѝ е
            опазване на самата водна среда. Ето няколко конкретни неща, които
            можеш да направиш:
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
            {OTTER_HELP.map((a, i) => (
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
            {OTTER_SOURCES.map((s) => (
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
        <EODLink
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
        </EODLink>
      </section>

      <OtterLightbox image={lightbox} onClose={() => setLightbox(null)} />
    </div>
  );
}

window.EurasianOtterDetail = EurasianOtterDetail;
