
import { ButtonContainer, Container, StyledImage, StyledLink } from "./styles";

const ChooseTalentCompany = () => {
  return (
    <Container>
      <StyledImage src="/images/GreenLogoDemo.svg" alt="" />
      <img className="user" src="/images/mobileUser.svg" alt="" />
      <ButtonContainer>
        <StyledLink to="/RegisterUserForm">
            <button className="talent">Soy talento</button>
        </StyledLink>
        <StyledLink to="/RegisterCompanyForm">
            <button className="company">Soy empresa</button>
        </StyledLink>
      </ButtonContainer>
      <img className="business" src="/images/mobileCompany.svg" alt="" />
    </Container>
  );
};

export default ChooseTalentCompany;