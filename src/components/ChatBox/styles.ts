import styled from "styled-components";
import { createGlobalStyle, keyframes } from "styled-components";

export const AppContainer = styled.div`
  min-height: 100vh;
`
export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

export const slideIn = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

export const lightenBackground = keyframes`
  0% { filter: brightness(0);}
  100% { filter: brightness(1); }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`;

export const Background = styled.div<{ lighten: boolean }>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  filter: brightness(0);
  background-color: ${({ lighten }) => (lighten ? "white" : "black")};
  animation: ${({ lighten }) => (lighten ? lightenBackground : "none")} 4s ease-in-out forwards;
`;

export const Popup = styled.div<{ disappear?: boolean; slide?: boolean; image: string }>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${({ disappear, slide }) =>
    disappear ? fadeOut : slide ? slideIn : fadeIn} 1.5s forwards;
`;

export const Button = styled.button`
  padding: 15px 25px;
  font-size: 18px;
  font-weight: 700;
  background: #8FFF00;
  border: none;
  margin: 280px -300px 0 0;
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content:center;
  gap: 10px;
`;

export const ChatButton = styled.button`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  background-color: #2563eb;
  color: white;
  padding: 1rem;
  border-radius: 9999px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transition: background-color 0.2s;

  &:hover {
    background-color: #1d4ed8;
  }
`;

export const ChatContainer = styled.div`
  position: fixed;
  bottom: 9rem;
  left: 3.5rem;
  width: 20rem;
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;

export const ChatHeader = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h3`
  font-size: 1.563rem;
  font-weight: 600;
`;

export const CloseButton = styled.button`
  color: #6b7280;
  &:hover {
    color: #374151;
  }
`;

export const MessagesContainer = styled.div`
  height: 24rem;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MessageWrapper = styled.div<{ sender: 'user' | 'system' }>`
  display: flex;
  justify-content: ${props => props.sender === 'user' ? 'flex-end' : 'flex-start'};
`;

export const MessageBubble = styled.div<{ sender: 'user' | 'system' }>`
  max-width: 80%;
  padding: 0.75rem;
  border-radius: 0.5rem;
  background-color: ${props => props.sender === 'user' ? '#2563eb' : '#f3f4f6'};
  color: ${props => props.sender === 'user' ? 'white' : '#1f2937'};
`;

export const InputContainer = styled.div`
  padding: 1rem;
  border-top: 0.063rem solid #e5e7eb;
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Input = styled.input`
  flex: 1;
  padding: 0.5rem 0.75rem;
  border: 0.063rem solid #e5e7eb;
  border-radius: 0.375rem;
  outline: none;
  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 0.125rem rgba(59, 130, 246, 0.2);
  }
`;

export const SendButton = styled.button`
  background-color: #2563eb;
  color: white;
  padding: 0.5rem;
  border-radius: 0.375rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;
  &:hover {
    background-color: #1d4ed8;
  }
`;

export const TypingIndicator = styled(MessageBubble)`
  background-color: #f3f4f6;
  color: #1f2937;
`;

export const TypingDots = styled.span`
  @keyframes pulse {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 0.8; }
  }
  animation: pulse 1.4s infinite;
`;