import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';
import { AIIcon } from './AIIcon';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

type Message = {
    role: 'user' | 'assistant';
    content: string;
};

export function AIWidget() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage: Message = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: input }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.detail || 'Network response was not ok');
            }

            const data = await response.json();
            const botMessage: Message = { role: 'assistant', content: data.response };
            setMessages(prev => [...prev, botMessage]);
        } catch (error: any) {
            console.error('Error:', error);
            const errorMessage: Message = {
                role: 'assistant',
                content: error.message || 'Sorry, I encountered an error. Please try again.'
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-4 right-4 z-50 font-mono">
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        className="h-24 w-24 rounded-full shadow-[0_0_50px_rgba(0,255,65,0.3)] bg-black hover:bg-zinc-900 border-4 border-[#00ff41]/60 group transition-all duration-300 hover:scale-110 active:scale-95"
                        size="icon"
                    >
                        <AIIcon className="h-20 w-20 transition-transform duration-300" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 sm:w-96 h-[500px] p-0 mr-4 mb-2 border-2 border-[#00ff41]/30 bg-black backdrop-blur-3xl shadow-[0_0_40px_rgba(0,255,65,0.15)]" align="end" side="top">
                    <div className="flex flex-col h-full overflow-hidden rounded-md border border-[#00ff41]/10">
                        {/* Terminal Header */}
                        <div className="p-4 bg-black border-b border-[#00ff41]/30 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="h-8 w-8 bg-[#00ff41]/10 rounded border border-[#00ff41]/40 flex items-center justify-center p-1.5">
                                    <AIIcon className="w-full h-full" />
                                </div>
                                <div>
                                    <h2 className="text-[#00ff41] font-bold tracking-tighter uppercase text-sm">Terminal Assistant v2.0</h2>
                                    <div className="flex items-center gap-1.5 mt-0.5">
                                        <div className="h-1.5 w-1.5 rounded-full bg-[#00ff41] animate-pulse"></div>
                                        <span className="text-[9px] uppercase tracking-[0.2em] text-[#00ff41]/80 font-bold">System: Online</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
                                <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                            </div>
                        </div>

                        <ScrollArea className="flex-1 p-4 bg-black">
                            {messages.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full text-[#00ff41]/40 text-[11px] text-center py-20 px-6 uppercase tracking-widest">
                                    <div className="w-16 h-16 mb-6 opacity-30 grayscale invert">
                                        <AIIcon />
                                    </div>
                                    <p className="max-w-[240px] leading-relaxed border border-[#00ff41]/20 p-4 rounded bg-[#00ff41]/5 text-left">
                                        {'>'} System initialized...<br />
                                        {'>'} Ready for input...<br />
                                        {'>'} How may I assist you, admin?
                                    </p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {messages.map((msg, index) => (
                                        <div
                                            key={index}
                                            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                        >
                                            <div
                                                className={`flex items-start max-w-[90%] text-xs font-mono p-3 rounded-sm border ${msg.role === 'user'
                                                    ? 'bg-[#00ff41]/10 border-[#00ff41]/40 text-[#00ff41]'
                                                    : 'bg-zinc-900/50 border-white/10 text-zinc-300'
                                                    }`}
                                            >
                                                <div className="mr-2 opacity-50 select-none text-[10px] w-12 font-bold">{msg.role === 'user' ? 'USER:' : 'BOT:'}</div>
                                                <p className="whitespace-pre-wrap leading-relaxed flex-1">{msg.content}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                            {isLoading && (
                                <div className="flex items-center space-x-2 text-[#00ff41] p-3 animate-pulse text-[10px] mt-4">
                                    <span>_ PROCESSING REQUEST...</span>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </ScrollArea>

                        <form onSubmit={handleSubmit} className="p-3 border-t border-[#00ff41]/30 bg-black">
                            <div className="flex space-x-2 items-center">
                                <span className="text-[#00ff41] font-bold text-sm">$</span>
                                <Input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Execute command..."
                                    className="flex-1 h-10 text-xs bg-transparent border-none focus-visible:ring-0 text-[#00ff41] placeholder:text-[#00ff41]/20 font-mono caret-[#00ff41]"
                                    disabled={isLoading}
                                    autoFocus
                                />
                                <Button
                                    type="submit"
                                    size="sm"
                                    className="h-8 w-8 p-0 bg-[#00ff41] hover:bg-[#00ff41]/80 text-black shadow-[0_0_15px_rgba(0,255,65,0.4)]"
                                    disabled={!input.trim() || isLoading}
                                >
                                    <Send className="h-3.5 w-3.5" />
                                    <span className="sr-only">EXECUTE</span>
                                </Button>
                            </div>
                        </form>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    );
}
