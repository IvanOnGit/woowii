import styled from "styled-components"

export const ContainerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
`
export const DivContainerLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const LogoSecondPageStyled = styled.img`
    width: 18.75rem;
    position: absolute;
    margin-bottom: 35rem;

    @media(max-width: 768px){
        width: 14rem;
        margin-bottom: 45rem;
        margin-left: 8rem;
    
    }
`

export const ImgFondoSecondPage = styled.img`
    position: absolute;
    width: 14rem;
    margin-top: 2rem;

    @media(max-width: 768px){
        margin-left: 7rem;
        margin-top: 50rem;
    
      }
`
export const DivContainerButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    margin-top: 40rem;

    @media(max-width: 768px){
        margin-top: 70rem;
        margin-left: 7rem;
    
      }

`
export const ButtonNextSecondPage = styled.button`
    width: 12rem;
    height: 2rem;
    background: #8FFF00;
    color: #000;
    font-size: 1rem;
    font-weight: bold;
    font-family: 'Inter', sans-serif;
    border-radius: 2rem;
    border: none;
    cursor: pointer;
`

export const ContainerText = styled.div`
display: flex;
flex-direction: column;
font-family: 'Roboto', sans-serif;
position: absolute;
text-align: center;
margin-bottom: 20rem;

@media(max-width: 768px){
    margin-bottom: 30rem;
    margin-left: 7rem;


}

h1 {
    margin: 0;
    font-size: 1.5rem;
    background: linear-gradient(90deg, #F4BE19, #654C00);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

h2 {
    margin: 0;
    font-size: 1.5rem;

    @media(max-width: 768px){
        font-size: 1.4rem;
    }
}
`;

export const ContainerProgressBar = styled.div`
    display: flex;
    position: absolute;
    margin-top: 25rem;

    @media(max-width: 768px){
        margin-top: 0rem;
        margin-right: 10rem;
        transform:rotate(90deg);
    
    }


    img {
        height: 2rem;
        width: 2rem;
        background-color: green;
        border-radius: 50%;
        transform:rotate(270deg);

  
}

span {
    height: 0.5rem;
    width: 8rem;
    background-color: #8FFF00;
    margin-top: 1rem;

    @media(max-width: 768px){
        width: 3rem;
        
      
      }
    }
`;

export const ContainerProgressBarBucks = styled.div`
display: flex;
position: absolute;
font-family: 'Roboto', sans-serif;
width: 41%;
margin-top: 20rem;
margin-left: 5rem;

@media(max-width: 768px){
    width: 80%;
    margin-left: 20rem;
    display:block;
    margin-bottom: 24rem;

  }

p {
    font-size: 0.8rem;
    font-weight: bold;
    width: 25%;
    color: #8FFF00;

    @media(max-width: 768px){
        font-size: 0.7rem;
        padding-top: 3.6rem;
    
    }
}
`;

export const ContainerProgressBarText = styled.div`
    display: flex;
    position: absolute;
    font-family: 'Roboto', sans-serif;
    width: 40%;
    margin-top: 32rem;
    margin-left: 5rem;
    
    
    @media(max-width: 768px){
        margin-left: 20rem;
        width: 80%;
        display: block;
        margin-top: 3rem;
      }
    
    p {
        font-size: 0.8rem;
        font-weight: bold;
        width: 25%;
    
        @media(max-width: 768px){
            font-size: 1rem;
            padding-top: 3rem;
            width: 100%;

          }
    }
    `;

