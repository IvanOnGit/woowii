import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerCompanyOverviewAll = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    overflow: hidden;
`;

export const ContainerColumnLogoAndSelects = styled.div`
    width: 23vw;
    height: 106vh;
    background: #460BFF;
    border-right: 0.125rem solid #000;
    overflow: hidden;
`;

export const ContainerColumnDashBoard = styled.div`
    width: 77vw;
    height: 106vh;
    background: #FFF;
`;

export const ContainerColumnDashBoardUp = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 77vw;
    height: 15vh;
`;

export const ContainerColumnDashBoardDown = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 80vw;
    height: 85vh;
    .columnLeftArreglo{
        margin-top: 1.25rem;
        display: block;
        width: 47vw;
        height: 85vh;
        overflow-y: scroll;
        overflow-x: hidden;
    }
`;

export const ContainerColumnDashBoardDownLeft = styled.div`
    display: block;
    width: 47vw;
    height: 85vh;
`;

export const ContainerColumnDashBoardDownRight = styled.div`
    display: block;
    width: 30vw;
    height: 100vh;
`;

export const ColumnDashBoardDownLeftTitle = styled.h2`
    width: 40vw;
    height: 1.875rem;
    margin-left: 2.5rem;
    font-size: 1.875rem;
    font-weight: 800;
    font-family: 'Inter', sans-serif;
    color: #460BFF;
`;

export const ColumnDashBoardDownRightTitle = styled.h2`
    width: 20vw;
    height: 1.875rem;
    font-size: 1.875rem;
    font-weight: 800;
    font-family: 'Inter', sans-serif;
    margin-left: 1.25rem;
    color: #460BFF;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const FirstSquareLeftDashboard = styled.div`
    width: 49rem;
    height: 28.563rem;
    margin: auto;
    margin-top: 1.875rem;
    border-radius: 0.625rem;
    border: 0.125rem solid #000;
`
export const FirstSquareRightDashboard = styled.div`
    width: 31.063rem;
    height: 50.25rem;
    margin: auto;
    margin-top: 1.875rem;
    border-radius: 0.625rem;
    border: 0.125rem solid #000;
    overflow-y: scroll;
    overflow-x: hidden;
`
export const ContainerUpFirstSquareLeftDashBoard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;
export const ContainerMatchesLeftDashBoard = styled.div`
    width: 15rem;
    height: 6.25rem;
    border-radius: 0.625rem;
`;
export const ImageMatchesLeftDashBoard = styled.img`
    width: 22.5rem;
    height: 9.375rem;
    border-radius: 0.625rem;
    margin-top: 1.25rem;
`
export const ImageReviewsLeftDashBoard = styled.img`
    width: 22.5rem;
    height: 9.375rem;
    border-radius:  0.625rem;
    margin-top: 1.25rem;
`
export const TextUnderImagesLeftDashBoard = styled.h2`
    margin: 1.25rem 0 0 1.25rem;
    font-size: 1.875rem;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
`;

export const ContainerFirstSquareRightHirings = styled.div`
    display: block;
    width: 30.938rem;
    height: 31.25rem;
    background: transparent;
    overflow-x: hidden;
`;

export const ContainerLogoAndNameCompany = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    p{
        margin-left: 10px;
        font-size: 30px;
        font-weight: 700;
        font-family: 'Roboto', sans-serif;
        color: #460BFF;
    }
`;

export const ImageLogoCompany = styled.img`
    width: 60px;
    height: 60px;
    margin-left: 100px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10%;
  padding: 1rem;
`;

export const SearchContainer = styled.div`
  height: 2rem; 
  width: 80%;
  margin-top: 1rem;
  margin-left: 12.5rem;
  input{
    display: flex;
    align-items: center;
    justify-content: left; 
    height: 2rem; 
    width: 70%; 
    padding: 0.5rem;
    border-radius: 2.813rem;
    border: 0.063rem solid #000;
    font-size: 0.75rem;
    font-family: 'Roboto', sans-serif;
  }
`;

export const HeaderItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-top: 1rem;
  margin-right: 1.75rem;
  cursor: pointer;
  p {
    display: flex;
    margin: 0;
    font-size: 1.25rem;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
  }
  img {
    width: 1.875rem;
    height: 1.875rem;
    margin-right: 0.5rem;
    margin-top: -0.313rem;
  }
`;

export const ContainerLogo = styled.div`
    position: fixed;
  display: flex;
  width: 23vw;
  height: 12vh;
  background: transparent;
  border-bottom: 0.125rem solid #FFF;
`;

export const ImageLogoWhite = styled.img`
  margin: auto;
  width: 16.563rem;
  height: 5.063rem;
`;

export const ContainerGraphs = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 25vw;
    height: 20vh;
    margin: auto;
    margin-top: 1.25rem;
`;

export const Graphics = styled.img`
    width: 15vw;
    margin-left: 3.125rem;
    margin-top: 1.25rem;
`;

export const GraphicsPercentage = styled.div`
    width: 10vw;
    display: block;
    h2{
        font-size: 3.125rem;
        font-weight: 700;
        font-family: 'Roboto', sans-serif;
        color: #8FFF00;
    }
    h3{
        font-size: 3.125rem;
        font-weight: 700;
        font-family: 'Roboto', sans-serif;
        color:#ff0000;
    }
    p{
        font-size: 1.25rem;
        font-weight: 500;
        font-family: 'Roboto', sans-serif;
    }
    #rev{
        font-size: 1.25rem;
        font-weight: 500;
        font-family: 'Roboto', sans-serif;
        padding-left: 1.25rem;
    }
`;

export const TitleCommentAndMessages = styled.h2`
    width: 40vw;
    height: 1.875rem;
    margin-left: 2.5rem;
    font-size: 1.875rem;
    font-weight: 800;
    font-family: 'Inter', sans-serif;
    color: #460BFF;
    margin-top: 2.5rem;
`;

export const ContainerCommentsAndMessage = styled.div`
    display: block;
    width: 47vw;
    height: 85vh;
    margin-top: 2.5rem;
`;

export const ContainerIntroCommentsAndMessage = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    width: 49rem;
    height: 9.75;
    margin: auto;
    margin-top: 1.875rem;
    border-radius: 0.625rem;
    border: 0.125rem solid #000;
`;

export const IntroCommentsAndMessageImage = styled.img`
    width: 6.25rem;
    height: 6.25rem;
    margin: auto;
`;

export const IntroCommentsAndMessageText = styled.div`
    display: block;
`;

export const IntroCommentsAndMessageTextUserInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: auto;
    margin-top: 1.875rem;
    min-width: 25rem;
    h2{
        color: #460BFF;
    }
`;

export const IntroCommentsAndMessageTextUserComment = styled.p`
    display: block;
    margin: auto;
    margin-top: 0.625rem;
    min-width: 31.25;
    font-size: 1.25rem;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
`;

export const IntroCommentsAndMessageButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5.25rem;
    height: 1.813rem;
    background: #460BFF;
    color: #FFF;
    margin: auto;
    font-size: 0.938rem;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    border-radius: 2.813rem;
    cursor: pointer;
`;

export const ContainerFirstSquareSelects = styled.div`
    position: fixed;
    display: block;
    margin-top: 19vh;
    width: 23vw;
    height: 45vh;
    border-bottom: 0.063rem solid #FFF;
`;

export const ContainerSecondSquareSelects = styled.div`
    position: fixed;
    display: block;
    margin-top: 70vh;
    width: 23vw;
    height: 25vh;
`;

export const ContainerSelects = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 20vw;
    margin: auto;
    margin-bottom: 3.125rem;
    gap: 3.125rem;
    padding: 0 1.875rem;
    cursor: pointer;
    
    p{
        font-size: 0.938rem;
        font-weight: 500;
        font-family: 'Inter', sans-serif;
        color: #FFF;
        min-width: 10vw;
        &:hover{
            color: #8FFF00;
        }
    }
`;

export const WoodyChat = styled.img`
    position: fixed;
    width: 19.688rem;
    height: 4.813rem;
    margin: 90vh 0 0 3.75rem;
    cursor: pointer;
`;