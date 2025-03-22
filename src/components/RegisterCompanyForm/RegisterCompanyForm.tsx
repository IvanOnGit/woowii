// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { BtnLinksSocialStyled, Buttons, DivContainerStyled, FormRegistroUsuario, IniciaSesionStyled, LinkAccountButtons, LogoAndTitleWrapper, LogoRegistroUsuarioStyled, SemiCircleStyled, StyledSpan, TextoMiniInfoRegUser, TxtInfoRegistroUsuarioStyled, WrapperImage} from "./styles";

// export default function RegisterCompanyForm() {
//   const navigate = useNavigate();
  
  
//   const handleSocialLogin = () => {
//     navigate("/SegundaPagina");
//     }
    
//   const handleCompanyLogin = () => {
//     navigate("/CompanyLogin");
//     }

//     return (
//         <>
//             <WrapperImage />
//         <SemiCircleStyled>
//                 <DivContainerStyled>
//                     <LogoAndTitleWrapper>
//                         <LogoRegistroUsuarioStyled src="/images/LogoBlue.svg" />
//                         <TxtInfoRegistroUsuarioStyled>
//                             CREA UN USUARIO O INGRESA A TU CUENTA
//                         </TxtInfoRegistroUsuarioStyled>
//                     </LogoAndTitleWrapper>
//                     <LinkAccountButtons>
//                         <Buttons onClick={handleSocialLogin}>Conectar con Google</Buttons>
//                         <Buttons onClick={handleSocialLogin}>Conectar con LinkedIn</Buttons>
//                     </LinkAccountButtons>
//                     <StyledSpan></StyledSpan>
//                     <FormRegistroUsuario>
//                         <label htmlFor="mail">EMAIL DE USUARIO</label>
//                         <input type="email" name="mail" id="mail" placeholder="Introduzca su email " />
//                         <label htmlFor="name">NOMBRE COMPLETO</label>
//                         <input type="text" name="name" id="name" placeholder="Introduzca nombre y apellido" />
//                         <label htmlFor="pass">CONTRASEÑA</label>
//                         <input type="password" name="pass" id="pass" placeholder="Elija contraseña " />
//                         <Link to={`/CompanyFirstGift`}>
//                             <input type="submit" value="CREAR CUENTA" />
//                         </Link>
//                     </FormRegistroUsuario>
//                     <IniciaSesionStyled>
//                         ¿Ya tienes cuenta?  <a id="inicio" onClick={handleCompanyLogin}>Inicia sesión</a>
//                     </IniciaSesionStyled>
//                     <BtnLinksSocialStyled>
//                         <img id="one" src="/images/linkedinGrey.svg" alt="Linkedin icon" />
//                         <img id="two" src="/images/instagramgrey.svg" alt="Instagram icon" />
//                         <img id="three" src="/images/twittergrey.svg" alt="Twitter icon" />
//                         <img id="four" src="/images/spotifygrey.svg" alt="Spotify icon" />
//                     </BtnLinksSocialStyled>
//                     <TextoMiniInfoRegUser>
//                         By tapping “Create account or “Sign in”, you agree to our Terms. Learn how we process your data in our Privacy Policy and Cookies Policy
//                     </TextoMiniInfoRegUser>
//             </DivContainerStyled>
//             </SemiCircleStyled>
//         </>
//   )
// }

import { Link } from "react-router-dom";
import { BtnLinksSocialStyled, Buttons, 
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

export default function RegisterCompanyForm() {

    return (
        <Wrapper>
            <ContainerRegisterCompanyFormPage>
                <ContainerBackCompanyFormPage>
                    <ImageBackCompanyForm src="/images/BackCompanyFormModified.svg" />
                </ContainerBackCompanyFormPage>
                <SemiCircleStyled>
                    <FixedImageLogo src="/images/LogoBlue.svg" />
                    <ContainerTextBelowLogo>
                        <TextBelowLogo>CREA UN USUARIO O INGRESA A TU CUENTA</TextBelowLogo>
                        <LinkAccountButtons>
                            <Buttons><LogoGoo src="/images/LogoGoogle.svg" />Conectar con Google</Buttons>
                            <Buttons><LogoLin src="/images/LinkeLogo.svg" />Conectar con LinkedIn</Buttons>
                        </LinkAccountButtons>
                    </ContainerTextBelowLogo>
                    <StyledSpan></StyledSpan>
                    <ContainerFormRegisterCompany>
                        <FormRegisterCompany>
                            <label htmlFor="mail">Email profesional</label>
                            <input type="email" name="mail" id="mail" placeholder="Introduzca su email " />
                            <label htmlFor="name">Nombre de administrador/a</label>
                            <input type="text" name="name" id="name" placeholder="Introduzca nombre y apellido" />
                            <label htmlFor="pass">Contraseña</label>
                            <input type="password" name="pass" id="pass" placeholder="Elija contraseña " />
                            <Link to={`/CompanyFirstGift`}>
                                <input type="submit" value="CREAR CUENTA" />
                            </Link>
                        </FormRegisterCompany>
                        <IniciaSesionStyled>
                            ¿Ya tienes cuenta?
                            <Link to={'/CompanyLogin'}>
                                <p id="inicio">Inicia sesión</p>
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
  )
}