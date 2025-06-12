import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
    BtnLinksSocialStyled, Buttons, DivContainerStyled, FormRegistroUsuario, 
    IniciaSesionStyled, LinkAccountButtons, LogoAndTitleWrapper, 
    LogoRegistroUsuarioStyled, SemiCircleStyled, StyledSpan, 
    TextoMiniInfoRegUser, TxtInfoRegistroUsuarioStyled, WrapperImage 
} from "./styles";

export default function RegistroUsuarioForm() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [fullname, setFullname] = useState(""); // Cambié 'username' a 'fullname'
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("https://api.woowiihr.com/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, fullname, password }), // Ahora se envía fullname
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.message);
                return;
            }

            navigate("/UserLogin");
        } catch (err) {
            console.error(err);
            setError("Error al conectar con el servidor");
        }
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
                        <Buttons>Conectar con Google</Buttons>
                        <Buttons>Conectar con LinkedIn</Buttons>
                    </LinkAccountButtons>
                    <StyledSpan></StyledSpan>
                    <FormRegistroUsuario onSubmit={handleRegister}>
                        {error && <p style={{ color: "red" }}>{error}</p>}
                        <label htmlFor="mail">EMAIL DE USUARIO</label>
                        <input 
                            type="email" 
                            name="mail" 
                            id="mail" 
                            placeholder="Introduzca su email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required 
                        />
                        <label htmlFor="fullname">NOMBRE COMPLETO</label>
                        <input 
                            type="text" 
                            name="fullname"  // Cambié 'name' a 'fullname'
                            id="fullname" 
                            placeholder="Introduzca nombre y apellido"
                            value={fullname} // Ahora se guarda 'fullname' en lugar de 'username'
                            onChange={(e) => setFullname(e.target.value)} // Actualizado para 'fullname'
                            required 
                        />
                        <label htmlFor="pass">CONTRASEÑA</label>
                        <input 
                            type="password" 
                            name="pass" 
                            id="pass" 
                            placeholder="Elija contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                        <input type="submit" value="CREAR CUENTA" />
                    </FormRegistroUsuario>
                    <IniciaSesionStyled>
                        ¿Ya tienes cuenta? <a onClick={() => navigate("/UserLogin")}>Inicia sesión</a>
                    </IniciaSesionStyled>
                    <BtnLinksSocialStyled>
                        <img id="one" src="/images/linkedinGrey.svg" alt="Linkedin icon" />
                        <img id="two" src="/images/instagramgrey.svg" alt="Instagram icon" />
                        <img id="three" src="/images/twittergrey.svg" alt="Twitter icon" />
                        <img id="four" src="/images/spotifygrey.svg" alt="Spotify icon" />
                    </BtnLinksSocialStyled>
                    <TextoMiniInfoRegUser>
                        By tapping “Create account” or “Sign in”, you agree to our Terms. Learn how we process your data in our Privacy Policy and Cookies Policy.
                    </TextoMiniInfoRegUser>
                </DivContainerStyled>
            </SemiCircleStyled>
        </>
    );
}