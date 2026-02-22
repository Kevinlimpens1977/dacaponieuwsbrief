import './HomePage.css';

export default function HomePage() {
    return (
        <div className="pageBackground homePageBg">
            {/* Subtle AI grid pattern overlay */}
            <div className="homeAiGrid" aria-hidden="true" />

            {/* Hero Section — matches AiLandingPage heroSplit pattern */}
            <header className="heroSection heroSplit">
                <div className="heroCard heroTitle heroBorderGlow">
                    <h1>AI Nieuws &amp; Bronnen</h1>
                </div>
                <div className="heroCard heroIntro">
                    <p>
                        Verzamelplek voor AI-gerelateerd nieuws, nieuwsitems en bronnen
                        binnen DaCapo. Kies hieronder een onderwerp om te verkennen.
                    </p>
                </div>
            </header>

            <main className="pageWrap mainContent">
                {/* Section pill — uniform with AI page */}
                <div className="sectionPill">
                    <span>Kies een onderwerp</span>
                </div>

                {/* Two large buttons stacked */}
                <div className="homeCardStack">
                    <span className="homeNewBadge" aria-label="Nieuw">
                        NIEUW <span className="homeNewArrow">→</span>
                    </span>
                    <a
                        href="#/topsportbericht"
                        target="_blank"
                        rel="noreferrer"
                        className="homeNavCard homeNavCardNew"
                        id="btn-topsport"
                    >
                        <div className="homeNavCardInner">
                            <div className="homeNavIcon" aria-hidden="true">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                                    <path d="M2 12h20" />
                                </svg>
                            </div>
                            <div className="homeNavText">
                                <h3>Bericht van topsportleerling: nieuwsitem 26 februari 2026</h3>
                            </div>
                            <span className="homeNavArrow">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </span>
                        </div>
                    </a>

                    <a
                        href="#/ai-introductie"
                        target="_blank"
                        rel="noreferrer"
                        className="homeNavCard"
                        id="btn-ai-introductie"
                    >
                        <div className="homeNavCardInner">
                            <div className="homeNavIcon" aria-hidden="true">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                                    <path d="M2 17l10 5 10-5" />
                                    <path d="M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <div className="homeNavText">
                                <h3>AI introductie van LVO</h3>
                            </div>
                            <span className="homeNavArrow">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </span>
                        </div>
                    </a>
                </div>
            </main>

            {/* Footer — uniform with AI page */}
            <footer className="footerBlock">
                <p>
                    Gebruik deze verzamelpagina om snel de juiste AI-bronnen en nieuwsitems
                    te vinden.
                </p>
            </footer>
        </div>
    );
}
