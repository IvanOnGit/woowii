import { useNavigate } from "react-router-dom";
import { BtnLinksSocialStyled, Buttons, DivContainerStyled, FormRegistroUsuario, IniciaSesionStyled, LinkAccountButtons, LogoAndTitleWrapper, LogoRegistroUsuarioStyled, SemiCircleStyled, StyledSpan, TextoMiniInfoRegUser, TxtInfoRegistroUsuarioStyled, WrapperImage} from "./styles";
import { useState } from "react";

export default function RegistroUsuarioForm() {
    const navigate = useNavigate();
  
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
  
    const handleRegister = async (e: { preventDefault: () => void; }) => {
      e.preventDefault();
  
      const userData = {
        username: name,
        email: email,
        password: password,
        skills: "JavaScript, Node.js",
        profile_picture: "https://example.com/avatar.jpg",
      };
  

      try {
        const response = await fetch("https://mock-server-f7mg.onrender.com/api/auth/register", { // Reemplaza con la URL del backend real que es http://localhost:3000/api/auth/register
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
  
        const data = await response.json();
  
        if (response.ok) {
          console.log("Usuario registrado exitosamente:", data);
          navigate("/UserLogin");
        } else {
          console.error("Error al registrar usuario:", data.message);
        }
      } catch (error) {
        console.error("Error de red:", error);
      }
    };
  
    const handleSocialLogin = () => {
      navigate("/UserFirstGift");
    };
  
    const handleUserLogin = () => {
      navigate("/UserLogin");
    };
  
    return (
      <>
        <WrapperImage />
        <SemiCircleStyled>
          <DivContainerStyled>
            <LogoAndTitleWrapper>
              <LogoRegistroUsuarioStyled src="/images/GreenLogoDemo.svg" />
              <TxtInfoRegistroUsuarioStyled>
                CREA UN USUARIO O INGRESA A TU CUENTA
              </TxtInfoRegistroUsuarioStyled>
            </LogoAndTitleWrapper>
            <LinkAccountButtons>
              <Buttons onClick={handleSocialLogin}>Conectar con Google</Buttons>
              <Buttons onClick={handleSocialLogin}>Conectar con LinkedIn</Buttons>
            </LinkAccountButtons>
            <StyledSpan></StyledSpan>
            <FormRegistroUsuario onSubmit={handleRegister}>
              <label htmlFor="mail">EMAIL DE USUARIO</label>
              <input
                type="email"
                name="mail"
                id="mail"
                placeholder="Introduzca su email "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="name">NOMBRE COMPLETO</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Introduzca nombre y apellido"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="pass">CONTRASEÑA</label>
              <input
                type="password"
                name="pass"
                id="pass"
                placeholder="Elija contraseña "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input type="submit" value="CREAR CUENTA" />
            </FormRegistroUsuario>
            <IniciaSesionStyled>
              ¿Ya tienes cuenta?  <a onClick={handleUserLogin}>Inicia sesión</a>
            </IniciaSesionStyled>
            <BtnLinksSocialStyled>
              <img id="one" src="/images/linkedinGrey.svg" alt="Linkedin icon" />
              <img id="two" src="/images/instagramgrey.svg" alt="Instagram icon" />
              <img id="three" src="/images/twittergrey.svg" alt="Twitter icon" />
              <img id="four" src="/images/spotifygrey.svg" alt="Spotify icon" />
            </BtnLinksSocialStyled>
            <TextoMiniInfoRegUser>
              By tapping “Create account or “Sign in”, you agree to our Terms. Learn how we process your data in our Privacy Policy and Cookies Policy
            </TextoMiniInfoRegUser>
          </DivContainerStyled>
        </SemiCircleStyled>
      </>
    );
  }