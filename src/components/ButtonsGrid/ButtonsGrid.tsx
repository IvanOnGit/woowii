import { GridContainer, StyledButton } from "./styles";


export const ButtonGrid = () => {
  return (
    <GridContainer>
      {Array.from({ length: 9 }).map((_, index) => (
        <StyledButton key={index}>Habilidad tÃ©cnica</StyledButton>
      ))}
    </GridContainer>
  );
};