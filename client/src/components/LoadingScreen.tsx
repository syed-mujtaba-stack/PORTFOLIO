import { useEffect, useState } from 'react';
import { Progress } from "@/components/ui/progress";

interface LoadingScreenProps {
    onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
    const [showName, setShowName] = useState(false);
    const [progress, setProgress] = useState(0);
    const [loadingText, setLoadingText] = useState("Initializing core systems...");
    const fullName = "Syed Mujtaba Abbas";

    const loadingStates = [
        "Initializing core systems...",
        "Loading assets...",
        "Connecting to mainframe...",
        "Establishing secure connection...",
        "Decrypting portfolio data...",
        "Launching interface..."
    ];

    useEffect(() => {
        // Start animation immediately
        setShowName(true);

        // Calculate total animation time based on name length + delay
        // 0.1s per letter * length + 0.5s initial delay + 5s hold time
        const nameAnimationTime = (fullName.length * 100) + 500;
        const holdTime = 4000; // Slightly reduced hold time for better pacing
        const totalTime = nameAnimationTime + holdTime;

        // Progress bar animation
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                // Calculate increment to reach 100% by totalTime
                // running every 50ms
                const increment = 100 / (totalTime / 50);
                return Math.min(prev + increment, 100);
            });
        }, 50);

        // Text rotation logic
        let textIndex = 0;
        const textInterval = setInterval(() => {
            textIndex = (textIndex + 1) % loadingStates.length;
            setLoadingText(loadingStates[textIndex]);
        }, totalTime / loadingStates.length);

        const timer = setTimeout(() => {
            clearInterval(interval);
            clearInterval(textInterval);
            setProgress(100);
            setTimeout(onComplete, 500); // Small delay before unmounting to show 100%
        }, totalTime);

        return () => {
            clearTimeout(timer);
            clearInterval(interval);
            clearInterval(textInterval);
        };
    }, [onComplete]);

    return (
        <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center p-4">
            <div className="text-center relative w-full max-w-lg">
                {/* Name Animation */}
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-8 flex justify-center overflow-hidden flex-wrap px-4 text-center">
                    {fullName.split('').map((char, index) => (
                        <span
                            key={index}
                            className={`inline-block transform transition-all duration-500 ${showName
                                ? 'translate-y-0 opacity-100'
                                : 'translate-y-full opacity-0'
                                }`}
                            style={{
                                transitionDelay: `${index * 100}ms`,
                                minWidth: char === ' ' ? '0.6em' : 'auto'
                            }}
                        >
                            <span className="gradient-text whitespace-pre">{char}</span>
                        </span>
                    ))}
                </h1>

                {/* Loading Indicators */}
                <div
                    className={`space-y-4 transition-opacity duration-1000 ${showName ? 'opacity-100 delay-[2000ms]' : 'opacity-0'
                        }`}
                >
                    {/* Progress Bar */}
                    <div className="relative pt-1">
                        <div className="flex mb-2 items-center justify-between">
                            <div>
                                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-electric-blue bg-electric-blue/10">
                                    System Status
                                </span>
                            </div>
                            <div className="text-right">
                                <span className="text-xs font-semibold inline-block text-electric-blue">
                                    {Math.round(progress)}%
                                </span>
                            </div>
                        </div>
                        <Progress value={progress} className="h-2 bg-gray-800" indicatorClassName="bg-gradient-to-r from-electric-blue to-neon-orange" />
                    </div>

                    {/* Dynamic Status Text */}
                    <div className="flex items-center justify-center gap-2 h-6">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <p className="text-muted-foreground text-sm font-mono min-w-[200px] text-left">
                            {loadingText}
                            <span className="animate-blink">_</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
