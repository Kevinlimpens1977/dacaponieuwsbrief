// ========================
// RESOURCES DATA ARRAY (with accent colors)
// ========================
import pacoImage from '../../assets/pacoai.jpg';
const resources = [
  {
    title: 'Hoe werken taalmodellen zoals ChatGPT?',
    description: 'Uitleg over hoe taalmodellen werken, met aandacht voor patroonherkenning, tokens en waarom antwoorden kunnen verschillen. Je leert hoe AI tekst genereert op basis van statistische patronen.',
    href: 'https://www.youtube.com/watch?v=iOaJZ3oP2T4',
    gradient: 'linear-gradient(135deg, #E0E7FF 0%, #EEF2FF 100%)',
    accent: '#6366f1',
  },
  {
    title: 'Prompt engineering, simpel uitgelegd',
    description: 'Leer waarom context zo belangrijk is: taak, rol/persona, doelgroep, verwachtingen en vorm bepalen samen de kwaliteit van AI-output. Ontdek de sleutels tot betere resultaten.',
    href: 'https://www.youtube.com/watch?v=Z_-dW77zuwg',
    gradient: 'linear-gradient(135deg, #F3E8FF 0%, #FAF5FF 100%)',
    accent: '#a855f7',
  },
  {
    title: 'Oefenen met goede prompts — Say What You See',
    description: 'Interactieve ervaring waarin je oefent met beschrijven wat je ziet en ontdekt wat een goede prompt nodig heeft. Perfect om te begrijpen hoe AI interpreteert.',
    href: 'https://artsandculture.google.com/experiment/say-what-you-see/jwG3m7wQShZngw?hl=en',
    gradient: 'linear-gradient(135deg, #CCFBF1 0%, #E6FFFA 100%)',
    accent: '#14b8a6',
  },
  {
    title: 'Zelf ervaren hoe AI patronen herkent — Quick, Draw!',
    description: 'Een speelse tool om te zien hoe snel een model objecten herkent. Leuk om zelf te proberen of met leerlingen te gebruiken. Ontdek de kracht van machine learning.',
    href: 'https://quickdraw.withgoogle.com/',
    gradient: 'linear-gradient(135deg, #D1FAE5 0%, #ECFDF5 100%)',
    accent: '#22c55e',
  },
  {
    title: 'ChatGPT & toetsing in het onderwijs',
    description: 'Sinds de komst van ChatGPT staat ons toetssysteem op zijn kop: wat betekent AI voor leren en beoordelen? Ontdek de implicaties en mogelijke oplossingen.',
    href: 'https://www.youtube.com/watch?v=mvVIJx8DqPQ',
    gradient: 'linear-gradient(135deg, #FEF3C7 0%, #FFFBEB 100%)',
    accent: '#f59e0b',
  },
  {
    title: 'Extra verdieping over AI in de praktijk',
    description: 'Aanvullende inzichten over de inzet van AI en wat dit betekent voor onderwijs en maatschappij. Verdiep je in ethische vraagstukken en toekomstperspectieven.',
    href: 'https://www.youtube.com/watch?v=Z4v5cHTzLN8',
    gradient: 'linear-gradient(135deg, #E0F2FE 0%, #F0F9FF 100%)',
    accent: '#0ea5e9',
  },
];

// ========================
// RESOURCE TILE COMPONENT
// ========================
interface ResourceTileProps {
  title: string;
  description: string;
  href: string;
  gradient: string;
  accent: string;
  index: number;
}

function ResourceTile({ title, description, href, gradient, accent, index }: ResourceTileProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="tileClickable"
      style={{ '--tile-accent': accent } as React.CSSProperties}
    >
      {/* Pastel header with title */}
      <div className="tileHeader" style={{ background: gradient }}>
        <h3>{title}</h3>
      </div>

      {/* Body Grid: Number + Divider + Content */}
      <div className="tileBodyGrid">
        <span className="tileNumber">{index}</span>
        <div className="tileDivider" />
        <div className="tileContent">
          <p className="tileDesc">{description}</p>
        </div>
      </div>

      {/* Footer with CTA - always bottom-right */}
      <div className="tileFooter">
        <span className="tileCTA">
          Bekijk <span className="arrow">→</span>
        </span>
      </div>
    </a>
  );
}

// ========================
// MAIN PAGE COMPONENT
// ========================
export default function AiLandingPage() {
  return (
    <div className="pageBackground">
      {/* Back to landing page */}
      <div className="backButtonBar">
        <a href="/" className="backButton" id="back-to-home">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Terug
        </a>
      </div>

      {/* STARTPUNT CTA CARD - Main anchor */}
      <section className="lvoSection pageWrap">
        <a
          href="https://maken.wikiwijs.nl/220630"
          target="_blank"
          rel="noreferrer"
          className="startCard"
        >
          <div className="lvoInner">
            <div className="lvoPaco">
              <img src={pacoImage} alt="Paco AI" />
            </div>
            <div className="lvoContent">
              <h2 className="lvoTitle">De AI Introductie van LVO</h2>
              <p>Via deze link nemen we je stap voor stap mee in de nieuwe technologische revolutie.</p>
              <span className="ctaBtn ctaFocus">
                Start hier
                <span>→</span>
              </span>
            </div>
          </div>
        </a>
      </section>

      {/* HERO SECTION - Split Glass Pills */}
      <header className="heroSection heroSplit">
        <div className="heroCard heroTitle heroBorderGlow">
          <h1>Generatieve AI in het onderwijs — ontdekken, begrijpen en slim gebruiken</h1>
        </div>
        <div className="heroCard heroIntro">
          <p>
            De ontwikkelingen rondom AI gaan razendsnel en hebben directe impact op ons onderwijs:
            van leren en toetsen tot creatief werken en kritisch denken. Wil je zelf beter begrijpen
            wat generatieve AI is, hoe het werkt én hoe je het verantwoord inzet? Start dan hier:
          </p>
        </div>
      </header>

      <main className="pageWrap mainContent">

        {/* SECTION PILL */}
        <div className="sectionPill">
          <span>Los te bekijken onderwerpen, klik hier beneden</span>
        </div>

        {/* SECTION INTRO */}
        <p className="sectionIntro">
          Kies een onderwerp en ontdek stap voor stap hoe generatieve AI werkt.
        </p>

        {/* TILE GRID */}
        <div className="tileGrid">
          {resources.map((r, i) => (
            <ResourceTile
              key={i}
              index={i + 1}
              title={r.title}
              description={r.description}
              href={r.href}
              gradient={r.gradient}
              accent={r.accent}
            />
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="footerBlock">
        <p>
          Doe er je voordeel mee! Gebruik deze bronnen om zelf te experimenteren,
          lessen te verrijken en samen met leerlingen kritisch te kijken naar wat AI kan — en wat (nog) niet.
        </p>
      </footer>
    </div>
  );
}
