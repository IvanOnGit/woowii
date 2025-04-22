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

export const ContainerFullPage = styled.div`
    position: relative;
    display: block;
    width: 100vw;
    height: 330vh;
    overflow-x: hidden;
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
    left: 1rem;
  }
  ${mobileLarge}{
    left: 1rem;
  }
  ${tablet}{
    justify-content: space-around;
  }
`;
export const AvatarToMobile = styled.div`
    display: flex;
    width: 2rem;
    height: 2rem;
    img{
        width: 2rem;
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
        font-weight: 500;
        font-family: 'Inter', sans-serif;
        ${mobileLittle}{
            width: 8rem;
        }
        ${mobileLarge}{
          font-size: 0.85rem;
          width: 9rem;
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
      margin-top: 0.9rem;
    }
    ${tablet}{
      width: 1.688rem;
      height: 1.688rem;
    }
    ${laptop}{
        margin-top: 1rem;
    }
  }
`;
export const ContainerTitlePostulation = styled.div`
    position: relative;
    display: flex;
    h2{
        font-size: 1.25rem;
        font-weight: 600;
        font-family: 'Inter', sans-serif;
        color: #460BFF;
        margin-left: 2rem;
        ${tablet}{
            font-size: 1.75rem; 
            margin-left: 13rem;
        }
        ${laptop}{
            font-size: 1.85rem; 
            margin-left: 17rem;
        }
        ${desktop}{
            font-size: 1.95rem; 
            margin-left: 31rem;
        }
    }
`;
export const ContainerImagenPostulacion = styled.div`
    position: relative;
    display: flex;
    width: 280px;
    height: 621px;
    margin-bottom: -3rem;
    filter: drop-shadow(0 0.25rem 0.5rem rgba(0, 0, 0, 0.3));
    ${mobileMedium}{
        margin-left: 2rem;
    }
    ${tablet}{
        margin-left: 6.5rem;
        width: 580px;
        height: 921px;
    }
    ${laptop}{
        margin-left: 8.5rem;
        width: 780px;
        height: 1121px;
    }
    ${desktop}{
        margin-left: 15rem;
        width: 980px;
        height: 1321px;
    }
`;
export const ImagenFondoPostulacion = styled.img`
    margin-top: -2rem;
    margin-left: 1rem;
    width: 280px;
    height: 621px;
    z-index: -1;
    ${tablet}{
        margin-left: 6.5rem;
        width: 580px;
        height: 921px;
    }
    ${laptop}{
        margin-left: 8.5rem;
        width: 780px;
        height: 1121px;
    }
    ${desktop}{
        margin-left: 15rem;
        width: 980px;
        height: 1321px;
    }
`;
export const ContainerImagenDatosDescriptivos = styled.div`
    position: relative;
    width: 204px;
    height: 86px;
    img{
        margin: 2.3rem 0 0 2rem;
        z-index: 0;
        cursor: pointer;
        ${mobileMedium}{
            margin-left: 3rem;
        }
        ${tablet}{
            margin-left: 15rem;
        }
        ${laptop}{
            margin-left: 19rem;
        }
        ${desktop}{
            margin-left: 32rem;
        }
    }
`;
export const ContainerImagenDatosEspecificos = styled.div`
    position: relative;
    width: 204px;
    height: 86px;
    img{
        margin: 1.1rem 0 0 5rem;
        z-index: 0;
        cursor: pointer;
        ${mobileMedium}{
            margin-left: 6rem;
        }
        ${tablet}{
            margin-left: 19rem;
        }
        ${laptop}{
            margin-left: 25rem;
        }
        ${desktop}{
            margin-left: 39rem;
        }
    }
`;
export const ContainerImagenDatosEmpresa = styled.div`
    position: relative;
    width: 204px;
    height: 86px;
    z-index: 0;
    img{
        margin-left: -1rem;
        margin-top: -4.5rem;
        cursor: pointer;
        ${tablet}{
            margin-top: 1rem;
        }
        ${laptop}{
            margin-top: 1rem;
        }
        ${desktop}{
            margin-top: 1rem;
        }
    }
`;
export const ContainerImagenDatosProducto = styled.div`
    position: relative;
    width: 204px;
    height: 86px;
    z-index: 0;
    img{
        margin-left: -2.5rem;
        margin-top: 3rem;
        cursor: pointer;
        ${tablet}{
            margin-top: 6rem;
        }
        ${laptop}{
            margin-top: 8rem;
        }
        ${desktop}{
            margin-top: 10rem;
        }
    }
`;
export const ContainerImagenDatosCultura = styled.div`
    position: relative;
    width: 204px;
    height: 86px;
    z-index: 0;
    img{
        margin-left: -4.5rem;
        margin-top: 7.3rem;
        cursor: pointer;
        ${tablet}{
            margin-top: 11.7rem;
        }
        ${laptop}{
            margin-top: 15rem;
        }
        ${desktop}{
            margin-top: 19rem;
        }
    }
`;
export const ContainerImagenDatosEquipo = styled(ContainerImagenDatosCultura)`
    img{
        margin-top: 11.3rem;
        ${tablet}{
            margin-left: -5.5rem;
            margin-top: 18rem;
        }
        ${laptop}{
            margin-left: -6.5rem;
            margin-top: 23rem;
        }
        ${desktop}{
            margin-top: 28rem;
        }
    }
`;
export const ContainerImagenRelacionTarea = styled(ContainerImagenDatosCultura)`
    img{
        margin-top: 14.5rem;
        ${tablet}{
            margin-left: -5.5rem;
            margin-top: 23rem;
        }
        ${laptop}{
            margin-left: -7.5rem;
            margin-top: 29rem;
        }
        ${desktop}{
            margin-left: -8rem;
            margin-top: 34rem;
        }
    }
`;
export const ContainerImagenDatosCarrera = styled(ContainerImagenDatosCultura)`
    img{
        margin-top: 18.5rem;
        ${tablet}{
            margin-left: -6.5rem;
            margin-top: 29rem;
        }
        ${laptop}{
            margin-left: -9.5rem;
            margin-top: 36rem;
        }
        ${desktop}{
            margin-left: -10rem;
            margin-top: 42rem;
        }
    }
`;
export const ContainerImagenRelacionEquipo = styled(ContainerImagenDatosCultura)`
    img{
        margin-top: 24.5rem;
        ${tablet}{
            margin-left: -7.5rem;
            margin-top: 36rem;
        }
        ${laptop}{
            margin-left: -10.5rem;
            margin-top: 46rem;
        }
        ${desktop}{
            margin-left: -12rem;
            margin-top: 55rem;
        }
    }
`;
export const ContainerImagenCompetencias = styled(ContainerImagenDatosCultura)`
    img{
        margin-top: 30.5rem;
        ${tablet}{
            margin-left: -8.5rem;
            margin-top: 46rem;
        }
        ${laptop}{
            margin-left: -12.5rem;
            margin-top: 57rem;
        }
        ${desktop}{
            margin-left: -14rem;
            margin-top: 67rem;
        }
    }
`;
export const ContainerNumeroX = styled.section`
    position: relative;
    display: block;
    top: 4rem;
    left: 1.5rem;
    ${mobileMedium}{
       left: 3rem;
    }
    ${tablet}{
       left: 5rem;
    }
    ${desktop}{
       left: 15rem;
    }
    h2{
        margin-top: 1rem;
        font-size: 0.938rem;
        font-weight: 800;
        font-family: 'Inter', sans-serif;
        max-width: 250px;
        &:target{
            background: #460BFF; 
            color: #FFF;
            border-radius: 2.813rem;
            padding: 0.8rem;
        }
        ${tablet}{
            font-size: 1.75rem;
            max-width: 600px;
        }
        ${laptop}{
            font-size: 1.85rem;
            max-width: 800px;
        }
        ${desktop}{
            font-size: 2rem;
            max-width: 1000px;
        }
    }
    p{
        font-size: 0.75rem;
        font-weight: 500;
        font-family: 'Inter', sans-serif;
        max-width: 250px;
        ${tablet}{
            font-size: 1.75rem;
            max-width: 600px;
        }
        ${laptop}{
            font-size: 1.85rem;
            max-width: 800px;
        }
        ${desktop}{
            font-size: 2rem;
            max-width: 1000px;
        }
    }
    ul{
        font-size: 0.75rem;
        font-weight: 500;
        font-family: 'Inter', sans-serif;
        max-width: 250px;
        margin-left: 1rem;
        ${tablet}{
            font-size: 1.75rem;
            max-width: 600px;
        }
        ${laptop}{
            font-size: 1.85rem;
            max-width: 800px;
        }
        ${desktop}{
            font-size: 2rem;
            max-width: 1000px;
        }
    }
    
`;
export const ContainerFooterToMobile = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  top: 30%;
  width: 100vw;
  height: 8vh;
  background: #460BFF;
  ${mobileLittle}{
    margin-top: 21%;
    margin-left: -1.5rem;
  }
  ${mobileMedium}{
    top: 28%;
    margin-left: -3rem;
  }
  ${mobileLarge}{
    top: 26%;
  }
  ${tablet}{
    top: 28%;
    height: 10vh;
    margin-left: -5rem;
  }
  ${desktop}{
    margin-left: -15rem;
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