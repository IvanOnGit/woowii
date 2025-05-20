
import { ButtonContainer, Container, StyledImage, StyledLink } from "./styles";

const ChooseTalentCompany = () => {
  return (
    <Container>
      <StyledImage src="/images/GreenLogoDemo.svg" alt="" />
      <img src="/images/mobileUser.svg" alt="" />
      <ButtonContainer>
        <StyledLink to="/RegisterUserForm">
            <button className="talent">Soy talento</button>
        </StyledLink>
        <StyledLink to="/RegisterCompanyForm">
            <button className="company">Soy empresa</button>
        </StyledLink>
      </ButtonContainer>
      <img src="/images/mobileCompany.svg" alt="" />
    </Container>
  );
};

export default ChooseTalentCompany;