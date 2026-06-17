/* ============================================================
   monk-seal-spotlight.jsx
   Историческа карта на ареала на Тюлен монах (Monachus monachus)
   по Българското Черноморие. Видът е ИЗЧЕЗНАЛ от България,
   последните потвърдени наблюдения са от края на 20 век.

   Регионите отразяват ИСТОРИЧЕСКИ колонии и наблюдения:
   - Калиакра (последна известна колония)
   - Шабленско-Дуранкулашки бряг
   - Варненски залив
   - Маслен нос · Несебър · Поморие
   - Странджанско крайбрежие (Резово, Аркутино)
   ============================================================ */

const MONK_SEAL_HABITAT_REGIONS = [
  {
    id: "shabla",
    name: "Шабла · Дуранкулак",
    subtitle: "Най-северното крайбрежие",
    population: "Изчезнал",
    lastSeen: "до 50-те години",
    color: "#5b7a8c",
    description:
      "Скалистият бряг и подводните пещери между Дуранкулак и Шабла са били част от северния ареал. Тюлените са ползвали изолираните плажове за почивка и раждане. Последни сведения от местни рибари, преди средата на 20 век.",
    note: "Подводни пещери, изолирани плажове",
    hotspot: { x: 93, y: 15, rx: 5, ry: 6 },
  },
  {
    id: "kaliakra",
    name: "Нос Калиакра",
    subtitle: "Последна известна колония",
    population: "Изчезнал",
    lastSeen: "последни наблюдения 90-те",
    color: "#3d5e76",
    description:
      'Резерватът „Калиакра" е бил последното убежище на тюлена монах в България. Високите варовикови скали с подводни морски пещери са идеална среда за раждане и почивка. Последното потвърдено наблюдение на млад индивид е от края на 90-те години.',
    note: "Последното убежище на вида в България",
    hotspot: { x: 91, y: 22, rx: 4, ry: 5 },
  },
  {
    id: "varna",
    name: "Варненски залив",
    subtitle: "Централно крайбрежие",
    population: "Изчезнал",
    lastSeen: "до 60-те години",
    color: "#5b7a8c",
    description:
      "В миналото тюлените монаси са били редовно срещани около нос Галата и в района на Варненския залив. Силната урбанизация, развитието на пристанището и риболова са довели до бързо изтегляне на популацията още в средата на 20 век.",
    note: "Изгубен под натиска на пристанището",
    hotspot: { x: 89, y: 34, rx: 5, ry: 6 },
  },
  {
    id: "maslen",
    name: "Маслен нос · Несебър",
    subtitle: "Бургаски залив",
    population: "Изчезнал",
    lastSeen: "до 70-те години",
    color: "#5b7a8c",
    description:
      "Скалистите носове по средното Българско Черноморие, Маслен нос, нос Емине и района около Несебър и Поморие, са били важна част от ареала. Подводните пещери около Маслен нос са регистрирани като места за раждане.",
    note: "Пещери за раждане",
    hotspot: { x: 90, y: 52, rx: 5, ry: 6 },
  },
  {
    id: "strandja",
    name: "Странджанско крайбрежие",
    subtitle: "Аркутино · Резово",
    population: "Изчезнал",
    lastSeen: "до 80-те години",
    color: "#5b7a8c",
    description:
      "Дивото южно крайбрежие, Аркутино, Силистар, нос Маслен и Резовска река. Най-малко обезпокояваният участък от българския бряг. Тук тюлените са оцелели най-дълго заедно с Калиакра, преди окончателно да изчезнат.",
    note: "Последна дива брегова ивица",
    hotspot: { x: 88, y: 70, rx: 5, ry: 6 },
  },
];

const MONK_SEAL_GLOBAL_TOTAL = "≈ 700 (свет.)";

function MonkSealHabitatMap() {
  const [active, setActive] = React.useState("kaliakra");
  const activeRegion = MONK_SEAL_HABITAT_REGIONS.find((r) => r.id === active);

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
          src="public/maps/monk-seal-habitat.png"
          alt="Карта на България, историческо разпространение на тюлена монах"
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: "contain" }}
        />

        {MONK_SEAL_HABITAT_REGIONS.map((r) => {
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

        {MONK_SEAL_HABITAT_REGIONS.map((r) => {
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
                transform: "translate(-110%, -50%)",
                cursor: "pointer",
                pointerEvents: "auto",
                display: "flex",
                flexDirection: "row-reverse",
                alignItems: "center",
                gap: 8,
              }}
            >
              {isActive && (
                <span
                  style={{
                    position: "absolute",
                    right: 0,
                    width: 18,
                    height: 18,
                    borderRadius: "50%",
                    border: `2px solid ${r.color}`,
                    animation: "pulseRingMonkSeal 1.6s ease-out infinite",
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
                  flexShrink: 0,
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
          @keyframes pulseRingMonkSeal {
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
            gap: 10,
            flexWrap: "wrap",
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
            В България · в света
          </span>
          <span
            className="font-serif"
            style={{
              fontSize: "1.15rem",
              fontWeight: 600,
              color: "#F5F1E8",
            }}
          >
            0 · {MONK_SEAL_GLOBAL_TOTAL}
          </span>
        </div>
      </div>

      <div
        className="lg:col-span-2 flex flex-wrap gap-2.5 justify-center"
        style={{ marginTop: "0.5rem" }}
      >
        {MONK_SEAL_HABITAT_REGIONS.map((r) => (
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

function MonkSealSpotlight() {
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
            Исторически ареал · Българско Черноморие
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
            Тюленът монах е обитавал цялото българско Черноморие, от
            Дуранкулак до Резово. Подводните морски пещери в основата на
            крайбрежните скали са служили за раждане и почивка. Последното
            убежище в България е било нос Калиакра, където са регистрирани и
            последните наблюдения от края на 20 век.
          </p>
        </div>

        <MonkSealHabitatMap />
      </section>
    </div>
  );
}

window.MonkSealSpotlight = MonkSealSpotlight;
