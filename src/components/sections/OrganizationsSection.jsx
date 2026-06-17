/* ============================================================
   OrganizationsSection.jsx (.tsx екв.)
   Секция с интерактивна 3D сфера от лога на организации
   ============================================================ */

const OS_I = window.Icons;

// Lucide-style placeholder иконки специфични за тази секция
function Building2Icon(p) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={p.size||40} height={p.size||40} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
      <path d="M10 6h4"/><path d="M10 10h4"/><path d="M10 14h4"/><path d="M10 18h4"/>
    </svg>
  );
}
function TreePineIcon(p){return(<svg xmlns="http://www.w3.org/2000/svg" width={p.size||40} height={p.size||40} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"/><path d="M12 22v-3"/></svg>);}
function BirdIcon(p){return(<svg xmlns="http://www.w3.org/2000/svg" width={p.size||40} height={p.size||40} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 7h.01"/><path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20"/><path d="m20 7 2 .5-2 .5"/><path d="M10 18v3"/><path d="M14 17.75V21"/><path d="M7 18a6 6 0 0 0 3.84-10.61"/></svg>);}
function FishIcon(p){return(<svg xmlns="http://www.w3.org/2000/svg" width={p.size||40} height={p.size||40} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z"/><path d="M18 12v.5"/><path d="M16 17.93a9.77 9.77 0 0 1 0-11.86"/><path d="M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33"/><path d="M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.42 2.5"/><path d="m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98"/></svg>);}
function FlowerIcon(p){return(<svg xmlns="http://www.w3.org/2000/svg" width={p.size||40} height={p.size||40} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5"/><path d="M12 7.5V9"/><path d="M7.5 12H9"/><path d="M16.5 12H15"/><path d="M12 16.5V15"/><path d="m8 8 1.88 1.88"/><path d="M14.12 9.88 16 8"/><path d="m8 16 1.88-1.88"/><path d="M14.12 14.12 16 16"/></svg>);}
function MountainIcon(p){return(<svg xmlns="http://www.w3.org/2000/svg" width={p.size||40} height={p.size||40} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>);}
function MicroscopeIcon(p){return(<svg xmlns="http://www.w3.org/2000/svg" width={p.size||40} height={p.size||40} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18h8"/><path d="M3 22h18"/><path d="M14 22a7 7 0 1 0 0-14h-1"/><path d="M9 14h2"/><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z"/><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"/></svg>);}
function GlobeIcon(p){return(<svg xmlns="http://www.w3.org/2000/svg" width={p.size||40} height={p.size||40} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>);}
function ShieldIcon(p){return(<svg xmlns="http://www.w3.org/2000/svg" width={p.size||40} height={p.size||40} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>);}
function BookIcon(p){return(<svg xmlns="http://www.w3.org/2000/svg" width={p.size||40} height={p.size||40} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>);}

// Списък с организации
const ORGANIZATIONS = [
  { id: "wwf-bg", name: "WWF България", url: "https://wwf.bg",
    icon: <GlobeIcon size={42}/>, bg: "#F5F1E8", color: "#1a2e1a" },
  { id: "bspb", name: "БДЗП", url: "https://bspb.org",
    icon: <BirdIcon size={42}/>, bg: "#F5F1E8", color: "#2D4A2B" },
  { id: "green-balkans", name: "Зелени Балкани", url: "https://greenbalkans.org",
    icon: <MountainIcon size={42}/>, bg: "#F5F1E8", color: "#2D4A2B" },
  { id: "fwff", name: "Фондация Дива", url: "https://fwff.org",
    icon: <TreePineIcon size={42}/>, bg: "#F5F1E8", color: "#2D4A2B" },
  { id: "bbf", name: "БФБ", url: "https://bbf.biodiversity.bg",
    icon: <FlowerIcon size={42}/>, bg: "#F5F1E8", color: "#8B2C2C" },
  { id: "balkani", name: "Балкани", url: "https://balkani.org",
    icon: <ShieldIcon size={42}/>, bg: "#F5F1E8", color: "#2D4A2B" },
  { id: "ecocentre", name: "ИУЦЕ", url: "https://ecocentre.bg",
    icon: <Building2Icon size={42}/>, bg: "#F5F1E8", color: "#5C4033" },
  { id: "moew", name: "МОСВ", url: "https://www.moew.government.bg",
    icon: <Building2Icon size={42}/>, bg: "#F5F1E8", color: "#1a2e1a" },
  { id: "iba", name: "ИБЕИ - БАН", url: "https://www.iber.bas.bg",
    icon: <MicroscopeIcon size={42}/>, bg: "#F5F1E8", color: "#5C4033" },
  { id: "redbook", name: "Червена книга", url: "http://e-ecodb.bas.bg/rdb/bg/",
    icon: <BookIcon size={42}/>, bg: "#8B2C2C", color: "#F5F1E8" },
  { id: "fish", name: "Риби и води", url: "https://wwf.bg",
    icon: <FishIcon size={42}/>, bg: "#F5F1E8", color: "#2D4A2B" },
];

// Дублиране за по-плътна сфера
const SPHERE_ORGANIZATIONS = [];
for (let i = 0; i < 3; i++) {
  ORGANIZATIONS.forEach((org, idx) => {
    SPHERE_ORGANIZATIONS.push({ ...org, id: `${org.id}-${i}-${idx}` });
  });
}

function OrganizationsSection() {
  // Responsive size
  const [size, setSize] = React.useState(600);
  React.useEffect(() => {
    const onResize = () => {
      const w = Math.min(window.innerWidth - 40, 600);
      setSize(Math.max(320, w));
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <section
      id="organizations"
      className="relative w-full py-20 md:py-28 px-6 flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: "transparent",
        minHeight: "100vh",
      }}
    >
      {/* Декоративен radial overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.55 }}>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(139, 44, 44, 0.22), transparent 65%)",
          }}
        />
      </div>

      {/* Заглавие */}
      <div className="relative z-10 text-center mb-12 max-w-3xl">
        <Reveal>
          <h2
            className="font-serif"
            style={{
              color: "var(--color-cream)",
              fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            Заедно за природата
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <div
            className="mx-auto mt-6 mb-6"
            style={{ width: "6rem", height: "3px", backgroundColor: "var(--color-crimson)", borderRadius: "2px" }}
          />
        </Reveal>
        <Reveal delay={250}>
          <p
            style={{
              fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
              fontWeight: 300,
              color: "rgba(245, 241, 232, 0.82)",
              lineHeight: 1.6,
            }}
          >
            Организациите, които всеки ден се борят за защитата на българската флора и фауна
          </p>
        </Reveal>
        <Reveal delay={350}>
          <p
            className="mt-4"
            style={{
              fontSize: "0.875rem",
              fontStyle: "italic",
              color: "rgba(245, 241, 232, 0.55)",
            }}
          >
            Завърти сферата с мишката · Кликни върху организация, за да посетиш сайта ѝ
          </p>
        </Reveal>
      </div>

      {/* 3D Сфера */}
      <Reveal delay={450}>
        <div className="relative z-10">
          <OrganizationSphere
            organizations={SPHERE_ORGANIZATIONS}
            containerSize={size}
            sphereRadius={size * 0.37}
            dragSensitivity={0.8}
            momentumDecay={0.96}
            maxRotationSpeed={6}
            baseImageScale={0.15}
            hoverScale={1.4}
            perspective={1000}
            autoRotate={true}
            autoRotateSpeed={0.2}
          />
        </div>
      </Reveal>
    </section>
  );
}

window.OrganizationsSection = OrganizationsSection;
