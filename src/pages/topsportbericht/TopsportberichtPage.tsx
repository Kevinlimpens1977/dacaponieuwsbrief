import { useState } from 'react';
import './TopsportberichtPage.css';

// Firebase Storage public URLs
const STORAGE_BASE =
    'https://firebasestorage.googleapis.com/v0/b/dacapo-toolbox.firebasestorage.app/o/nieuwsbriefdocumenten%2F';
const MEDIA_SUFFIX = '?alt=media';

const VIDEO_URL = `${STORAGE_BASE}IkSpeelNietAlleen.mp4${MEDIA_SUFFIX}`;
const PDF_URL = `${STORAGE_BASE}Topsportleerling%20en%20AI.pdf${MEDIA_SUFFIX}`;
const IMAGE_URL = `${STORAGE_BASE}infographic.jpg${MEDIA_SUFFIX}`;

type ModalType = 'video' | 'pdf' | 'image' | null;

export default function TopsportberichtPage() {
    const [activeModal, setActiveModal] = useState<ModalType>(null);

    const closeModal = () => setActiveModal(null);

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
                    <button
                        type="button"
                        className="topsportThumb"
                        id="btn-uitleg-video"
                        onClick={() => setActiveModal('video')}
                    >
                        <div className="topsportThumbIcon">
                            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <polygon points="5 3 19 12 5 21 5 3" />
                            </svg>
                        </div>
                        <span className="topsportThumbLabel">Uitleg video</span>
                    </button>

                    <button
                        type="button"
                        className="topsportThumb"
                        id="btn-diapresentatie"
                        onClick={() => setActiveModal('pdf')}
                    >
                        <div className="topsportThumbIcon">
                            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                                <line x1="8" y1="21" x2="16" y2="21" />
                                <line x1="12" y1="17" x2="12" y2="21" />
                            </svg>
                        </div>
                        <span className="topsportThumbLabel">Diapresentatie</span>
                    </button>

                    <button
                        type="button"
                        className="topsportThumb"
                        id="btn-infographic"
                        onClick={() => setActiveModal('image')}
                    >
                        <div className="topsportThumbIcon">
                            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="20" x2="18" y2="10" />
                                <line x1="12" y1="20" x2="12" y2="4" />
                                <line x1="6" y1="20" x2="6" y2="14" />
                            </svg>
                        </div>
                        <span className="topsportThumbLabel">Infographic</span>
                    </button>
                </div>

                {/* Descriptive text */}
                <p className="topsportDescription">
                    Dit zijn voorbeelden hoe ik niet achter raak door generatieve AI,
                    ik leer niet uit 1 bron (Boek) maar laat mijn bronnen automatisch
                    genereren en klaar zetten...
                </p>
            </div>

            {/* ======================== */}
            {/* MODALS                   */}
            {/* ======================== */}

            {/* VIDEO MODAL — autoplay, sound on, fullscreen */}
            {activeModal === 'video' && (
                <div className="modalOverlay" onClick={closeModal}>
                    <div className="modalContent modalVideo" onClick={(e) => e.stopPropagation()}>
                        <button
                            type="button"
                            className="modalClose"
                            onClick={closeModal}
                            aria-label="Sluiten"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                        <video
                            className="modalVideoPlayer"
                            src={VIDEO_URL}
                            autoPlay
                            controls
                            playsInline
                        />
                    </div>
                </div>
            )}

            {/* PDF MODAL — diapresentatie in iframe */}
            {activeModal === 'pdf' && (
                <div className="modalOverlay" onClick={closeModal}>
                    <div className="modalContent modalPdf" onClick={(e) => e.stopPropagation()}>
                        <button
                            type="button"
                            className="modalClose"
                            onClick={closeModal}
                            aria-label="Sluiten"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                        <iframe
                            className="modalPdfViewer"
                            src={PDF_URL}
                            title="Topsportleerling en AI — Diapresentatie"
                        />
                    </div>
                </div>
            )}

            {/* IMAGE MODAL — infographic met kruisje */}
            {activeModal === 'image' && (
                <div className="modalOverlay" onClick={closeModal}>
                    <div className="modalContent modalImage" onClick={(e) => e.stopPropagation()}>
                        <button
                            type="button"
                            className="modalClose"
                            onClick={closeModal}
                            aria-label="Sluiten"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                        <img
                            className="modalImageView"
                            src={IMAGE_URL}
                            alt="Infographic — Generatieve AI voor topsportleerling"
                        />
                    </div>
                </div>
            )}
        </div>
    );
}
