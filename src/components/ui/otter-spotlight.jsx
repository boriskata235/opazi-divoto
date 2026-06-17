/* ============================================================
   otter-spotlight.jsx
   Карта на ареала на Видрата в България. 7 региона
   според приложената карта, поречия и Черноморско крайбрежие.
   ============================================================ */

const OTTER_HABITAT_REGIONS = [
  {
    id: "danube",
    name: "Поречие на Дунав",
    subtitle: "+ Черноморско крайбрежие",
    population: "Стабилна",
    color: "#7B3FA0",
    description:
      "Целият Дунавски бряг от Видин до Силистра, плюс малки крайбрежни популации около Добрич и Варна. Голяма река с разнообразни местообитания, оптимална за видрата.",
    note: "По Дунавския бряг",
    hotspot: { x: 45, y: 11, rx: 41, ry: 5 },
  },
  {
    id: "ne-rivers",
    name: "Североизточна България",
    subtitle: "Поречия на Янтра и Русенски Лом",
    population: "Стабилна",
    color: "#5C4033",
    description:
      "Поречията на Янтра, Бели и Черни Лом и река Камчия. Каньоните на Русенски Лом, едно от ключовите местообитания за видрата в Северна България.",
    note: "Каньоните на Русенски Лом",
    hotspot: { x: 71, y: 33, rx: 11, ry: 9 },
  },
  {
    id: "sofia",
    name: "Софийско поле",
    subtitle: "Поречия на Искър и Струма",
    population: "Силно фрагментирана",
    color: "#A67C2A",
    description:
      "Реките около София и Перник, Искър, горна Струма. Популацията тук е под силен антропогенен натиск, урбанизация и замърсяване на водите.",
    note: "Под антропогенен натиск",
    hotspot: { x: 13, y: 50, rx: 9, ry: 13 },
  },
  {
    id: "sw",
    name: "Югозападна България",
    subtitle: "Поречия на Места и Кресна",
    population: "Стабилна",
    color: "#C24914",
    description:
      "Поречията на Места и Струма (Благоевград, Кресна, Гоце Делчев). Чисти планински реки с гъста крайречна растителност и добри рибни запаси.",
    note: "Чисти планински реки",
    hotspot: { x: 11, y: 73, rx: 6, ry: 11 },
  },
  {
    id: "thracian",
    name: "Тракийска низина",
    subtitle: "Поречия около Пловдив и Стара Загора",
    population: "Висока плътност",
    color: "#E29040",
    description:
      "Реките Марица, Тунджа и техните притоци. Една от най-плътните популации в България, благодарение на множеството равнинни реки и язовири.",
    note: "Една от най-плътните",
    hotspot: { x: 49, y: 60, rx: 21, ry: 9 },
  },
  {
    id: "east-rhodopes",
    name: "Източни Родопи",
    subtitle: "Поречия на Арда",
    population: "Стабилна",
    color: "#1F66B0",
    description:
      "Поречието на Арда (Хасково, Кърджали) и нейните язовири, Кърджали, Студен кладенец, Ивайловград. Едно от най-добре проучените и опазени местообитания.",
    note: "Язовири Кърджали · Студен кладенец",
    hotspot: { x: 47, y: 84, rx: 19, ry: 8 },
  },
  {
    id: "burgas",
    name: "Странджа и Бургаски езера",
    subtitle: "Югоизточна България",
    population: "Най-плътна",
    color: "#2A8D7A",
    description:
      "Странджанските реки (Велека, Резовска), Бургаските крайбрежни езера (Атанасовско, Поморийско, Бургаско), най-плътната популация на видра в България.",
    note: "Най-плътната популация в страната",
    hotspot: { x: 90, y: 65, rx: 6, ry: 11 },
  },
];

const OTTER_TOTAL = "1 300 – 1 500";

function OtterHabitatMap() {
  const [active, setActive] = React.useState("burgas");
  const activeRegion = OTTER_HABITAT_REGIONS.find((r) => r.id === active);

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
          src="public/maps/eurasian-otter-habitat.png"
          alt="Карта на България, ареал на видрата"
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: "contain" }}
        />

        {OTTER_HABITAT_REGIONS.map((r) => {
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

        {OTTER_HABITAT_REGIONS.map((r) => {
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
                    animation: "pulseRingOtter 1.6s ease-out infinite",
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
          @keyframes pulseRingOtter {
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
          Регион · {activeRegion.subtitle}
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
            {OTTER_TOTAL}
          </span>
        </div>
      </div>

      <div
        className="lg:col-span-2 flex flex-wrap gap-2.5 justify-center"
        style={{ marginTop: "0.5rem" }}
      >
        {OTTER_HABITAT_REGIONS.map((r) => (
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

function EurasianOtterSpotlight() {
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
            Видрата живее по чистите поречия, от Дунавското крайбрежие до
            планинските реки до 1 500 м н.в. Най-плътната популация е в
            Югоизточна България (Странджа и Бургаските езера).
          </p>
        </div>

        <OtterHabitatMap />
      </section>
    </div>
  );
}

window.EurasianOtterSpotlight = EurasianOtterSpotlight;
