/* ============================================================
   hermanns-tortoise-spotlight.jsx
   Карта на ареала на Шипоопашатата костенурка (Testudo hermanni)
   в България. 6 зони, обобщени биогеографски райони според
   Червена книга на БАН и Българското херпетологично дружество.
   ============================================================ */

const HT_HABITAT_REGIONS = [
  {
    id: "east-rhodopes",
    name: "Източни Родопи",
    subtitle: "Главна популация",
    population: "Висока плътност",
    color: "#C24914",
    description:
      "Района на Кърджали, Хасково, Маджарово и Ивайловград. Сухите храсталачни и дъбови гори по южните склонове на Източни Родопи са оптимални за вида. Тук са едни от най-плътните и стабилни популации в България.",
    note: "Кърджали · Хасково · Ивайловград",
    hotspot: { x: 44, y: 80, rx: 13, ry: 6 },
  },
  {
    id: "sakar-strandja",
    name: "Сакар · Странджа",
    subtitle: "Югоизточна България",
    population: "Висока плътност",
    color: "#D9A02B",
    description:
      "Сакар планина, Дервентските възвишения, Странджа и южното Черноморско крайбрежие. Мозайка от сухи пасища, дъбови гори, скални масиви и храсталаци. Един от ключовите ареали с висока плътност на популацията.",
    note: "Малко Търново · Тополовград · Резово",
    hotspot: { x: 76, y: 81, rx: 16, ry: 7 },
  },
  {
    id: "ne-ludogorie",
    name: "Лудогорие · Добруджа",
    subtitle: "Североизточна България",
    population: "Стабилна",
    color: "#9C5DAB",
    description:
      "Района на Разград, Шумен, Добрич, Силистра. Лудогорското плато с дъбови гори и сухи пасища поддържа стабилна, макар и разредена популация. Една от северните граници на ареала на вида в Европа.",
    note: "Разград · Шумен · Силистра",
    hotspot: { x: 80, y: 22, rx: 11, ry: 7 },
  },
  {
    id: "nw",
    name: "Северозападна България",
    subtitle: "Дунавска равнина",
    population: "Намаляваща",
    color: "#4E7AA8",
    description:
      "Района между Видин и Монтана по поречието на Дунав. Северната гранична зона на ареала в Европа. Популацията е разредена, фрагментирана и в спад под натиска на разоравани пасища и пожари.",
    note: "Видин · Монтана · Дунавска равнина",
    hotspot: { x: 18, y: 25, rx: 14, ry: 7 },
  },
  {
    id: "sw",
    name: "Югозападна България",
    subtitle: "Кресна · Беласица · Огражден",
    population: "Висока плътност",
    color: "#E29040",
    description:
      "Кресненският пролом, долината на Струма, Беласица, Огражден и Малешевска планина. Изключително богат на херпетофауна район, едно от най-важните места за вида в Западна Европа.",
    note: "Кресна · Сандански · Петрич",
    hotspot: { x: 10, y: 73, rx: 5, ry: 12 },
  },
  {
    id: "central",
    name: "Подбалкан · Средна гора",
    subtitle: "Изолирани централни популации",
    population: "Малки фрагменти",
    color: "#7A5947",
    description:
      "Малки изолирани популации в южните склонове на Стара планина, Средна гора и Подбалканските полета. Сравнително рядка, но устойчива при подходящи местни условия.",
    note: "Подбалкан · Средна гора",
    hotspot: { x: 40, y: 60, rx: 8, ry: 7 },
  },
];

const HT_TOTAL = "≈ 50 000 индивида";

function HermannsTortoiseHabitatMap() {
  const [active, setActive] = React.useState("east-rhodopes");
  const activeRegion = HT_HABITAT_REGIONS.find((r) => r.id === active);

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
          src="public/maps/hermanns-tortoise-habitat.png"
          alt="Карта на България, ареал на шипоопашатата костенурка"
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: "contain" }}
        />

        {HT_HABITAT_REGIONS.map((r) => {
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

        {HT_HABITAT_REGIONS.map((r) => {
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
                    animation: "pulseRingHermannsTortoise 1.6s ease-out infinite",
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
          @keyframes pulseRingHermannsTortoise {
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
            {HT_TOTAL}
          </span>
        </div>
      </div>

      <div
        className="lg:col-span-2 flex flex-wrap gap-2.5 justify-center"
        style={{ marginTop: "0.5rem" }}
      >
        {HT_HABITAT_REGIONS.map((r) => (
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

function HermannsTortoiseSpotlight() {
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
            Шипоопашатата костенурка обитава сухи открити местообитания до
            около 1000 м н.в., основно в Южна България (Източни Родопи,
            Сакар, Странджа, Кресна) и фрагментно в Дунавската равнина и
            Лудогорието. Това е една от северните граници на ареала на вида
            в Европа.
          </p>
        </div>

        <HermannsTortoiseHabitatMap />
      </section>
    </div>
  );
}

window.HermannsTortoiseSpotlight = HermannsTortoiseSpotlight;
