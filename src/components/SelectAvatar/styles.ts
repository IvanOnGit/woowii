import styled from "styled-components";

export const ContainerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  gap: 3rem;

  h2 {
    font-family: 'Roboto', sans-serif;
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
  width: 160px;
  height: 160px;
  border: 4px solid #32cd32;
  border-radius: 50%;
`;

export const Button = styled.button`
  background-color: #32cd32;
  color: white;
  padding: 8px;
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
  gap: 8px;
`;

export const Thumbnail = styled.img<{ isSelected: boolean }>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
  border: ${({ isSelected }) => (isSelected ? "4px solid #32cd32" : "none")};

  &:hover {
    opacity: 0.8;
  }
`;