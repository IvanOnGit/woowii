import { ButtonNextSecondPage, ContainerWrapper, DivContainerButton, DivContainerLogo,   ImgFondoSecondPage,   LogoSecondPageStyled, PersonalityText, StyledLink } from "./styles"
import { Play } from "lucide-react"


export default function PersonalityTest() {
  return (
      <>
          <ContainerWrapper>
            <DivContainerLogo>
                <LogoSecondPageStyled src="/images/GreenLogoDemo.svg" />
            </DivContainerLogo>
              <ImgFondoSecondPage src="/images/PersonalityTestBackgroundLine.png" alt="Fondo Wiibuck" />
              <PersonalityText>
                  <h1>Test de personalidad</h1>
                  <p>Vamos a realizar un breve Test para conocerte mejor y ofrecerte las mejores oportunidades</p>
                  <img src="/images/QuestionMarks.png" alt="" />
                  <img src="/images/GreenFade.png" alt="" />
              </PersonalityText>
            <DivContainerButton>
                <StyledLink to={"/PersonalityTestQuestions"}>
                    <ButtonNextSecondPage>
                          ¡Comencemos!
                    </ButtonNextSecondPage>
                </StyledLink>
            </DivContainerButton>
        </ContainerWrapper>
    </>
  )
}
