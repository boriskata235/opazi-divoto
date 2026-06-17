/* ============================================================
   Contact.jsx, /contacts
   ============================================================ */

const CT_I = window.Icons;

function Contact() {
  return (
    <div
      style={{
        backgroundColor: "var(--color-cream)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <section
        style={{
          paddingTop: "8rem",
          paddingBottom: "8rem",
          textAlign: "center",
          width: "100%",
        }}
      >
        <div className="container-narrow">
          <span className="eyebrow">Свържи се</span>
          <h1
            className="font-serif mt-4"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "var(--color-forest-dark)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              fontWeight: 700,
            }}
          >
            Контакти
          </h1>
          <span className="accent-rule mt-6" aria-hidden="true" />
          <p
            className="mt-8"
            style={{
              fontSize: "1.1875rem",
              lineHeight: 1.7,
              color: "var(--color-ink)",
              maxWidth: "38ch",
              margin: "2rem auto 0",
              opacity: 0.85,
            }}
          >
            Имаш въпрос, идея или искаш да помогнеш? Пиши ни.
          </p>

          {/* Email */}
          <div style={{ marginTop: "2.75rem" }}>
            <a
              href="mailto:borispinkov@gmail.com"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.75rem",
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.2rem, 2.5vw, 1.65rem)",
                fontWeight: 500,
                color: "var(--color-crimson)",
                textDecoration: "none",
                borderBottom: "2px solid transparent",
                paddingBottom: "2px",
                transition: "border-color 220ms ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderBottomColor =
                  "var(--color-crimson)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderBottomColor = "transparent")
              }
            >
              {CT_I && <CT_I.Mail size={26} stroke={1.8} />}
              borispinkov@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

window.Contact = Contact;
