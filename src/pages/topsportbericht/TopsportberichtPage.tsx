import './TopsportberichtPage.css';

export default function TopsportberichtPage() {
    return (
        <div className="topsportPage">
            {/* Subtle football pitch background */}
            <div className="pitchBg" aria-hidden="true">
                <div className="pitch">
                    <div className="pitchCenterLine" />
                    <div className="pitchCenterCircle" />
                    <div className="pitchCenterDot" />
                    <div className="pitchPenaltyLeft" />
                    <div className="pitchPenaltyRight" />
                    <div className="pitchGoalLeft" />
                    <div className="pitchGoalRight" />
                    <div className="pitchPenaltyDotLeft" />
                    <div className="pitchPenaltyDotRight" />
                    <div className="pitchCorner pitchCornerTL" />
                    <div className="pitchCorner pitchCornerTR" />
                    <div className="pitchCorner pitchCornerBL" />
                    <div className="pitchCorner pitchCornerBR" />
                </div>
            </div>

            {/* Content overlay */}
            <div className="topsportContent">
                {/* Headline */}
                <h1 className="topsportHeadline">
                    Informatie wat generatieve AI voor deze topsportleerling elke dag betekent
                </h1>

                {/* Three thumbnail buttons */}
                <div className="topsportActions">
                    <a
                        href="#"
                        className="topsportThumb"
                        id="btn-uitleg-video"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="topsportThumbIcon">
                            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="5 3 19 12 5 21 5 3" />
                            </svg>
                        </div>
                        <span className="topsportThumbLabel">Uitleg video</span>
                    </a>

                    <a
                        href="#"
                        className="topsportThumb"
                        id="btn-diapresentatie"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="topsportThumbIcon">
                            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                <line x1="8" y1="21" x2="16" y2="21" />
                                <line x1="12" y1="17" x2="12" y2="21" />
                            </svg>
                        </div>
                        <span className="topsportThumbLabel">Diapresentatie</span>
                    </a>

                    <a
                        href="#"
                        className="topsportThumb"
                        id="btn-infographic"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="topsportThumbIcon">
                            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="20" x2="18" y2="10" />
                                <line x1="12" y1="20" x2="12" y2="4" />
                                <line x1="6" y1="20" x2="6" y2="14" />
                            </svg>
                        </div>
                        <span className="topsportThumbLabel">Infographic</span>
                    </a>
                </div>

                {/* Descriptive text */}
                <p className="topsportDescription">
                    Dit zijn voorbeelden hoe ik niet achter raak door generatieve AI,
                    ik leer niet uit 1 bron (Boek) maar laat mijn bronnen automatisch
                    genereren en klaar zetten...
                </p>
            </div>
        </div>
    );
}
