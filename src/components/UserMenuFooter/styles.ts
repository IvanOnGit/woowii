import styled from "styled-components"

export const NavContainer = styled.div`
    display: none;
    @media(max-width: 768px){
        background: #75B300;
        width: 393px;
        height: 62px;
        color:white;
        font-weight: bold;
        font-size:25px;
        display: flex;
    }
`;


export const NavButton = styled.div`
    display: flex;
    @media(max-width: 768px){
        margin-left: 22px;
        margin-right: 20px;
        margin-top: 12px;
    }
`;