import { Smile, Image, Calendar, Plus, Clock } from "lucide-react";
import { NewPostContainer, Avatar, InputContainer, Actions, PublishButton, Container } from "./styles";

export default function CompanyNewPost() {
    return (
        <>
        <Container>
            <Avatar>
                <img src="/images/avatarCompany1.svg" alt="Company Avatar" />
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