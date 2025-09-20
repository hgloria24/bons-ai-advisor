import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your BonsAI guide. I'll help you find the perfect bonsai tree. What's your experience level with bonsai care?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "Based on your response, I'd recommend starting with a Ficus or Jade plant bonsai. They're very forgiving for beginners and have beautiful, easy-to-maintain foliage. Would you like to know more about these options?",
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <section id="chat" className="py-20 bg-gradient-peaceful">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-zen-green mb-4">
            Chat with Our BonsAI Expert
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get personalized recommendations based on your space, experience, and preferences
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-peaceful border-zen-green-light">
            <CardHeader>
              <CardTitle className="text-zen-green flex items-center gap-2">
                🤖 BonsAI Assistant
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-80 mb-4 p-4 bg-zen-green-light/20 rounded-lg">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          message.isUser
                            ? "bg-zen-green text-white"
                            : "bg-white border border-zen-green-light text-zen-green"
                        }`}
                      >
                        {message.text}
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Ask me about bonsai care, species, or get recommendations..."
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  className="border-zen-green-light focus:border-zen-green"
                />
                <Button 
                  onClick={handleSendMessage}
                  className="bg-zen-green hover:bg-zen-brown"
                >
                  Send
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ChatInterface;