
import { useState } from "react";
import React from "react";
import { Avatar, 
  CardContact, 
  CloseButton, 
  ContentGrid, 
  images, 
  Overlay, 
  Popup, 
  SlideItem, 
  SliderContainer, 
  TextArea, 
  UserInfo, 
  UserName, 
  UserRole, 
  users } from "./styles";



  const VerticalSlider: React.FC = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedUser, setSelectedUser] = useState<string | null>(null);
    return (
      <SliderContainer>
        {users.map((user: { id: string; role: string; }, index: number) => (
          <SlideItem key={index}>
            <ContentGrid>
              <Avatar src={images[index % images.length]} alt="User Avatar" />
              <UserInfo>
                <UserName>{user.id}</UserName>
                <UserRole>{user.role}</UserRole>
              </UserInfo>
              <CardContact onClick={() => {
                  setSelectedUser(user.id);
                  setShowPopup(true);
                  }}>Contacto</CardContact>
            </ContentGrid>
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

export default VerticalSlider;
