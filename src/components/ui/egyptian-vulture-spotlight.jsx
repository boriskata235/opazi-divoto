/* ============================================================
   egyptian-vulture-spotlight.jsx
   Карта на ареала на Египетския лешояд (Neophron percnopterus)
   в България. 4 зони, отразяват сегашната гнездова концентрация
   в Източни Родопи и трите исторически зони, в които видът вече
   не гнезди (Червена книга на БАН, БДЗП).
   ============================================================ */

const EV_HABITAT_REGIONS = [
  {
    id: "east-rhodopes",
    name: "Източни Родопи",
    subtitle: "Главна сегашна популация",
    population: "< 30 двойки",
    color: "#7B3FA0",
    description:
      "Сърцето на българската популация, Маджарово, Студен кладенец, Крумовград, Ивайловград, Хасково и Сакар. Тук са концентрирани почти всички гнездящи двойки. БДЗП и LIFE проектът „Завръщане на египетския лешояд“ работят за стабилизиране на популацията.",
    note: "Маджарово · Студен кладенец · Крумовград · Ивайловград",
    hotspot: { x: 53, y: 76, rx: 14, ry: 10 },
  },
  {
    id: "ludogorie",
    name: "Лудогорие · Добруджа",
    subtitle: "Североизточен ареал",
    population: "Изчезнала",
    color: "#E29040",
    description:
      "Шуменското плато, Лудогорието, района около Разград, Нови пазар и Добрич, в миналото редовно гнездилище. Скалните венци и пасищните ландшафти са били подходящи за вида, но днес тук той само понякога преминава.",
    note: "Шуменско плато · Разград · Нови пазар",
    hotspot: { x: 80, y: 26, rx: 11, ry: 7 },
  },
  {
    id: "danube",
    name: "Дунавски скали",
    subtitle: "Поречие на Дунав",
    population: "Изчезнала",
    color: "#3E6FB8",
    description:
      "Варовиковите скали по поречието на Дунав от Русе до Тутракан. В миналото видът е гнездял в скалните венци по бреговете. Урбанизация на крайдунавските градове и отрови водят до пълно изчезване още преди 70-те години.",
    note: "Поречие Русе, Тутракан",
    hotspot: { x: 47, y: 16, rx: 13, ry: 4 },
  },
  {
    id: "vraca",
    name: "Врачански Балкан · Белоградчик",
    subtitle: "Северозападен ареал",
    population: "Изчезнала",
    color: "#8B4A7E",
    description:
      "Скалните венци на Врачанския Балкан и Белоградчишките скали. Една от историческите зони, в които видът е гнездял до средата на 20 век. Подходящи скали остават, но липсва хранителна база и видът не се завръща.",
    note: "Белоградчишки скали · Врачански Балкан",
    hotspot: { x: 14, y: 24, rx: 5, ry: 7 },
  },
];

const EV_TOTAL = "< 30 двойки";

function EgyptianVultureHabitatMap() {
  const [active, setActive] = React.useState("east-rhodopes");
  const activeRegion = EV_HABITAT_REGIONS.find((r) => r.id === active);

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
          src="public/maps/egyptian-vulture-habitat.png"
          alt="Карта на България, ареал на египетския лешояд"
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: "contain" }}
        />

        {EV_HABITAT_REGIONS.map((r) => {
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

        {EV_HABITAT_REGIONS.map((r) => {
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
                    animation: "pulseRingVulture 1.6s ease-out infinite",
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
          @keyframes pulseRingVulture {
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
          Зона · {activeRegion.subtitle}
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
            {EV_TOTAL}
          </span>
        </div>
      </div>

      <div
        className="lg:col-span-2 flex flex-wrap gap-2.5 justify-center"
        style={{ marginTop: "0.5rem" }}
      >
        {EV_HABITAT_REGIONS.map((r) => (
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

function EgyptianVultureSpotlight() {
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
            Цялата сегашна гнездова популация на египетския лешояд в България е
            концентрирана в Източни Родопи. Останалите три зони отбелязват
            исторически гнездилища, в които видът вече не присъства, Лудогорие,
            Дунавските скали и Врачанският Балкан.
          </p>
        </div>

        <EgyptianVultureHabitatMap />
      </section>
    </div>
  );
}

window.EgyptianVultureSpotlight = EgyptianVultureSpotlight;
