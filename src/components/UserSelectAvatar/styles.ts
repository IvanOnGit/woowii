import styled from "styled-components";

const WidthMeasurementIphone12Pro = 24.375;
const WidthMeasurementDesktop = 90;
export const mobile = `@media(min-width:${WidthMeasurementIphone12Pro}rem)`
export const desktop = `@media(min-width:${WidthMeasurementDesktop}rem)`

export const ContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  gap: 1rem;
  h2 {
    font-family: 'Roboto', sans-serif;
  }
  ${mobile}{
    display: none;
  }
  ${desktop}{
    display: flex;
  }
`;

export const DivContainerLogoTerPage = styled.div`
  display: flex;
  justify-content: center;
`;

export const LogoTerceraPageStyled = styled.img`
  width: 18.75rem;
  height: 5.25rem;
`;

export const AvatarWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const AvatarImage = styled.img`
  width: 10rem;
  height: 10rem;
  border: 0.25rem solid #32cd32;
  border-radius: 50%;
`;

export const Button = styled.button`
  background-color: #32cd32;
  color: white;
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  font-size: 1.5rem;
  transition: 0.3s;

  svg {
    color: white;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 1.2rem;
  }

  &:hover {
    background-color: #228b22;
  }
`;

export const ThumbnailsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const Thumbnail = styled.img<{ isSelected: boolean }>`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  cursor: pointer;
  border: ${({ isSelected }) => (isSelected ? "4px solid #32cd32" : "none")};

  &:hover {
    opacity: 0.8;
  }
`;

export const UsernameInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  h3 {
    justify-content: flex-start;
    width: 11%;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  input {
    padding: 0.3rem;
    border-radius: 0.5rem;
    outline: none;
    border: 0.063rem solid black;
    margin-bottom: 1rem;
  }

  input::placeholder {
    padding-left: 0.5rem;
  }

  p {
    margin: 0.1rem;
    width: 20rem;
    margin-left: 10rem;
    justify-content: center;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-size: 0.7rem;

    svg {
      height: 0.8rem;
      width: 0.8rem;
      margin-right: 0.5rem;
    }
  }
`;

export const ButtonNextTerceraPage = styled.button`
    width: 11.375rem;
    height: 2.313rem;
    background: #8FFF00;
    color: #000;
    font-size: 1.25rem;
    font-weight: bold;
    font-family: 'Inter', sans-serif;
    border-radius: 2.813rem;
    border: none;
    box-shadow: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
    cursor: pointer;
`;

// ----------------------------------------mobile..................................................

export const ContainerWrapperMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  gap: 1rem;
  padding: 0 1rem;

  h2 {
    font-family: 'Roboto', sans-serif;
  }
  ${desktop}{
    display: none;
  }
  ${mobile}{
    display: flex;
  }
`

export const DivContainerLogoTerPageMobile = styled.div`
  display: flex;
  justify-content: center;
`

export const LogoTerceraPageStyledMobile = styled.img`
  width: 18.75rem;
  height: 5.25rem;
  max-width: 100%;
`

export const AvatarWrapperMobile = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const AvatarImageMobile = styled.img`
  width: 9.375rem;
  height: 9.375rem;
  border: 0.25rem solid #32cd32;
  border-radius: 50%;
`

export const ButtonMobile = styled.button`
  background-color: #32cd32;
  color: white;
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  border: none;
  font-size: 1.5rem;
  transition: 0.3s;

  svg {
    color: white;
    justify-content: center;
    align-items: center;
    width: 2rem;
    height: 1.2rem;
  }

  &:hover {
    background-color: #228b22;
  }

  &:disabled {
    background-color: #a0a0a0;
    cursor: not-allowed;
  }
`

export const ThumbnailsContainerMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  max-width: 30rem;
  margin: 1rem 0;
`

export const ThumbnailsSlider = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
  max-width: 300px;

  @media (max-width: 48rem) {
    max-width: 15rem;
  }

  @media (max-width: 30rem) {
    max-width: 10.5rem;
  }
`

export const SliderNavButton = styled(Button)<{ direction: "left" | "right" }>`
  padding: 0.375rem;
  
  svg {
    width: 1.5rem;
    height: 1rem;
  }
`

export const ThumbnailMobile = styled.img<{ isSelected: boolean }>`
  min-width: 3rem;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 0.25rem;
  border: ${({ isSelected }) => (isSelected ? "4px solid #32cd32" : "none")};
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`

export const UsernameInputMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 31.25rem;

  h3 {
    align-self: flex-start;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    margin-bottom: 0.5rem;
    ${mobile}{
      margin-left: 1.5rem;
    }
  }

  input {
    width: 100%;
    max-width: 300px;
    padding: 0.3rem;
    border-radius: 0.5rem;
    outline: none;
    border: 0.063rem solid black;
    margin-bottom: 1rem;
  }

  input::placeholder {
    padding-left: 0.5rem;
  }

  p {
    margin: 0.1rem;
    width: 100%;
    max-width: 20rem;
    display: flex;
    align-items: center;
    font-family: 'Roboto', sans-serif;
    font-size: 0.7rem;

    @media (min-width: 48rem) {
      margin-left: 10rem;
    }

    svg {
      height: 0.8rem;
      width: 0.8rem;
      margin-right: 0.5rem;
      flex-shrink: 0;
    }
  }
`;

export const ButtonNextTerceraPageMobile = styled.button`
    width: 11.375rem;
    height: 2.313rem;
    background: #8FFF00;
    color: #000;
    font-size: 1.25rem;
    font-weight: bold;
    font-family: 'Inter', sans-serif;
    border-radius: 2.813rem;
    border: none;
    box-shadow: 0px 0.25rem 1.25rem rgba(0, 0, 0, 0.25);
    cursor: pointer;
    
    &:disabled {
      background: #cccccc;
      cursor: not-allowed;
    }
`;