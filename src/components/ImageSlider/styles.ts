import styled from "styled-components";

export const Wrapper = styled.div`
  width: 90%;
  overflow: hidden;
  padding: 0 1.25rem;
  position: relative;
  margin-top: 0.625rem;
`;

export const MaskContainer = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
`;

export const SliderContainer = styled.div<{ translateX: number; transition: boolean }>`
  display: flex;
  gap: 0.625rem;
  transition: ${({ transition }) => (transition ? "transform 0.3s ease-in-out" : "none")};
  transform: ${({ translateX }) => `translateX(${translateX}px)`};
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`;

export const Image = styled.img`
  width: 10.625rem;
  height: 7.5rem;
  object-fit: contain;
  border-radius: 0.5rem;
  margin-right: -0.95rem;
`;

export const Username = styled.div`
  margin-top: 0.313rem;
  margin-left: 0.625rem;
  font-size: 0.625rem;
  font-family: 'Roboto', sans-serif;
  color: #333;
  font-weight: bold;
`;

export const Button = styled.button`
  position: absolute;
  top: 58%;
  transform: translateY(-50%);
  background: #FFF;
  color: #000;
  border: none;
  padding: 0.625rem;
  cursor: pointer;
  z-index: 0;
  font-size: 1.25rem;
`;

export const PrevButton = styled(Button)`
  left: 0;
`;

export const NextButton = styled(Button)`
  right: 0;
`;

export const GradientMask = styled.div`
  position: absolute;
  top: 0;
  width: 1.25rem;
  height: 100%;
  z-index: 0;
  pointer-events: none;
  
  &:first-child {
    left: 0;
    background: linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
  }
  
  &:last-child {
    right: 0;
    background: linear-gradient(to left, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0));
  }
`;

// Lista de imágenes
export const images = [
  "/images/Avatar1.png",
  "/images/Avatar2.png",
  "/images/Avatar3.png",
  "/images/Avatar4.png",
  "/images/Avatar5.png",
  "/images/Avatar6.png",
  "/images/Avatar7.png",
  "/images/Avatar8.png",
  "/images/Avatar9.png",
  "/images/Avatar10.png",
  "/images/Avatar11.png",
  "/images/Avatar12.png",
  "/images/Avatar13.png",
  "/images/Avatar14.png",
];


// Duplicamos imágenes para hacer el efecto infinito
export const infiniteImages = [...images, ...images, ...images];