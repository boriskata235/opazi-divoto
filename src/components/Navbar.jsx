/* ============================================================
   Navbar.jsx (.tsx екв.)
   Fixed, прозрачен горе → тъмно зелен с blur при скрол.
   Със dropdown за "Видове", hover/click + framer-motion.
   ============================================================ */

const { Link: RRLink, NavLink: RRNavLink, useLocation, useHistory } = ReactRouterDOM;
const FM = window.Motion || window.FramerMotion || {};
const motion = FM.motion || new Proxy({}, { get: () => (props) => React.createElement(props.as || "div", props, props.children) });
const AnimatePresence = FM.AnimatePresence || (({ children }) => <>{children}</>);

const I = window.Icons;

function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const closeTimer = React.useRef(null);
  const dropdownRef = React.useRef(null);
  const location = useLocation();
  const history = useHistory();

  // Scroll state
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Страници с непрозрачен navbar (светъл фон → navbar трябва да е тъмен)
  const forceSolid = ["/contact"].includes(location.pathname);

  // Затваряне на dropdown при click извън
  React.useEffect(() => {
    const onClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  // Затваряне на мобилно меню при смяна на route
  React.useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location.pathname, location.hash]);

  // Заключване на скрола когато мобилното меню е отворено
  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  // Hover handlers (с малко забавяне за да не "хлопа")
  const openDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDropdownOpen(true);
  };
  const scheduleCloseDropdown = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setDropdownOpen(false), 140);
  };

  // Scroll до #organizations (или навигация ако сме на друга страница)
  const scrollToOrgs = (e) => {
    e.preventDefault();
    setMobileOpen(false);
    const goAndScroll = () => {
      const el = document.getElementById("organizations");
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    if (location.pathname !== "/organizations" && !document.getElementById("organizations")) {
      // Ако няма #organizations в текущата страница, пращаме на /organizations
      history.push("/organizations");
      setTimeout(goAndScroll, 80);
    } else {
      goAndScroll();
    }
  };

  // === Стилове ===
  const headerStyle = {
    backgroundColor: (scrolled || forceSolid) ? "rgba(45, 74, 43, 0.97)" : "rgba(45, 74, 43, 0)",
    backdropFilter: (scrolled || forceSolid) ? "blur(10px) saturate(140%)" : "blur(0px)",
    WebkitBackdropFilter: (scrolled || forceSolid) ? "blur(10px) saturate(140%)" : "blur(0px)",
    borderBottom: (scrolled || forceSolid) ? "1px solid rgba(245, 241, 232, 0.08)" : "1px solid transparent",
    transition: "background-color 350ms var(--ease-organic), backdrop-filter 350ms var(--ease-organic), border-color 350ms var(--ease-organic), box-shadow 350ms var(--ease-organic)",
    boxShadow: (scrolled || forceSolid) ? "0 4px 24px -8px rgba(26, 46, 26, 0.35)" : "none",
  };

  const linkBaseStyle = {
    color: "var(--color-cream)",
    fontFamily: "var(--font-sans)",
    fontSize: "0.9375rem",
    fontWeight: 500,
    letterSpacing: "0.01em",
    transition: "color 200ms var(--ease-organic)",
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50" style={headerStyle}>
      <div className="container-page flex items-center justify-between h-16 md:h-20">
        {/* === ЛОГО === */}
        <RRLink to="/" className="flex items-center gap-2.5 group" aria-label="Опази дивото, начало">
          <span
            className="w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-300 ease-organic group-hover:scale-110 group-hover:rotate-[-8deg]"
            style={{ backgroundColor: "rgba(245, 241, 232, 0.12)", color: "var(--color-cream)" }}
          >
            <I.Leaf size={18} stroke={1.8} />
          </span>
          <span
            className="font-serif text-xl md:text-[1.375rem] font-semibold tracking-tight"
            style={{ color: "var(--color-cream)" }}
          >
            Опази дивото
          </span>
        </RRLink>

        {/* === ДЕСКТОП НАВИГАЦИЯ === */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Главна навигация">
          <NavItem to="/" exact label="Начало" />
          <NavItem to="/red-book" label="Червена книга" />

          {/* Dropdown, Видове */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={scheduleCloseDropdown}
          >
            <button
              type="button"
              className="flex items-center gap-1.5 px-4 py-2 rounded-lg"
              style={{
                ...linkBaseStyle,
                opacity: (location.pathname === "/animals" || location.pathname === "/plants") ? 1 : 0.85,
              }}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              onClick={() => setDropdownOpen((v) => !v)}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = (location.pathname === "/animals" || location.pathname === "/plants") ? 1 : 0.85)}
            >
              Видове
              <span
                style={{
                  display: "inline-flex",
                  transition: "transform 280ms var(--ease-organic)",
                  transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <I.ChevronDown size={16} stroke={2} />
              </span>
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.97 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute right-0 top-full mt-2 min-w-[220px] rounded-2xl overflow-hidden"
                  style={{
                    backgroundColor: "rgba(26, 46, 26, 0.92)",
                    backdropFilter: "blur(14px) saturate(140%)",
                    WebkitBackdropFilter: "blur(14px) saturate(140%)",
                    border: "1px solid rgba(245, 241, 232, 0.1)",
                    boxShadow: "0 16px 40px -12px rgba(0, 0, 0, 0.4)",
                  }}
                  role="menu"
                >
                  <DropdownItem to="/animals" icon={<I.PawPrint size={18} stroke={1.8} />} label="Животни" />
                  <DropdownItem to="/plants" icon={<I.Sprout size={18} stroke={1.8} />} label="Растения" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Организации, scroll до #organizations */}
          <a
            href="#organizations"
            onClick={scrollToOrgs}
            className="px-4 py-2 rounded-lg"
            style={{ ...linkBaseStyle, opacity: 0.85 }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.85)}
          >
            Организации
          </a>

          <NavItem to="/contact" label="Контакти" />
        </nav>

        {/* === МОБИЛЕН HAMBURGER === */}
        <button
          type="button"
          className="lg:hidden p-2 rounded-lg"
          style={{ color: "var(--color-cream)" }}
          aria-label={mobileOpen ? "Затвори меню" : "Отвори меню"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <I.X size={26} stroke={2} /> : <I.Menu size={26} stroke={2} />}
        </button>
      </div>

      {/* === ПЪЛНОЕКРАННО МОБИЛНО МЕНЮ === */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden fixed inset-0 top-16 md:top-20"
            style={{
              backgroundColor: "rgba(26, 46, 26, 0.97)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              zIndex: 40,
            }}
          >
            <nav
              className="container-page py-8 flex flex-col gap-1 h-full overflow-y-auto"
              aria-label="Мобилна навигация"
            >
              <MobileLink to="/" exact icon={<I.Home size={20} />} label="Начало" />
              <MobileLink to="/red-book" icon={<I.BookOpen size={20} />} label="Червена книга" />

              <div className="mt-2 mb-1 px-4">
                <span
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "rgba(245, 241, 232, 0.5)" }}
                >
                  Видове
                </span>
              </div>
              <MobileLink to="/animals" icon={<I.PawPrint size={20} />} label="Животни" />
              <MobileLink to="/plants" icon={<I.Sprout size={20} />} label="Растения" />

              <div className="mt-2" />
              <a
                href="#organizations"
                onClick={scrollToOrgs}
                className="flex items-center gap-3 px-4 py-4 rounded-xl text-lg font-medium"
                style={{ color: "var(--color-cream)" }}
              >
                <I.Users size={20} />
                Организации
              </a>
              <MobileLink to="/contact" icon={<I.Mail size={20} />} label="Контакти" />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// === Помощни компоненти ===

function NavItem({ to, label, exact = false }) {
  return (
    <RRNavLink
      to={to}
      exact={exact}
      className="px-4 py-2 rounded-lg"
      style={{
        color: "var(--color-cream)",
        fontFamily: "var(--font-sans)",
        fontSize: "0.9375rem",
        fontWeight: 500,
        letterSpacing: "0.01em",
        opacity: 0.85,
        transition: "opacity 200ms var(--ease-organic), color 200ms var(--ease-organic)",
        position: "relative",
      }}
      activeStyle={{ opacity: 1 }}
      onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
      onMouseLeave={(e) => {
        // Запазваме активното състояние
        if (!e.currentTarget.classList.contains("nav-active")) {
          e.currentTarget.style.opacity = 0.85;
        }
      }}
    >
      {label}
    </RRNavLink>
  );
}

function DropdownItem({ to, icon, label }) {
  const [hover, setHover] = React.useState(false);
  return (
    <RRLink
      to={to}
      role="menuitem"
      className="flex items-center gap-3 px-4 py-3 relative"
      style={{
        color: "var(--color-cream)",
        fontFamily: "var(--font-sans)",
        fontSize: "0.9375rem",
        fontWeight: 500,
        textDecoration: "none",
        transition: "background-color 180ms var(--ease-organic), padding-left 220ms var(--ease-organic)",
        backgroundColor: hover ? "rgba(245, 241, 232, 0.06)" : "transparent",
        paddingLeft: hover ? "1.25rem" : "1rem",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Червен акцент отляво при hover */}
      <span
        aria-hidden="true"
        style={{
          position: "absolute",
          left: 0,
          top: "20%",
          bottom: "20%",
          width: hover ? "3px" : "0px",
          backgroundColor: "var(--color-crimson)",
          borderRadius: "0 2px 2px 0",
          transition: "width 220ms var(--ease-organic)",
        }}
      />
      <span style={{ color: "var(--color-cream)", opacity: 0.85 }}>{icon}</span>
      <span>{label}</span>
    </RRLink>
  );
}

function MobileLink({ to, exact = false, icon, label }) {
  return (
    <RRNavLink
      to={to}
      exact={exact}
      className="flex items-center gap-3 px-4 py-4 rounded-xl text-lg font-medium"
      style={{
        color: "var(--color-cream)",
        textDecoration: "none",
        transition: "background-color 180ms var(--ease-organic)",
      }}
      activeStyle={{
        backgroundColor: "rgba(139, 44, 44, 0.85)",
      }}
    >
      {icon}
      {label}
    </RRNavLink>
  );
}

window.Navbar = Navbar;
