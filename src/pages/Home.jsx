/* ============================================================
   Home.jsx, Landing page
   Hero (Ken Burns + crossfade) → Червената книга → Организации
   ============================================================ */

const { useHistory: useHomeHistory } = ReactRouterDOM;
const HI = window.Icons;

/* ---------- Reveal: scroll-triggered fade + slide-up ---------- */
function Reveal({ children, delay = 0, y = 28, className = "", as = "div" }) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as;
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity 700ms var(--ease-organic) ${delay}ms, transform 800ms var(--ease-organic) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  const scrollDown = () => {
    const next = document.getElementById("red-book-section");
    if (next) next.scrollIntoView({ behavior: "smooth", block: "start" });
    else window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ height: "100vh", minHeight: "640px", backgroundColor: "transparent" }}
      aria-label="Hero"
    >
      {/* Background is provided by <ScrollBackground/> in <Home/>.
          Hero just adds a soft top vignette + a bottom soft-handoff. */}

      {/* Top vignette, keeps the navbar legible */}
      <div
        className="absolute inset-x-0 top-0 pointer-events-none"
        style={{
          height: "30%",
          background:
            "linear-gradient(180deg, rgba(10, 20, 10, 0.55) 0%, rgba(10, 20, 10, 0) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Bottom soft-handoff, gentle fade so content cards below feel connected */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 pointer-events-none"
        style={{
          height: "18%",
          background:
            "linear-gradient(to bottom, rgba(10, 20, 10, 0) 0%, rgba(10, 20, 10, 0.45) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative h-full container-page flex flex-col items-center justify-center text-center">
        <Reveal delay={100}>
          <span
            className="inline-block text-shadow-hero"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.8125rem",
              fontWeight: 600,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "rgba(245, 241, 232, 0.85)",
              marginBottom: "1.75rem",
            }}
          >
            Българската природа · 2026
          </span>
        </Reveal>

        <Reveal delay={250}>
          <h1
            className="font-serif text-shadow-hero"
            style={{
              color: "var(--color-cream)",
              fontSize: "clamp(2.75rem, 7vw, 5.5rem)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: "20ch",
            }}
          >
            Опази дивото
            <br />
            <span style={{ fontStyle: "italic", fontWeight: 500, color: "rgba(245, 241, 232, 0.94)" }}>
              Опази българската природа
            </span>
          </h1>
        </Reveal>

        <Reveal delay={450}>
          <p
            className="text-shadow-hero mt-6"
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(1.0625rem, 1.6vw, 1.375rem)",
              lineHeight: 1.5,
              color: "rgba(245, 241, 232, 0.92)",
              maxWidth: "44ch",
            }}
          >
            Всичко, което трябва да знаеш за защитената природа у нас.
          </p>
        </Reveal>

        <Reveal delay={650}>
          <button
            type="button"
            onClick={scrollDown}
            className="hero-cta mt-10 inline-flex items-center gap-2.5 rounded-full"
            style={{
              backgroundColor: "var(--color-forest)",
              color: "var(--color-cream)",
              fontFamily: "var(--font-sans)",
              fontSize: "1rem",
              fontWeight: 500,
              letterSpacing: "0.01em",
              padding: "1rem 2rem",
              border: "1px solid rgba(245, 241, 232, 0.18)",
              boxShadow: "0 12px 30px -12px rgba(0,0,0,0.5)",
              cursor: "pointer",
              transition: "background-color 280ms var(--ease-organic), transform 280ms var(--ease-organic), box-shadow 280ms var(--ease-organic)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-crimson)";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 18px 36px -10px rgba(139, 44, 44, 0.55)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-forest)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 12px 30px -12px rgba(0,0,0,0.5)";
            }}
          >
            Открий повече
            <HI.ArrowDown size={18} stroke={2} />
          </button>
        </Reveal>
      </div>

      {/* Bouncing chevron at the bottom */}
      <button
        type="button"
        onClick={scrollDown}
        aria-label="Скролни надолу"
        className="absolute left-1/2 -translate-x-1/2 animate-soft-bounce"
        style={{
          bottom: "2.25rem",
          color: "rgba(245, 241, 232, 0.85)",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: "0.5rem",
        }}
      >
        <HI.ChevronDown size={32} stroke={1.6} />
      </button>
    </section>
  );
}

/* ---------- Section: Червената книга ---------- */
function RedBookSection() {
  const history = useHomeHistory();
  return (
    <section
      id="red-book-section"
      className="relative py-24 md:py-32"
      style={{ backgroundColor: "transparent" }}
    >
      <div className="container-page grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <Reveal>
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              boxShadow: "0 24px 48px -16px rgba(26, 46, 26, 0.22)",
              aspectRatio: "5 / 3",
            }}
          >
            <img
              src="public/images/red-book.jpg"
              alt="Червената книга на Република България"
              className="w-full h-full object-cover"
              style={{
                transition: "transform 1.2s var(--ease-organic)",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              draggable="false"
            />
            {/* Decorative frame */}
            <div
              aria-hidden="true"
              className="absolute inset-3 pointer-events-none rounded-xl"
              style={{ border: "1px solid rgba(245, 241, 232, 0.25)" }}
            />
          </div>
        </Reveal>

        {/* Text, wrapped in a glass panel for legibility over photo bg */}
        <div
          style={{
            position: "relative",
            padding: "clamp(1.5rem, 3vw, 2.5rem)",
            borderRadius: "var(--radius-xl)",
            background: "rgba(15, 28, 18, 0.55)",
            backdropFilter: "blur(14px) saturate(130%)",
            WebkitBackdropFilter: "blur(14px) saturate(130%)",
            border: "1px solid rgba(245, 241, 232, 0.12)",
            boxShadow:
              "0 24px 56px -20px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.06)",
            color: "var(--color-cream)",
          }}
        >
          <Reveal delay={120}>
            <span
              className="eyebrow"
              style={{ color: "#d68b8b" }}
            >Документ · 1984, днес</span>
          </Reveal>

          <Reveal delay={200}>
            <h2
              className="mt-4"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "var(--color-cream)",
              }}
            >
              Червената книга на<br />
              <span style={{ fontStyle: "italic", color: "#e89494" }}>
                Република България
              </span>
            </h2>
          </Reveal>

          <Reveal delay={300}>
            <span className="accent-rule mt-6" aria-hidden="true"></span>
          </Reveal>

          <Reveal delay={380}>
            <p
              className="mt-6"
              style={{
                fontSize: "1.0625rem",
                lineHeight: 1.7,
                color: "rgba(245, 241, 232, 0.86)",
              }}
            >
              Официалният регистър на застрашените видове в България. Червената
              книга описва кои растения и животни изчезват или вече са изчезнали,
              и какви усилия се полагат, за да ги опазим за бъдещите поколения.
            </p>
          </Reveal>

          <Reveal delay={460}>
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md">
              <Stat number="938" label="застрашени растения" tone="light" />
              <Stat number="287" label="застрашени животни" tone="light" />
              <Stat number="3" label="тома, 1500+ страници" tone="light" />
            </div>
          </Reveal>

          <Reveal delay={580}>
            <div className="mt-10 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => history.push("/red-book")}
                className="btn btn-accent"
              >
                <HI.BookMarked size={18} stroke={2} />
                Прочети повече
              </button>
              <button
                type="button"
                onClick={() => history.push("/animals")}
                className="btn"
                style={{
                  backgroundColor: "transparent",
                  color: "var(--color-cream)",
                  border: "1px solid rgba(245, 241, 232, 0.45)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(245, 241, 232, 0.12)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                }}
              >
                Разгледай видовете
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label, tone = "dark" }) {
  const isLight = tone === "light";
  return (
    <div>
      <div
        className="font-serif"
        style={{
          fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
          fontWeight: 700,
          color: isLight ? "var(--color-cream)" : "var(--color-forest-dark)",
          lineHeight: 1,
          letterSpacing: "-0.02em",
        }}
      >
        {number}
      </div>
      <div
        className="mt-1.5"
        style={{
          fontSize: "0.75rem",
          fontWeight: 500,
          color: isLight ? "rgba(245, 241, 232, 0.65)" : "var(--color-earth)",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          lineHeight: 1.3,
        }}
      >
        {label}
      </div>
    </div>
  );
}

/* ---------- Section: Organizations placeholder ---------- */
function OrganizationsPlaceholder() {
  return (
    <section
      id="organizations"
      className="relative py-28 md:py-36"
      style={{ backgroundColor: "var(--color-forest-dark)", color: "var(--color-cream)" }}
    >
      <div className="container-narrow text-center">
        <Reveal>
          <span
            className="inline-block"
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(245, 241, 232, 0.6)",
            }}
          >
            Скоро
          </span>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="mt-4" style={{ color: "var(--color-cream)" }}>
            Организации
          </h2>
        </Reveal>
        <Reveal delay={220}>
          <span
            className="accent-rule mt-6"
            style={{ backgroundColor: "var(--color-crimson)" }}
            aria-hidden="true"
          ></span>
        </Reveal>
        <Reveal delay={320}>
          <p
            className="lede mt-6"
            style={{ color: "rgba(245, 241, 232, 0.78)" }}
          >
            Тази секция ще бъде добавена в следваща стъпка.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Page ---------- */
function Home() {
  const pageRef = React.useRef(null);
  return (
    <div ref={pageRef} className="relative" style={{ isolation: "isolate" }}>
      {window.ScrollBackground && <ScrollBackground targetRef={pageRef} />}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <RedBookSection />
        <OrganizationsSection />
      </div>
    </div>
  );
}

window.Reveal = Reveal;
window.Home = Home;
