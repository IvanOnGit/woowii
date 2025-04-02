// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Button, ButtonsContainer, Container, Input, LoginForm } from "./styles";

// export default function CompanyLogin() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState<string | null>(null);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     try {
//       const response = await fetch("http://localhost:3000/api/auth/login-company", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           company_first_email: email,
//           password,
//         }),
//       });
  
//       const data = await response.json();
  
//       if (response.status === 200) {
//         // Guarda el token y el id en localStorage
//         localStorage.setItem("companyToken", data.token);
//         localStorage.setItem("id", data.id);
        
//         console.log('id guardado en localStorage:', data.id);
  
//         // Verifica si company_username está presente
//         if (data.company_username) {
//           navigate("/CompanyHome");
//         } else {
//           navigate("/CompanyFirstGift");
//         }
//       } else {
//         setError(data.message); // Muestra el error en caso de credenciales inválidas
//       }
//     } catch (err) {
//       setError("Error al realizar el login.");
//       console.error(err);
//     }
//   };

//   return (
//     <Container>
//       <LoginForm onSubmit={handleSubmit}>
//         <h2>Login</h2>
//         <Input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <Input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         {error && <p style={{ color: "red" }}>{error}</p>} {/* Mostrar mensaje de error */}
//         <ButtonsContainer>
//           <Button type="submit">Sign In</Button>
//           <Button type="button" onClick={() => navigate(-1)}>
//             Go Back
//           </Button>
//         </ButtonsContainer>
//       </LoginForm>
//     </Container>
//   );
// }

import { Link } from "react-router-dom";
import { BtnLinksSocialStyled, 
    Buttons, 
    ContainerAlteredFormByInnerWidth, 
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
import useMediaQuery from "../RegisterCompanyForm/CustomHook";

export default function CompanyLogin() {
    const isTabletOrLarger = useMediaQuery("(min-width: 768px)");
    return (
        <Wrapper>
        <ContainerRegisterCompanyFormPage>
            <ContainerBackCompanyFormPage>
                <ImageBackCompanyForm src="/images/BackCompanyFormModified.svg" />
            </ContainerBackCompanyFormPage>
            {isTabletOrLarger &&<SemiCircleStyled>
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
            </SemiCircleStyled>}
            <ContainerAlteredFormByInnerWidth>
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
            </ContainerAlteredFormByInnerWidth>
        </ContainerRegisterCompanyFormPage>
    </Wrapper>
  );
}