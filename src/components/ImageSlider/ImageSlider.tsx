
import React, { useState, useEffect } from "react";
import { GradientMask, 
  Image, 
  ImageContainer, 
  images, 
  infiniteImages, 
  MaskContainer, 
  NextButton, 
  PrevButton, 
  SliderContainer, 
  Username, 
  Wrapper } from "./styles";


const ImageSlider: React.FC = () => {
  const imageWidth = 160; // Ancho de la imagen + gap
  const totalImages = images.length;
  const [index, setIndex] = useState(totalImages); // Punto de inicio en la segunda tanda
  const [translateX, setTranslateX] = useState(-totalImages * imageWidth - 20);
  const [transition, setTransition] = useState(true);

  const handleNext = () => {
    setTransition(true);
    setIndex((prev: number) => prev + 1);
    setTranslateX((prev) => prev - imageWidth);
  };

  const handlePrev = () => {
    setTransition(true);
    setIndex((prev: number) => prev - 1);
    setTranslateX((prev) => prev + imageWidth);
  };

  // Corrige el salto al llegar a los extremos
  useEffect(() => {
    if (index >= totalImages * 2) {
      setTimeout(() => {
        setTransition(false);
        setIndex(totalImages);
        setTranslateX(-totalImages * imageWidth - 20);
      }, 300);
    }
    if (index < totalImages) {
      setTimeout(() => {
        setTransition(false);
        setIndex(totalImages * 2 - 1);
        setTranslateX(-(totalImages * 2 - 1) * imageWidth - 20);
      }, 300);
    }
  }, [index, totalImages]); // Ahora 'totalImages' es una dependencia

  return (
    <Wrapper>
      <PrevButton onClick={handlePrev}>{"<"}</PrevButton>
      <MaskContainer>
        <SliderContainer translateX={translateX} transition={transition}>
          
        {infiniteImages.map((src: string, i: number) => (
            <ImageContainer key={i}>
              <Image src={src} alt={`Image ${i}`} />
              <Username>User{String(i % totalImages + 1).padStart(3, "0")}XJ</Username>
            </ImageContainer>
          ))}
        </SliderContainer>
        <GradientMask />
        <GradientMask />
      </MaskContainer>
      <NextButton onClick={handleNext}>{">"}</NextButton>
    </Wrapper>
  );
};

export default ImageSlider;

