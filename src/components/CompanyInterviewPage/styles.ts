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

export const ContainerBackInterview = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url(/images/backInterview.svg);
    background-size: cover;
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
export const ContainerBackInterviewMobile = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    background-image: url(/images/backInterview.svg);
    background-size: cover;
    overflow: hidden;
    ${mobileLittle}{
        display: flex;
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
`;
export const PercentageMatchImage = styled.img`
    display: flex;
    margin: auto;
    padding-top: 4.375rem;
    
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
        width: 1000px;
        height: 800px;
        margin-top: -6rem;
    }
    ${desktop}{
        display: flex;
        width: 1300px;
        height: 800px;
        margin-top: -5rem;
    }
    ${bigdesk}{
        display: flex;
        width: 1800px;
        height: 800px;
        margin-top: 3rem;
    }
    
`;
export const PercentageImageMobile = styled.img`
    display: flex;
    margin: -5rem 0 0 -1rem;
    width: 500px;
    height: 800px;
    ${laptop}{
        display: none;
    }
    ${laptop}{
        display: none;
    }
    ${laptop}{
        display: none;
    }
    ${mobileLittle}{
        display: flex;
    }
    ${tablet}{
        margin: 1rem 0 0 2rem;
        width: 700px;
        height: 600px;
    }
`;
export const BtnInterviewPage = styled.img`
    display: flex;
    margin: auto;
    cursor: pointer;
    position: absolute;
    margin-left: 30rem;
    margin-top: -5rem;
    ${mobileLittle}{
        display: none;
    }
    ${laptop}{
        display: flex;
        margin-left: -40rem;
        margin-top: 40rem;
    }
    ${desktop}{
        display: flex;
        margin-left: -55rem;
        margin-top: 47rem;
    }
    ${bigdesk}{
        display: flex;
        margin-left: -87rem;
        margin-top: 60rem;
    }
`;
export const BtnInterviewPageMobile = styled.img`
    display: flex;
    cursor: pointer;
    position: relative;
    width: 300px;
    margin-left: -29.5rem;
    margin-top: 40rem;
    ${mobileMedium}{
        margin-left: -27.5rem;
    }
    ${tablet}{
        margin-left: -30.5rem;
    }
`;