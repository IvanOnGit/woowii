import styled from "styled-components";

const WidthMeasurementIphone12Pro = 24.375;
const WidthMeasurementDesktop = 90;
export const mobile = `@media(min-width:${WidthMeasurementIphone12Pro}rem)`
export const desktop = `@media(min-width:${WidthMeasurementDesktop}rem)`

export const DivContainerStyled = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    flex-direction: column;
    align-items: center;
`

export const LogoAndTitleWrapper = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    align-items: center;
`
export const LogoRegistroUsuarioStyled = styled.img`
    width: 50%;
    height: 80%;
    ${desktop}{
        width: 50%;
    }
`;
export const TxtInfoRegistroUsuarioStyled = styled.p`
    text-align: center;
    font-size: 1rem;
    font-weight: 300;
    font-family: 'Roboto', sans-serif;
`;

export const LinkAccountButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 10%;
    gap: 1rem;
    ${mobile}{
        display: flex;
        flex-direction: column;
        gap: 0.1rem;
    }
`;

export const Buttons = styled.button`
    padding: 0.5rem;
    background-color: transparent;
    border: 1px solid blue;
    border-radius: 2.813rem;
    width: 65%;
    margin-bottom: 1rem;
    color: blue;
    cursor: pointer;
    padding: 0.5rem 1rem;
    ${desktop}{
        width: 30%;
    }
`

export const StyledSpan = styled.span`
    height: 1px;
    width: 20rem;
    background-color: black;
    margin-bottom: 1rem;
`
export const FormRegistroUsuario = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    gap: 0.4rem;
    label{
        font-size: 1rem;
        width: 18.31rem;
        font-family: 'Roboto', sans-serif;
    }
    input{
        width: 18.31rem;
        height: 2.1rem;
        border-radius: 2.813rem;
        outline: none;
        border: 1px solid black;
        padding-left: 1rem;
    }
    input[type = submit]{
        margin-top: 1rem;
        border-radius: 3rem;
        border: none;
        font-weight: 700;
        color: #FFF;
        background: #75B300;
        cursor: pointer;
        padding-left: 0;
    }
    input[type = submit]:hover{
        background-color: #460BFF;
        color: #FFF;
    }
`

export const IniciaSesionStyled = styled.p`
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    color: #460BFF;
    margin: 0;
    padding-top: 3rem;
    a{
        text-decoration: none ;
        cursor: pointer;
    }
    a:hover{
        color: #FF00CD;
    }
`
export const BtnLinksSocialStyled = styled.div`
    display: flex;
    align-items: center;
    height: 50%;
    gap: 2rem;
    img{
        cursor: pointer;
    }
    #one:hover{
        background-image: url('./src/images/linkedinColor.png');
        background-size: cover;
        transition: all 0.3s ease-in-out;
    }
    #two:hover{
        background-image: url('./src/images/instagramcolor.png');
        background-size: cover;
        transition: all 0.3s ease-in-out;
    }
    #three:hover{
        background-image: url('./src/images/twittercolor.png');
        background-size: cover;
        transition: all 0.3s ease-in-out;
    }
    #four:hover{
        background-image: url('./src/images/spotifycolor.png');
        background-size: cover; 
        transition: all 0.3s ease-in-out;
    }
`

export const TextoMiniInfoRegUser = styled.p`
    font-size: 0.5rem;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    width: 100%;
    margin-left: 50rem;
    margin-bottom: 1rem;
`

export const SemiCircleStyled = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    width: 60%;
    height: 100vh;
    background: #FFF;
    border-radius: 50% 0 0 50%;
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
    ${mobile}{
        display: none;
    } 
    ${desktop}{
        display: flex;
    }
`;

export const OnlyForMobile = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    ${desktop}{
        display: none;
    }
`;

export const WrapperImage = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: url("/images/fondo_lila.svg");
  background-size: cover;
  background-position: center;
  z-index: -1; 
  ${mobile}{
    display: none;
  }
  ${desktop}{
    display: flex;
  } 
`;
export const ButtonNext = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    padding: 0.5rem 2rem;
    border-radius: 2.813rem;
    background: red;
    color: #FFF;
    cursor: pointer;
`;