/* ============================================================
   Animals.jsx, страница /animals
   15 застрашени животни в parallax scroll формат
   ============================================================ */

const STATUS_COLORS = {
  "Критично застрашен": "#8B2C2C",
  "Застрашен": "#C24914",
  "Уязвим": "#A67C2A",
  "Изчезнал": "#3a3a3a",
  "Изчезнал от България": "#3a3a3a",
};

const ANIMALS_RAW = [
  {
    title: "Кафява мечка",
    latinName: "Ursus arctos",
    status: "Уязвим",
    habitat: "Планински гори в Стара планина, Рила, Родопи",
    threats: "Бракониерство, фрагментация на местообитанията",
    description:
      "Най-големият хищник в България. Популацията се оценява на около 700 индивида, концентрирани в Стара планина и Родопите.",
    image: "public/images/animals/bear.jpg",
    detailHref: "#/animals/brown-bear",
    modelSrc: "public/models/animals/bear.glb",
    spotlight: "BrownBearSpotlight",
  },
  {
    title: "Балканска дива коза",
    latinName: "Rupicapra rupicapra balcanica",
    status: "Застрашен",
    habitat: "Високопланински скални райони в Стара планина, Рила, Пирин и Западни Родопи",
    threats: "Бракониерство, хибридизация с алпийската дива коза, изолация на популациите",
    description:
      "Балкански ендемичен подвид. Среща се в Четирите най-високи планини на България. Общата численост се оценява на 1 600–1 800 индивида (Червена книга на БАН).",
    image: "public/images/animals/chamois.jpg",
    detailHref: "#/animals/balkan-chamois",
    modelSrc: "public/models/animals/chamois.glb",
    spotlight: "BalkanChamoisSpotlight",
  },
  {
    title: "Европейски лалугер",
    latinName: "Spermophilus citellus",
    status: "Уязвим",
    habitat: "Равнинни тревни местообитания, Дунавска равнина, Тракийска низина, Софийско и Подбалкански полета",
    threats: "Разораване на пасища, пестициди, опожаряване, загуба на безлесни местообитания",
    description:
      "Малък дневно активен гризач, който живее в колонии. Ключов компонент в храненето на царския орел и ловния сокол. Според Червената книга на БАН 30% от колониите са изчезнали между 1950 и 1990 г., а IUCN го повиши до „Застрашен“ през 2024 г.",
    image: "public/images/animals/european-ground-squirrel.jpg",
    detailHref: "#/animals/european-ground-squirrel",
    modelSrc: "public/models/animals/european-ground-squirrel.glb",
    spotlight: "EuropeanGroundSquirrelSpotlight",
  },
  {
    title: "Дива котка",
    latinName: "Felis silvestris",
    status: "Застрашен",
    habitat: "Стари широколистни и смесени гори във всички планини до ~1500–1600 м, мозаечно в равнините",
    threats: "Хибридизация с подивели домашни котки, интензивни сечи в стари гори, прегазване, ловни примки",
    description:
      "Единственият див представител на семейство Котки в България. Според Червената книга на БАН популацията е около 4 000 индивида. Българската популация е една от двете най-генетично чисти в Европа (наред с Карпатите), а най-едрите екземпляри се срещат в Странджа.",
    image: "public/images/animals/wildcat.jpg",
    detailHref: "#/animals/wildcat",
    modelSrc: "public/models/animals/wildcat.glb",
    spotlight: "WildcatSpotlight",
  },
  {
    title: "Видра",
    latinName: "Lutra lutra",
    status: "Уязвим",
    habitat: "Реки, езера, влажни зони и Черноморското крайбрежие, от равнините до 1 500 м н.в.",
    threats: "Замърсяване на водите, унищожаване на крайречни биотопи, прегазване, конфликти с рибовъди",
    description:
      "Полуводен хищник, индикатор за чисти водни екосистеми. Според Червената книга на БАН популацията е 1 300–1 500 индивида (2007 г.), като най-плътната популация е в Югоизточна България, Странджа и Бургаските езера.",
    image: "public/images/animals/eurasian-otter.jpg",
    detailHref: "#/animals/eurasian-otter",
    modelSrc: "public/models/animals/eurasian-otter.glb",
    spotlight: "EurasianOtterSpotlight",
  },
  {
    title: "Тюлен монах",
    latinName: "Monachus monachus",
    status: "Изчезнал от България",
    habitat: "Скалисти крайбрежни пещери по цялото Българско Черноморие (исторически)",
    threats: "Преследване от рибари, безпокойство от туризъм, замърсяване на морето, прилов в мрежи",
    description:
      "Един от най-редките морски бозайници в света и най-големият хищник, обитавал някога Черно море. Изчезнал от българските води през втората половина на 20 век. Последното убежище е било нос Калиакра. Глобалната популация е около 700 индивида (IUCN, 2023).",
    image: "public/images/animals/monk-seal.jpg",
    detailHref: "#/animals/monk-seal",
    modelSrc: "public/models/animals/monk-seal.glb",
    spotlight: "MonkSealSpotlight",
  },
  {
    title: "Египетски лешояд",
    latinName: "Neophron percnopterus",
    status: "Критично застрашен",
    habitat: "Скални райони в Източни Родопи и Сакар; отворени ландшафти с пасища (200–1500 м)",
    threats: "Отрови, токови удари, загуба на хранителна база, безпокойство, незаконно ловене по миграционния път",
    description:
      "Най-малкият европейски лешояд и единственият прелетен. В България остават по-малко от 30 двойки, концентрирани в Източни Родопи. Известен с интелигентното поведение, използва камъни за разчупване на яйца. Зимува в Сахел.",
    image: "public/images/animals/egyptian-vulture.jpg",
    detailHref: "#/animals/egyptian-vulture",
    modelSrc: "public/models/animals/egyptian-vulture.glb",
    spotlight: "EgyptianVultureSpotlight",
  },
  {
    title: "Брадат лешояд",
    latinName: "Gypaetus barbatus",
    status: "Изчезнал",
    habitat: "Високопланински скални райони и клисури, Стара планина, Рила, Пирин, Родопи (исторически)",
    threats: "Преследване в миналото, отрови, намалена хранителна база, токови удари",
    description:
      "Единственият лешояд в света, който се храни почти изключително с кости. Изчезнал като гнездящ вид в България през 60-те години. Реинтродукционна програма е в ход в Централен Балкан и Източни Родопи с участието на Зелени Балкани и Vulture Conservation Foundation.",
    image: "public/images/animals/bearded-vulture.jpg",
    detailHref: "#/animals/bearded-vulture",
    modelSrc: "public/models/animals/bearded-vulture.glb",
    spotlight: "BeardedVultureSpotlight",
  },
  {
    title: "Царски орел",
    latinName: "Aquila heliaca",
    status: "Критично застрашен",
    habitat: "Открити пасищни ландшафти с разпръснати стари дървета, Сакар, Дервент, Странджа, Източни Родопи",
    threats: "Токови удари, отрови, спад на лалугера, загуба на гнездови дървета, безпокойство",
    description:
      "Един от най-редките гнездящи орли в Европа. В България гнездят около 30 двойки, около 70% от които в Югоизточна България. Тясно свързан с лалугера, основната му храна. Известен с характерните бели „епилети“ на раменете.",
    image: "public/images/animals/imperial-eagle.jpg",
    detailHref: "#/animals/imperial-eagle",
    modelSrc: "public/models/animals/imperial-eagle.glb",
    spotlight: "ImperialEagleSpotlight",
  },
  {
    title: "Шипоопашата костенурка",
    latinName: "Testudo hermanni",
    status: "Застрашен",
    habitat: "Сухи открити местности, дъбови гори, храсталаци, Източни Родопи, Сакар, Странджа, Кресна, до 1000 м н.в.",
    threats: "Незаконно събиране, пожари, прегазване, разоравани пасища, фрагментация",
    description:
      "Една от двете сухоземни костенурки в България. Отличава се с твърд рогов шип в края на опашката. Може да живее до 100 години. Около 50 000 индивида в страната, концентрирани в Южна България. Защитена по закон, притежанието и търговията са забранени.",
    image: "public/images/animals/hermanns-tortoise.jpg",
    detailHref: "#/animals/hermanns-tortoise",
    modelSrc: "public/models/animals/hermanns-tortoise.glb",
    spotlight: "HermannsTortoiseSpotlight",
  },
  {
    title: "Шипобедрена костенурка",
    latinName: "Testudo graeca",
    status: "Застрашен",
    habitat: "Сухи каменисти терени",
    threats: "Незаконен трафик, загуба на местообитания",
    description:
      "Сродна с шипоопашатата костенурка. Различава се по шиповете на бедрата.",
  },
  {
    title: "Леопардов смок",
    latinName: "Zamenis situla",
    status: "Застрашен",
    habitat: "Скални райони, храсталаци",
    threats: "Унищожаване от хора поради страх, загуба на местообитания",
    description:
      "Една от най-красивите европейски змии. Безопасна за човека.",
  },
  {
    title: "Главоч",
    latinName: "Cottus gobio",
    status: "Уязвим",
    habitat: "Чисти планински реки",
    threats: "Замърсяване, ВЕЦ-ове, изменение на климата",
    description:
      "Малка дънна риба, индикатор за чисти бързотечащи води.",
  },
  {
    title: "Лалугерова невестулка",
    latinName: "Mustela eversmanii",
    status: "Критично застрашен",
    habitat: "Степи и пасища",
    threats: "Изчезване на лалугера (основна плячка)",
    description:
      "Хищник, тясно свързан с лалугера. Изключително рядък в България.",
  },
  {
    title: "Голям нощник",
    latinName: "Myotis myotis",
    status: "Застрашен",
    habitat: "Пещери, тавани на стари сгради",
    threats: "Безпокойство в пещерите, употреба на пестициди",
    description:
      "Един от най-големите европейски прилепи. Хибернира в пещери в големи колонии.",
  },
  {
    title: "Вълк",
    latinName: "Canis lupus",
    status: "Уязвим",
    habitat: "Планински гори, Стара планина, Рила, Пирин, Родопите",
    threats: "Преследване, конфликти с животновъдство, фрагментация на местообитанията",
    description:
      "Най-големият див хищник в България след кафявата мечка. Българската популация е около 1000 – 1200 индивида, концентрирани в планинските райони. Живее в семейни групи (глутници) и играе ключова роля като върховен хищник.",
  },
];

const ANIMALS_DATA = ANIMALS_RAW.map((a, i) => ({
  ...a,
  id: i + 1,
  reverse: i % 2 === 1,
  statusColor: STATUS_COLORS[a.status] || "#8B2C2C",
}));

// Първите 10 имат пълни детайлни страници и parallax секции
const ANIMALS_MAIN = ANIMALS_DATA.slice(0, 10);
// Последните 5 се показват на /animals/more като прости карти
const ANIMALS_EXTRA = ANIMALS_DATA.slice(10);
window.ANIMALS_EXTRA = ANIMALS_EXTRA;
window.ANIMALS_STATUS_COLORS = STATUS_COLORS;

const ANIMALS_RRD = window.ReactRouterDOM || {};
const AnimalsLink =
  ANIMALS_RRD.Link ||
  ((props) =>
    React.createElement("a", { ...props, href: props.to }, props.children));

function Animals() {
  return (
    <div style={{ backgroundColor: "#1a2e1a" }}>
      <ParallaxScrollSection
        items={ANIMALS_MAIN}
        pageTitle="Застрашени животни на България"
        pageSubtitle="15 вида, които се борят за оцеляването си"
      />

      {/* CTA, Още застрашени видове */}
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
            Има още видове, които се нуждаят от защита
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
            Костенурки, змии, риби, прилепи и хищници, част от Червената
            книга на България, които често остават в сянка.
          </p>

          <AnimalsLink
            to="/animals/more"
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
            <span>Още застрашени видове</span>
            <span style={{ fontSize: "1.25rem", lineHeight: 1 }}>→</span>
          </AnimalsLink>
        </div>
      </section>
    </div>
  );
}

window.Animals = Animals;
