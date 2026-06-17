/* ============================================================
   bearded-vulture-spotlight.jsx
   Карта на ИСТОРИЧЕСКИЯ ареал на Брадатия лешояд (Gypaetus barbatus)
   в България. Видът ИЗЧЕЗВА като гнездящ в България през 60-те
   години на 20 век. 5 зони, отразяват историческите планински
   и скални райони на гнездене (Червена книга на БАН, Зелени Балкани).
   ============================================================ */

const BV_HABITAT_REGIONS = [
  {
    id: "rhodopes-pirin",
    name: "Западни Родопи · Пирин",
    subtitle: "Главен исторически масив",
    population: "Изчезнал",
    lastSeen: "до 60-те години",
    color: "#A04020",
    description:
      "Западните и Централни Родопи и южните склонове на Пирин, главното историческо гнездилище в България. Високите скални венци между 1500 и 2500 м н.в. са били оптимална среда. Тук са регистрирани последните гнездящи двойки преди изчезването на вида.",
    note: "Последни гнезда, Триград, Буйновско ждрело",
    hotspot: { x: 47, y: 79, rx: 18, ry: 7 },
  },
  {
    id: "belasica",
    name: "Беласица · Югозападна България",
    subtitle: "Историческо гнездилище",
    population: "Изчезнал",
    lastSeen: "до 40-те години",
    color: "#C26A22",
    description:
      "Скалистите масиви на Беласица, Огражден и Малешевска планина. Видът е ползвал недостъпните скални венци за гнездене. Изчезва тук още преди средата на 20 век, пред главните централни популации в Родопи и Стара планина.",
    note: "Беласица · Огражден",
    hotspot: { x: 12, y: 74, rx: 6, ry: 8 },
  },
  {
    id: "rila-vitosha",
    name: "Витоша · Рила · Софийско",
    subtitle: "Западно-планински ареал",
    population: "Изчезнал",
    lastSeen: "до 50-те години",
    color: "#A67C2A",
    description:
      "Високите скали на Витоша, Рила и Софийската котловина. Гнездилища в Скакавишки водопад, Рилските езера и около Боровец. Високопланинският масив на Рила е бил един от ключовите райони, изчезва под натиска на ловно преследване и отрови.",
    note: "Рила · Витоша · Скакавишки скали",
    hotspot: { x: 16, y: 56, rx: 11, ry: 8 },
  },
  {
    id: "stara-planina",
    name: "Стара планина",
    subtitle: "Главен северен ареал",
    population: "Изчезнал",
    lastSeen: "до 60-те години",
    color: "#3B7A3F",
    description:
      "Цялата дължина на Стара планина, от Врачанския Балкан през Централен Балкан до източната ѝ част. Скалните венци, дълбоките клисури и пещерите са идеално гнездово местообитание. Реинтродукция в Централен Балкан започна през 2018 г. с участието на Зелени Балкани.",
    note: "Враца · Тетевен · Централен Балкан",
    hotspot: { x: 49, y: 32, rx: 25, ry: 5 },
  },
  {
    id: "kaliakra",
    name: "Североизточно крайбрежие",
    subtitle: "Маргинален исторически ареал",
    population: "Изчезнал",
    lastSeen: "единични наблюдения",
    color: "#7B3FA0",
    description:
      "Скалистите носове по черноморското крайбрежие, Калиакра, Яйлата, Тюленово. Маргинална част от историческия ареал. Видът е регистриран тук основно като скитник от планинските колонии, рядко гнездял по варовиковите скали.",
    note: "Калиакра · Яйлата",
    hotspot: { x: 92, y: 22, rx: 4, ry: 5 },
  },
];

const BV_TOTAL = "0 в България";

function BeardedVultureHabitatMap() {
  const [active, setActive] = React.useState("rhodopes-pirin");
  const activeRegion = BV_HABITAT_REGIONS.find((r) => r.id === active);

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
          src="public/maps/bearded-vulture-habitat.png"
          alt="Карта на България, исторически ареал на брадатия лешояд"
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: "contain" }}
        />

        {BV_HABITAT_REGIONS.map((r) => {
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
                  ? `radial-gradient(ellipse at center, ${r.color}48 0%, ${r.color}14 60%, transparent 100%)`
                  : "transparent",
                transition: "background 280ms ease",
              }}
            />
          );
        })}

        {BV_HABITAT_REGIONS.map((r) => {
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
                    animation: "pulseRingBeardedVulture 1.6s ease-out infinite",
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
          @keyframes pulseRingBeardedVulture {
            0% { transform: scale(1); opacity: 0.7; }
            100% { transform: scale(3.5); opacity: 0; }
          }
        `}</style>
      </div>

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
          Историческа зона · {activeRegion.subtitle}
        </div>
        <h3
          className="font-serif"
          style={{
            fontSize: "1.9rem",
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
            flexWrap: "wrap",
          }}
        >
          <span
            className="font-serif"
            style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              color: "#a84545",
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
            · {activeRegion.lastSeen}
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
            Гнездящи в България
          </span>
          <span
            className="font-serif"
            style={{
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "#F5F1E8",
            }}
          >
            {BV_TOTAL}
          </span>
        </div>
      </div>

      <div
        className="lg:col-span-2 flex flex-wrap gap-2.5 justify-center"
        style={{ marginTop: "0.5rem" }}
      >
        {BV_HABITAT_REGIONS.map((r) => (
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

function BeardedVultureSpotlight() {
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
            Исторически ареал · Високите планини на България
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
            Къде живееше в България
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
            Брадатият лешояд е гнездял във всички високи планини на България,
            Стара планина, Рила, Пирин, Родопи и Витоша. Изчезва като гнездящ
            вид през 60-те години на 20 век. Реинтродукция е в ход в Централен
            Балкан и Източни Родопи с участието на Зелени Балкани и БДЗП.
          </p>
        </div>

        <BeardedVultureHabitatMap />
      </section>
    </div>
  );
}

window.BeardedVultureSpotlight = BeardedVultureSpotlight;
