import styled from "styled-components"
import { desktop } from "../UserRegister/styles"

export const SliderContainer = styled.div`
  width: 20rem;
  max-height: 80vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0;
  ${desktop}{
    margin-left: 3rem;
    width: 20rem;
  }
  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

export const SliderContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;