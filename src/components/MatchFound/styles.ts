import styled from "styled-components"

const WidthMeasurementIphone12Pro = 24.375;
const WidthMeasurementDesktop = 90;
export const mobile = `@media(min-width:${WidthMeasurementIphone12Pro}rem)`
export const desktop = `@media(min-width:${WidthMeasurementDesktop}rem)`

// export const Container = styled.div`
//     display: flex;
//     justify-content: center;
//     background-color: #70C800;
//     height: 100vh;
//     font-family: 'Roboto', sans-serif;

//     h1 {
//         position: absolute;
//         margin-top: 30rem;
//         color: white;
//         font-weight: 300;
//         text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
//     }

//     input {
//         position: absolute;
//         margin-top: 38rem;
//         padding: 1rem;
//         border-radius: 1rem;
//         border: none;
//         font-weight: 300;
//         z-index: 3;
//         text-align: center;
//     }
// `

// export const BackgroundZigZag = styled.img`
//     width: 100%;
//     z-index: 1;
// `;

// export const ItsAMatch = styled.img`
//     z-index: 2;
//     width: 14rem;
//     margin-top: 7rem;
//     position: absolute;
// `;

// export const MatchHandShake = styled.img`
//     z-index: 2;
//     width: 20rem;
//     margin-top: 14rem;
//     position: absolute;
// `;

// export const WhatWooWiiConnects = styled.img`
//   z-index: 2;
//     width: 20rem;
//     margin-top: 33rem;
//     position: absolute;
// `;

// export const BlueLogoWoowii = styled.img`
//     z-index: 2;
//     width: 10rem;
//     margin-top: 42rem;
//     position: absolute;
// `;

export const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: #70C800;
    height: 100vh;
    font-family: 'Roboto', sans-serif;

    h1 {
        position: absolute;
        margin-top: 30rem;
        color: white;
        font-weight: 300;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        color: #460BFF;
        ${mobile}{
            margin-top: 25rem;
            font-size: 1.25rem;
        }
    }

    input {
        position: absolute;
        margin-top: 38rem;
        padding: 1rem;
        border-radius: 2.813rem;
        border: none;
        font-weight: 300;
        z-index: 3;
        text-align: center;
        ${mobile}{
            margin-top: 36rem;
            padding: 1rem 3rem;
        }
    }
    button{
        position: relative;
        padding: 0.5rem 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.25rem;
        font-weight: 700;
        font-family: 'Roboto', sans-serif;
        border-radius: 2.817rem ;
        margin: 44rem 0 0 -14rem;
        background: #460BFF;
        color: #FFF;
        cursor: pointer;
        z-index: 3;
        ${mobile}{
            margin-left: -15.5rem;
        }
        ${desktop}{
            margin-left: -56.5rem;
        }
    }
`
export const UpIcons = styled.div`
    position: fixed;
    top: 1rem;
    left: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 17.5rem;
    z-index: 2;
    ${desktop}{
        left: 2rem;
        gap: 97.5rem;
    }
`;
export const BackgroundZigZag = styled.img`
    width: 100%;
    z-index: 0;
    ${desktop}{
        content: url(./images/greenBackForBigScreen.svg);
    }
`;

export const ItsAMatch = styled.img`
    z-index: 2;
    width: 14rem;
    margin-top: 7rem;
    position: absolute;
    ${mobile}{
        margin-top: 4rem;
        background: transparent;
    }
`;

export const MatchHandShake = styled.img`
    z-index: 2;
    width: 20rem;
    margin-top: 14rem;
    position: absolute;
    ${mobile}{
        margin-top: 10rem;
    }
`;

export const WhatWooWiiConnects = styled.img`
    z-index: 2;
    width: 18rem;
    margin-top: 33rem;
    position: absolute;
    ${mobile}{
        margin-top: 30rem;
    }
`;

export const BlueLogoWoowii = styled.img`
    z-index: 1;
    width: 10rem;
    margin-top: 42rem;
    position: absolute;
    ${mobile}{
        margin-top: 40rem;
    }
`;