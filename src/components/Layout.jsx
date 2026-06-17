/* ============================================================
   Layout.jsx, Главен layout: Navbar + main + Footer
   ============================================================ */

const { Link: LayoutLink } = ReactRouterDOM;
const LI = window.Icons;

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        backgroundColor: "#1a2e1a",
        color: "var(--color-cream)",
        paddingTop: "5rem",
        paddingBottom: "2.5rem",
      }}
    >
      <div className="container-page">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16 mb-14">
          {/* Колона 1: Лого + описание */}
          <div>
            <LayoutLink
              to="/"
              className="inline-flex items-center gap-2.5 mb-5"
              style={{ color: "var(--color-cream)" }}
            >
              <span
                className="rounded-full flex items-center justify-center"
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  backgroundColor: "rgba(245, 241, 232, 0.1)",
                  border: "1px solid rgba(245, 241, 232, 0.18)",
                }}
              >
                <LI.Leaf size={18} stroke={1.8} style={{ color: "var(--color-cream)" }} />
              </span>
              <span
                className="font-serif"
                style={{
                  fontSize: "1.375rem",
                  fontWeight: 600,
                  letterSpacing: "-0.01em",
                }}
              >
                Опази дивото
              </span>
            </LayoutLink>
            <p
              style={{
                fontSize: "0.9375rem",
                lineHeight: 1.65,
                color: "rgba(245, 241, 232, 0.72)",
                maxWidth: "22rem",
              }}
            >
              Образователен проект, посветен на застрашените видове в България
              и тяхното опазване. Информацията е базирана на Червената книга на
              Република България.
            </p>
          </div>

          {/* Колона 2: Бързи линкове */}
          <div>
            <h6
              className="mb-5"
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(168, 69, 69, 1)",
                fontWeight: 600,
              }}
            >
              Разгледай
            </h6>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }} className="space-y-3">
              <FooterLink to="/" label="Начало" />
              <FooterLink to="/red-book" label="Червената книга" />
              <FooterLink to="/animals" label="Животни" />
              <FooterLink to="/plants" label="Растения" />
              <FooterLink to="/organizations" label="Организации" />
            </ul>
          </div>

          {/* Колона 3: Източници */}
          <div>
            <h6
              className="mb-5"
              style={{
                fontSize: "0.75rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(168, 69, 69, 1)",
                fontWeight: 600,
              }}
            >
              Източници
            </h6>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }} className="space-y-3">
              <FooterExtLink
                href="http://e-ecodb.bas.bg/rdb/bg/"
                label="Червената книга на Република България (БАН)"
              />
              <FooterExtLink
                href="https://www.bas.bg"
                label="Българска академия на науките (БАН)"
              />
              <FooterExtLink
                href="https://www.moew.government.bg"
                label="Министерство на околната среда и водите"
              />
              <FooterExtLink
                href="https://www.iucn.org"
                label="IUCN, Международен съюз за защита на природата"
              />
            </ul>
          </div>
        </div>

        {/* Долен ред */}
        <div
          className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-3"
          style={{
            borderTop: "1px solid rgba(245, 241, 232, 0.12)",
            fontSize: "0.8125rem",
            color: "rgba(245, 241, 232, 0.55)",
          }}
        >
          <span>
            © {year} · Информацията е базирана на{" "}
            <a
              href="http://e-ecodb.bas.bg/rdb/bg/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "rgba(245, 241, 232, 0.8)",
                textDecoration: "underline",
                textDecorationColor: "rgba(168, 69, 69, 0.6)",
                textUnderlineOffset: "3px",
              }}
            >
              Червената книга на България (БАН)
            </a>
          </span>
          <span style={{ fontStyle: "italic" }}>
            Направено с грижа за българската природа.
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ to, label }) {
  return (
    <li>
      <LayoutLink
        to={to}
        style={{
          fontSize: "0.9375rem",
          color: "rgba(245, 241, 232, 0.78)",
          transition: "color 200ms var(--ease-organic), padding-left 200ms var(--ease-organic)",
          display: "inline-block",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.color = "rgba(245, 241, 232, 1)";
          e.currentTarget.style.paddingLeft = "0.375rem";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.color = "rgba(245, 241, 232, 0.78)";
          e.currentTarget.style.paddingLeft = "0";
        }}
      >
        {label}
      </LayoutLink>
    </li>
  );
}

function FooterExtLink({ href, label }) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: "0.9375rem",
          color: "rgba(245, 241, 232, 0.78)",
          transition: "color 200ms var(--ease-organic)",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(168, 69, 69, 1)")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(245, 241, 232, 0.78)")}
      >
        {label}
      </a>
    </li>
  );
}

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

window.Layout = Layout;
