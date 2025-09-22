import { ChatInterface } from "@/components/ChatInterface";

const AIChat = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">AI Chat Assistant</h1>
      <div className="max-w-4xl mx-auto">
        <ChatInterface />
      </div>
    </div>
  );
};

export default AIChat;
