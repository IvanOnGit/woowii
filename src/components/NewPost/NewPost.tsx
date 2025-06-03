import { Smile, Image, Calendar, Plus, Clock } from "lucide-react";
import { NewPostContainer, Avatar, InputContainer, Actions, PublishButton, Container } from "./styles";
import { useEffect, useState } from "react";

export default function NewPost() {
    const userId = localStorage.getItem("userId");
    const [userData, setUserData] = useState<{ username: string; profile_picture: string } | null>(null);

    useEffect(() => {
          const fetchUserData = async () => {
              if (!userId) return;
    
              const response = await fetch(`http://ec2-52-47-198-73.eu-west-3.compute.amazonaws.com:3000/api/auth/get-user?userId=${userId}`);
              const data = await response.json();
              console.log(data);  // Verifica qué datos estás recibiendo
              setUserData(data);
          };
    
          fetchUserData();
        }, [userId]);

    return (
        <>
        <Container>
            <Avatar>
            <img src={userData?.profile_picture || "/images/Avatar1.png"} alt="Avatar" />
            </Avatar>
            <NewPostContainer>
                <InputContainer>
                    <input type="text" placeholder="Escribe una nueva historia..." />
                    <Actions>
                        <Smile size={20} />
                        <Image size={20} />
                        <Calendar size={20} />
                        <Plus size={20} />
                        <Clock size={20} />
                        <PublishButton>Publicar</PublishButton>
                    </Actions>
                </InputContainer>
            </NewPostContainer>
        </Container>
        </>
  );
}