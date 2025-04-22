
import { Link } from "react-router-dom";
import styled from "styled-components";

const WidthMeasurementMobile = 20;
const WidthMeasurementMobileMedium = 23.438;
const WidthMeasurementMobileLarge = 26.563;
const WidthMeasurementTablet = 47.938;
const WidthMeasurementLaptop = 63.938;
const WidthMeasurementDesktop = 90;
const WidthMeasurementBigDesk = 90.063;

export const mobileLittle = `@media(min-width:${WidthMeasurementMobile}rem)`
export const mobileMedium = `@media(min-width:${WidthMeasurementMobileMedium}rem)`
export const mobileLarge = `@media(min-width:${WidthMeasurementMobileLarge}rem)`
export const tablet = `@media(min-width:${WidthMeasurementTablet}rem)`
export const laptop = `@media(min-width:${WidthMeasurementLaptop}rem)`
export const desktop = `@media(min-width:${WidthMeasurementDesktop}rem)`
export const bigdesk = `@media(min-width:${WidthMeasurementBigDesk}rem)`

export const ContainerAllMobile = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 210vh;
  overflow-y: scroll;
  overflow-x: hidden;
  ${laptop}{
    display: none;
  }
  ${desktop}{
    display: none;
  }
  ${bigdesk}{
    display: none;
  }
`;
export const ContainerUpSearhAndItemsMobile = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  top: -1rem;
  width: 100vw;
  height: 10vh;
  background: #FFF;
  ${mobileMedium}{
    left: 1.5rem;
  }
  ${mobileLarge}{
    left: 1rem;
  }
  ${tablet}{
    justify-content: space-around;
    top: -0.3rem;
    left: 1.8rem;
  }
  
`;
export const AvatarToMobile = styled.div`
    display: flex;
    width: 5rem;
    height: 2rem;
    img{
        width: 2rem;
        height: 2rem;
        ${mobileLarge}{
            width: 2.5rem;
            height: 2.5rem;
        }
        ${tablet}{
            width: 3rem;
            height: 3rem;
        }
    }
    ${mobileLittle}{
      margin-left: 0.5rem;
      margin-top: 0.3rem;
    }
    ${mobileMedium}{
      margin-left: -2rem;
    }
    ${mobileLarge}{
      margin-left: -1rem;
    }
    ${tablet}{
      margin-left: -1rem;
      margin-top: -0.3rem;
    }
    /* ${desktop}{
      left: 5rem;
    } */
    
`;
export const SearchUpToMobile = styled.div`
    display: flex;
    width: 10rem;
    height: 1rem;
    ${tablet}{
      width: 18rem;
      height: 2rem;
    }
    input{
        width: 10rem;
        height: 1.3rem;
        border-radius: 2.813rem;
        padding-left: 0.25rem;
        font-size: 0.75rem;
        font-weight: 500;
        font-family: 'Inter', sans-serif;
        ${mobileLittle}{
          margin-left: -1rem;
          width: 8rem;
        }
        ${mobileLarge}{
          font-size: 0.85rem;
          width: 11rem;
          height: 1.5rem;
        }
        ${tablet}{
          font-size: 0.938rem;
          width: 18rem;
          height: 2rem;
          margin-top: 0.5rem;
        }
    }
    &::placeholder{
        font-size: 0.75rem;
        ${mobileLarge}{
          font-size: 0.85rem;
        }
        ${tablet}{
          font-size: 0.938rem;
        }
    }
    
`;
export const HeaderItemsToMobile = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-top: 0.5rem;
  cursor: pointer;
  ${mobileLittle}{
    margin-right: 1rem;
    width: 7rem;
  }
  ${tablet}{
    margin-right: 2rem;
    width: 10rem;
  }
  img{
    width: 1rem;
    height: 1rem;
    ${mobileLarge}{
      width: 1.2rem;
      height: 1.2rem;
    }
    ${tablet}{
      width: 1.5rem;
      height: 1.5rem;    
    }
  }
  p{
    font-size: 0.75rem;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    ${mobileMedium}{
      font-size: 0.875rem;
    }
    ${mobileLarge}{
      font-size: 0.938rem;
    }
    ${mobileLarge}{
      font-size: 1rem;
    }
  }
  #menu{
    ${mobileLittle}{
      margin-top: 0.7rem;
    }
    ${mobileLarge}{
      width: 1.563rem;
      height: 1.563rem;
    }
    ${tablet}{
      width: 1.688rem;
      height: 1.688rem;
      margin-top: 0.9rem;
    }
  }
`;
export const ContainerOverviewTitle = styled.div`
  position: relative;
  display: flex;
  width: 4.125rem;
  height: 2rem;
  left: 1rem;
  top: 0.5rem;
  gap: 0.5rem;
  h2{
    font-size: 0.931rem;
    font-weight: 800;
    font-family: 'Inter', sans-serif;
    color: #460BFF;
    ${mobileLittle}{
      margin-top: -0.8rem;
    }
    ${mobileMedium}{
      font-size: 1.25rem;
    }
    ${tablet}{
      font-size: 1.75rem;
      margin-left: 3rem;
    }
  }
`;
export const ContainerChevronDown = styled.div`
  position: relative;
  display: flex;
  top: -1.9rem;
  left: 6rem;
  ${mobileLittle}{
    top: -2.7rem;
  }
  ${mobileMedium}{
    top: -2.5rem;
    left: 7rem;
  }
  ${tablet}{
    top: -1.8rem;
    left: 12rem;
  }
`;
export const ContainerChevronDownForMessages = styled.div`
  position: relative;
  display: flex;
  top: -0.3rem;
  left: 12rem;
  ${mobileLittle}{
    margin-top: -0.4rem;
  }
  ${mobileMedium}{
    top: -0.2rem;
    margin-left: -7.5rem;
  }
  ${mobileLarge}{
    top: -0.4rem;
    left: 22rem;
  }
  ${tablet}{
    top: -1rem;
    left: 30rem;
  }
`;
export const ContainerChevronDownForHirings = styled.div`
  position: relative;
  display: flex;
  top: 1.7rem;
  left: 13.5rem;
  ${mobileLittle}{
    margin-top: -1.2rem;
  }
  ${tablet}{
    left: 18.7rem;
    top: 1.9rem;
  }
`;
export const FirstSquareLeftDashboard = styled.div`
  position: relative;
  width: 18.2rem;
  height: 17rem;
  top: -1rem;
  left: 1rem;
  border-radius: 0.625rem;
  border: 0.125rem solid #000;
  background: #FFF;
  z-index: 0;
  ${mobileMedium}{
    width: 21.2rem;
  }
  ${mobileLarge}{
    width: 24.2rem;
  }
  ${tablet}{
    width: 40.2rem;
    left: 3.5rem;
    top: -1rem;
    height: 25rem;
  }
`;
export const ContainerUpFirstSquareLeftDashBoard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const ImageMatchesLeftDashBoard = styled.img`
  width: 8rem;
  height: 9.375rem;
  border-radius: 0.625rem;
  margin-top: -2.5rem;
  ${mobileMedium}{
    width: 10rem;
    margin-top: -2rem;
  }
  ${tablet}{
    width: 17rem;
    height: 18.750rem;
    margin-top: -5rem;
  }
`;
export const ImageReviewsLeftDashBoard = styled.img`
  width: 8rem;
  height: 9.375rem;
  border-radius:  0.625rem;
  margin-top: -2.5rem;
  ${mobileMedium}{
    width: 10rem;
    margin-top: -2rem;
  }
 ${tablet}{
    width: 17rem;
    height: 18.750rem;
    margin-top: -5rem;
  }
`;
export const TextUnderImagesLeftDashBoard = styled.h2`
  margin: -1rem 0 0 1.2rem;
  font-size: 1.375rem;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
   ${tablet}{
    font-size: 1.575rem;
    margin: -4rem 0 0 2.5rem;
  }
`;
export const TitleCommentAndMessages = styled.h2`
  position: relative;
  width: 40vw;
  height: 1.875rem;
  top: 1.5rem;
  left: 1.5rem;
  font-size: 0.931rem;
  font-weight: 800;
  font-family: 'Inter', sans-serif;
  color: #460BFF;
  min-width: 18rem;
  background: #FFF;
  ${mobileMedium}{
    font-size: 1.25rem;
  }
  ${tablet}{
    top: 1rem;
    font-size: 1.75rem;
    margin-left: 2.5rem;
  }
`;
export const SliderContainerTitle = styled.h2`
  position: relative;
  top: 3%;
  right: 4%;
  width: 25rem;
  height: 1.875rem;
  margin-left: 2.5rem;
  font-size: 0.931rem;
  font-weight: 800;
  font-family: 'Inter', sans-serif;
  color: #460BFF;
  cursor: pointer;
  z-index: -1;
  ${mobileMedium}{
    font-size: 1.25rem;
  }
  ${tablet}{
    font-size: 1.75rem;
    left: 1rem;
  }
`;
export const ContainerGraphs = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 130%;
  height: 20vh;
  top: 10rem;
  left: -1rem;
  z-index: 0;
  ${tablet}{
    width: 100%;
    left: 7rem;
    margin-bottom: 7rem;
  }
`;
export const Graphics = styled.img`
  width: 100%;
  margin-left: 3.125rem;
  margin-top: 1.25rem;
`;
export const GraphicsPercentage = styled.div`
  width: 10vw;
  display: block;
  margin-left: 1.875rem;
  h2{
    font-size: 1.125rem;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    color: #8FFF00;
  }
  h3{
    font-size: 1.125rem;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    color:#ff0000;
  }
  p{
    font-size: 0.75rem;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
  }
  #rev{
    font-size: 0.75rem;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
  }
`;
export const ContainerFooterToMobile = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  top: 17%;
  width: 100vw;
  height: 10vh;
  background: #460BFF;

  ${tablet}{
    top: 18%;
  } 
  img{
    margin-top: -3rem;
    width: 4.438rem;
    height: 4.438rem;
    cursor: pointer;
    ${tablet}{
      width: 4.838rem;
      height: 4.838rem; 
    }
  }
  .items{
    cursor: pointer;
    ${tablet}{
      width: 1.875rem;
      height: 1.875rem;
    }
  }
`;
//------------------------------------------LAPTOP AND UPPER SCREENS-------------------------------------------------
export const ContainerCompanyOverviewAll = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: scroll;
  ${mobileLittle}{
    display: none;
  }
  ${mobileMedium}{
    display: none;
  }
  ${mobileLarge}{
    display: none;
  }
  ${tablet}{
    display: none;
  }
  ${laptop}{
    display: flex;
  }
`;
export const ContainerColumnLogoAndSelects = styled.div`
  position: fixed;
  width: 23vw;
  height: 112vh;
  background: #460BFF;
  border-right: 0.125rem solid #000;
  overflow: hidden;
  ${desktop}{
    width: 20vw;
  }
`;
export const ContainerColumnDashBoard = styled.div`
  width: 75%;
  height: 106vh;
`;
export const ContainerColumnDashBoardUp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 77vw;
  height: 15vh;
  margin-left: -5rem;
  
`;
export const ContainerColumnDashBoardDown = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 77vw;
  height: 85vh;
  margin-left: 18rem;
  .columnLeftArreglo{
    margin: 1.25rem 0 0 -1rem;
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
  margin-top: -3rem;
`;
export const ContainerColumnDashBoardDownRight = styled.div`
  display: block;
  width: 30vw;
  height: 106vh;
  margin-top: -1.5rem;
`;
export const ColumnDashBoardDownLeftTitle = styled.h2`
  width: 40vw;
  height: 1.875rem;
  margin: 3rem 0 0 3.5rem;
  font-size: 1.875rem;
  font-weight: 800;
  font-family: 'Inter', sans-serif;
  color: #460BFF;
  ${laptop}{
    margin: 3rem 0 0 -0.5rem;
  }
  ${desktop}{
    margin-left: 5rem;
  }
  ${bigdesk}{
    margin-left: 9rem;
  }
`;
export const ColumnDashBoardDownRightTitle = styled.h2`
  width: 20vw;
  height: 1.875rem;
  font-size: 1.875rem;
  font-weight: 800;
  font-family: 'Inter', sans-serif;
  margin-left: 2.25rem;
  color: #460BFF;
  ${laptop}{
    width: 24vw;
    font-size: 1.55rem;
    margin-left: 0.5rem;
  }
  ${desktop}{
    margin-left: 2rem;
  }
 
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
export const FirstSquareLeftDashboardUpMobile = styled.div`
  width: 40rem;
  height: 28.563rem;
  margin: 0.675rem 0 0 3.5rem;
  border-radius: 0.625rem;
  border: 0.125rem solid #000;
  ${laptop}{
    width: 28rem;
    height: 18.563rem;
    margin: 0.675rem 0 0 1rem;
  }
  ${desktop}{
    width: 32rem;
    height: 18.563rem;
    margin: 0.675rem 0 0 6rem;
  }
  ${bigdesk}{
    margin-left: 10rem;
  }
`;
export const FirstSquareRightDashboardUpMobile = styled.div`
  width: 25.063rem;
  height: 45.25rem;
  margin-top: 1.875rem;
  border-radius: 0.625rem;
  border: 0.125rem solid #000;
  overflow-y: scroll;
  overflow-x: hidden;
  ${laptop}{
    width: 15.063rem;
  }
  ${desktop}{
    width: 25.063rem;
    margin-left: 2rem;
  }
`;
export const ContainerUpFirstSquareLeftDashBoardUpMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const ContainerMatchesLeftDashBoard = styled.div`
  width: 15rem;
  height: 6.25rem;
  border-radius: 0.625rem;
`;
export const ImageMatchesLeftDashBoardUpMobile = styled.img`
  width: 20rem;
  height: 7.25rem;
  border-radius: 0.625rem;
  margin-top: 1.25rem;
  ${laptop}{
    width: 12rem;
    height: 14.750rem;
    margin-top: -4rem;
  }
  ${desktop}{
    width: 13rem;
  }
`;
export const ImageReviewsLeftDashBoardUpMobile = styled.img`
  width: 20rem;
  height: 7.25rem;
  border-radius:  0.625rem;
  margin-top: 1.25rem;
  ${laptop}{
    width: 12rem;
    height: 14.750rem;
    margin-top: -4rem;
  }
  ${desktop}{
    width: 13rem;
  }
`;
export const TextUnderImagesLeftDashBoardUpMobile = styled.h2`
  margin: 4.25rem 0 0 1.25rem;
  font-size: 1.875rem;
  font-weight: 600;
  font-family: 'Inter', sans-serif;
  ${laptop}{
    margin: -3.25rem 0 0 1.25rem;
    font-size: 1.275rem;
  }
`;
export const ContainerFirstSquareRightHirings = styled.div`
  display: block;
  width: 30.938rem;
  height: 51.25rem;
  background: transparent;
  overflow-x: hidden;
`;
export const ContainerLogoAndNameCompany = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  p{
    margin-left: 0.625rem;
    font-size: 1.875rem;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    color: #460BFF;
    ${laptop}{
      font-size: 1.275rem;
      margin-top: 0.5rem;
    }
  }
`;
export const ImageLogoCompany = styled.img`
  width: 2.813rem;
  height: 2.813rem;
  margin-left: 21.75rem;
  ${laptop}{
    margin: -0.5rem 0 0 20.75rem;
  }
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10%;
  padding: 1rem;
  ${desktop}{
    margin-left: 5rem;
  }
  ${bigdesk}{
    margin-left: 7rem;
  }
`;
export const SearchContainer = styled.div`
  height: 2rem; 
  width: 80%;
  margin-top: -0.5rem;
  margin-left: 1.5rem;
  input{
    display: flex;
    align-items: center;
    justify-content: left; 
    height: 2rem; 
    width: 80%; 
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
  gap: 0.5rem;
  margin-top: -0.1rem;
  margin-right: -19.75rem;
  cursor: pointer;
  p {
    display: flex;
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
    font-family: 'Inter', sans-serif;
  }
  img {
    width: 1.675rem;
    height: 1.675rem;
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
  margin: 1rem 0 0 1rem;
  width: 15.563rem;
  height: 4.063rem;
  ${desktop}{
    margin-left: 2.5rem;
  }
`;
export const ContainerGraphsUpMobileFirst = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 25vw;
  height: 20vh;
  margin: auto;
  margin-top: 1.25rem;
  margin-left: -1.8rem;
  ${laptop}{
    margin-top: -13.25rem;
    margin-bottom: 8rem;
    width: 20vw;
    height: 10vh;
  }
  ${desktop}{
    margin-left: 2rem;
  }
`;
export const ContainerGraphsUpMobile = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 25vw;
  height: 20vh;
  margin: auto;
  margin-top: 1.25rem;
  margin-left: -1.8rem;
  ${laptop}{
    margin-top: -3.25rem;
    margin-bottom: 6rem;
    width: 20vw;
    height: 10vh;
  }
  ${desktop}{
    margin-left: 2rem;
  }
`;
export const GraphicsUpMobile = styled.img`
  width: 15vw;
  margin-left: 3rem;
  margin-top: 1.25rem;
`;
export const GraphicsPercentageUpMobile = styled.div`
  width: 10vw;
  display: block;
  h2{
    font-size: 3rem;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    color: #8FFF00;
    ${laptop}{
      font-size: 1rem;
    }
  }
  h3{
    font-size: 3rem;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    color:#ff0000;
    ${laptop}{
      font-size: 1rem;
    }
  }
  p{
    font-size: 1.25rem;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    ${laptop}{
      font-size: 0.75rem;
    }
  }
  #rev{
    font-size: 1.25rem;
    font-weight: 500;
    font-family: 'Roboto', sans-serif;
    padding-left: 1.25rem;
    ${laptop}{
      font-size: 0.75rem;
      padding-left: 0.3rem;
    }
  }
`;
export const TitleCommentAndMessagesUpMobile = styled.h2`
  width: 40vw;
  height: 1.875rem;
  margin-left: 3.5rem;
  font-size: 1.875rem;
  font-weight: 800;
  font-family: 'Inter', sans-serif;
  color: #460BFF;
  margin-top: 2rem;
  ${laptop}{
    margin-left: 1.5rem;
  }
  ${desktop}{
    margin-left: 6rem;
  }
  ${bigdesk}{
    margin-left: 10.5rem;
  }
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
  margin-top: 16vh;
  width: 23vw;
  height: 48vh;
  border-bottom: 0.063rem solid #FFF;
  select{
    font-size: 1rem;
    width: 14.625rem;
    height: 1.5rem;
    margin-bottom: -1rem;
    border: none;
    background: transparent;
    color: #FFF;
  }
`;
export const ContainerSecondSquareSelects = styled.div`
  position: fixed;
  display: block;
  margin-top: 70vh;
  width: 23vw;
  height: 25vh;
  select{
    font-size: 1rem;
    width: 14.625rem;
    height: 1.5rem;
    margin-bottom: -1rem;
    border: none;
    background: transparent;
    color: #FFF;
  }
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
  width: 10.688rem;
  height: 3.813rem;
  margin: 90vh 0 0 2.75rem;
  cursor: pointer;
  ${bigdesk}{
    width: 11.688rem;
    height: 4.313rem;
    margin-left: 4rem;
  }
`;