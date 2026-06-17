/* ============================================================
   Organizations.jsx, /organizations
   Пълна страница с природозащитните организации в България
   ============================================================ */

const { useHistory: useOrgHistory } = ReactRouterDOM;
const ORG_I = window.Icons;

const ORG_DATA = [
  {
    id: "wwf-bg",
    name: "WWF България",
    fullName: "Световен фонд за природата",
    url: "https://wwf.bg",
    iconName: "Globe",
    accentColor: "#1a5c1a",
    description:
      "Българското подразделение на световната природозащитна организация WWF. Работи за опазване на горите, реките и дивата природа в страната.",
  },
  {
    id: "bspb",
    name: "БДЗП",
    fullName: "Българско дружество за защита на птиците",
    url: "https://bspb.org",
    iconName: "Bird",
    accentColor: "#2D4A2B",
    description:
      "Водеща природозащитна организация в България, основана през 1988 г. Работи за опазване на птиците и техните местообитания.",
  },
  {
    id: "green-balkans",
    name: "Зелени Балкани",
    fullName: "Сдружение за дивата природа",
    url: "https://greenbalkans.org",
    iconName: "Mountain",
    accentColor: "#1F4D3A",
    description:
      "Една от най-старите природозащитни организации в България. Реализира проекти за опазване на редки видове и възстановяване на популации.",
  },
  {
    id: "fwff",
    name: "Фондация Дива",
    fullName: "Фондация за дивата природа",
    url: "https://fwff.org",
    iconName: "TreePine",
    accentColor: "#2E5E2E",
    description:
      "Природозащитна фондация, фокусирана върху опазването на дивата природа и биоразнообразието в България.",
  },
  {
    id: "bbf",
    name: "БФБ",
    fullName: "Българска фондация Биоразнообразие",
    url: "https://bbf.biodiversity.bg",
    iconName: "Leaf",
    accentColor: "#5C2828",
    description:
      "Работи за опазване на биологичното разнообразие в България чрез изследвания, образование и практически проекти в природата.",
  },
  {
    id: "balkani",
    name: "Балкани",
    fullName: "Сдружение за дива природа БАЛКАНИ",
    url: "https://balkani.org",
    iconName: "Shield",
    accentColor: "#1a3a4a",
    description:
      "Природозащитна организация, работеща в областта на едрите хищници и техните местообитания в България и на Балканите.",
  },
  {
    id: "ecocentre",
    name: "ИУЦЕ",
    fullName: "Информационен и учебен център по екология",
    url: "https://ecocentre.bg",
    iconName: "BookOpen",
    accentColor: "#4a3820",
    description:
      "Образователен център за екология и природозащита, провеждащ обучения, семинари и информационни кампании в цялата страна.",
  },
  {
    id: "moew",
    name: "МОСВ",
    fullName: "Министерство на околната среда и водите",
    url: "https://www.moew.government.bg",
    iconName: "Building2",
    accentColor: "#1a2030",
    description:
      "Държавна институция, отговорна за политиката в областта на околната среда, водите и биоразнообразието в България.",
  },
  {
    id: "iber",
    name: "ИБЕИ, БАН",
    fullName: "Институт по биоразнообразие и екосистемни изследвания",
    url: "https://www.iber.bas.bg",
    iconName: "Microscope",
    accentColor: "#3a1a4a",
    description:
      "Научен институт към Българската академия на науките, координиращ Червената книга на България и провеждащ фундаментални изследвания.",
  },
  {
    id: "redbook",
    name: "Червена книга на България",
    fullName: "Електронно издание на БАН",
    url: "http://e-ecodb.bas.bg/rdb/bg/",
    iconName: "BookMarked",
    accentColor: "#8B2C2C",
    description:
      "Официалният регистър на застрашените видове в България, създаден и поддържан от Българската академия на науките.",
  },
];

/* ---------- Карта на организация ---------- */
function OrgCard({ org }) {
  const Icon = (ORG_I && ORG_I[org.iconName]) || (ORG_I && ORG_I.Globe);
  const [hov, setHov] = React.useState(false);

  return (
    <article
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex",
        gap: "1.5rem",
        alignItems: "flex-start",
        padding: "1.75rem",
        borderRadius: "1rem",
        border: hov
          ? "1px solid rgba(245, 241, 232, 0.2)"
          : "1px solid rgba(245, 241, 232, 0.09)",
        background: hov
          ? "rgba(245, 241, 232, 0.06)"
          : "rgba(245, 241, 232, 0.025)",
        transition: "background 240ms ease, border-color 240ms ease",
      }}
    >
      {/* Икона */}
      <div
        style={{
          width: 76,
          height: 76,
          borderRadius: "0.75rem",
          background: org.accentColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          border: "1px solid rgba(245, 241, 232, 0.14)",
          boxShadow: `0 4px 16px -4px ${org.accentColor}88`,
        }}
      >
        {Icon && <Icon size={34} stroke={1.5} color="#F5F1E8" />}
      </div>

      {/* Съдържание */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <p
          style={{
            fontSize: "0.68rem",
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(245, 241, 232, 0.45)",
            marginBottom: "0.3rem",
          }}
        >
          {org.fullName}
        </p>
        <h3
          className="font-serif"
          style={{
            fontSize: "1.3rem",
            fontWeight: 600,
            color: "#F5F1E8",
            lineHeight: 1.15,
            letterSpacing: "-0.01em",
            marginBottom: "0.65rem",
          }}
        >
          {org.name}
        </h3>
        <p
          style={{
            fontSize: "0.9375rem",
            lineHeight: 1.68,
            color: "rgba(245, 241, 232, 0.7)",
            marginBottom: "1.1rem",
          }}
        >
          {org.description}
        </p>
        <a
          href={org.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            fontSize: "0.875rem",
            fontWeight: 500,
            color: "#d97a7a",
            textDecoration: "none",
            borderBottom: "1px solid rgba(217, 122, 122, 0.3)",
            paddingBottom: "1px",
            transition: "color 200ms ease, border-color 200ms ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#e89494";
            e.currentTarget.style.borderBottomColor = "rgba(232, 148, 148, 0.6)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#d97a7a";
            e.currentTarget.style.borderBottomColor = "rgba(217, 122, 122, 0.3)";
          }}
        >
          Посети сайта
          {ORG_I && <ORG_I.ArrowRight size={13} stroke={2.2} />}
        </a>
      </div>
    </article>
  );
}

/* ---------- Hero ---------- */
function OrgHero() {
  return (
    <section
      style={{
        paddingTop: "9rem",
        paddingBottom: "4.5rem",
        background:
          "linear-gradient(180deg, #0f1c12 0%, #1a2e1a 100%)",
        borderBottom: "1px solid rgba(245, 241, 232, 0.07)",
        textAlign: "center",
      }}
    >
      <div className="container-narrow">
        <p
          style={{
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "rgba(168, 69, 69, 0.9)",
            marginBottom: "1.25rem",
          }}
        >
          Природозащита · България
        </p>
        <h1
          className="font-serif"
          style={{
            fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
            color: "#F5F1E8",
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: "1.5rem",
            textWrap: "balance",
          }}
        >
          Природозащитни организации
        </h1>
        <div
          style={{
            width: "4rem",
            height: "2px",
            background: "#8B2C2C",
            borderRadius: 1,
            margin: "0 auto 1.75rem",
          }}
        />
        <p
          style={{
            fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
            color: "rgba(245, 241, 232, 0.72)",
            lineHeight: 1.65,
            maxWidth: "46ch",
            margin: "0 auto",
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
          }}
        >
          Организациите, които всеки ден се борят за защитата на
          българската флора и фауна.
        </p>
      </div>
    </section>
  );
}

/* ---------- Страница ---------- */
function Organizations() {
  return (
    <div style={{ backgroundColor: "#1a2e1a", minHeight: "100vh" }}>
      <OrgHero />
      <section style={{ paddingTop: "3.5rem", paddingBottom: "7rem" }}>
        <div className="container-page">
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fill, minmax(min(100%, 480px), 1fr))",
              gap: "1.25rem",
            }}
          >
            {ORG_DATA.map((org) => (
              <OrgCard key={org.id} org={org} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

window.Organizations = Organizations;
