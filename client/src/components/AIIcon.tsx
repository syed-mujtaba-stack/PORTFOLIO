import React from 'react';

export function AIIcon({ className = "" }: { className?: string }) {
    return (
        <div className={`relative flex items-center justify-center ${className}`}>
            {/* Container for the SVG to ensure proper sizing */}
            <svg
                viewBox="0 0 100 100"
                className="w-full h-full drop-shadow-[0_0_15px_rgba(0,255,65,0.6)]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Inner Pulsing Core - Terminal Green */}
                <circle cx="50" cy="50" r="14" className="fill-[#00ff41] animate-pulse">
                    <animate
                        attributeName="r"
                        values="12;18;12"
                        dur="2s"
                        repeatCount="indefinite"
                    />
                </circle>

                {/* Outer Ring 1 - Vertical Rotation (Matrix Green) */}
                <ellipse
                    cx="50"
                    cy="50"
                    rx="35"
                    ry="15"
                    className="stroke-[#00ff41]"
                    strokeWidth="8"
                    strokeDasharray="8 8"
                >
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 50 50"
                        to="360 50 50"
                        dur="4s"
                        repeatCount="indefinite"
                    />
                </ellipse>

                {/* Outer Ring 2 - Horizontal Rotation (Matrix Green) */}
                <ellipse
                    cx="50"
                    cy="50"
                    rx="15"
                    ry="35"
                    className="stroke-[#00ff41]/60"
                    strokeWidth="8"
                    strokeDasharray="8 8"
                >
                    <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="360 50 50"
                        to="0 50 50"
                        dur="6s"
                        repeatCount="indefinite"
                    />
                </ellipse>

                {/* Core Detail - Terminal Symbols (Simulated) */}
                <g className="animate-pulse">
                    <rect x="46" y="32" width="8" height="2" className="fill-white" />
                    <rect x="66" y="48" width="2" height="8" className="fill-white" />
                    <rect x="46" y="66" width="8" height="2" className="fill-white" />
                    <rect x="32" y="48" width="2" height="8" className="fill-white" />
                </g>

                {/* Falling Bits (Small squares instead of dots) */}
                <rect width="3" height="3" fill="#00ff41" className="animate-float">
                    <animateMotion
                        path="M 50,50 m -40,0 a 40,40 0 1,0 80,0 a 40,40 0 1,0 -80,0"
                        dur="5s"
                        repeatCount="indefinite"
                    />
                </rect>
                <rect width="2" height="4" fill="#fff" className="animate-float">
                    <animateMotion
                        path="M 50,50 m 0,-40 a 40,40 0 1,0 0,80 a 40,40 0 1,0 0,-80"
                        dur="7s"
                        repeatCount="indefinite"
                    />
                </rect>
            </svg>

            {/* Backdrop glow - Neon Green */}
            <div className="absolute inset-0 bg-[#00ff41]/20 rounded-full blur-2xl -z-10 animate-pulse"></div>
        </div>
    );
}
