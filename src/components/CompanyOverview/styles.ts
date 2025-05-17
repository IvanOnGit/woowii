import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainContainer = styled.div`
    overflow-y: auto;
    overflow-x: hidden;
    height: 100vh;
    display: flex;
    justify-content: center;
    gap: 13rem;
    font-family: 'Roboto', sans-serif;
    padding-left: 19rem; /* Añadir un padding izquierdo igual al ancho del menú */

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

  .vertical {
      gap: 1rem;
  }

  h2 {
    color: blue;
    font-family: 'Roboto', sans-serif;
  }
  
  /* Ajustes responsive */
  @media (max-width: 768px) {
    padding-left: 0; /* Eliminar el padding en dispositivos móviles */
    gap: 2rem; /* Reducir el espacio entre columnas */
    flex-direction: column; /* Cambiar a dirección columna */
    padding: 1rem; /* Añadir padding general */
    height: 110rem;
  }
`;

export const InnerContainerOne = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OverviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 1rem;
  margin-bottom: 1rem;

  button {
    background-color: blue;
    color: white;
    border: none;
    border-radius: 0.5rem;
    text-align: center;
    padding: 0.5rem;
    cursor: pointer;
  }
`;

export const InnerContainerTwo = styled.div`
  display: flex;
  flex-direction: column;

  .duo {
    display: flex;
    gap: 5rem;
    align-items: center;
    margin-top: 4rem;

    button {
      height: 2.5rem;
      background-color: blue;
      color: white;
      border: none;
      border-radius: 0.5rem;
      text-align: center;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    
    @media (max-width: 768px) {
      gap: 4rem;
      align-items: center;
      margin-top: 2rem;
    }
  }
`;

export const ContainerWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 10%;
  padding: 1rem;
  justify-content: center;
  gap: 3rem;
  margin-left: 18rem;
  
  @media (max-width: 768px) {
    margin-left: 0;
    flex-direction: column;
    gap: 1rem;
    height: auto;
    align-items: center;
  }
`;

export const HeaderItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;

  p {
    display: flex;
    margin: 0; 
  }

  img {
    width: 1rem;
    height: 1rem;
    margin-right: 0.5rem;
  }
  
  @media (max-width: 768px) {
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const MenuAside = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 19rem;
  height: 100vh;
  background-color: blue;
  border-right: 1px solid black;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: start;
  font-family: 'Roboto', sans-serif;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 1000; /* Asegurar que esté por encima de otros elementos */

  /* Estilizar el scrollbar */
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

  span {
    width: 100%;
    background-color: white;
    color: white;
    text-align: center;
    justify-content: center;
    align-content: center;
    padding: 0.02rem;
  }

  a {
    text-decoration: none;
    color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 0; /* Colapsar el menú */
    transform: translateX(-100%); /* Mover fuera de la vista */
    transition: transform 0.3s ease;
    
    &.open {
      width: 19rem;
      transform: translateX(0); /* Mostrar cuando esté abierto */
    }
  }
`;

export const FirstMenuAsideItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  height: 12rem;

  img {
    width: 10rem;
    height: 4rem;
  }

  h3 {
    margin: 0;
    font-size: 1rem;
    font-weight: 500;
  }

  span {
    margin-top: 1rem;
  }
`;

export const UserAndImageCombo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
  }

  h3 {
    font-size: 1.3rem;
  }
`;

export const ThirdMenuAsideItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 25%;

  button {
    width: 80%;
    padding: 0.5rem;
    border: 1px solid black;
    background-color: transparent;
    border-radius: 1rem;
    color: black;
    cursor: pointer;
    font-size: 0.8rem;
  }

  button:hover {
    background-color: #f0f0f0;
  }
`;

export const DropdownContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  color: white;
`;

export const DropdownButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  font-size: 1rem;
  background: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
`;

export const DropdownList = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  border-radius: 5px;
  margin-top: 5px;
  gap: 1rem;
  font-weight: initial;
`;

export const DropdownItem = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 1rem;
  color: white;

  &:hover {
    background: #f0f0f0;
  }
`;

export const SecondDropdownContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  font-weight: bold;
`;

export const SecondDropdownButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  font-size: 1rem;
  background: transparent;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
`;

export const SecondDropdownList = styled.div`
  display: flex;
  flex-direction: column;
  background: transparent;
  border-radius: 5px;
  margin-top: 5px;
  gap: 1rem;
  font-weight: initial;
`;

export const SecondDropdownItem = styled.div`
  padding: 0.5rem;
  cursor: pointer;
  text-align: center;
  border: 1px solid #ddd;
  border-radius: 1rem;

  input {
    border: none;
  }

  &:hover {
    background: #f0f0f0;
  }
`;

export const HelpButton = styled.button`
    background-color: white;
    width: 50%;
    margin-left: 5rem;
    margin-bottom: 1rem;
    border-radius: 1rem;
    border: none;
    color: blue;
    padding: 0.5rem;
`;

export const Container = styled.div`
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-left: 25rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    margin-left: 1rem;
  }
`;

export const SearchBar = styled.input`
  padding: 0.5rem;
  border-radius: 1rem;
  width: 20rem;
  border: 1px solid black;
  background-color: transparent;
  text-align: center;
  margin-top: 1rem;
  margin-right: 2rem;
  
  @media (max-width: 768px) {
    width: 90%;
    margin-right: 0;
  }
`;

export const ContainerLogoCompAndUser = styled.div`
    display: flex;
    margin-top: 1rem;
    margin-right: 2rem;
    p{
        font-size: 1.25rem;
        font-weight: 700;
        font-family: 'Roboto', sans-serif;
        color: #460BFF;
        margin-top: 1.875rem;
    }
    
    @media (max-width: 768px) {
      margin-right: 0;
      flex-direction: column;
      align-items: center;
      
      p {
        margin-top: 0.5rem;
      }
    }
`;

export const Avatar = styled.div`
  flex-shrink: 0;
  height: 5rem;
  border-radius: 50%;
  overflow: hidden;

  img {
    margin-top: 1rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: 768px) {
    height: 3.5rem;
    
    img {
      margin-top: 0;
    }
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const HiringsInnerContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: 1rem;
  padding: 1rem;
  
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const StyledNotification = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: red;
  border-radius: 50%;
  color: white;
  padding: 2px 6px;
  font-size: 12px;
`;

export const NotificationContainer = styled.div`
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  background: #fff;
  padding: 2rem;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  z-index: 9999;
  font-family: 'Roboto', sans-serif;
  
  @media (max-width: 768px) {
    width: 80%;
    padding: 1rem;
  }
`;

export const NotificationButton = styled.button`
  margin-top: 1rem;
  cursor: pointer;
  background-color: blue;
  color: white;
  border-radius: 1rem;
  border: none;
  padding: 0.5rem;
`;

export const HiringsInProgress = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  h3 {
    text-align: center;
    width: 5rem;
    text-align: left;
  }

  button {
    height: 2rem;
    background-color: blue;
    color: white;
    border: none;
    border-radius: 0.5rem;
    text-align: center;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 5rem;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    
    h3 {
      width: 100%;
    }
  }
`;

/* Nuevo botón para controlar el menú en móvil */
export const MenuToggle = styled.button`
  display: none;
  position: fixed;
  top: 1rem;
  left: 1rem;
  padding: 0.5rem;
  background-color: blue;
  color: white;
  border: none;
  border-radius: 0.5rem;
  z-index: 1001;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: block;
  }
`;