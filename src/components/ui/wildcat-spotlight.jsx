/* ============================================================
   wildcat-spotlight.jsx
   Карта на ареала на Дивата котка в България.
   7 региона според приложената карта, отразяват факта, че
   видът се среща във всички планински горски райони и мозаечно
   в равнините (Червена книга на БАН, Спасов 2015).
   ============================================================ */

const WILDCAT_HABITAT_REGIONS = [
  {
    id: "nw-danube",
    name: "Северозападна България",
    subtitle: "Дунавска равнина",
    population: "Мозаечно",
    color: "#3B7A3F",
    description:
      "От Видин през Монтана и Плевен до района на Ловеч. Дивата котка тук обитава остатъчните стари дъбови и буково-дъбови гори по предпланинските склонове на Стара планина.",
    note: "Зависи от старите гори",
    hotspot: { x: 30, y: 23, rx: 26, ry: 7.5 },
  },
  {
    id: "central-north",
    name: "Централна Северна България",
    subtitle: "Преславска планина · Велико Търново",
    population: "Стабилна",
    color: "#1F66B0",
    description:
      "Районът около Велико Търново и Преславска планина. Една от ключовите зони за вида в Северна България, старите букови гори и скалистите долини осигуряват подходящи местообитания.",
    note: "Стари букови гори",
    hotspot: { x: 60, y: 31, rx: 9, ry: 7 },
  },
  {
    id: "ne-dobrudja",
    name: "Лудогорие и Добруджа",
    subtitle: "Североизточна България",
    population: "Намаляваща",
    color: "#7B3FA0",
    description:
      "Силистра, Добрич, Шумен, Варна. Лудогорското плато и горите около Шуменското плато са едни от последните убежища за вида в равнините на Североизточна България.",
    note: "Под натиск от земеделието",
    hotspot: { x: 80, y: 21, rx: 14, ry: 12 },
  },
  {
    id: "sredna-gora",
    name: "Средна гора и Подбалкан",
    subtitle: "Тясна горска ивица",
    population: "Стабилна",
    color: "#5C4033",
    description:
      "Целата дължина на Средна гора и Подбалканските полета. Тук дивата котка ползва широколистните гори и скалистите дерета. Една от важните връзки между северните и южните популации.",
    note: "Ключов екологичен коридор",
    hotspot: { x: 45, y: 53, rx: 22, ry: 4 },
  },
  {
    id: "sw",
    name: "Югозападна България",
    subtitle: "Витоша · Рила · Пирин · Осогово",
    population: "Висока плътност",
    color: "#A67C2A",
    description:
      "Софийско поле, Перник, Благоевград, заобиколени от Витоша, Рила, Пирин и Осоговска планина. Високопланинските гори тук поддържат стабилни популации до около 1 500–1 600 м н.в.",
    note: "До 1 500–1 600 м н.в.",
    hotspot: { x: 14, y: 58, rx: 11, ry: 14 },
  },
  {
    id: "rhodopes",
    name: "Родопи",
    subtitle: "Западни и Източни Родопи",
    population: "Една от най-високите",
    color: "#D14014",
    description:
      "От Пловдив през Хасково до Кърджали. Родопите са едно от ядрата на българската популация, гъсти иглолистни и широколистни гори, скалисти каньони и ниска антропогенна намеса.",
    note: "Едно от ядрата в България",
    hotspot: { x: 47, y: 77, rx: 22, ry: 10 },
  },
  {
    id: "strandzha",
    name: "Странджа и Сакар",
    subtitle: "Югоизточна България",
    population: "Най-едрите екземпляри",
    color: "#2A8D7A",
    description:
      "Странджа е известна с най-едрите диви котки в България, оттук произлиза и бившият световен рекорд по тегло от ловния период. Старите смесени гори осигуряват изключително добри условия.",
    note: "Бивш световен рекорд по тегло",
    hotspot: { x: 86, y: 71, rx: 8, ry: 9 },
  },
];

const WILDCAT_TOTAL = "~4 000";

function WildcatHabitatMap() {
  const [active, setActive] = React.useState("rhodopes");
  const activeRegion = WILDCAT_HABITAT_REGIONS.find((r) => r.id === active);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.55fr_1fr] gap-8">
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: "rgba(245, 241, 232, 0.04)",
          border: "1px solid rgba(168, 69, 69, 0.18)",
          boxShadow: "0 8px 24px -8px rgba(0,0,0,0.5)",
          aspectRatio: "1536 / 1024",
        }}
      >
        <img
          src="public/maps/wildcat-habitat.png"
          alt="Карта на България, ареал на дивата котка"
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: "contain" }}
        />

        {WILDCAT_HABITAT_REGIONS.map((r) => {
          const isActive = r.id === active;
          return (
            <div
              key={r.id}
              onMouseEnter={() => setActive(r.id)}
              onClick={() => setActive(r.id)}
              role="button"
              tabIndex={0}
              aria-label={r.name}
              style={{
                position: "absolute",
                left: `${r.hotspot.x - r.hotspot.rx}%`,
                top: `${r.hotspot.y - r.hotspot.ry}%`,
                width: `${r.hotspot.rx * 2}%`,
                height: `${r.hotspot.ry * 2}%`,
                cursor: "pointer",
                borderRadius: "50%",
                background: isActive
                  ? `radial-gradient(ellipse at center, ${r.color}38 0%, ${r.color}10 60%, transparent 100%)`
                  : "transparent",
                transition: "background 280ms ease",
              }}
            />
          );
        })}

        {WILDCAT_HABITAT_REGIONS.map((r) => {
          const isActive = r.id === active;
          return (
            <div
              key={`label-${r.id}`}
              onMouseEnter={() => setActive(r.id)}
              onClick={() => setActive(r.id)}
              style={{
                position: "absolute",
                left: `${r.hotspot.x}%`,
                top: `${r.hotspot.y}%`,
                transform: "translate(-50%, -50%)",
                cursor: "pointer",
                pointerEvents: "auto",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 6,
              }}
            >
              {isActive && (
                <span
                  style={{
                    position: "absolute",
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    border: `2px solid ${r.color}`,
                    animation: "pulseRingWildcat 1.6s ease-out infinite",
                  }}
                />
              )}
              <span
                style={{
                  width: isActive ? 16 : 12,
                  height: isActive ? 16 : 12,
                  borderRadius: "50%",
                  background: r.color,
                  border: "2.5px solid #F5F1E8",
                  boxShadow: isActive
                    ? `0 0 0 3px ${r.color}40, 0 2px 6px rgba(0,0,0,0.6)`
                    : "0 2px 6px rgba(0,0,0,0.5)",
                  transition: "all 240ms ease",
                }}
              />
              <span
                className="font-serif"
                style={{
                  fontSize: isActive ? "0.85rem" : "0.72rem",
                  fontWeight: 700,
                  color: "#1a1a1a",
                  letterSpacing: "0.01em",
                  padding: "3px 9px",
                  background: "rgba(255, 255, 255, 0.92)",
                  border: `1px solid ${r.color}`,
                  borderRadius: 999,
                  whiteSpace: "nowrap",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
                  transition: "all 240ms ease",
                  transform: isActive ? "scale(1.08)" : "scale(1)",
                }}
              >
                {r.name}
              </span>
            </div>
          );
        })}

        <style>{`
          @keyframes pulseRingWildcat {
            0% { transform: scale(1); opacity: 0.7; }
            100% { transform: scale(3.5); opacity: 0; }
          }
        `}</style>
      </div>

      {/* Info panel */}
      <div
        className="rounded-2xl p-7 flex flex-col"
        style={{
          background: "rgba(26, 46, 26, 0.6)",
          border: "1px solid rgba(168, 69, 69, 0.22)",
          minHeight: 420,
        }}
      >
        <div
          style={{
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: activeRegion.color,
            marginBottom: 12,
          }}
        >
          Регион · {activeRegion.subtitle}
        </div>
        <h3
          className="font-serif"
          style={{
            fontSize: "2rem",
            color: "#F5F1E8",
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: 18,
          }}
        >
          {activeRegion.name}
        </h3>

        <div
          className="flex items-baseline gap-3 mb-6"
          style={{
            paddingBottom: 18,
            borderBottom: "1px solid rgba(245, 241, 232, 0.1)",
          }}
        >
          <span
            className="font-serif"
            style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              color: activeRegion.color,
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
            }}
          >
            {activeRegion.population}
          </span>
          <span
            style={{
              fontSize: "0.8rem",
              color: "rgba(245, 241, 232, 0.5)",
              fontStyle: "italic",
              fontFamily: "var(--font-serif)",
            }}
          >
            популация
          </span>
        </div>

        <p
          style={{
            color: "rgba(245, 241, 232, 0.78)",
            lineHeight: 1.7,
            fontSize: "0.95rem",
            marginBottom: 18,
          }}
        >
          {activeRegion.description}
        </p>

        <div
          style={{
            marginTop: "auto",
            paddingTop: 18,
            borderTop: "1px solid rgba(245, 241, 232, 0.1)",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: activeRegion.color,
              boxShadow: `0 0 8px ${activeRegion.color}`,
            }}
          />
          <span
            style={{
              fontSize: "0.8125rem",
              color: "rgba(245, 241, 232, 0.65)",
              fontStyle: "italic",
              fontFamily: "var(--font-serif)",
            }}
          >
            {activeRegion.note}
          </span>
        </div>

        <div
          className="mt-5 pt-4"
          style={{
            borderTop: "1px solid rgba(245, 241, 232, 0.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(245, 241, 232, 0.55)",
            }}
          >
            Общо в България
          </span>
          <span
            className="font-serif"
            style={{
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#F5F1E8",
            }}
          >
            {WILDCAT_TOTAL} индивида
          </span>
        </div>
      </div>

      <div
        className="lg:col-span-2 flex flex-wrap gap-2.5 justify-center"
        style={{ marginTop: "0.5rem" }}
      >
        {WILDCAT_HABITAT_REGIONS.map((r) => (
          <button
            key={r.id}
            onClick={() => setActive(r.id)}
            onMouseEnter={() => setActive(r.id)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 16px",
              borderRadius: 999,
              fontSize: "0.8125rem",
              fontWeight: 500,
              letterSpacing: "0.02em",
              border:
                active === r.id
                  ? `1px solid ${r.color}`
                  : "1px solid rgba(245, 241, 232, 0.18)",
              background:
                active === r.id
                  ? "rgba(26, 46, 26, 0.9)"
                  : "rgba(26, 46, 26, 0.55)",
              color: "#F5F1E8",
              cursor: "pointer",
              transition: "all 200ms ease",
            }}
          >
            <span
              style={{
                width: 12,
                height: 12,
                borderRadius: 3,
                background: r.color,
                boxShadow: active === r.id ? `0 0 10px ${r.color}` : "none",
              }}
            />
            {r.name}
          </button>
        ))}
      </div>
    </div>
  );
}

function WildcatSpotlight() {
  return (
    <div
      style={{
        backgroundColor: "#1a2e1a",
        color: "#F5F1E8",
        paddingBottom: "6rem",
      }}
    >
      <div className="container-page" style={{ paddingTop: "1rem" }}>
        <div
          style={{
            width: "100%",
            height: 1,
            background:
              "linear-gradient(90deg, transparent 0%, rgba(168, 69, 69, 0.45) 50%, transparent 100%)",
          }}
        />
      </div>

      <section className="container-page" style={{ paddingTop: 0 }}>
        <div className="max-w-2xl mb-12">
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
            Ареал · Разпространение в България
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
            Къде живее в България
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
          <p
            style={{
              color: "rgba(245, 241, 232, 0.78)",
              lineHeight: 1.7,
            }}
          >
            Според Червената книга на БАН дивата котка се среща във всички
            планини до около 1 500–1 600 м н.в. и мозаечно в равнините. Премини
            с мишката върху региона, за да научиш повече.
          </p>
        </div>

        <WildcatHabitatMap />
      </section>
    </div>
  );
}

window.WildcatSpotlight = WildcatSpotlight;
