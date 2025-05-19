import { ButtonInit, ButtonNextSecondPage, ContainerAllMobile, ContainerButtonInit, ContainerImageQuestiosMobile, ContainerLogoNobile, ContainerTextBelowTitle, ContainerTitleQuestions, ContainerWrapper, DivContainerButton, DivContainerLogo,   ImgFondoSecondPage,   LogoMobile,   LogoSecondPageStyled, PersonalityText, StyledLink, TextBelowTitle, TitleQuestions } from "./styles"
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
                  <p>Vamos a realizar un breve Test <br /> para conocerte mejor y ofrecerte <br /> las mejores oportunidades</p>
                  <img src="/images/QuestionMarks.png" alt="" />
                  <img src="/images/GreenFade.png" alt="" />
              </PersonalityText>
            <DivContainerButton>
                <StyledLink to={"/PersonalityTestQuestions"}>
                    <ButtonNextSecondPage>
                          ¡Comencemos!
                          <Play />
                    </ButtonNextSecondPage>
                </StyledLink>
            </DivContainerButton>
        </ContainerWrapper>
        {/* ----------------------------------------mobile---------------------------------------------- */}
        <ContainerAllMobile>
          <ContainerLogoNobile>
            <LogoMobile src="/images/LogoGreen.svg" alt="Woowii Green Logo" />
          </ContainerLogoNobile>
          <ContainerTitleQuestions>
            <TitleQuestions>
              Test de personalidad
            </TitleQuestions>
          </ContainerTitleQuestions>
          <ContainerTextBelowTitle>
            <TextBelowTitle>
              Realicemos un breve Test para concerte mejor y ofrecerte las mejores oportunidades.
            </TextBelowTitle>
          </ContainerTextBelowTitle>
          <ContainerImageQuestiosMobile>
            <img src="/images/QuestionsMobile.svg" alt="Questions Mobile Image" />
          </ContainerImageQuestiosMobile>
          <ContainerButtonInit>
          <StyledLink to={"/PersonalityTestQuestions"}>
            <ButtonInit>
              ¡Comencemos!
            </ButtonInit>
            </StyledLink>
          </ContainerButtonInit>
        </ContainerAllMobile>
    </>
  )
}
