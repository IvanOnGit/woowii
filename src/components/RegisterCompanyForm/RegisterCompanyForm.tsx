// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   BtnLinksSocialStyled,
//   Buttons,
//   DivContainerStyled,
//   FormRegistroUsuario,
//   IniciaSesionStyled,
//   LinkAccountButtons,
//   LogoAndTitleWrapper,
//   LogoRegistroUsuarioStyled,
//   SemiCircleStyled,
//   StyledSpan,
//   TextoMiniInfoRegUser,
//   TxtInfoRegistroUsuarioStyled,
//   WrapperImage,
// } from "./styles";

// export default function RegisterCompanyForm() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     company_first_email: "",
//     company_fullname: "",
//     password: "",
//   });
//   const [error, setError] = useState<string | null>(null);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(null);
  
//     console.log("Datos enviados:", formData); // 👀 Verifica qué se está enviando
  
//     try {
//       const response = await fetch("http://localhost:3000/api/auth/register-company", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
  
//       const data = await response.json();
  
//       console.log("Respuesta del servidor:", data); // 👀 Revisa la respuesta del backend
  
//       if (response.ok) {
//         navigate("/CompanyLogin");
//       } else {
//         setError(data.message || "Error en el registro");
//       }
//     } catch (err) {
//         setError((err as Error).message || "Error en el servidor, intenta nuevamente");
//       }
//   };

//   return (
//     <>
//       <WrapperImage />
//       <SemiCircleStyled>
//         <DivContainerStyled>
//           <LogoAndTitleWrapper>
//             <LogoRegistroUsuarioStyled src="/images/LogoBlue.svg" />
//             <TxtInfoRegistroUsuarioStyled>
//               CREA UN USUARIO O INGRESA A TU CUENTA
//             </TxtInfoRegistroUsuarioStyled>
//           </LogoAndTitleWrapper>

//           <LinkAccountButtons>
//             <Buttons onClick={() => navigate("/SegundaPagina")}>
//               Conectar con Google
//             </Buttons>
//             <Buttons onClick={() => navigate("/SegundaPagina")}>
//               Conectar con LinkedIn
//             </Buttons>
//           </LinkAccountButtons>

//           <StyledSpan />

//           <FormRegistroUsuario onSubmit={handleSubmit}>
//             <label htmlFor="company_first_email">EMAIL DE USUARIO</label>
//             <input
//               type="email"
//               name="company_first_email"
//               id="company_first_email"
//               placeholder="Introduzca su email"
//               value={formData.company_first_email}
//               onChange={handleChange}
//               required
//             />

//             <label htmlFor="company_fullname">NOMBRE COMPLETO</label>
//             <input
//               type="text"
//               name="company_fullname"
//               id="company_fullname"
//               placeholder="Introduzca nombre y apellido"
//               value={formData.company_fullname}
//               onChange={handleChange}
//               required
//             />

//             <label htmlFor="password">CONTRASEÑA</label>
//             <input
//               type="password"
//               name="password"
//               id="password"
//               placeholder="Elija contraseña"
//               value={formData.password}
//               onChange={handleChange}
//               required
//             />

//             <input type="submit" value="CREAR CUENTA" />
//           </FormRegistroUsuario>

//           {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}

//           <IniciaSesionStyled>
//             ¿Ya tienes cuenta?{" "}
//             <a id="inicio" onClick={() => navigate("/CompanyLogin")}>
//               Inicia sesión
//             </a>
//           </IniciaSesionStyled>

//           <BtnLinksSocialStyled>
//             <img id="one" src="/images/linkedinGrey.svg" alt="Linkedin icon" />
//             <img id="two" src="/images/instagramgrey.svg" alt="Instagram icon" />
//             <img id="three" src="/images/twittergrey.svg" alt="Twitter icon" />
//             <img id="four" src="/images/spotifygrey.svg" alt="Spotify icon" />
//           </BtnLinksSocialStyled>

//           <TextoMiniInfoRegUser>
//             By tapping “Create account" or “Sign in”, you agree to our Terms. Learn how we process
//             your data in our Privacy Policy and Cookies Policy.
//           </TextoMiniInfoRegUser>
//         </DivContainerStyled>
//       </SemiCircleStyled>
//     </>
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

import useMediaQuery from "./CustomHook";

export default function RegisterCompanyForm() {
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
                </SemiCircleStyled>}
                <ContainerAlteredFormByInnerWidth>
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
                </ContainerAlteredFormByInnerWidth>
            </ContainerRegisterCompanyFormPage>
        </Wrapper>
  )
}