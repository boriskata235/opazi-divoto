/* ============================================================
   RedBook.jsx, страница /red-book
   Подробна информация за Червената книга на България
   ============================================================ */

const RB_I = window.Icons;
const RB_Reveal = window.Reveal;

const RB_CATEGORIES = [
  {
    abbr: "EX",
    name: "Изчезнал",
    color: "#3a3a3a",
    description:
      "Видове, за които няма обосновано съмнение, че последният им представител е изчезнал.",
  },
  {
    abbr: "EW",
    name: "Изчезнал в природата",
    color: "#5a5a5a",
    description:
      "Видове, които съществуват само в култивирани популации, ботанически градини или зоопаркове.",
  },
  {
    abbr: "CR",
    name: "Критично застрашен",
    color: "#8B2C2C",
    description:
      "Видове, изправени пред изключително висок риск от изчезване в природата в близко бъдеще.",
  },
  {
    abbr: "EN",
    name: "Застрашен",
    color: "#C24914",
    description:
      "Видове, изправени пред много висок риск от изчезване в природата в средносрочен период.",
  },
  {
    abbr: "VU",
    name: "Уязвим",
    color: "#A67C2A",
    description:
      "Видове, изправени пред висок риск от изчезване в природата в дългосрочен период.",
  },
  {
    abbr: "NT",
    name: "Почти застрашен",
    color: "#C9B458",
    description:
      "Видове, които биха могли скоро да попаднат в по-висока категория, ако заплахите продължат.",
  },
];

const RB_ACTIONS = [
  {
    title: "Доброволчество",
    description:
      "Включи се в природозащитни организации, мониторинг на видове, почистване на местообитания, ремонт на гнезда. Всяка ръка помага.",
  },
  {
    title: "Дарения",
    description:
      "Подкрепи финансово конкретен проект или организация. Дори малки суми поддържат теренна работа, изследвания и реинтродукции.",
  },
  {
    title: "Образование",
    description:
      "Информирай себе си и близките си. Разпространявай знание за видовете, заплахите и начините за защита, особено сред младите.",
  },
  {
    title: "Отговорност в природата",
    description:
      "Не късай защитени растения, не безпокой животни, спазвай маркировките в защитени територии и не изхвърляй отпадъци.",
  },
];

/* ---------- Hero ---------- */
function RBHero() {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-center px-6 text-center overflow-hidden"
      style={{
        minHeight: "50vh",
        paddingTop: "9rem",
        paddingBottom: "5rem",
        background:
          "linear-gradient(180deg, #1a2e1a 0%, #2D4A2B 60%, #1a2e1a 100%)",
        color: "var(--color-cream)",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, rgba(139, 44, 44, 0.16), transparent 65%)",
        }}
      />
      <div className="relative z-10 flex flex-col items-center">
        <RB_Reveal>
          <p
            className="mb-5"
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(168, 69, 69, 1)",
            }}
          >
            Документ · 1984, днес
          </p>
        </RB_Reveal>
        <RB_Reveal delay={120}>
          <h1
            className="font-serif"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              color: "var(--color-cream)",
              maxWidth: "48rem",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              textWrap: "balance",
            }}
          >
            Червената книга на{" "}
            <span style={{ fontStyle: "italic", color: "#d97a7a", fontWeight: 500 }}>
              България
            </span>
          </h1>
        </RB_Reveal>
        <RB_Reveal delay={240}>
          <div
            className="mt-7 mb-7"
            style={{
              width: "5rem",
              height: "2px",
              backgroundColor: "#a84545",
              borderRadius: "2px",
            }}
          />
        </RB_Reveal>
        <RB_Reveal delay={320}>
          <p
            className="max-w-2xl"
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
              color: "rgba(245, 241, 232, 0.78)",
              lineHeight: 1.6,
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            Научен сборник за биоразнообразието на България
          </p>
        </RB_Reveal>
      </div>
    </section>
  );
}

/* ---------- Section: История ---------- */
function RBHistory() {
  return (
    <section
      style={{
        backgroundColor: "var(--color-cream)",
        paddingTop: "6rem",
        paddingBottom: "6rem",
      }}
    >
      <div className="container-narrow">
        <RB_Reveal>
          <span className="eyebrow">Раздел 01</span>
        </RB_Reveal>
        <RB_Reveal delay={120}>
          <h2 className="mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            История и значение
          </h2>
        </RB_Reveal>
        <RB_Reveal delay={220}>
          <span className="accent-rule mt-6" />
        </RB_Reveal>

        <div
          style={{
            marginTop: "2.25rem",
            fontSize: "1.0625rem",
            lineHeight: 1.75,
            color: "var(--color-ink)",
          }}
          className="space-y-6"
        >
          <RB_Reveal delay={280}>
            <p>
              <strong style={{ color: "var(--color-forest-dark)" }}>Първото издание</strong>
              {" "}на Червената книга на Народна Република България излиза в две части
              през <strong>1984 и 1985 г.</strong> като инициатива на Българската
              академия на науките. То е сред първите подобни в Европа и поставя
              научните основи за опазване на биоразнообразието у нас.
            </p>
          </RB_Reveal>

          <RB_Reveal delay={340}>
            <p>
              <strong style={{ color: "var(--color-forest-dark)" }}>Второто издание</strong>, модернизирано и значително разширено, се появява между{" "}
              <strong>2011 и 2015 г.</strong>, разделено на три тома: растения и
              гъби, животни и природни местообитания. То използва стандартните
              категории на IUCN и обхваща хиляди обекти на оценка.
            </p>
          </RB_Reveal>

          <RB_Reveal delay={400}>
            <p>
              Авторският колектив на второто издание включва{" "}
              <strong style={{ color: "var(--color-forest-dark)" }}>над 200 учени</strong>, ботаници, зоолози, миколози, еколози, от БАН, университетите и
              природозащитните организации в България.
            </p>
          </RB_Reveal>

          <RB_Reveal delay={460}>
            <p style={{ fontStyle: "italic", color: "var(--color-earth)" }}>
              Червената книга не е просто списък. Тя е научен инструмент, правен
              ориентир и обществен апел, всеки изчезнал вид е загуба, която не
              може да бъде върната.
            </p>
          </RB_Reveal>

          {/* Tomes */}
          <RB_Reveal delay={520}>
            <div className="mt-10 grid sm:grid-cols-3 gap-6">
              <Tome num="I" title="Растения и гъби" pages="938 вида" />
              <Tome num="II" title="Животни" pages="287 вида" />
              <Tome num="III" title="Природни местообитания" pages="167 типа" />
            </div>
          </RB_Reveal>
        </div>
      </div>
    </section>
  );
}

function Tome({ num, title, pages }) {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "1.5rem 1.5rem 1.75rem",
        borderRadius: "var(--radius-xl)",
        boxShadow: "var(--shadow-soft)",
        borderTop: "3px solid var(--color-crimson)",
      }}
    >
      <div
        className="font-serif"
        style={{
          fontSize: "2rem",
          fontWeight: 700,
          color: "var(--color-crimson)",
          fontStyle: "italic",
          lineHeight: 1,
        }}
      >
        Том {num}
      </div>
      <div
        className="mt-3 font-serif"
        style={{
          fontSize: "1.125rem",
          fontWeight: 600,
          color: "var(--color-forest-dark)",
        }}
      >
        {title}
      </div>
      <div
        className="mt-2"
        style={{
          fontSize: "0.875rem",
          color: "var(--color-earth)",
          fontWeight: 500,
        }}
      >
        {pages}
      </div>
    </div>
  );
}

/* ---------- Section: Категории ---------- */
function RBCategories() {
  return (
    <section
      style={{
        backgroundColor: "#ebe5d3",
        paddingTop: "6rem",
        paddingBottom: "6rem",
      }}
    >
      <div className="container-page">
        <RB_Reveal>
          <span className="eyebrow">Раздел 02</span>
        </RB_Reveal>
        <RB_Reveal delay={120}>
          <h2 className="mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Категории на застрашеност
          </h2>
        </RB_Reveal>
        <RB_Reveal delay={220}>
          <span className="accent-rule mt-6" />
        </RB_Reveal>
        <RB_Reveal delay={280}>
          <p
            className="mt-6 max-w-2xl"
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              color: "var(--color-ink)",
              opacity: 0.85,
            }}
          >
            Всеки вид в Червената книга се категоризира според Международния съюз
            за защита на природата (IUCN). Категорията определя приоритета на
            природозащитните мерки.
          </p>
        </RB_Reveal>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {RB_CATEGORIES.map((cat, i) => (
            <RB_Reveal key={cat.abbr} delay={i * 80}>
              <CategoryCard cat={cat} />
            </RB_Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ cat }) {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "var(--radius-xl)",
        boxShadow: "var(--shadow-soft)",
        overflow: "hidden",
        height: "100%",
        transition: "transform 280ms var(--ease-organic), box-shadow 280ms var(--ease-organic)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "var(--shadow-lift)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "var(--shadow-soft)";
      }}
    >
      {/* Цветен индикатор */}
      <div style={{ height: "6px", backgroundColor: cat.color }} />
      <div style={{ padding: "1.5rem 1.5rem 1.75rem" }}>
        <div className="flex items-center gap-3 mb-3">
          <span
            style={{
              backgroundColor: cat.color,
              color: "#fff",
              padding: "0.25rem 0.625rem",
              borderRadius: "0.375rem",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              fontFamily: "var(--font-sans)",
            }}
          >
            {cat.abbr}
          </span>
          <h3
            className="font-serif"
            style={{
              fontSize: "1.25rem",
              fontWeight: 600,
              color: "var(--color-forest-dark)",
              margin: 0,
            }}
          >
            {cat.name}
          </h3>
        </div>
        <p
          style={{
            fontSize: "0.9375rem",
            lineHeight: 1.6,
            color: "var(--color-ink)",
            opacity: 0.78,
          }}
        >
          {cat.description}
        </p>
      </div>
    </div>
  );
}

/* ---------- Section: Как да помогнеш ---------- */
function RBActions() {
  return (
    <section
      style={{
        backgroundColor: "var(--color-cream)",
        paddingTop: "6rem",
        paddingBottom: "6rem",
      }}
    >
      <div className="container-page">
        <RB_Reveal>
          <span className="eyebrow">Раздел 03</span>
        </RB_Reveal>
        <RB_Reveal delay={120}>
          <h2 className="mt-3" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Как да помогнеш
          </h2>
        </RB_Reveal>
        <RB_Reveal delay={220}>
          <span className="accent-rule mt-6" />
        </RB_Reveal>
        <RB_Reveal delay={280}>
          <p
            className="mt-6 max-w-2xl"
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              color: "var(--color-ink)",
              opacity: 0.85,
            }}
          >
            Опазването на биоразнообразието не е само работа на учените.
            Всеки от нас има роля. Ето четири конкретни начина да помогнеш.
          </p>
        </RB_Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {RB_ACTIONS.map((action, i) => (
            <RB_Reveal key={action.title} delay={i * 100}>
              <ActionCard num={i + 1} {...action} />
            </RB_Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ActionCard({ num, title, description }) {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "var(--radius-xl)",
        padding: "2rem 2rem 2.25rem",
        boxShadow: "var(--shadow-soft)",
        position: "relative",
        overflow: "hidden",
        height: "100%",
      }}
    >
      <div
        className="font-serif"
        style={{
          position: "absolute",
          top: "-0.5rem",
          right: "1rem",
          fontSize: "5rem",
          fontStyle: "italic",
          fontWeight: 700,
          color: "rgba(139, 44, 44, 0.08)",
          lineHeight: 1,
          pointerEvents: "none",
        }}
      >
        0{num}
      </div>
      <h3
        className="font-serif"
        style={{
          fontSize: "1.5rem",
          fontWeight: 600,
          color: "var(--color-forest-dark)",
          margin: 0,
          marginBottom: "0.75rem",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "1rem",
          lineHeight: 1.65,
          color: "var(--color-ink)",
          opacity: 0.78,
        }}
      >
        {description}
      </p>
    </div>
  );
}

/* ---------- Section: Официален източник ---------- */
function RBOfficial() {
  return (
    <section
      style={{
        background:
          "linear-gradient(180deg, #1a2e1a 0%, #2D4A2B 100%)",
        color: "var(--color-cream)",
        paddingTop: "7rem",
        paddingBottom: "8rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(139, 44, 44, 0.18), transparent 65%)",
        }}
      />
      <div className="container-narrow text-center relative z-10">
        <RB_Reveal>
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(168, 69, 69, 1)",
            }}
          >
            Раздел 04 · Източник
          </span>
        </RB_Reveal>
        <RB_Reveal delay={120}>
          <h2
            className="mt-4 font-serif"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "var(--color-cream)",
              fontWeight: 600,
              lineHeight: 1.1,
            }}
          >
            Официалният сайт на{" "}
            <span style={{ fontStyle: "italic", color: "#d97a7a", fontWeight: 500 }}>
              Червената книга
            </span>
          </h2>
        </RB_Reveal>
        <RB_Reveal delay={240}>
          <p
            className="mt-7 max-w-xl mx-auto"
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.7,
              color: "rgba(245, 241, 232, 0.78)",
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
            }}
          >
            Цялата информация, описания на видовете, карти на разпространение,
            снимки и статус, е достъпна онлайн в електронното издание на БАН.
          </p>
        </RB_Reveal>

        <RB_Reveal delay={380}>
          <a
            href="http://e-ecodb.bas.bg/rdb/bg/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3"
            style={{
              backgroundColor: "var(--color-crimson)",
              color: "var(--color-cream)",
              fontFamily: "var(--font-sans)",
              fontSize: "1rem",
              fontWeight: 500,
              letterSpacing: "0.01em",
              padding: "1.125rem 2.25rem",
              borderRadius: "9999px",
              border: "1px solid rgba(245, 241, 232, 0.18)",
              boxShadow: "0 16px 36px -10px rgba(139, 44, 44, 0.55)",
              cursor: "pointer",
              transition: "background-color 280ms var(--ease-organic), transform 280ms var(--ease-organic), box-shadow 280ms var(--ease-organic)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#a83737";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 22px 44px -10px rgba(139, 44, 44, 0.7)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-crimson)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 16px 36px -10px rgba(139, 44, 44, 0.55)";
            }}
          >
            <RB_I.BookMarked size={20} stroke={2} />
            Посети официалния сайт на Червената книга
          </a>
        </RB_Reveal>

        <RB_Reveal delay={500}>
          <p
            className="mt-6"
            style={{
              fontSize: "0.8125rem",
              color: "rgba(245, 241, 232, 0.55)",
              letterSpacing: "0.02em",
            }}
          >
            e-ecodb.bas.bg/rdb/bg · отваря се в нов таб
          </p>
        </RB_Reveal>
      </div>
    </section>
  );
}

/* ---------- Page ---------- */
function RedBook() {
  return (
    <div style={{ backgroundColor: "var(--color-cream)" }}>
      <RBHero />
      <RBHistory />
      <RBCategories />
      <RBActions />
      <RBOfficial />
    </div>
  );
}

window.RedBook = RedBook;
