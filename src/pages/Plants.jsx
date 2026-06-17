/* ============================================================
   Plants.jsx, страница /plants
   15 застрашени растения в parallax scroll формат
   ============================================================ */

const PLANTS_STATUS_COLORS = {
  "Критично застрашен": "#8B2C2C",
  "Застрашен": "#C24914",
  "Уязвим": "#A67C2A",
  "Рядък": "#A67C2A",
  "Изчезнал": "#3a3a3a",
};

const PLANTS_RAW = [
  // ===== 9 ОСНОВНИ (10-то ще се добави по-късно) =====
  {
    title: "Родопски силивряк",
    latinName: "Haberlea rhodopensis",
    status: "Рядък",
    habitat: "Сенчести варовикови скали в Родопите",
    threats: "Събиране, изкореняване, туристическа дейност",
    description:
      "Балкански ендемит и терциерен реликт, наричан \u201EОрфеево цвете“. Може да оцелее пълно изсушаване и да възкръсне след дъжд, уникална способност сред цъфтящите растения.",
    image: "public/images/plants/silivryak-card.jpg",
    modelSrc: "public/models/plants/silivryak.glb",
    detailHref: "#/plants/silivryak",
    spotlight: "SilivryakSpotlight",
  },
  {
    title: "Урумов лопен",
    latinName: "Verbascum urumovii",
    status: "Застрашен",
    habitat: "Сухи варовикови склонове в Западна България",
    threats: "Ограничен ареал, загуба на тревни местообитания",
    description:
      "Български ендемит от семейство Живеничеви, кръстен на ботаника Иван Урумов. Високо двугодишно растение с жълти цветове, което се среща само в Знеполе и Краище.",
    image: "public/images/plants/urumov-mullein-card.jpg",
    modelSrc: "public/models/plants/urumov-mullein.glb",
    detailHref: "#/plants/urumov-mullein",
    spotlight: "UrumovMulleinSpotlight",
  },
  {
    title: "Рилска иглика",
    latinName: "Primula deorum",
    status: "Застрашен",
    habitat: "Влажни алпийски ливади и езера над 2000 м в Рила",
    threats: "Климатични промени, масов туризъм, събиране",
    description:
      "Строг ендемит на Рила, не се среща никъде другаде по света. Расте само над 2000 м н.в. край влажни ливади и планински езера. Латинското deorum означава 'на боговете'.",
    image: "public/images/plants/rila-primrose-card.jpg",
    modelSrc: "public/models/plants/rila-primrose.glb",
    detailHref: "#/plants/rila-primrose",
    spotlight: "RilaPrimroseSpotlight",
  },
  {
    title: "Снежно кокиче",
    latinName: "Galanthus nivalis",
    status: "Уязвим",
    habitat: "Широколистни гори и горски поляни из цяла България",
    threats: "Масово събиране за продажба, унищожаване на гори",
    description:
      "Един от първите вестители на пролетта. Защитен по закон и по CITES поради неконтролираното събиране. Съдържа галантамин, вещество, използвано за лечение на болестта на Алцхаймер.",
    image: "public/images/plants/snowdrop-card.jpg",
    modelSrc: "public/models/plants/snowdrop.glb",
    detailHref: "#/plants/snowdrop",
    spotlight: "SnowdropSpotlight",
  },
  {
    title: "Жълт планински крем",
    latinName: "Lilium jankae",
    status: "Застрашен",
    habitat: "Субалпийски ливади и скални полянки в западните планини",
    threats: "Косене, паша, утъпкване от туристи, бране",
    description:
      "Балкански ендемит, наричан \u201Eсамодивско лале“. Едри увиснали жълти цветове с извити венчелистчета и силна миризма. Едно от първите защитени растения у нас, забранено за бране още от 1961 г.",
    image: "public/images/plants/yellow-lily-card.jpg",
    modelSrc: "public/models/plants/yellow-lily.glb",
    detailHref: "#/plants/yellow-lily",
    spotlight: "YellowLilySpotlight",
  },
  {
    title: "Алпийска роза",
    latinName: "Rhododendron myrtifolium",
    status: "Застрашен",
    habitat: "Субалпийски храсталаци в НП \u201EРила\u201D и \u201EЦентрален Балкан\u201D",
    threats: "Климатични промени, пожари, паша, утъпкване",
    description:
      "Единственият вид дива зеленика в България, карпатско-балкански вид на южната граница на ареала си в Европа. Образува характерни розовочервени храсталаци в субалпийската зона, защитени по Директивата за местообитанията.",
    image: "public/images/plants/alpine-rose-card.jpg",
    modelSrc: "public/models/plants/alpine-rose.glb",
    detailHref: "#/plants/alpine-rose",
    spotlight: "AlpineRoseSpotlight",
  },
  {
    title: "Тракийски равнец",
    latinName: "Achillea thracica",
    status: "Застрашен",
    habitat: "Сухи степни местообитания в Тракийската низина около Пловдив",
    threats: "Разораване, урбанизация, инвазивни видове",
    description:
      "Строг български ендемит с един от най-малките ареали сред нашите растения. Среща се само в Тракийската низина около Пловдив, не е известен от никоя друга точка по света. Яркожълтите му коримбозни съцветия красят деградиралите степни терени от юни до август.",
    image: "public/images/plants/thracian-yarrow-card.jpg",
    modelSrc: "public/models/plants/thracian-yarrow.glb",
    detailHref: "#/plants/thracian-yarrow",
    spotlight: "ThracianYarrowSpotlight",
  },
  {
    title: "Българска ведрица",
    latinName: "Fritillaria pontica",
    status: "Уязвим",
    habitat: "Дъбови гори и горски поляни вИзточна България и Странджа",
    threats: "Изсичане на гори, събиране на луковици, паша",
    description:
      "Балкански вид с характерни увиснали камбанести цветове в кафяво-червено и виолетово с жълтозелени ивици. Среща се в дъбови гори на Североизточна България, Черноморието, НП \u201EСтранджа\u201D и Източните Родопи. Цъфти рано напролет, март–май.",
    image: "public/images/plants/pontic-fritillary-card.jpg",
    modelSrc: "public/models/plants/pontic-fritillary.glb",
    detailHref: "#/plants/pontic-fritillary",
    spotlight: "PonticFritillarySpotlight",
  },
  // ===== 5 ДОПЪЛНИТЕЛНИ (/plants/more) =====
  {
    title: "Пирински мак",
    latinName: "Papaver degenii",
    status: "Уязвим",
    habitat: "Каменисти склонове в Пирин",
    threats: "Туризъм, климатични промени",
    description:
      "Балкански ендемит. Жълтите цветове красят високопланинските части на Пирин.",
  },
  {
    title: "Кримско вълмо",
    latinName: "Onosma taurica",
    status: "Критично застрашен",
    habitat: "Скални пукнатини, варовикови терени",
    threats: "Кариерна дейност, малка популация",
    description:
      "Изключително рядко растение с жълти тръбести цветове. Среща се на единични находища.",
  },
  {
    title: "Скален карамфил",
    latinName: "Dianthus petraeus",
    status: "Уязвим",
    habitat: "Скални терени",
    threats: "Промишлено добиване на камък, събиране",
    description:
      "Красив див карамфил с розови цветове, устойчив на сушави условия.",
  },
  {
    title: "Планински божур",
    latinName: "Trollius europaeus",
    status: "Уязвим",
    habitat: "Влажни планински ливади",
    threats: "Промяна в земеползването, събиране",
    description:
      "Светлозлатисто цвете, символ на алпийските ливади. Силно намаляла популация в България.",
  },
  {
    title: "Урумово лале",
    latinName: "Tulipa urumoffii",
    status: "Критично застрашен",
    habitat: "Сухи поляни в Източни Родопи",
    threats: "Незаконно събиране, разораване",
    description:
      "Български ендемит, открит през 1922 г. Едно от най-редките лалета в света.",
  },
];

const PLANTS_DATA = PLANTS_RAW.map((p, i) => ({
  ...p,
  id: i + 1,
  reverse: i % 2 === 1,
  statusColor: PLANTS_STATUS_COLORS[p.status] || "#8B2C2C",
}));

// Първите 8 са основни
const PLANTS_MAIN = PLANTS_DATA.slice(0, 8);
// Последните 5 се показват на /plants/more като прости карти
const PLANTS_EXTRA = PLANTS_DATA.slice(8);
window.PLANTS_EXTRA = PLANTS_EXTRA;
window.PLANTS_STATUS_COLORS = PLANTS_STATUS_COLORS;

const PLANTS_RRD = window.ReactRouterDOM || {};
const PlantsLink =
  PLANTS_RRD.Link ||
  ((props) =>
    React.createElement("a", { ...props, href: props.to }, props.children));

function Plants() {
  return (
    <div style={{ backgroundColor: "#1a2e1a" }}>
      <ParallaxScrollSection
        items={PLANTS_MAIN}
        pageTitle="Застрашени растения на България"
        pageSubtitle="Редките съкровища на нашата флора"
        pageEyebrow="Флора · Червена книга"
      />

      {/* CTA, Още застрашени растения */}
      <section
        style={{
          backgroundColor: "#1a2e1a",
          paddingTop: "4rem",
          paddingBottom: "6rem",
        }}
      >
        <div
          className="container-page"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1.5rem",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 640,
              height: 1,
              background:
                "linear-gradient(90deg, transparent 0%, rgba(168, 69, 69, 0.45) 50%, transparent 100%)",
              marginBottom: "1rem",
            }}
          />
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(168, 69, 69, 0.95)",
            }}
          >
            Червена книга · Допълнителни видове
          </p>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              color: "#F5F1E8",
              fontWeight: 600,
              maxWidth: "44rem",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
            }}
          >
            Има още растения, които се нуждаят от защита
          </h2>
          <p
            className="font-serif"
            style={{
              fontSize: "1.05rem",
              fontStyle: "italic",
              color: "rgba(245, 241, 232, 0.7)",
              maxWidth: "36rem",
              lineHeight: 1.6,
            }}
          >
            Ендемични макове, рододендрони, карамфили и редки треви, част
            от Червената книга на България, които често остават в сянка.
          </p>

          <PlantsLink
            to="/plants/more"
            className="font-serif"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              marginTop: "1rem",
              padding: "1rem 2rem",
              backgroundColor: "#2D4A2B",
              color: "#F5F1E8",
              borderRadius: "0.875rem",
              border: "1px solid rgba(168, 69, 69, 0.4)",
              fontSize: "1.125rem",
              fontWeight: 600,
              letterSpacing: "0.01em",
              textDecoration: "none",
              transition: "all 240ms cubic-bezier(0.22, 1, 0.36, 1)",
              boxShadow: "0 4px 18px -6px rgba(0,0,0,0.5)",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#8B2C2C";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 10px 28px -8px rgba(139, 44, 44, 0.55)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#2D4A2B";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 4px 18px -6px rgba(0,0,0,0.5)";
            }}
          >
            <span>Още застрашени растения</span>
            <span style={{ fontSize: "1.25rem", lineHeight: 1 }}>→</span>
          </PlantsLink>
        </div>
      </section>
    </div>
  );
}

window.Plants = Plants;
