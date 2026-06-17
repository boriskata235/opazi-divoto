/* ============================================================
   thracian-yarrow-spotlight.jsx
   Карта на ареала на тракийския равнец (Achillea thracica) в България.
   Строг български ендемит, среща се само в Тракийската низина
   около Пловдив, на няколко изолирани находища.
   Данни: Червена книга на Р. България (БАН), bgflora.net, IUCN.
   ============================================================ */

const THRACIANYARROW_REGIONS = [
  {
    id: "plovdiv-plain",
    name: "Пловдивско поле",
    highlight: "Основно находище",
    color: "#C28A2A",
    description:
      "Тракийската низина около Пловдив е единственото известно местообитание на тракийския равнец в света. Видът расте по сухи, тревисти места и деградирали степни местообитания на варовикова и льосова основа. Находищата са изключително малко и силно фрагментирани поради дългогодишното разораване на тракийската равнина.",
    note: "Тракийска низина · ограничен ареал · единствено в света",
    hotspot: { x: 46, y: 62, rx: 7, ry: 4.5 },
  },
  {
    id: "plovdiv-hills",
    name: "Хълмове край Пловдив",
    highlight: "Вторични находища",
    color: "#8B5A2A",
    description:
      "По нископланинските хълмове и рид в непосредствена близост до Пловдив тракийският равнец образува малочислени, изолирани популации. Тук терените са по-слабо засегнати от разораване, но страдат от застрояване, инфраструктурно развитие и нарастващ антропогенен натиск. Тези популации са от ключово значение за оцеляването на вида.",
    note: "Периферия на Пловдив · антропогенен натиск",
    hotspot: { x: 49, y: 67, rx: 5, ry: 4 },
  },
];

function ThracianYarrowHabitatMap() {
  const [active, setActive] = React.useState("plovdiv-plain");
  const activeRegion = THRACIANYARROW_REGIONS.find((r) => r.id === active);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.55fr_1fr] gap-8">
      {/* Карта */}
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: "rgba(245, 241, 232, 0.04)",
          border: "1px solid rgba(194, 138, 42, 0.18)",
          boxShadow: "0 8px 24px -8px rgba(0,0,0,0.5)",
          aspectRatio: "1448 / 1086",
        }}
      >
        <img
          src="public/maps/thracian-yarrow-habitat.png"
          alt="Карта на България, ареал на тракийски равнец"
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: "contain" }}
        />

        {THRACIANYARROW_REGIONS.map((r) => {
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
                  ? `radial-gradient(ellipse at center, ${r.color}45 0%, ${r.color}14 60%, transparent 100%)`
                  : "transparent",
                transition: "background 280ms ease",
              }}
            />
          );
        })}

        {THRACIANYARROW_REGIONS.map((r) => {
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
                    animation: "pulseRingThracianYarrow 1.6s ease-out infinite",
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
                  fontSize: isActive ? "1rem" : "0.85rem",
                  fontWeight: 700,
                  color: "#1a1a1a",
                  letterSpacing: "0.01em",
                  padding: "3px 10px",
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
          @keyframes pulseRingThracianYarrow {
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
          border: "1px solid rgba(194, 138, 42, 0.22)",
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
          Регион · Тракия
        </div>
        <h3
          className="font-serif"
          style={{
            fontSize: "2rem",
            color: "#F5F1E8",
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: 14,
          }}
        >
          {activeRegion.name}
        </h3>

        <div
          className="mb-6"
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
            {activeRegion.highlight}
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
            gap: 12,
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
            Ареал
          </span>
          <span
            className="font-serif"
            style={{
              fontSize: "1.05rem",
              fontWeight: 600,
              color: "#F5F1E8",
              textAlign: "right",
            }}
          >
            Само в България
          </span>
        </div>
      </div>

      {/* Легенда */}
      <div
        className="lg:col-span-2 flex flex-wrap gap-2.5 justify-center"
        style={{ marginTop: "0.5rem" }}
      >
        {THRACIANYARROW_REGIONS.map((r) => (
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

window.ThracianYarrowHabitatMap = ThracianYarrowHabitatMap;

/* ============================================================
   ThracianYarrowSpotlight, ПЪЛНА секция за листинга /plants (ТИП 1).
   ============================================================ */
function ThracianYarrowSpotlight() {
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
              "linear-gradient(90deg, transparent 0%, rgba(194, 138, 42, 0.45) 50%, transparent 100%)",
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
              color: "rgba(194, 138, 42, 0.95)",
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
            Къде расте в България
          </h2>
          <div
            style={{
              width: "3rem",
              height: 2,
              background: "#C28A2A",
              borderRadius: 1,
              marginBottom: "1.25rem",
            }}
          />
          <p style={{ color: "rgba(245, 241, 232, 0.78)", lineHeight: 1.7 }}>
            Тракийският равнец е строг български ендемит с един от
            най-ограничените ареали сред растенията у нас. Среща се само в
            Тракийската низина около Пловдив, на изолирани находища по
            сухи тревисти места и деградирали степни терени. Не е известен
            от никоя друга точка по света.
          </p>
        </div>

        <ThracianYarrowHabitatMap />
      </section>
    </div>
  );
}

window.ThracianYarrowSpotlight = ThracianYarrowSpotlight;
