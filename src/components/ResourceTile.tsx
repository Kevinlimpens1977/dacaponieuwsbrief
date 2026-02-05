import React from 'react';

interface ResourceTileProps {
    title: string;
    description: string;
    href: string;
    gradient: string;
}

const ResourceTile: React.FC<ResourceTileProps> = ({ title, description, href, gradient }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-[260px] rounded-xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200 cursor-pointer group"
        style={{
            backgroundColor: 'var(--bg-elev-2, #FFFFFF)',
            border: '1px solid var(--border-default, #CBD5E1)',
        }}
    >
        {/* Image Placeholder */}
        <div
            className="h-[120px] w-full relative"
            style={{ background: gradient }}
        >
            <div
                className="absolute top-3 right-3 p-1.5 rounded-md backdrop-blur-sm group-hover:scale-110 transition-transform"
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    color: 'var(--primary, #2860E0)',
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
            </div>
        </div>

        {/* Content */}
        <div className="p-4 h-[140px] flex flex-col">
            <h3
                className="text-sm font-semibold mb-2 leading-tight line-clamp-2"
                style={{ color: 'var(--primary, #2860E0)' }}
            >
                {title}
            </h3>
            <p
                className="text-xs leading-relaxed line-clamp-2"
                style={{ color: 'var(--text-secondary, #4B5563)' }}
            >
                {description}
            </p>
        </div>
    </a>
);

export default ResourceTile;
