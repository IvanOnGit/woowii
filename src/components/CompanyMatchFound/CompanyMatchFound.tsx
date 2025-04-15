import { useLocation } from "react-router-dom";
import { ButtonsContainer, Container, HandShake, HandShakeContainer, ItsaMatch, NamesContainer, StyledLink } from "./styles";

export default function CompanyMatchFound() {
  const location = useLocation();
  const { userFullname, userImage, companyFullname, companyImage } = location.state || {};
  
  console.log("Datos recibidos en match:", location.state);

  return (
    <Container>
      <ItsaMatch src="/images/ItsAMatch.png" alt="It's a Match" />
      <HandShake src="/images/Handshake.svg" alt="" />
      <HandShakeContainer>
        <img src={userImage} alt={userFullname} />
        <img src={companyImage} alt={companyFullname} />
      </HandShakeContainer>
      <NamesContainer>
        <h1><strong>{userFullname}</strong> y <strong>{companyFullname}</strong></h1>
      </NamesContainer>
      <ButtonsContainer>
        <StyledLink to={"/CompanyOverview"}>
          <button>Salir</button>
        </StyledLink>
        <button>Contactar</button>
      </ButtonsContainer>
    </Container>
  );
}