/* ============================================================
   pontic-fritillary-spotlight.jsx
   Карта на ареала на Българска ведрица (Fritillaria pontica) в България.
   Балкански вид, разпространен в Североизточна България,
   Черноморското крайбрежие, Странджа и Източните Родопи.
   Данни: Червена книга на Р. България (БАН), bgflora.net, IUCN.
   ============================================================ */

const PONTICFRITILLARY_REGIONS = [
  {
    id: "northeast",
    name: "Североизточна България",
    highlight: "Шумен · Разград · Добрич",
    color: "#7B3FA8",
    description:
      "В Североизточна България ведрицата расте по горски поляни и храсталаци около Шумен, Разград, Добрич и Варна. Особено добре представена е в дъбовите и смесени гори на Лудогорието и Добруджа. Тук популациите са сравнително стабилни, но страдат от горскостопанска дейност и събиране.",
    note: "Лудогорие · Добруджа · дъбови гори",
    hotspot: { x: 75, y: 27, rx: 12, ry: 8 },
  },
  {
    id: "blacksea-strandzha",
    name: "Странджа и Бургаско",
    highlight: "НП \u201EСтранджа\u201D",
    color: "#2E6EA8",
    description:
      "Най-значимото находище на ведрицата в България е Странджа и Бургаската низина. В НП \u201EСтранджа\u201D видът расте в характерните лонгозни гори и крайбрежни дъбрави. Тук е запазена най-голямата и най-добре защитена популация, благодарение на парковия режим. Цъфтежът й в началото на пролетта е впечатляваща гледка.",
    note: "НП \u201EСтранджа\u201D · лонгозни гори · пролет",
    hotspot: { x: 84, y: 62, rx: 9, ry: 11 },
  },
  {
    id: "east-rhodopes",
    name: "Източни Родопи",
    highlight: "Кърджали · Хасково",
    color: "#2E8A5A",
    description:
      "В Източните Родопи около Кърджали ведрицата обитава скалисти дъбови гори и храсталаци по склоновете на речните долини. Тук видът се среща заедно с богатото биологично разнообразие на Родопите. Популациите са уязвими поради туристическия натиск и незаконното събиране.",
    note: "Кърджали · Хасково · дъбови и скалисти склонове",
    hotspot: { x: 57, y: 79, rx: 9, ry: 7 },
  },
];

function PonticFritillaryHabitatMap() {
  const [active, setActive] = React.useState("northeast");
  const activeRegion = PONTICFRITILLARY_REGIONS.find((r) => r.id === active);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.55fr_1fr] gap-8">
      {/* Карта */}
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: "rgba(245, 241, 232, 0.04)",
          border: "1px solid rgba(123, 63, 168, 0.18)",
          boxShadow: "0 8px 24px -8px rgba(0,0,0,0.5)",
          aspectRatio: "1448 / 1086",
        }}
      >
        <img
          src="public/maps/pontic-fritillary-habitat.png"
          alt="Карта на България, ареал на Българска ведрица"
          className="absolute inset-0 w-full h-full"
          style={{ objectFit: "contain" }}
        />

        {PONTICFRITILLARY_REGIONS.map((r) => {
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

        {PONTICFRITILLARY_REGIONS.map((r) => {
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
                    animation: "pulseRingPonticFritillary 1.6s ease-out infinite",
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
                  fontSize: isActive ? "0.95rem" : "0.8rem",
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
          @keyframes pulseRingPonticFritillary {
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
          border: "1px solid rgba(123, 63, 168, 0.22)",
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
          Регион · България
        </div>
        <h3
          className="font-serif"
          style={{
            fontSize: "1.85rem",
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
              fontSize: "1.4rem",
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
            Източна България
          </span>
        </div>
      </div>

      {/* Легенда */}
      <div
        className="lg:col-span-2 flex flex-wrap gap-2.5 justify-center"
        style={{ marginTop: "0.5rem" }}
      >
        {PONTICFRITILLARY_REGIONS.map((r) => (
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

window.PonticFritillaryHabitatMap = PonticFritillaryHabitatMap;

/* ============================================================
   PonticFritillarySpotlight, ПЪЛНА секция за /plants (ТИП 1).
   ============================================================ */
function PonticFritillarySpotlight() {
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
              "linear-gradient(90deg, transparent 0%, rgba(123, 63, 168, 0.45) 50%, transparent 100%)",
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
              color: "rgba(123, 63, 168, 0.95)",
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
              background: "#7B3FA8",
              borderRadius: 1,
              marginBottom: "1.25rem",
            }}
          />
          <p style={{ color: "rgba(245, 241, 232, 0.78)", lineHeight: 1.7 }}>
            Българската ведрица расте предимно в Източна България,
            в дъбови гори и горски поляни в Североизток (Лудогорие,
            Добруджа), по Черноморието и в НП „Странджа", а на юг,
            в Източните Родопи. Цъфти рано напролет с характерните
            увиснали камбанести цветове.
          </p>
        </div>

        <PonticFritillaryHabitatMap />
      </section>
    </div>
  );
}

window.PonticFritillarySpotlight = PonticFritillarySpotlight;
