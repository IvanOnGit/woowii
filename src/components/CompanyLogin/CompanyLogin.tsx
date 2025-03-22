// import { useNavigate } from "react-router-dom";
// import { Button, ButtonsContainer, Container, Input, LoginForm } from "./styles";

// export default function CompanyLogin() {
//     const navigate = useNavigate();

//     return (
//         <>
//         <Container>
//             <LoginForm>
//                 <h2>Login</h2>
//                 <Input type="email" placeholder="Email" required />
//                     <Input type="password" placeholder="Password" required />
//                 <ButtonsContainer>
//                     <Button type="submit">Sign In</Button>
//                     <Button type="submit" onClick={() => navigate(-1)}>Go Back</Button>
//                 </ButtonsContainer>
//             </LoginForm>
//         </Container>
//         </>
//   );
// }

import { Link } from "react-router-dom";
import { BtnLinksSocialStyled, 
    Buttons, 
    ContainerBackCompanyFormPage, 
    ContainerFormRegisterCompany, 
    ContainerRegisterCompanyFormPage, 
    ContainerTextBelowLogo, 
    FixedImageLogo, 
    FormRegisterCompany, 
    ImageBackCompanyForm, 
    IniciaSesionStyled, 
    LinkAccountButtons, 
    LogoGoo, 
    LogoLin, 
    SemiCircleStyled, 
    StyledSpan, 
    TextBelowLogo, 
    Wrapper } from "./styles";

export default function CompanyLogin() {

    return (
        <Wrapper>
        <ContainerRegisterCompanyFormPage>
            <ContainerBackCompanyFormPage>
                <ImageBackCompanyForm src="/images/BackCompanyFormModified.svg" />
            </ContainerBackCompanyFormPage>
            <SemiCircleStyled>
                <FixedImageLogo src="/images/LogoBlue.svg" />
                <ContainerTextBelowLogo>
                    <TextBelowLogo>INGRESO EN SIMPLES PASOS</TextBelowLogo>
                    <LinkAccountButtons>
                        <Buttons><LogoGoo src="/images/LogoGoogle.svg" />Login con Google</Buttons>
                        <Buttons><LogoLin src="/images/LinkeLogo.svg" />Login con LinkedIn</Buttons>
                    </LinkAccountButtons>
                </ContainerTextBelowLogo>
                <StyledSpan></StyledSpan>
                <ContainerFormRegisterCompany>
                    <FormRegisterCompany>
                        <label htmlFor="mail">Usuario</label>
                        <input type="email" name="mail" id="mail" placeholder="Introduzca su email " required/>
                        <label htmlFor="pass">Contraseña</label>
                        <input type="password" name="pass" id="pass" placeholder="Elija contraseña " required/>
                        <Link to={`/CompanyFirstGift`}>
                            <input type="submit" value="INGRESAR" />
                        </Link>
                    </FormRegisterCompany>
                    <IniciaSesionStyled>
                        ¿Aún no eres parte?
                        <Link to={'/RegisterCompanyForm'}>
                            <p id="inicio">Crear Cuenta</p>
                        </Link>  
                    </IniciaSesionStyled>
                </ContainerFormRegisterCompany>
                <BtnLinksSocialStyled>
                     <img id="one" src="/images/linkedinGrey.svg" alt="Linkedin icon" />
                     <img id="two" src="/images/instagramgrey.svg" alt="Instagram icon" />
                     <img id="three" src="/images/twittergrey.svg" alt="Twitter icon" />
                     <img id="four" src="/images/spotifygrey.svg" alt="Spotify icon" />
                 </BtnLinksSocialStyled>
            </SemiCircleStyled>
        </ContainerRegisterCompanyFormPage>
    </Wrapper>
  );
}