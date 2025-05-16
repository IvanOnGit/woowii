import { Link } from "react-router-dom";
import { Button, CardsContainer, Container, LeftToRightCard, RightToLeftCard } from "./styles";


export default function InitSecond() {
  return (
    <>
        <Container>
            <img src="/images/OriginalLogo.svg" alt="" />
              <h1>Bienvenidos a la transformación de los recursos humanos.</h1>
            <CardsContainer>
                <LeftToRightCard><img src="/images/1.svg" alt="" /><p>Crea un perfil destacado</p></LeftToRightCard>
                <RightToLeftCard><img src="/images/2.svg" alt="" /><p>Cuenta tus historias únicas</p></RightToLeftCard>
                <LeftToRightCard><img src="/images/3.svg" alt="" /><p>Elabora un assessment de identidad</p></LeftToRightCard>
                <RightToLeftCard><img src="/images/4.svg" alt="" /><p>Comparte tu perfil y preparate para brillar</p></RightToLeftCard>
            </CardsContainer>
            <Link to={"/ChooseTalentCompany"}>
                <Button>¡Comencemos!</Button>
            </Link>
        </Container>
    </>
  )
}