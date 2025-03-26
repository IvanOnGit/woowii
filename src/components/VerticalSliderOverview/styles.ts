import styled from "styled-components";
import {keyframes} from "styled-components"

export const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Popup = styled.div`
  position: relative;
  width: 21.875rem;
  padding: 1.25rem;
  background: white;
  border-radius: 0.625rem;
  box-shadow: 0px 0.25rem 0.625rem rgba(0, 0, 0, 0.1);
  animation: ${slideIn} 0.5s forwards;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 0.625rem;
  right: 0.625rem;
  background: none;
  border: none;
  color: red;
  font-size: 1.25rem;
  cursor: pointer;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 6.25rem;
  margin-top: 0.625rem;
  padding: 0.625rem;
  border: 0.063rem solid #ccc;
  border-radius: 0.313rem;
  resize: none;
`;

export const SliderContainer = styled.div`
  width: 47vw;
  height: 85vh;
  overflow-y: auto;
  display: block;
  gap: 0.625rem;
  margin-top: 2.5rem;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SlideItem = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 49rem;
    height: 9.75rem;
    margin: auto;
    margin-top: 1.875rem;
    border-radius: 0.625rem;
    border: 0.125rem solid #000;
`;

export const Avatar = styled.img`
  width: 6.25rem;
  height: 6.25rem;
  margin: auto;
`;

export const IntroCommentsAndMessageText = styled.div`
    display: block;
`;
export const UserInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    margin-top: 1.875rem;
    min-width: 25rem;
    h2{
        color: #460BFF;
    }
`;

export const IntroCommentsAndMessageTextUserComment = styled.p`
    display: block;
    margin: auto;
    margin-top: 0.625rem;
    min-width: 31.25rem;
    font-size: 1.25rem;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
`;

export const IntroCommentsAndMessageButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5.25rem;
    height: 1.813rem;
    background: #460BFF;
    color: #FFF;
    margin: auto;
    font-size: 0.938rem;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    border-radius: 2.813rem;
    cursor: pointer;
    &:hover{
      background: #8FFF00;
      color: #000;
    }
`;

export const images = [
    "/images/Avatar1.png",
    "/images/Avatar2.png",
    "/images/Avatar3.png",
    "/images/Avatar4.png",
    "/images/Avatar5.png",
    "/images/Avatar6.png",
    "/images/Avatar7.png",
    "/images/Avatar8.png",
];
  
export const users = [
    { id: "User00124GF", time: "1 min ago",},
    { id: "User00245HG", time: "3 min ago",}, 
    { id: "User00378JK", time: "7 min ago",},
    { id: "User00489LM", time: "10 min ago",},
    { id: "User00567OP", time: "15 min ago",},
    { id: "User00678QR", time: "20 min ago",},
    { id: "User00789ST", time: "30 min ago",},
    { id: "User00890UV", time: "50 min ago",},
];