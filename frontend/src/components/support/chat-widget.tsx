import React from 'react';
import { 
  Button, 
  Card, 
  CardBody, 
  CardFooter, 
  CardHeader, 
  Input, 
  Avatar 
} from '@heroui/react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

export const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [chatHistory, setChatHistory] = React.useState<{
    id: number;
    sender: 'user' | 'bot' | 'agent';
    message: string;
    timestamp: Date;
  }[]>([
    {
      id: 1,
      sender: 'bot',
      message: 'Hello! How can I help you today with your computer hardware needs?',
      timestamp: new Date(),
    }
  ]);
  const [isTyping, setIsTyping] = React.useState(false);
  const chatEndRef = React.useRef<HTMLDivElement>(null);
  
  // Scroll to bottom when chat history changes
  React.useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory]);
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    // Add user message to chat
    const userMessage = {
      id: chatHistory.length + 1,
      sender: 'user' as const,
      message: message.trim(),
      timestamp: new Date(),
    };
    
    setChatHistory(prev => [...prev, userMessage]);
    setMessage('');
    
    // Simulate bot thinking
    setIsTyping(true);
    
    // Simulate bot response after a delay
    setTimeout(() => {
      setIsTyping(false);
      
      // Check for specific keywords to simulate intelligence
      let botResponse = '';
      const lowerMessage = message.toLowerCase();
      
      if (lowerMessage.includes('return') || lowerMessage.includes('refund')) {
        botResponse = "Our return policy allows returns within 30 days of purchase. Would you like me to guide you through the return process?";
      } else if (lowerMessage.includes('shipping') || lowerMessage.includes('delivery')) {
        botResponse = "Standard shipping takes 3-5 business days. Express shipping (1-2 days) is available for an additional fee. Would you like to know more about our shipping options?";
      } else if (lowerMessage.includes('warranty')) {
        botResponse = "Most of our products come with a manufacturer's warranty ranging from 1-3 years. For specific warranty information on a product, please provide the product name or model number.";
      } else if (lowerMessage.includes('price') || lowerMessage.includes('discount') || lowerMessage.includes('coupon')) {
        botResponse = "We regularly offer discounts and promotional coupons. You can use code TECH20 for 20% off your next purchase (some restrictions apply).";
      } else if (lowerMessage.includes('help') || lowerMessage.includes('support')) {
        botResponse = "I'd be happy to connect you with one of our human support agents. Please wait a moment while I transfer you.";
        
        // Simulate agent joining after a delay
        setTimeout(() => {
          setChatHistory(prev => [
            ...prev,
            {
              id: prev.length + 2,
              sender: 'agent',
              message: "Hi, I'm Alex from customer support. I've reviewed your conversation. How can I assist you further with your inquiry?",
              timestamp: new Date(),
            }
          ]);
        }, 3000);
      } else if (lowerMessage.includes('compatible') || lowerMessage.includes('work with')) {
        botResponse = "For compatibility questions, please provide the specific components you're inquiring about, and I can check if they work together.";
      } else {
        botResponse = "Thank you for your message. How else can I assist you with your computer hardware needs today?";
      }
      
      // Add bot response
      setChatHistory(prev => [
        ...prev,
        {
          id: prev.length + 1,
          sender: 'bot',
          message: botResponse,
          timestamp: new Date(),
        }
      ]);
    }, 1500);
  };
  
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  return (
    <>
      {/* Chat button */}
      <Button
        isIconOnly
        color="primary"
        className="fixed bottom-4 right-4 z-50 rounded-full shadow-lg"
        size="lg"
        onPress={toggleChat}
      >
        <Icon icon={isOpen ? "lucide:x" : "lucide:message-circle"} width={24} />
      </Button>
      
      {/* Chat window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-20 right-4 z-50 w-80 md:w-96"
        >
          <Card className="shadow-xl border border-default-200 h-[500px] flex flex-col">
            <CardHeader className="bg-primary text-white">
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-2">
                  <Avatar
                    src="https://img.heroui.chat/image/avatar?w=32&h=32&u=supportagent"
                    size="sm"
                  />
                  <div>
                    <p className="text-sm font-medium">TechGear Support</p>
                    <p className="text-xs opacity-80">Online | Quick Response</p>
                  </div>
                </div>
                <Button
                  isIconOnly
                  variant="light"
                  size="sm"
                  onPress={toggleChat}
                  className="text-white"
                >
                  <Icon icon="lucide:minimize-2" width={18} />
                </Button>
              </div>
            </CardHeader>
            
            <CardBody className="overflow-y-auto flex-grow p-4 space-y-4">
              {chatHistory.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.sender === 'user'
                        ? 'bg-primary text-white rounded-tr-none'
                        : msg.sender === 'bot'
                        ? 'bg-default-100 text-default-900 rounded-tl-none'
                        : 'bg-success-100 text-success-900 rounded-tl-none'
                    }`}
                  >
                    {msg.sender !== 'user' && (
                      <div className="flex items-center gap-2 mb-1">
                        <Avatar
                          src={msg.sender === 'bot' 
                            ? "https://img.heroui.chat/image/avatar?w=24&h=24&u=bot123" 
                            : "https://img.heroui.chat/image/avatar?w=24&h=24&u=agent456"}
                          size="sm"
                          className="w-5 h-5"
                        />
                        <span className="text-xs font-medium">
                          {msg.sender === 'bot' ? 'TechBot' : 'Alex (Support)'}
                        </span>
                      </div>
                    )}
                    <p className="text-sm">{msg.message}</p>
                    <p className="text-xs opacity-70 text-right mt-1">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-default-100 p-3 rounded-lg max-w-[80%] rounded-tl-none">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 rounded-full bg-default-400 animate-bounce"></div>
                      <div className="w-2 h-2 rounded-full bg-default-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 rounded-full bg-default-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={chatEndRef} />
            </CardBody>
            
            <CardFooter className="border-t border-default-200 p-2">
              <div className="flex w-full gap-2">
                <Input
                  placeholder="Type a message..."
                  value={message}
                  onValueChange={setMessage}
                  onKeyDown={handleKeyPress}
                  endContent={
                    <Button
                      isIconOnly
                      color="primary"
                      size="sm"
                      variant="light"
                      onPress={handleSendMessage}
                      isDisabled={!message.trim()}
                    >
                      <Icon icon="lucide:send" width={16} />
                    </Button>
                  }
                />
              </div>
            </CardFooter>
          </Card>
        </motion.div>
      )}
    </>
  );
};