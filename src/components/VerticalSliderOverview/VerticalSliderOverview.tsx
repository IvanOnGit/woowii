import { useState } from "react";
import React from "react";
import { Avatar, 
  CloseButton, 
  images, 
  IntroCommentsAndMessageButton, 
  IntroCommentsAndMessageText, 
  IntroCommentsAndMessageTextUserComment, 
  Overlay, 
  Popup, 
  SlideItem, 
  SliderContainer, 
  TextArea, 
  UserInfo, 
  users } from "./styles";


const VerticalSliderOverview: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  return (
    <SliderContainer>
      {users.map((user, index) => (
        <SlideItem key={index}>
            <Avatar src={images[index % images.length]} alt="User Avatar" />
            <IntroCommentsAndMessageText>
                <UserInfo>
                    <h2>{user.id}</h2>
                    <p>{user.time}</p>
                </UserInfo>
                <IntroCommentsAndMessageTextUserComment>
                    <p>Hola Jose, muchas gracias por tu feedback. Quisiera preguntarte si... </p>
                </IntroCommentsAndMessageTextUserComment>
            </IntroCommentsAndMessageText>
            <IntroCommentsAndMessageButton onClick={() => {
                setSelectedUser(user.id);
                setShowPopup(true);
                }}>Contacto</IntroCommentsAndMessageButton>
        </SlideItem>
      ))}
      {showPopup && selectedUser && (
        <Overlay onClick={() => setShowPopup(false)}>
          <Popup onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setShowPopup(false)}>×</CloseButton>
            <h3>Contacto con {selectedUser}</h3>
            <TextArea placeholder="Escribe tu mensaje aquí..."></TextArea>
          </Popup>
        </Overlay>
      )}
    </SliderContainer>
  );
};

export default VerticalSliderOverview;