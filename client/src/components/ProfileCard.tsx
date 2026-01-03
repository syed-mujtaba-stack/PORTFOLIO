import { Github, Linkedin, Mail, Twitter, MapPin, Download } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import profilePicture from "@/assets/profile-picture.jpg";
import { downloadResumeAsPDF } from "@/utils/downloadResume";

export function ProfileCard() {
    return (
        <div className="relative group perspective-1000">
            {/* Animated Gradient Background Blob */}
            <div className="absolute -inset-1 bg-gradient-to-r from-electric-blue to-neon-orange rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

            <Card className="relative h-auto overflow-hidden border-muted/50 bg-card/80 backdrop-blur-md p-4 sm:p-6 flex flex-col items-center text-center hover:scale-[1.02] transition-transform duration-500 ease-out shadow-2xl">
                {/* Profile Image Container with Ring Animation */}
                <div className="relative mb-4 sm:mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-electric-blue to-purple-600 blur-md opacity-50 animate-pulse"></div>
                    <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full p-1 bg-gradient-to-br from-electric-blue via-transparent to-neon-orange">
                        <div className="w-full h-full rounded-full overflow-hidden border-4 border-background">
                            <img
                                src={profilePicture}
                                alt="Syed Mujtaba Abbas"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                    </div>
                    <div className="absolute bottom-2 right-2 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 border-2 border-background rounded-full animate-ping" />
                    <div className="absolute bottom-2 right-2 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 border-2 border-background rounded-full" />
                </div>

                {/* Content */}
                <div className="space-y-3 w-full">
                    <div className="space-y-1">
                        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            Syed Mujtaba Abbas
                        </h2>
                        <p className="text-electric-blue font-medium">Full Stack & AI Engineer</p>
                    </div>

                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>Pakistan</span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap justify-center gap-2 my-4">
                        <Badge variant="secondary" className="bg-electric-blue/10 text-electric-blue hover:bg-electric-blue/20 transition-colors">Typescript</Badge>
                        <Badge variant="secondary" className="bg-neon-orange/10 text-neon-orange hover:bg-neon-orange/20 transition-colors">Python</Badge>
                        <Badge variant="secondary" className="bg-purple-500/10 text-purple-500 hover:bg-purple-500/20 transition-colors">AI Agents</Badge>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center gap-3 pt-4 border-t border-border/50">
                        <Button variant="ghost" size="icon" className="hover:text-white hover:bg-white/10 rounded-full transition-all duration-300 hover:-translate-y-1" asChild>
                            <a href="https://github.com/syed-mujtaba-stack" target="_blank" rel="noopener noreferrer">
                                <Github className="w-5 h-5" />
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" className="hover:text-blue-400 hover:bg-blue-400/10 rounded-full transition-all duration-300 hover:-translate-y-1" asChild>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" className="hover:text-sky-400 hover:bg-sky-400/10 rounded-full transition-all duration-300 hover:-translate-y-1" asChild>
                            <a href="#" target="_blank" rel="noopener noreferrer">
                                <Twitter className="w-5 h-5" />
                            </a>
                        </Button>
                        <Button variant="ghost" size="icon" className="hover:text-red-400 hover:bg-red-400/10 rounded-full transition-all duration-300 hover:-translate-y-1" asChild>
                            <a href="mailto:abbasmjtaba125@gmail.com">
                                <Mail className="w-5 h-5" />
                            </a>
                        </Button>
                    </div>

                    <div className="pt-4 w-full">
                        <Button
                            onClick={downloadResumeAsPDF}
                            className="w-full bg-gradient-to-r from-electric-blue to-purple-600 hover:opacity-90 transition-opacity shadow-lg shadow-electric-blue/20"
                        >
                            Download CV <Download className="w-4 h-4 ml-2" />
                        </Button>
                    </div>
                </div>
            </Card>
        </div>
    );
}
