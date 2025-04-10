import styled from "styled-components"

export const ContainerWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    gap: 3rem;

    @media (max-width: 768px){
        gap: 9rem;
    }

`

export const DivContainerLogoTerPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 768px){
        display: block;
        margin-left: 15%;
        
    }
`

export const LogoTerceraPageStyled = styled.img`
    width: 18.75rem;
    height: 5.25rem;

    @media (max-width: 768px){
        width: 14.75rem;
    }
`


export const DivImagenFondoTerPage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;

    

`

export const ImgFondoTerceraPage = styled.img`
    width: 50%;

    @media (max-width: 768px){
        display: none;
    }
`

export const ImgFondoTerceraPageWelcome = styled.img`
    display: none;

    @media (max-width: 768px){
        display: flex;
        margin-top: 40px;
    }
`

export const ButtonNextTerceraPage = styled.button`
    width: 182px;
    height: 37px;
    background: #75B300;
    color: #000;
    font-size: 20px;
    font-weight: bold;
    font-family: 'Inter', sans-serif;
    border-radius: 45px;
    cursor: pointer;

    @media(max-width: 768px){
        box-shadow: 0px 4px 4px 0px #00000040;
        border-radius: 27px;
        width: 139px;
        height: 28.26px;
        font-size: 15px;
        border: none;
        color: #ffff;
        background: #75B300;
        margin-bottom: 20px;
    }

`

export const UsernameInput = styled.div` 
  h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 38px;
    display: none;

    @media (max-width: 768px){
      display: flex;
      color: #75B300;
      font-weight: 500;
      margin: 0;

    }
  }
      p{
        display: none;
        @media (max-width: 768px){
            font-family: 'Roboto', sans-serif;
            display: flex;
            color: #000000;
            font-weight: 400;
            font-size: 12px;
            padding-right: 25%; 
    }
  }


  
`