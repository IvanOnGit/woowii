import styled from "styled-components";


export const ContainerAllOffer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-image: url('/images/backgroundOffer.svg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
`
export const ContainerOfferPage = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`
export const ContainerColumnCard = styled.div`
  width: 25vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  #logo{
    width: 11.625rem;
    height: 3.25rem;
    margin: 1.875rem 0 0 3.125rem;
  }
`
export const ContainerColumnBodyOffer = styled.div`
  width: 100vw;
  height: 100vh;
  display: block;
  margin-left: -19.375rem;
`
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10%;
  padding: 1rem;
  color: #FFF;
  margin: -1rem 0 0 60rem;
`;
export const ContainerBodyOfferImage = styled.img`
    margin: 0.625rem 0 0 28.625rem;
`
export const ContainerCardOfferImage = styled.img`
    margin: 9.375rem 0 0 4.375rem;
`
export const ContainerDataOfferImage = styled.div`
  width: 100vw;
  height: 380vh;
  background: #FFF;
  img{
    margin: auto;
    margin-left: 3.125rem;
    margin-top: 6.25rem;
  }
  p{
    font-size: 2.813rem;
    font-weight: 300;
    margin: auto;
    margin-left: 21.875rem;
  }
  span{
   background: #8FFF00;
  }
`
export const BtnAplicarOffer = styled.button`
  width: 18.688rem;
  height: 4.125rem;
  margin: auto;
  margin-top: 3.125rem;
  margin-left: 35.625rem;
  background: #8FFF00;
  border-radius: 2.813rem;
  font-size: 1.875rem;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
`
