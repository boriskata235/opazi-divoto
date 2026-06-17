/* ============================================================
   AnimalsMore.jsx, /animals/more
   Допълнителни 5 застрашени животни от Червената книга на
   България, представени като прости карти със снимка и текст.
   ============================================================ */

const AM_RRD = window.ReactRouterDOM || {};
const AMLink =
  AM_RRD.Link ||
  ((props) =>
    React.createElement("a", { ...props, href: props.to }, props.children));

/* Данните идват от window.ANIMALS_EXTRA (последните 5 в Animals.jsx),
   което гарантира единен източник на истина за статус, имена и описание.
   Поправяме само описанията тук, за по-богат текст. */

const EXTRAS_OVERRIDES = {
  "Testudo graeca": {
    image: "public/images/animals/extras/spur-thighed-tortoise.jpg",
    description:
      "Сродна с шипоопашатата костенурка, но се различава по характерните шипчета от двете страни на бедрата. Среща се основно в Източни Родопи, Сакар и Странджа. Защитена по закон, отглеждането и търговията са забранени.",
  },
  "Zamenis situla": {
    image: "public/images/animals/extras/leopard-snake.jpg",
    description:
      "Една от най-красивите европейски змии, с характерен леопардов десен. Напълно безопасна за човека. Среща се в скални райони, храсталаци и сухи каменисти терени в Южна България.",
  },
  "Cottus gobio": {
    image: "public/images/animals/extras/bullhead-fish.jpg",
    description:
      "Малка дънна риба, индикатор за чисти, бързотечащи планински реки. Изключително чувствителна към качеството на водата. Спадът ѝ говори за замърсяване или нарушение на речната екосистема.",
  },
  "Mustela eversmanii": {
    image: "public/images/animals/extras/steppe-polecat.jpg",
    description:
      "Степен хищник, тясно свързан с европейския лалугер, неговата основна плячка. Изключително рядък в България, среща се в Добруджа и фрагментно в Южна България. Спадът на лалугера директно заплашва вида.",
  },
  "Myotis myotis": {
    image: "public/images/animals/extras/greater-mouse-eared-bat.jpg",
    description:
      "Един от най-големите европейски прилепи. Хибернира в пещери в големи колонии, до няколко хиляди индивида. Зависим от старите широколистни гори за ловуване и от пещерните системи за размножаване и хибернация.",
  },
  "Canis lupus": {
    image: "public/images/animals/extras/wolf.jpg",
    description:
      "Най-големият див хищник в България след кафявата мечка. Българската популация е около 1000 – 1200 индивида, концентрирани в Стара планина, Рила, Пирин и Родопите. Живее в семейни глутници и играе ключова роля като върховен хищник. Защитен, но в България е ловен вид с квоти.",
  },
};

function AnimalCardExtra({ animal }) {
  const override = EXTRAS_OVERRIDES[animal.latinName] || {};
  const description = override.description || animal.description;
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
            alt={animal.title}
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
            СНИМКА · {animal.title}
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
          {animal.latinName}
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
          {animal.title}
        </h3>
        <div>
          <span
            style={{
              display: "inline-block",
              padding: "0.35rem 0.95rem",
              borderRadius: 999,
              fontSize: "0.7625rem",
              fontWeight: 600,
              backgroundColor: animal.statusColor,
              color: "#fff",
              letterSpacing: "0.04em",
            }}
          >
            {animal.status}
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
            Включен в Червената книга на България
          </p>
        </div>
      </div>
    </article>
  );
}

function AnimalsMore() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const extras = window.ANIMALS_EXTRA || [];

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
            Още застрашени видове
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
            Други животни от Червената книга на България
          </p>
        </div>
      </section>

      {/* GRID */}
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
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {extras.map((a) => (
            <AnimalCardExtra key={a.id} animal={a} />
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
        <AMLink
          to="/animals"
          className="btn btn-ghost"
          style={{
            color: "#F5F1E8",
            borderColor: "rgba(245, 241, 232, 0.4)",
          }}
        >
          ← Назад към основните животни
        </AMLink>
      </section>
    </div>
  );
}

window.AnimalsMore = AnimalsMore;
