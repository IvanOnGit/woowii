// import { Bell, Bookmark, BriefcaseBusiness, Mail, Menu } from "lucide-react";
// import { ContainerWrapper, Header, SearchContainer, HeaderItems, ContainerDivisionColumns, ContainerColumnSelects, ContainerColumnBody } from "./styles";
// import CompanyMotivationText from "../CompanyMotivationText/CompanyMotivationText";
// import StepsProfileCompany from "../StepsProfileCompany/StepsProfileCompany";

// export default function CompanyHome() {
//   return (
//     <>
//     <ContainerDivisionColumns>
//       <ContainerColumnSelects />
//       <ContainerColumnBody>
//       <ContainerWrapper>
//         <Header>
//           <SearchContainer>
//             Búsqueda
//           </SearchContainer>
//           <HeaderItems>
//             <p><img src="/images/wiibucks.png" alt="wiibucks" />50</p>
//             <p><img src="/images/wiibucks.png" alt="wiibucks" />00</p>
//             <Bell />
//             <Mail />
//             <BriefcaseBusiness />
//             <Bookmark />
//             <Menu />
//           </HeaderItems>
//         </Header>
//       </ContainerWrapper>
//       <CompanyMotivationText />
//       <StepsProfileCompany />
//       </ContainerColumnBody>
//     </ContainerDivisionColumns>
//     </>
//   );
// }
// import useMediaQuery from "./Hooks/CustomHook";

import { Bell, BriefcaseBusiness, Calendar, Clock, House, Image, Mail, Menu, Plus, Smile } from "lucide-react";
import { ActionsHome, 
    AvatarHome, 
    AvatarSelects, 
    AvatarToMobile, 
    BtnChatColumnSelects, 
    ButtonStartToMobile, 
    ContainerAllMobile, 
    ContainerAllUpToMobile, 
    ContainerAvatarAnsPublishHome, 
    ContainerBucksAndItems, 
    ContainerButtonStartToMobile, 
    ContainerColumnBody, 
    ContainerColumnSelects, 
    ContainerDegradedSquares, 
    ContainerFirstThreeSelects, 
    ContainerFooterToMobile, 
    ContainerGhostDiv, 
    ContainerImageAndTextDown, 
    ContainerImageAndTextOne, 
    ContainerImageAndTextThree, 
    ContainerImageAndTextTwo, 
    ContainerImageAndTextUp, 
    ContainerImageBlueDegradedBars, 
    ContainerLeftColumnBody, 
    ContainerLogo, 
    ContainerLogoCompAndUser, 
    ContainerMotivationAll, 
    ContainerMotivationImages, 
    ContainerMotivationImagesNumberOne, 
    ContainerMotivationImagesUpBlueText, 
    ContainerMotivationText, 
    ContainerNextButton, 
    ContainerNumberOneDown, 
    ContainerNumberOneUp, 
    ContainerNumberThreeDown, 
    ContainerNumberThreeUp, 
    ContainerNumberTwoDown, 
    ContainerNumberTwoUp, 
    ContainerRightColumnBody, 
    ContainerSearchCompanyHome, 
    ContainerSecondThreeSelects, 
    ContainerText, 
    ContainerTextBelowDegradedBars, 
    ContainerTextBelowPrincipalTitle, 
    ContainerThirdThreeSelects, 
    ContainerUpSearchAndItems, 
    ContainerUpSearhAndItemsMobile, 
    DegradedSquareToLeft, 
    DegradedSquareToRight, 
    HeaderItemsHome, 
    HeaderItemsToMobile, 
    ImageContainerNumberOne, 
    ImageContainerNumberThree, 
    ImageContainerNumberTwo, 
    ImageLogoBlue, 
    InputContainerHome, 
    PrincipalTitleToMobile, 
    PublishButton, 
    SearchCompanyHome, 
    SearchUpToMobile,
    StyledMotivationText} from "./styles";
import { Link } from "react-router-dom";

export default function CompanyHome() {
  return (
    <>
    <ContainerAllMobile>
        <ContainerUpSearhAndItemsMobile>
                <AvatarToMobile>
                    <img src="/images/avatarCompany1.svg" alt="Company Avatar" />
                </AvatarToMobile>
                <SearchUpToMobile>
                    <input type="text" placeholder="Búsqueda" />
                </SearchUpToMobile>
                <HeaderItemsToMobile>
                    <p><img src="/images/wiibucks.png" alt="wiibucks" />50</p>
                    <p><img src="/images/TrophyWiibucks.svg" alt="wiibucks" />00</p>
                    <Menu id="menu" fill="#000"width={20} height={20}/>
                </HeaderItemsToMobile> 
        </ContainerUpSearhAndItemsMobile>
        <PrincipalTitleToMobile>
            <h2>El talento ideal no cae del cielo y Roma no se hizo en dos días.</h2>
        </PrincipalTitleToMobile>
        <ContainerTextBelowPrincipalTitle>
                <ContainerGhostDiv />
                <ContainerText>
                    <p>Podríamos decirte que completarás un perfil irresistible en 3 minutos, pero te estaríamos mintiendo</p>
                    <p>Tu empresa tiene una historia, una cultura y un ADN único. Para atraer a los mejores talentos sin volverte loco filtrando CVs irrelevantes, tienes que ponerle cariño a tu perfil. </p>
                </ContainerText>
        </ContainerTextBelowPrincipalTitle>
        <ContainerImageBlueDegradedBars>
            <img src="/images/DegradedBarsToMobile.svg" alt="Degraded Blue Bars" />
        </ContainerImageBlueDegradedBars>
        <ContainerTextBelowDegradedBars>
            <h2>PASO A PASO PARA LA CREACIÓN DE TU PERFIL</h2>
        </ContainerTextBelowDegradedBars>
        <ContainerImageAndTextOne>
            <ContainerImageAndTextUp>
                <img src="/images/oneCompany.svg" alt="One Company Image" />
                <p>Tu historia vale más que un logo en LinkedIn.</p>
            </ContainerImageAndTextUp>
            <ContainerImageAndTextDown>
                <p>Las empresas se definen por su ADN, no solo por lo que venden. Comparte qué te hace única y deja que nuestro algoritmo te conecte con el talento ideal. </p>
            </ContainerImageAndTextDown>
        </ContainerImageAndTextOne>
        <ContainerImageAndTextTwo>
            <ContainerImageAndTextUp>
                <img src="/images/twoCompany.svg" alt="Two Company Image" />
                <p>Completa los detalles de tu oferta y deja que tu cultura hable por ti.</p>
            </ContainerImageAndTextUp>
            <ContainerImageAndTextDown>
                <p>El talento ideal no solo busca un salario, sino un propósito y un entorno donde encajar. Completa nuestro formato de ofertas y deja que nuestro algoritmo haga el match perfecto. </p>
            </ContainerImageAndTextDown>
        </ContainerImageAndTextTwo>
        <ContainerImageAndTextThree>
            <ContainerImageAndTextUp>
                <img src="/images/threeCompany.svg" alt="Three Company Image" />
                <p>Bienvenido a la nueva forma de encontrar talento.</p>
            </ContainerImageAndTextUp>
            <ContainerImageAndTextDown>
                <p>Gana Wiibucks mientras interactúas y canjéalos por features premium. Conéctate con talento de forma auténtica, inclusiva y sin filtros.</p>
            </ContainerImageAndTextDown>
        </ContainerImageAndTextThree>
        <ContainerButtonStartToMobile>
            <Link to={'/AboutYourDNA'}>
            <ButtonStartToMobile>COMENZAR</ButtonStartToMobile>
            </Link>
        </ContainerButtonStartToMobile>
        <ContainerFooterToMobile>
            <House className="items" fill="#FFF"  width={26} height={26}/>
            <BriefcaseBusiness className="items" fill="#FFF" width={26} height={26} />
            <img src="/images/rocketFooter.svg" alt="Rocket Footer Image" />
            <Mail className="items" fill="#FFF" width={26} height={26}/>
            <Bell className="items" fill="#FFF" width={26} height={26}/>
        </ContainerFooterToMobile>
    </ContainerAllMobile>
    <ContainerAllUpToMobile>
        <ContainerColumnBody>
            <ContainerRightColumnBody>

            </ContainerRightColumnBody>
            <ContainerLeftColumnBody>

            </ContainerLeftColumnBody>
        </ContainerColumnBody>
        <ContainerUpSearchAndItems>
            <ContainerSearchCompanyHome>
                <SearchCompanyHome placeholder="Búsqueda" />
            </ContainerSearchCompanyHome>
            <ContainerBucksAndItems>
                <HeaderItemsHome>
                    <p><img src="/images/wiibucks.png" alt="wiibucks" />50</p>
                    <p><img src="/images/TrophyWiibucks.svg" alt="wiibucks" />00</p>
                    <Bell className="items" stroke="#FFF" fill="#000" width={30} height={30}/>
                    <Mail className="items" stroke="#FFF" fill="#000" width={30} height={30}/>
                    <BriefcaseBusiness className="items" stroke="#FFF" fill="#000" width={30} height={30} />
                    <Menu id="items" fill="#000"width={20} height={20}/>
                </HeaderItemsHome>
            </ContainerBucksAndItems>
            <ContainerAvatarAnsPublishHome>
                <AvatarHome>
                    <img src="/images/avatarCompany1.svg" alt="Company Avatar Image" />
                </AvatarHome>
            <InputContainerHome>
            <input type="text" placeholder="Escribe una nueva publicación...." />
                    <ActionsHome>
                        <Smile size={20} />
                        <Image size={20} />
                        <Calendar size={20} />
                        <Plus size={20} />
                        <Clock size={20} />
                        <PublishButton>Publicar</PublishButton>
                    </ActionsHome>
            </InputContainerHome> 
            </ContainerAvatarAnsPublishHome>
        </ContainerUpSearchAndItems>
        
        <ContainerColumnSelects>
            <ContainerLogo>
                <ImageLogoBlue src="/images/LogoBlue.svg" alt="Blue Woowii's Logo" />
            </ContainerLogo>
            <ContainerLogoCompAndUser>
                <AvatarSelects>
                    <img src="/images/avatarCompany1.svg" alt="Company Avatar" />
                </AvatarSelects>
                <p>@UserEmpresa</p>
            </ContainerLogoCompAndUser>
            <ContainerFirstThreeSelects> 
                        <label htmlFor="culture">Cultura y Valores</label>
                        <select name="culture">
                            <option value="" selected>Elige una opción</option>
                            <hr></hr>
                            <option value="value1">Colaborativa</option>
                            <option value="value2">Competitiva</option>
                            <option value="value3">Estructurada</option>
                            <option value="value4">Relajada</option>
                            <option value="value5">Ritmo Acelerado</option>
                        </select>
                        <label htmlFor="culture">Estructura Organizativa</label>
                        <select name="culture">
                            <option value="" selected>Elige una opción</option>
                            <hr></hr>
                            <option value="value1">Jerárquica</option>
                            <option value="value2">Funcional</option>
                            <option value="value3">Matricial</option>
                            <option value="value4">Plana (Horizontal)</option>
                            <option value="value5">en Red</option>
                            <option value="value6">por Proyectos</option>
                            <option value="value7">Divisional</option>
                            <option value="value8">Circular</option>
                            <option value="value9">Hipocrática</option>
                            <option value="value10">Híbrida</option>
                        </select>
                        <label htmlFor="ambiente">Ambiente Laboral</label>
                        <select name="ambiente">
                            <option value="" selected>Elige una opción</option>
                            <hr></hr>
                            <option value="value1">Tradicional</option>
                            <option value="value2">Abierto(OpenOffice)</option>
                            <option value="value3">Híbrido</option>
                            <option value="value4">Remoto</option>
                            <option value="value5">Creativo</option>
                            <option value="value6">Colaborativo</option>
                            <option value="value7">Alta Presión</option>
                            <option value="value8">StartUp</option>
                            <option value="value9">Industrial</option>
                            <option value="value10">Servicio al Cliente</option>
                        </select>
                        <label htmlFor="ambiente">Forma de Liderar</label>
                        <select name="ambiente">
                            <option value="" selected>Elige una opción</option>
                            <hr></hr>
                            <option value="value1">Toma de decisiones centralizada</option>
                            <option value="value2">Cadena de mando clara</option>
                            <option value="value3">Supervisión directa</option>
                            <option value="value4">Procedimientos estandarizados</option>
                            <option value="value5">Control estricto</option>
                            <option value="value6">Comunicación formal</option>
                            <option value="value7">Roles definidos</option>
                            <option value="value8">Estructura piramidal</option>
                            <option value="value9">Autoridad vertical</option>
                            <option value="value10">Protocolos establecidos</option>
                            <option value="value11">Decisiones participativas</option>
                            <option value="value12">Consulta al equipo</option>
                            <option value="value13">Feedback bidireccional</option>
                            <option value="value14">Colaboración activa</option>
                            <option value="value15">Empoderamiento</option>
                            <option value="value16">Discusión abierta</option>
                            <option value="value17">Consenso grupal</option>
                            <option value="value18">Responsabilidad compartida</option>
                            <option value="value19">Iniciativas bottom-up</option>
                            <option value="value20">Votación en decisiones clave</option>
                        </select>
                    </ContainerFirstThreeSelects>
                    <ContainerSecondThreeSelects>
                        <label htmlFor="beneficios">Beneficios</label>
                        <select name="beneficios">
                            <option value="" selected>Elige una opción</option>
                            <hr></hr>
                            <option value="value1">Colaborativa</option>
                            <option value="value2">Competitiva</option>
                            <option value="value3">Estructurada</option>
                            <option value="value4">Relajada</option>
                            <option value="value5">Ritmo Acelerado</option>
                        </select>
                        <label htmlFor="culture">Diversidad e Inclusión</label>
                        <select  name="culture">
                            <option value="" selected>Elige una opción</option>
                            <hr></hr>
                            <option value="value1">Jerárquica</option>
                            <option value="value2">Funcional</option>
                            <option value="value3">Matricial</option>
                            <option value="value4">Plana (Horizontal)</option>
                            <option value="value5">en Red</option>
                            <option value="value6">por Proyectos</option>
                            <option value="value7">Divisional</option>
                            <option value="value8">Circular</option>
                            <option value="value9">Hipocrática</option>
                            <option value="value10">Híbrida</option>
                        </select>
                        <label htmlFor="ambiente">Comunicación</label>
                        <select name="ambiente">
                            <option value="" selected>Elige una opción</option>
                            <hr></hr>
                            <option value="value1">Tradicional</option>
                            <option value="value2">Abierto(OpenOffice)</option>
                            <option value="value3">Híbrido</option>
                            <option value="value4">Remoto</option>
                            <option value="value5">Creativo</option>
                            <option value="value6">Colaborativo</option>
                            <option value="value7">Alta Presión</option>
                            <option value="value8">StartUp</option>
                            <option value="value9">Industrial</option>
                            <option value="value10">Servicio al Cliente</option>
                        </select>
                        <label htmlFor="ambiente">Comunicaciones</label>
                        <select name="ambiente">
                            <option value="" selected>Elige una opción</option>
                            <hr></hr>
                            <option value="value1">Toma de decisiones centralizada</option>
                            <option value="value2">Cadena de mando clara</option>
                            <option value="value3">Supervisión directa</option>
                            <option value="value4">Procedimientos estandarizados</option>
                            <option value="value5">Control estricto</option>
                            <option value="value6">Comunicación formal</option>
                            <option value="value7">Roles definidos</option>
                            <option value="value8">Estructura piramidal</option>
                            <option value="value9">Autoridad vertical</option>
                            <option value="value10">Protocolos establecidos</option>
                            <option value="value11">Decisiones participativas</option>
                            <option value="value12">Consulta al equipo</option>
                            <option value="value13">Feedback bidireccional</option>
                            <option value="value14">Colaboración activa</option>
                            <option value="value15">Empoderamiento</option>
                            <option value="value16">Discusión abierta</option>
                            <option value="value17">Consenso grupal</option>
                            <option value="value18">Responsabilidad compartida</option>
                            <option value="value19">Iniciativas bottom-up</option>
                            <option value="value20">Votación en decisiones clave</option>
                        </select>
                    </ContainerSecondThreeSelects>
                    <ContainerThirdThreeSelects>
                        <label htmlFor="beneficios">Mis Datos</label>
                        <select name="beneficios">
                            <option value="" selected>Elige una opción</option>
                            <hr></hr>
                            <option value="value1">Colaborativa</option>
                            <option value="value2">Competitiva</option>
                            <option value="value3">Estructurada</option>
                            <option value="value4">Relajada</option>
                            <option value="value5">Ritmo Acelerado</option>
                        </select>
                        <label htmlFor="culture">Cuenta</label>
                        <select  name="culture">
                            <option value="" selected>Elige una opción</option>
                            <hr></hr>
                            <option value="value1">Jerárquica</option>
                            <option value="value2">Funcional</option>
                            <option value="value3">Matricial</option>
                            <option value="value4">Plana (Horizontal)</option>
                            <option value="value5">en Red</option>
                            <option value="value6">por Proyectos</option>
                            <option value="value7">Divisional</option>
                            <option value="value8">Circular</option>
                            <option value="value9">Hipocrática</option>
                            <option value="value10">Híbrida</option>
                        </select>
                        <label htmlFor="ambiente">Preguntas</label>
                        <select name="ambiente">
                            <option value="" selected>Elige una opción</option>
                            <hr></hr>
                            <option value="value1">Tradicional</option>
                            <option value="value2">Abierto(OpenOffice)</option>
                            <option value="value3">Híbrido</option>
                            <option value="value4">Remoto</option>
                            <option value="value5">Creativo</option>
                            <option value="value6">Colaborativo</option>
                            <option value="value7">Alta Presión</option>
                            <option value="value8">StartUp</option>
                            <option value="value9">Industrial</option>
                            <option value="value10">Servicio al Cliente</option>
                        </select>
                    </ContainerThirdThreeSelects>
                    <Link to={'/AboutYourDNA'}>
                        <BtnChatColumnSelects>Continuar</BtnChatColumnSelects>
                    </Link>
        </ContainerColumnSelects>
        <ContainerMotivationAll>
                <ContainerMotivationText>
                    <StyledMotivationText>
                        <div className="firstLine">
                            <h2> El talento ideal no cae del cielo y Roma no se hizo en dos días</h2>
                        </div>
                        <p>
                            Podríamos decirte que completarás un perfil irresistible en 3 minutos, pero… te estaríamos mintiendo. 🤷‍♂️ <br />
                            Tu empresa tiene una historia, una cultura y un ADN único. Para atraer a los mejores talentos sin volverte loco
                            filtrando CVs irrelevantes, tienes que ponerle cariño a tu perfil. 
                        </p>
                    </StyledMotivationText>
                            <ContainerDegradedSquares>
                                <DegradedSquareToLeft>
                                    <h4>¡Solo lo completarás una vez!</h4>
                                    <p>pero siempre podrás actualizarlo</p>
                                </DegradedSquareToLeft>
                                <DegradedSquareToRight>
                                    <h4>Cuanto más cuentes, mejor matcheará el algoritmo.</h4>
                                </DegradedSquareToRight>
                                <DegradedSquareToLeft>
                                    <h4>Menos trabajo para ti, más atracción de talento top.</h4>
                                </DegradedSquareToLeft>
                                <DegradedSquareToRight>
                                    <h4>Hazlo bien desde el principio y dejanos hacer el resto.</h4>
                                </DegradedSquareToRight>
                            </ContainerDegradedSquares>
                            <Link to={"/AboutYourDNA"}>
                              <ContainerNextButton>Siguiente</ContainerNextButton>
                            </Link>
                </ContainerMotivationText>
                <ContainerMotivationImages>
                    <ContainerMotivationImagesUpBlueText>
                        <p id="first">PASO A PASO PARA LA</p>
                        <p> CREACIÓN DE TU PERFIL</p>
                    </ContainerMotivationImagesUpBlueText>
                    <ContainerMotivationImagesNumberOne>
                        <ContainerNumberOneUp>
                            <ImageContainerNumberOne src="/images/oneCompany.svg" />
                            <div className="textOne">
                                <p>Tu historia vale</p>
                                <p>más que un logo</p>
                                <p>en LinkedIn.</p>
                            </div>
                        </ContainerNumberOneUp>
                        <ContainerNumberOneDown>
                            <h6>Las empresas se definen por su ADN, no solo por lo que venden. 
                                Comparte qué te hace única y deja que nuestro algoritmo te conecte con el talento ideal.</h6>
                        </ContainerNumberOneDown>
                        <ContainerNumberTwoUp>
                            <ImageContainerNumberTwo src="/images/twoCompany.svg" />
                            <div className="textTwo">
                                <p>Completa los</p>
                                <p>detalles de tu oferta</p>
                                <p>y deja que tu cultura</p>
                                <p>hable por ti.</p>
                            </div>
                        </ContainerNumberTwoUp>
                        <ContainerNumberTwoDown>
                            <h6>El talento ideal no solo busca un salario, sino un propósito y un entorno donde encajar. 
                                Completa nuestro formato de ofertas y deja que nuestro algoritmo haga el match perfecto.</h6>
                        </ContainerNumberTwoDown>
                        <ContainerNumberThreeUp>
                            <ImageContainerNumberThree src="/images/threeCompany.svg" />
                            <div className="textTwo">
                                <p>Bienvenido a la</p>
                                <p>nueva forma de </p>
                                <p>encontrar talento.</p>
                            </div>
                        </ContainerNumberThreeUp>
                        <ContainerNumberThreeDown>
                            <h6>Gana Wiibucks mientras interactúas y canjéalos por features premium. 
                                Conéctate con talento de forma auténtica, inclusiva y sin filtros.</h6>
                        </ContainerNumberThreeDown>
                    </ContainerMotivationImagesNumberOne>
                </ContainerMotivationImages>
            </ContainerMotivationAll>
    </ContainerAllUpToMobile>
    </>
  )
}
