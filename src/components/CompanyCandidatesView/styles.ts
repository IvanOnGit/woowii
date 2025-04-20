import styled from "styled-components";
import {keyframes} from "styled-components"

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

export const MenuAside = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 19rem;
  height: 100vh;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  padding: 1rem;
  overflow-y: auto;
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
    position: fixed;
    display: flex;
    width: 25vw;
    border-right: 0.063rem solid #FFF;
  }
  ${desktop}{
    position: fixed;
    display: flex;
    width: 23vw;
    border-right: 0.063rem solid #FFF;
  }
  ${bigdesk}{
    width: 20vw;
  }
  h1{
    ${laptop}{
      margin: -0.5rem 0 -0.5rem 0;
    }
  }
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
export const FirstMenuAsideItem = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;
  img {
    width: 10rem;
    ${desktop}{
      width: 15rem;
      margin-left: -1rem;
    }
  }
  ${laptop}{
    width: 26.6vw;
    border-right: 0.063rem solid #FFF;
  }
  ${desktop}{
    width: 26.6vw;
    border-right: 0.063rem solid #FFF;
  }
`;
export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: grey;
  margin: 1rem 0;
`;
export const SecondDropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  ${laptop}{
    margin-top: -1rem;
  }
`;
export const SecondDropdownButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  color: white;
  font-size: 1rem;
  padding: 0.5rem;
  cursor: pointer;
  width: 100%;
  text-align: left;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
export const SecondDropdownList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
`;
export const SecondDropdownItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem 1rem;
  input {
    accent-color: white;
  }
  label {
    font-size: 0.9rem;
  }
`;
export const MainContent = styled.div`
  margin-left: 21rem;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  font-family: 'Roboto', sans-serif;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: black;
  ${mobileLittle}{
    margin-top: 2rem;
    margin-left: 0;
  }
  ${laptop}{
    margin-left: 17rem;
    width: 70vw;
    height: 105vh;
  }
  ${desktop}{
    margin-left: 22rem;
    width: 72vw;
    height: 105vh;
  }
  ${bigdesk}{
    margin-left: 30rem;
    width: 76vw;
    height: 105vh;
  }
&::-webkit-scrollbar {
  width: 6px;
}
&::-webkit-scrollbar-track {
  background: #f1f1f1;
}
&::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 3px;
}
&::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`;
export const CandidateCard = styled.div`
  background-color: #3b1beb; 
  color: white;
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
  ${mobileLittle}{
    margin-left: -1rem;
    margin-right: 1rem;
  }
  ${mobileMedium}{
    margin-left: 1rem;
  }
  ${tablet}{
    margin-top: 5rem;
    margin-bottom: -3rem;
  }
  ${laptop}{
    margin-top: 5rem;
    margin-bottom: 0rem;
    padding: 0.5rem;
  }
  ${bigdesk}{
    margin-top: 5rem;
    margin-bottom: 15rem;
  }
`;
export const CandidateHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobileLittle}{
    justify-content: center;
    width: 15.375rem;
  }
`;
export const CandidateName = styled.h2`
  font-size: 1.4rem;
  font-weight: bold;
  ${mobileLarge}{
    margin-left: 2rem;
  }
`;
export const MoreOptions = styled.div`
  cursor: pointer;
`;
export const SkillsContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 10px;
`;
export const SkillTag = styled.div`
  background-color: #d9d9d9;
  color: black;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 0.9rem;
`;
export const CandidateInfo = styled.div`
  margin-top: 10px;
  p {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 5px 0;
  }
`;
export const DropdownMenu = styled.div`
  background-color: black;
  color: white;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1;
  
`;
export const DropdownItem = styled.div`
  padding: 0.5rem 1rem;
  cursor: pointer;
  ${mobileLittle}{
    padding-right: 3rem;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
export const ContainerUpSearhAndItemsMobile = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  top: -1rem;
  left: 0rem;
  width: 100vw;
  height: 7vh;
  background: #000;
  ${mobileLittle}{
    top: -0.5rem;
  }
  ${mobileMedium}{
    width: 101vw;
    top: -0.5rem;
    padding-left: 0.5rem;
  }
  ${mobileLarge}{
    left: 0rem;
    top: -0.5rem;
    padding-left: 0.5rem;
  }
  ${tablet}{
    justify-content: space-around;
    height: 8vh;
  }
  ${laptop}{
    position: fixed;
    width: 72vw;
    left: 18.1rem;
    top: 0rem;
    background: #000;
  }
  ${desktop}{
    position: fixed;
    width: 74vw;
    left: 23rem;
    top: 0rem;
    background: #000;
  }
  ${bigdesk}{
    position: fixed;
    width: 77.5vw;
    left: 30rem;
    top: 0rem;
    background: #000;
  }
`;
export const AvatarToMobile = styled.div`
    display: flex;
    width: 2rem;
    height: 2rem;
    img{
        width: 1.8rem;
        height: 2rem;
        ${mobileLarge}{
            width: 2.5rem;
            height: 2.5rem;
        }
        ${tablet}{
            width: 3.5rem;
            height: 3.5rem;
        }
    }
    ${mobileMedium}{
      margin-left: -2rem;
    }
    ${mobileLarge}{
      margin-left: -1rem;
    }
    ${tablet}{
      margin-left: -1rem;
    }
`;
export const SearchUpToMobile = styled.div`
    display: flex;
    width: 10rem;
    height: 1rem;
    ${mobileLarge}{
      margin-left: 2rem;
    }
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
        font-weight: 700;
        font-family: 'Inter', sans-serif;
        background: #000;
        border: 0.063rem solid #FFF;
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
        &::placeholder{
            font-size: 0.75rem;
            font-weight: 500;
            color: #FFF;
            ${mobileLarge}{
            font-size: 0.85rem;
            }
            ${tablet}{
            font-size: 0.938rem;
            }
        } 
    }
    
`;
export const HeaderItemsToMobile = styled.div`
  display: flex;
  gap: 0.25rem;
  margin-top: 0.5rem;
  cursor: pointer;
  ${tablet}{
    margin-right: 2rem;
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
    color: #FFF;
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
      margin-top: 0.8rem;
    }
    ${mobileLarge}{
      width: 1.563rem;
      height: 1.563rem;
    }
    ${tablet}{
      width: 1.688rem;
      height: 1.688rem;
    }
  }
`;
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
export const users = [
  { id: "User 00124GF", role: "Graphic Designer" },
  { id: "User 00245HG", role: "Web Developer" },
  { id: "User 00378JK", role: "UX/UI Designer" },
  { id: "User 00489LM", role: "Software Engineer" },
  { id: "User 00567OP", role: "Product Manager" },
  { id: "User 00678QR", role: "Data Analyst" },
  { id: "User 00789ST", role: "Marketing Specialist" },
  { id: "User 00890UV", role: "SEO Expert" },
  { id: "User 00901WX", role: "Content Writer" },
  { id: "User 01012YZ", role: "Social Media Manager" },
];
export const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`;
export const Popup = styled.div`
  position: relative;
  width: 15.875rem;
  height: 21rem;
  padding: 1.25rem;
  background: #460BFF;
  color: #FFF;
  border-radius: 0.625rem;
  box-shadow: 0px 0.25rem 0.625rem rgba(0, 0, 0, 0.1);
  animation: ${slideIn} 0.5s forwards;
  ${tablet}{
    width: 25.875rem;
    height: 30rem;
  }
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 0.625rem;
  right: 0.625rem;
  background: none;
  border: none;
  color: #8FFF00;
  font-size: 1.25rem;
  cursor: pointer;
`;
export const TextArea = styled.textarea`
  width: 95%;
  height: 14.25rem;
  margin-top: 0.625rem;
  padding: 0.625rem;
  border: 0.063rem solid #ccc;
  border-radius: 0.313rem;
  font-size: 0.875rem;
  resize: none;
  ${tablet}{
    height: 24.25rem;
  }
`;
export const CardContact = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 4.125rem;
  margin-top: -2.5rem;
  width: 8.125rem;
  height: 1.25rem;
  font-size: 1rem;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  border-radius: 2.438rem;
  cursor: pointer;
  background: #FFF;
  color:  #460BFF ;
  &:hover{
    background: #8FFF00;
    color: #000;
  }
  ${mobileLarge}{
    margin-left: 7.125rem;
  }
  ${laptop}{
    margin: -0.625rem 0 0 6.125rem;
    width: 6.25rem;
    height: 1.25rem;
  }
`;
export const ContainerFooterToMobile = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  top: 1.2rem;
  left: -1.9rem;
  width: 100vw;
  height: 8vh;
  background: #460BFF;
  ${mobileMedium}{
    top: 3rem;
    margin-left: 0rem;
  }
  ${mobileLarge}{
    top: 3rem;
  }
  ${tablet}{
    top: 25rem;
    height: 10vh;
    margin-left: -22rem;
  }
  ${laptop}{
    display: none;
  }
  ${desktop}{
    display: none;
  }
  ${bigdesk}{
   display: none;
  }
  img{
    margin-top: -3rem;
    width: 4.438rem;
    height: 4.438rem;
    cursor: pointer;
    ${tablet}{
      margin-top: -5rem;
      width: 6rem;
      height: 6rem; 
    }
  }
  .items{
    cursor: pointer;
    ${tablet}{
      width: 2.5rem;
      height: 2.5rem;
    }
  }
`;
export const BtnNextPage = styled.button`
  position: fixed;
  left: 8rem;
  top: 53rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  padding: 0.325rem 0.875rem;
  border-radius: 2.813rem;
  background: #460BFF;
  color: #FFF;
  ${laptop}{
    left: 6rem;
    top: 46.5rem;
  }
  ${desktop}{
    left: 8rem;
    top: 48.5rem;
  }
  ${bigdesk}{
    padding: 0.625rem 1.125rem;
    left: 12rem;
    top: 55.5rem;
  }
  &:hover{
    background: #8FFF00;
    color: #000; 
  }
`;