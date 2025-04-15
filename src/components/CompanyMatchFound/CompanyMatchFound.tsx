import { useLocation } from "react-router-dom";
import { Container, HandShakeContainer, ItsaMatch } from "./styles";

export default function CompanyMatchFound() {
  const location = useLocation();
  const { userFullname, userImage, companyFullname, companyImage } = location.state || {};
  
  console.log("Datos recibidos en match:", location.state);

  return (
    <Container>
      <ItsaMatch src="/images/ItsAMatch.png" alt="It's a Match" />
      <HandShakeContainer>
        <img src={userImage} alt={userFullname} />
        <img src={companyImage} alt={companyFullname} />
      </HandShakeContainer>
      <h1>
        <strong>{userFullname}</strong> y <strong>{companyFullname}</strong>
      </h1>
    </Container>
  );
}