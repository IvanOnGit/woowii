import styled from "styled-components";

export const ContainerWrapper = styled.div`
  text-align: center;
  font-family: 'Roboto', sans-serif;

  h2 {
    margin-bottom: 0;
    margin-left: 1rem;
    padding-bottom: 0;
    font-size: 1.5rem;
    color: #75B300;

    @media (max-width: 768px){
        margin-left: 3rem;
        margin-right: 3rem;
        font-size: 25px;
        text-align: justify;
        font-weight: bold;
    }  
  }
`;

export const StepsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-left: 4rem;

  @media (max-width: 768px){
    display: block;
    align-items: flex-start;
    gap: 1rem;
    margin-top: 1rem;
    margin-left: 3rem;
  }
`;

export const StepCard = styled.div`
  position: relative;
  width: 10rem;
  text-align: center;

  @media (max-width: 768px){
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-top: 1rem;
  }
`;

export const StepNumber = styled.div`
  position: absolute;
  top: 4rem;
  left: 50%;
  transform: translateX(-50%);
  background: transparent;
  color: white;
  font-size: 6rem;
  font-weight: bold;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px){
    left: 26%;
    font-size: 3rem;
    top: 2rem;
  }
  
`;

export const StepImage = styled.img`
  width: 100%;
  border-radius: 15px;
  height: 12rem;

  @media (max-width: 768px){
    width: 7rem;
    height: 7rem;
    margin-top: 1rem;  
  }
`;

export const StepText = styled.div`
@media(max-width: 768px){
  display: block;
  margin-top: 0.5rem;
}


  h3 {
    font-size: 0.8rem;
    color: #61b620;
    text-align: left;

    @media(max-width: 768px){
      
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      gap: 1rem;
      font-size: 1.1rem; 
    
    }
  }
  p {
    font-size: 0.7rem;
    color: #333;
    text-align: left;

    @media(max-width: 768px){
      display: block;
      margin-top: 0.5rem;
      width: 200px;
    }
  }
`;