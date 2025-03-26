import React, { useState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';
import { chatResponses } from '../../data/chatResponses';
import { ChatContainer, ChatHeader, CloseButton, Input, InputContainer, InputWrapper, MessageBubble, MessagesContainer, MessageWrapper, SendButton, Title, TypingDots, TypingIndicator } from './styles';

type ChatBoxProps = {
  onClose: () => void;
}

type Message = {
  id: number;
  text: string;
  sender: 'user' | 'system';
}

const ChatBox: React.FC<ChatBoxProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: '¡Hola! Soy Woody ¿En qué puedo ayudarte hoy?', sender: 'system' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getRandomResponse = (responses: string[]): string => {
    return responses[Math.floor(Math.random() * responses.length)];
  };

  const getSmartResponse = (message: string): { response: string; followUp?: string } => {
    const lowercaseMsg = message.toLowerCase();
    
    for (const category of Object.values(chatResponses)) {
      if (category.patterns.some(pattern => lowercaseMsg.includes(pattern))) {
        return {
          response: getRandomResponse(category.responses),
          followUp: category.followUp ? getRandomResponse(category.followUp) : undefined
        };
      }
    }
    
    return {
      response: getRandomResponse(chatResponses.default.responses),
      followUp: getRandomResponse(chatResponses.default.followUp || [])
    };
  };

  const handleSend = () => {
    if (newMessage.trim()) {
      const userMessage: Message = {
        id: messages.length + 1,
        text: newMessage,
        sender: 'user',
      };
      
      setMessages(prev => [...prev, userMessage]);
      setNewMessage('');
      setIsTyping(true);
      
      setTimeout(() => {
        const { response, followUp } = getSmartResponse(newMessage);
        
        const systemMessages: Message[] = [
          {
            id: messages.length + 2,
            text: response,
            sender: 'system',
          }
        ];

        if (followUp) {
          setTimeout(() => {
            setMessages(prev => [...prev, {
              id: prev.length + 1,
              text: followUp,
              sender: 'system',
            }]);
          }, 1000);
        }

        setMessages(prev => [...prev, ...systemMessages]);
        setIsTyping(false);
      }, Math.random() * 1000 + 500);
    }
  };

  return (
    <ChatContainer>
      <ChatHeader>
        <Title>Chat</Title>
        <CloseButton onClick={onClose}>×</CloseButton>
      </ChatHeader>
      
      <MessagesContainer>
        {messages.map((message) => (
          <MessageWrapper key={message.id} sender={message.sender}>
            <MessageBubble sender={message.sender}>
              {message.text}
            </MessageBubble>
          </MessageWrapper>
        ))}
        {isTyping && (
          <MessageWrapper sender="system">
            <TypingIndicator sender="system">
              <TypingDots>...</TypingDots>
            </TypingIndicator>
          </MessageWrapper>
        )}
        <div ref={messagesEndRef} />
      </MessagesContainer>
      
      <InputContainer>
        <InputWrapper>
          <Input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Escribe un mensaje..."
          />
          <SendButton onClick={handleSend}>
            <Send size={20} />
          </SendButton>
        </InputWrapper>
      </InputContainer>
    </ChatContainer>
  );
};

export default ChatBox;