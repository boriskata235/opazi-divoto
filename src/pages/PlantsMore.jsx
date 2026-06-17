/* ============================================================
   PlantsMore.jsx, /plants/more
   Допълнителни 5 застрашени растения от Червената книга на
   България, представени като прости карти със снимка и текст.
   Същият дизайн като /animals/more.
   ============================================================ */

const PM_RRD = window.ReactRouterDOM || {};
const PMLink =
  PM_RRD.Link ||
  ((props) =>
    React.createElement("a", { ...props, href: props.to }, props.children));

/* Снимки и описания за всяко растение от window.PLANTS_EXTRA.
   Описанията тук са обогатени версии на тези в Plants.jsx. */
const PLANTS_EXTRAS_OVERRIDES = {
  "Papaver degenii": {
    image: "public/images/plants/extras/pirin-poppy.jpg",
    description:
      "\u0411\u0430\u043b\u043a\u0430\u043d\u0441\u043a\u0438 \u0435\u043d\u0434\u0435\u043c\u0438\u0442. \u0416\u044a\u043b\u0442\u0438\u0442\u0435 \u0446\u0432\u0435\u0442\u043e\u0432\u0435 \u043a\u0440\u0430\u0441\u044f\u0442 \u0432\u0438\u0441\u043e\u043a\u043e\u043f\u043b\u0430\u043d\u0438\u043d\u0441\u043a\u0438\u0442\u0435 \u0447\u0430\u0441\u0442\u0438 \u043d\u0430 \u041f\u0438\u0440\u0438\u043d. \u0420\u0430\u0441\u0442\u0435 \u043d\u0430 \u043a\u0430\u043c\u0435\u043d\u0438\u0441\u0442\u0438 \u0441\u043a\u043b\u043e\u043d\u043e\u0432\u0435 \u043d\u0430\u0434 2000 \u043c \u043d\u0430\u0434\u043c\u043e\u0440\u0441\u043a\u0430 \u0432\u0438\u0441\u043e\u0447\u0438\u043d\u0430.",
  },
  "Onosma taurica": {
    image: "public/images/plants/extras/crimean-golden-drop.jpg",
    description:
      "\u0418\u0437\u043a\u043b\u044e\u0447\u0438\u0442\u0435\u043b\u043d\u043e \u0440\u044f\u0434\u043a\u043e \u0440\u0430\u0441\u0442\u0435\u043d\u0438\u0435 \u0441 \u0436\u044a\u043b\u0442\u0438 \u0442\u0440\u044a\u0431\u0435\u0441\u0442\u0438 \u0446\u0432\u0435\u0442\u043e\u0432\u0435. \u0421\u0440\u0435\u0449\u0430 \u0441\u0435 \u043d\u0430 \u0435\u0434\u0438\u043d\u0438\u0447\u043d\u0438 \u043d\u0430\u0445\u043e\u0434\u0438\u0449\u0430 \u043f\u043e \u0432\u0430\u0440\u043e\u0432\u0438\u043a\u043e\u0432\u0438 \u0442\u0435\u0440\u0435\u043d\u0438 \u0438 \u0441\u043a\u0430\u043b\u043d\u0438 \u043f\u0443\u043a\u043d\u0430\u0442\u0438\u043d\u0438.",
  },
  "Dianthus petraeus": {
    image: "public/images/plants/extras/rock-pink.jpg",
    description:
      "\u041a\u0440\u0430\u0441\u0438\u0432 \u0434\u0438\u0432 \u043a\u0430\u0440\u0430\u043c\u0444\u0438\u043b \u0441 \u0431\u0435\u043b\u0438 \u0446\u0432\u0435\u0442\u043e\u0432\u0435, \u0443\u0441\u0442\u043e\u0439\u0447\u0438\u0432 \u043d\u0430 \u0441\u0443\u0448\u0430\u0432\u0438 \u0443\u0441\u043b\u043e\u0432\u0438\u044f. \u0420\u0430\u0441\u0442\u0435 \u043f\u043e \u0441\u043a\u0430\u043b\u043d\u0438 \u0442\u0435\u0440\u0435\u043d\u0438 \u0432 \u043f\u043b\u0430\u043d\u0438\u043d\u0438\u0442\u0435 \u043d\u0430 \u0411\u044a\u043b\u0433\u0430\u0440\u0438\u044f.",
  },
  "Trollius europaeus": {
    image: "public/images/plants/extras/mountain-globeflower.jpg",
    description:
      "\u0421\u0432\u0435\u0442\u043b\u043e\u0437\u043b\u0430\u0442\u0438\u0441\u0442\u043e \u0446\u0432\u0435\u0442\u0435, \u0441\u0438\u043c\u0432\u043e\u043b \u043d\u0430 \u0430\u043b\u043f\u0438\u0439\u0441\u043a\u0438\u0442\u0435 \u043b\u0438\u0432\u0430\u0434\u0438. \u0421\u0444\u0435\u0440\u0438\u0447\u043d\u0438\u0442\u0435 \u0436\u044a\u043b\u0442\u0438 \u0446\u0432\u0435\u0442\u043e\u0432\u0435 \u0441\u0435 \u043f\u043e\u044f\u0432\u044f\u0432\u0430\u0442 \u043e\u0442 \u043c\u0430\u0439 \u0434\u043e \u044e\u043b\u0438. \u0421\u0438\u043b\u043d\u043e \u043d\u0430\u043c\u0430\u043b\u044f\u043b\u0430 \u043f\u043e\u043f\u0443\u043b\u0430\u0446\u0438\u044f \u0432 \u0411\u044a\u043b\u0433\u0430\u0440\u0438\u044f \u043f\u043e\u0440\u0430\u0434\u0438 \u043f\u0440\u043e\u043c\u044f\u043d\u0430 \u0432 \u0437\u0435\u043c\u0435\u043f\u043e\u043b\u0437\u0432\u0430\u043d\u0435\u0442\u043e.",
  },
  "Tulipa urumoffii": {
    image: "public/images/plants/extras/bulgarian-tulip.jpg",
    description:
      "\u0411\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u043d\u0434\u0435\u043c\u0438\u0442, \u043e\u0442\u043a\u0440\u0438\u0442 \u043f\u0440\u0435\u0437 1922 \u0433. \u0435\u0434\u043d\u043e \u043e\u0442 \u043d\u0430\u0439-\u0440\u0435\u0434\u043a\u0438\u0442\u0435 \u043b\u0430\u043b\u0435\u0442\u0430 \u0432 \u0441\u0432\u0435\u0442\u0430 \u2014 \u0441\u0440\u0435\u0449\u0430 \u0441\u0435 \u0441\u0430\u043c\u043e \u043f\u043e \u0432\u0430\u0440\u043e\u0432\u0438\u043a\u043e\u0432\u0438 \u0441\u043a\u043b\u043e\u043d\u043e\u0432\u0435 \u0432 \u0418\u0437\u0442\u043e\u0447\u043d\u0438\u0442\u0435 \u0420\u043e\u0434\u043e\u043f\u0438.",
  },
};

function PlantCardExtra({ plant }) {
  const override = PLANTS_EXTRAS_OVERRIDES[plant.latinName] || {};
  const description = override.description || plant.description;
  const image = override.image;

  return (
    <article
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#1a2e1a",
        border: "1px solid rgba(139, 44, 44, 0.22)",
        borderRadius: "1.25rem",
        overflow: "hidden",
        transition:
          "transform 280ms cubic-bezier(0.22, 1, 0.36, 1), border-color 280ms ease, box-shadow 280ms ease",
        boxShadow: "0 8px 24px -10px rgba(0,0,0,0.55)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.02)";
        e.currentTarget.style.borderColor = "#8B2C2C";
        e.currentTarget.style.boxShadow =
          "0 14px 36px -10px rgba(139, 44, 44, 0.45)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.borderColor = "rgba(139, 44, 44, 0.22)";
        e.currentTarget.style.boxShadow =
          "0 8px 24px -10px rgba(0,0,0,0.55)";
      }}
    >
      {/* IMAGE, TOP */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "4 / 3",
          background: "#2D4A2B",
          overflow: "hidden",
        }}
      >
        {image ? (
          <img
            src={image}
            alt={plant.title}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              zIndex: 1,
            }}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        ) : null}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
            background:
              "repeating-linear-gradient(45deg, #243b22 0px, #243b22 14px, #2D4A2B 14px, #2D4A2B 28px)",
            zIndex: 0,
          }}
        >
          <p
            style={{
              color: "rgba(245, 241, 232, 0.55)",
              fontSize: "0.8125rem",
              fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
              textAlign: "center",
              letterSpacing: "0.04em",
              lineHeight: 1.5,
            }}
          >
            СНИМКА · {plant.title}
            <br />
            <span style={{ opacity: 0.6 }}>ще бъде добавена</span>
          </p>
        </div>
      </div>

      {/* TEXT, BOTTOM */}
      <div
        style={{
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.6rem",
          flex: 1,
        }}
      >
        <p
          className="font-serif"
          style={{
            fontStyle: "italic",
            fontSize: "0.875rem",
            color: "#a84545",
            margin: 0,
          }}
        >
          {plant.latinName}
        </p>
        <h3
          className="font-serif"
          style={{
            fontSize: "1.5rem",
            color: "#F5F1E8",
            fontWeight: 600,
            lineHeight: 1.18,
            letterSpacing: "-0.015em",
            margin: 0,
          }}
        >
          {plant.title}
        </h3>
        <div>
          <span
            style={{
              display: "inline-block",
              padding: "0.35rem 0.95rem",
              borderRadius: 999,
              fontSize: "0.7625rem",
              fontWeight: 600,
              backgroundColor: plant.statusColor,
              color: "#fff",
              letterSpacing: "0.04em",
            }}
          >
            {plant.status}
          </span>
        </div>
        <p
          style={{
            color: "rgba(245, 241, 232, 0.8)",
            fontSize: "0.95rem",
            lineHeight: 1.6,
            margin: "0.25rem 0 0 0",
          }}
        >
          {description}
        </p>
        <div
          style={{
            marginTop: "auto",
            paddingTop: "1rem",
            borderTop: "1px solid rgba(245, 241, 232, 0.08)",
          }}
        >
          <p
            className="font-serif"
            style={{
              fontStyle: "italic",
              fontSize: "0.8125rem",
              color: "rgba(245, 241, 232, 0.6)",
              margin: 0,
              letterSpacing: "0.01em",
            }}
          >
            Включено в Червената книга на България
          </p>
        </div>
      </div>
    </article>
  );
}

function PlantsMore() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const extras = window.PLANTS_EXTRA || [];

  return (
    <div
      style={{
        backgroundColor: "#1a2e1a",
        color: "#F5F1E8",
        minHeight: "100vh",
      }}
    >
      {/* HERO */}
      <section
        className="relative w-full flex flex-col items-center justify-center text-center overflow-hidden"
        style={{
          minHeight: "40vh",
          paddingTop: "9rem",
          paddingBottom: "3.5rem",
          paddingInline: "1.5rem",
          background:
            "linear-gradient(180deg, #1a2e1a 0%, #2D4A2B 55%, #1a2e1a 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 50% 40%, rgba(139, 44, 44, 0.14), transparent 65%)",
          }}
        />
        <div
          className="relative z-10"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(168, 69, 69, 0.95)",
              marginBottom: "1.25rem",
            }}
          >
            Червена книга · Допълнителни видове
          </p>
          <h1
            className="font-serif"
            style={{
              fontSize: "clamp(2.25rem, 5.5vw, 4rem)",
              color: "#F5F1E8",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              maxWidth: "44rem",
              marginBottom: "1rem",
            }}
          >
            Още застрашени растения
          </h1>
          <div
            style={{
              width: "4rem",
              height: 2,
              background: "#a84545",
              borderRadius: 2,
              marginBottom: "1.25rem",
            }}
          />
          <p
            className="font-serif"
            style={{
              fontSize: "clamp(1rem, 1.4vw, 1.2rem)",
              fontStyle: "italic",
              color: "rgba(245, 241, 232, 0.78)",
              maxWidth: "36rem",
              lineHeight: 1.55,
            }}
          >
            Други растения от Червената книга на България
          </p>
        </div>
      </section>

      {/* GRID, 4 columns desktop, 2 tablet, 1 mobile */}
      <section
        style={{
          width: "100%",
          maxWidth: 1400,
          marginInline: "auto",
          paddingInline: "2rem",
          paddingTop: "4rem",
          paddingBottom: "4rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {extras.map((p) => (
            <PlantCardExtra key={p.id} plant={p} />
          ))}
        </div>
      </section>

      {/* BACK BUTTON */}
      <section
        className="container-page"
        style={{
          paddingTop: "1rem",
          paddingBottom: "6rem",
          textAlign: "center",
        }}
      >
        <PMLink
          to="/plants"
          className="btn btn-ghost"
          style={{
            color: "#F5F1E8",
            borderColor: "rgba(245, 241, 232, 0.4)",
          }}
        >
          ← Назад към основните растения
        </PMLink>
      </section>
    </div>
  );
}

window.PlantsMore = PlantsMore;
