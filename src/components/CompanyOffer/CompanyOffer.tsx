// import { useState } from "react";
// import { Bell, 
//     Bookmark, 
//     BriefcaseBusiness, 
//     Mail, 
//     Menu, 
//     Heart, 
//     Glasses, 
//     Syringe, 
//     HandCoins, 
//     BookOpen, 
//     Laptop, 
//     MapPin, 
//     IdCard } from "lucide-react";
// import { ArrowCompanyOffer, 
//     BlueRingAndLine, 
//     Button, 
//     ButtonFinalMatch, 
//     ChartWrapper, 
//     Column, 
//     ContainerArrow, 
//     ContainerBars, 
//     ContainerCompabilityMatch, 
//     ContainerCultureIcon, 
//     ContainerDataOffer, 
//     ContainerDataOfferDetails, 
//     ContainerDataOfferForAll, 
//     ContainerDataOfferName, 
//     ContainerFinalMatch, 
//     ContainerGlassesIcon, 
//     ContainerHeaderSearch, 
//     ContainerHeartIcon, 
//     ContainerIconsLeft, 
//     ContainerIconsRight, 
//     ContainerIdentityIcon, 
//     ContainerLocationIcon, 
//     ContainerSalaryIcon, 
//     ContainerSyringeIcon, 
//     ContainerTechnologyIcon, 
//     ContainerValuesLeft, 
//     ContainerValuesRight, 
//     CustomTooltip, 
//     DataOfferName, 
//     DivCentralCuadricula, 
//     DivContainerWhatLookingForSimpleSquare, 
//     DivContainerWhatLookingForSquares, 
//     DivCuadriculaEquipo, 
//     DivDescriptionResponsabilities, 
//     DivDescriptionResponsabilitiesLast, 
//     DivFirstLineCuadricula,
//     DivFourthLineCuadricula, 
//     DivKitSurvivor, 
//     DivLider, 
//     DivProcessSelectionNumbers, 
//     DivProcessSelectionResponsibilities, 
//     DivSecondLineCuadricula, 
//     DivSelectionProcess, 
//     DivSupervisor, 
//     DivTeamRol, 
//     DivTeamRolBis, 
//     DivThirdLineCuadricula, 
//     DivWhatLookingFor, 
//     DivWhatLookingForSquaresTitles, 
//     DivWhatLookingForTitle, 
//     FirstLineFinalMatch, 
//     FirstLineSimpleSquare, 
//     HeaderItems, 
//     HeaderSearch, 
//     InputLider, 
//     InputSupervisor, 
//     InputTeamRol, 
//     InputTeamRolBis, 
//     LabelAboutUs, 
//     LogoCompany, 
//     MatchContainer, 
//     ProcessSelectionNumbers, 
//     ProcessSelectionWiiBucks, 
//     QueHarasText, 
//     SecondLineFinalMatch, 
//     SecondLineFinalMatchBis, 
//     SecondLineSimpleSquare, 
//     SpanImageMatch, 
//     StyledLink, 
//     TextAreaExplainOffer, 
//     TextAreaQueHarasExplainOffer, 
//     ThirdLineFinalMatch, 
//     TitleKitSurvivor, 
//     TitleSelectionProcess, 
//     TitleSelectionProcessResponsibilities, 
//     ValuePercentageCulture, 
//     ValuePercentageIdentity, 
//     ValuePercentageLocation, 
//     ValuePercentageMatch, 
//     ValuePercentageRequirements, 
//     ValuePercentageSalary, 
//     ValuePercentageTecnology, 
//     ValuePercentageTransparency} from "./styles";
// import { LabelCol, 
//     ContainerAllOffer, 
//     ContainerCardOfferImage, 
//     ContainerColumnBodyOffer, 
//     ContainerColumnCard, 
//     ContainerDataOfferImage, 
//     ContainerOfferPage, 
//     Header } from "./styles";
// import { Bar, 
//     BarChart, 
//     ResponsiveContainer, 
//     Tooltip, 
//     XAxis, 
//     YAxis } from "recharts";
// import { TooltipProps } from "../../types";
// import { ButtonGrid } from "../ButtonsGrid/ButtonsGrid";


// const categories = ["Match", "Transparencia", "Requisitos", "Salarios"];
// const categories2 = ["Cultura", "Tecnologías", "Ubicación", "Identidad"];

// const generateRandomData = () => {
//   return [...categories, ...categories2].map((category) => ({
//     name: category,
//     value: Math.floor(Math.random() * 101),
//   }));
// };

// const CustomTooltipContent: React.FC<TooltipProps> = ({ active, payload }) => {
//     if (active && payload && payload.length) {
//       return (
//         <CustomTooltip>
//           <p>{`${payload[0].name}: ${payload[0].value}%`}</p>
//         </CustomTooltip>
//       );
//     }
//     return null;
// };


// export default function CompanyOffer() {
//     const [data, setData] = useState(generateRandomData());

//     const handleRegenerate = () => {
//       setData(generateRandomData());
//     };

//   return (
//     <> 
//     <ContainerAllOffer>
        
//         <ContainerOfferPage>
        
//             <ContainerColumnCard>
//                 <img id="logo" src="/images/BlueLogoWoowii.png" alt="Logo Blue Woowii" />
//                 <ContainerArrow>
//                     <ArrowCompanyOffer src="/images/arrowCompanyOffer.svg" alt="Arrow Black" />
//                 </ContainerArrow>
//                 <ContainerCardOfferImage src="/images/cardOffer.svg" alt="Card Offer image" />
//                 <LogoCompany src="/images/BusinessCubeLogo.png" alt="Business Cube Logo" />
//             </ContainerColumnCard>
//             <ContainerColumnBodyOffer>
            
//             <Header>
//                 <ContainerHeaderSearch>
//                     <HeaderSearch placeholder="Búsqueda" />
//                 </ContainerHeaderSearch>
//                 <HeaderItems>
//                     <p><img src="/images/wiibucks.png" alt="wiibucks" />100</p>
//                     <p><img src="/images/wiibucks.png" alt="wiibucks" />00</p>
//                     <Bell />
//                     <Mail />
//                     <BriefcaseBusiness />
//                     <Bookmark />
//                     <Menu />
//                 </HeaderItems>
//             </Header>
//                 <ContainerDataOffer>
//                     <ContainerDataOfferName>
//                         <DataOfferName placeholder="Nombre de la solicitud" />
//                     </ContainerDataOfferName>
//                     <ContainerDataOfferDetails>
//                         <ContainerDataOfferForAll>
//                             <label htmlFor="salary">Salario</label>
//                             <input type="text" name="salary" id="salary" placeholder="Salary"/>
//                         </ContainerDataOfferForAll>
//                         <ContainerDataOfferForAll>
//                             <label htmlFor="variable">Variable</label>
//                             <input type="text" name="variable" id="variable" placeholder="Variable" />
//                         </ContainerDataOfferForAll>
//                         <ContainerDataOfferForAll>
//                             <label htmlFor="inperson">Presencial</label>
//                             <input type="text" name="inperson" id="inperson" placeholder="In Person" />
//                         </ContainerDataOfferForAll>
//                         <ContainerDataOfferForAll>
//                             <label htmlFor="remote">Remoto</label>
//                             <input type="text" name="remote" id="remote" placeholder="Remote"/>
//                         </ContainerDataOfferForAll>
//                     </ContainerDataOfferDetails>
//                     <LabelAboutUs>Sobre Nosotros</LabelAboutUs>
//                     <TextAreaExplainOffer  placeholder="Cuenta sobre tu empresa sin dar datos específicos...."/>
//                 </ContainerDataOffer>
//             </ContainerColumnBodyOffer>
//         </ContainerOfferPage>
//     </ContainerAllOffer>
//     <ContainerBars>
//         <Column >
//           {categories.map((category) => {
//             const barColor = category === "Match" ? "#8FFF00" : "#AE0BFF";
            
//             return (
//               <ChartWrapper key={category}>
//                 <LabelCol id="left">{category}</LabelCol>
//                 <ResponsiveContainer width="50%" height={30}>
//                   <BarChart id="leftCol" layout="vertical" data={[data.find(d => d.name === category)!]}>
//                     <XAxis type="number" domain={[0, 100]} hide />
//                     <YAxis type="category" dataKey="name" width={100} hide />
//                     <Tooltip content={<CustomTooltipContent />} cursor={{ fill: 'transparent' }} wrapperStyle={{ zIndex: 2 }} />
//                     <Bar dataKey="value" fill={barColor} background={{ fill: '#f0f0f0', radius: 45 }} radius={45} />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </ChartWrapper>
//             );
//           })}
//         </Column>
//         <Column >
//           {categories2.map((category) => (
//             <ChartWrapper key={category}>
//               <LabelCol id="right">{category}</LabelCol>
//               <ResponsiveContainer width="50%" height={30}>
//                 <BarChart id="rightCol" layout="vertical" data={[data.find(d => d.name === category)!]}>
//                   <XAxis type="number" domain={[0, 100]} hide />
//                   <YAxis type="category" dataKey="name" width={100} hide />
//                   <Tooltip content={<CustomTooltipContent />} cursor={{ fill: 'transparent' }} wrapperStyle={{ zIndex: 2 }} />
//                   <Bar dataKey="value" fill="#AE0BFF" background={{ fill: '#f0f0f0', radius: 45 }} radius={45}/>
//                 </BarChart>
//               </ResponsiveContainer>
//             </ChartWrapper>
//           ))}
//           <ContainerValuesLeft>
//             <ValuePercentageMatch>{data[0].value}%</ValuePercentageMatch>
//             <ValuePercentageTransparency>{data[1].value}%</ValuePercentageTransparency>
//             <ValuePercentageRequirements>{data[2].value}%</ValuePercentageRequirements>
//             <ValuePercentageSalary>{data[3].value}%</ValuePercentageSalary>
//           </ContainerValuesLeft>
//           <ContainerIconsLeft>
//             <ContainerHeartIcon><Heart fill="#FFF" /></ContainerHeartIcon>
//             <ContainerGlassesIcon><Glasses fill="#FFF" /></ContainerGlassesIcon>
//             <ContainerSyringeIcon><Syringe  fill="#FFF" /></ContainerSyringeIcon>
//             <ContainerSalaryIcon><HandCoins fill="#FFF" /></ContainerSalaryIcon>
//           </ContainerIconsLeft>
//           <ContainerValuesRight>
//             <ValuePercentageCulture>{data[4].value}%</ValuePercentageCulture>
//             <ValuePercentageTecnology>{data[5].value}%</ValuePercentageTecnology>
//             <ValuePercentageLocation>{data[6].value}%</ValuePercentageLocation>
//             <ValuePercentageIdentity>{data[7].value}%</ValuePercentageIdentity>
//           </ContainerValuesRight>
//           <ContainerIconsRight>
//                 <ContainerCultureIcon><BookOpen fill="#FFF" /></ContainerCultureIcon>
//                 <ContainerTechnologyIcon><Laptop fill="#FFF" /></ContainerTechnologyIcon>
//                 <ContainerLocationIcon><MapPin fill="#FFF" /></ContainerLocationIcon>
//                 <ContainerIdentityIcon><IdCard fill="#FFF" /></ContainerIdentityIcon>
//           </ContainerIconsRight>
//         </Column>
        
//       </ContainerBars>
//       <Button onClick={handleRegenerate}>Regenerar Datos</Button>
//       <ContainerCompabilityMatch>
//         <p id="compaText">COMPATIBILIDAD</p>
//         <p id="perfilText">CON MI PERFIL</p>
//         <MatchContainer>{data[0].value}%</MatchContainer>
//       </ContainerCompabilityMatch>
//     <ContainerDataOfferImage>
//         <QueHarasText>
//             <p>Qué harás</p>
//             <div className="BlueRectangle1"></div>
//         </QueHarasText>
//         <TextAreaQueHarasExplainOffer placeholder="Describe el día a día del rol que estas buscando..."/>
//         <QueHarasText>
//             <p id="whywho">Con quién trabajarás</p>
//             <div className="BlueRectangle2"></div>
//         </QueHarasText>
//         <DivCuadriculaEquipo>
//             <DivFirstLineCuadricula>
//                 <DivSupervisor>Supervisor</DivSupervisor>
//                 <InputSupervisor placeholder="Descripción"/>
//             </DivFirstLineCuadricula>
//             <DivSecondLineCuadricula>
//                 <DivLider>Líder</DivLider>
//                 <InputLider placeholder="Descripción"/>
//             </DivSecondLineCuadricula>
//             <DivCentralCuadricula>•  Equipo  •</DivCentralCuadricula>
//             <DivThirdLineCuadricula>
//                 <DivTeamRol>Rol de equipo</DivTeamRol>
//                 <InputTeamRol placeholder="Descripción" />
//             </DivThirdLineCuadricula>
//             <DivFourthLineCuadricula>
//                  <DivTeamRolBis>Rol de equipo</DivTeamRolBis>
//                  <InputTeamRolBis placeholder="Descripción" />
//             </DivFourthLineCuadricula>
//         </DivCuadriculaEquipo>
//         <DivKitSurvivor>
//             <TitleKitSurvivor>El kit de supervivencia que necesitarás:</TitleKitSurvivor>
//             <ButtonGrid />
//         </DivKitSurvivor>
//         <DivSelectionProcess>
//             <TitleSelectionProcess>Nuestro proceso de selección:</TitleSelectionProcess>
//             <div className="BlueRectangle3"></div>
//             <DivProcessSelectionNumbers>
//                 <ProcessSelectionNumbers>
//                     <ProcessSelectionWiiBucks id="firstWiibuck">50 Wiibucks</ProcessSelectionWiiBucks>
//                     <BlueRingAndLine>
//                         <img src="/images/BlueDonutBig.svg" alt="Aro Azul" />
//                         <div className="line"></div>
//                     </BlueRingAndLine>
//                     <h4>1</h4>
//                     <input type="text" name="description" placeholder="Describe el proceso"  />
//                 </ProcessSelectionNumbers>
//                 <ProcessSelectionNumbers>
//                     <ProcessSelectionWiiBucks >100 +10  Wiibucks</ProcessSelectionWiiBucks>
//                     <BlueRingAndLine>
//                         <div className="line2"></div>
//                         <img src="/images/BlueDonutBig.svg" alt="Aro Azul" />
//                         <div className="line"></div>
//                     </BlueRingAndLine>
//                     <h4>2</h4>
//                     <input type="text" name="description" placeholder="Describe el proceso"  />
//                 </ProcessSelectionNumbers>
//                 <ProcessSelectionNumbers>
//                     <ProcessSelectionWiiBucks >200 Wiibucks</ProcessSelectionWiiBucks>
//                     <BlueRingAndLine>
//                         <div className="line2"></div>
//                         <img src="/images/BlueDonutBig.svg" alt="Aro Azul" />
//                         <div className="line"></div>
//                     </BlueRingAndLine>
//                     <h4>3</h4>
//                     <input type="text" name="description" placeholder="Describe el proceso"  />
//                 </ProcessSelectionNumbers>
//                 <ProcessSelectionNumbers>
//                     <ProcessSelectionWiiBucks>50 Wiibucks</ProcessSelectionWiiBucks>
//                     <BlueRingAndLine>
//                         <div className="line2"></div>
//                         <img src="/images/BlueDonutBig.svg" alt="Aro Azul" />
//                     </BlueRingAndLine>
//                     <h4>4</h4>
//                     <input type="text" name="description" placeholder="DSescribe el proceso"  />
//                 </ProcessSelectionNumbers>
//             </DivProcessSelectionNumbers>
//         </DivSelectionProcess>
//         <DivProcessSelectionResponsibilities>
//             <TitleSelectionProcessResponsibilities>Responsabilidades:</TitleSelectionProcessResponsibilities>
//             <div className="BlueRectangle4"></div>
//             <DivProcessSelectionResponsibilities>
//                 <DivDescriptionResponsabilities>
//                     <img src="/images/BlueDonutBig.svg" alt="Aro Azul" />
//                     <input type="text" name="description" placeholder="Describe las responsabiildades que tendrá el candidato..." />
//                     <div className="rounded">-</div>
//                 </DivDescriptionResponsabilities>
//                 <DivDescriptionResponsabilities>
//                     <img src="/images/BlueDonutBig.svg" alt="Aro Azul" />
//                     <input type="text" name="description" placeholder="Describe las responsabiildades que tendrá el candidato..." />
//                     <div className="rounded">-</div>
//                 </DivDescriptionResponsabilities>
//                 <DivDescriptionResponsabilities>
//                     <img src="/images/BlueDonutBig.svg" alt="Aro Azul" />
//                     <input type="text" name="description" placeholder="Describe las responsabiildades que tendrá el candidato..." />
//                     <div className="rounded">-</div>
//                 </DivDescriptionResponsabilities>
//                 <DivDescriptionResponsabilities>
//                     <img src="/images/BlueDonutBig.svg" alt="Aro Azul" />
//                     <input type="text" name="description" placeholder="Describe las responsabiildades que tendrá el candidato..." />
//                     <div className="rounded">-</div>
//                 </DivDescriptionResponsabilities>
//                 <DivDescriptionResponsabilities>
//                     <img src="/images/BlueDonutBig.svg" alt="Aro Azul" />
//                     <input type="text" name="description" placeholder="Describe las responsabiildades que tendrá el candidato..." />
//                     <div className="rounded">-</div>
//                 </DivDescriptionResponsabilities>
//                 <DivDescriptionResponsabilities>
//                     <img src="/images/BlueDonutBig.svg" alt="Aro Azul" />
//                     <input type="text" name="description" placeholder="Describe las responsabiildades que tendrá el candidato..." />
//                     <div className="rounded">-</div>
//                 </DivDescriptionResponsabilities>
//                 <DivDescriptionResponsabilities>
//                     <img src="/images/BlueDonutBig.svg" alt="Aro Azul" />
//                     <input type="text" name="description" placeholder="Describe las responsabiildades que tendrá el candidato..." />
//                     <div className="rounded">-</div>
//                 </DivDescriptionResponsabilities>
//                 <DivDescriptionResponsabilitiesLast>
//                     {/* <img src="/images/BlueDonutBig.svg" alt="Aro Azul" /> */}
//                     <label>Agregar responsabiildades...</label>
//                     <div className="rounded">+</div>
//                 </DivDescriptionResponsabilitiesLast>
//             </DivProcessSelectionResponsibilities>
//         </DivProcessSelectionResponsibilities>
//         <DivWhatLookingFor>
//             <DivWhatLookingForTitle>Qué buscamos</DivWhatLookingForTitle>
//             <div className="BlueRectangle5"></div>
//             <DivWhatLookingForSquaresTitles>
//                 <div>
//                     <label>Imprescindible</label>
//                 </div>
//                 <div>
//                     <label>Ideal</label>
//                 </div>
//                 <div>
//                     <label>Es un plus</label>
//                 </div>
//             </DivWhatLookingForSquaresTitles>
//             <DivContainerWhatLookingForSquares>
//                 <DivContainerWhatLookingForSimpleSquare>
//                     <FirstLineSimpleSquare>
//                         <img  src="/images/miniGraph3pos.svg" alt="Mini Gráfico de 3 posiciones activas" />
//                         <input type="text" name="first" placeholder="Completar"/>
//                     </FirstLineSimpleSquare>
//                     <SecondLineSimpleSquare>
//                         <img  src="/images/zigzag.svg" alt="zigzag imagen" />
//                         <input type="text" name="first" placeholder="Completar"/>
//                     </SecondLineSimpleSquare>
//                     <SecondLineSimpleSquare>
//                         <img  src="/images/rueda.svg" alt="rueda imagen" />
//                         <input type="text" name="first" placeholder="Completar"/>
//                     </SecondLineSimpleSquare>
//                     <SecondLineSimpleSquare>
//                         <img  src="/images/pcsquare.svg" alt="Laptop azul imagen" />
//                         <input type="text" name="first" placeholder="Completar"/>
//                     </SecondLineSimpleSquare>
//                 </DivContainerWhatLookingForSimpleSquare>
//                 <DivContainerWhatLookingForSimpleSquare>
//                     <FirstLineSimpleSquare>
//                         <img  src="/images/miniGraph2pos.svg" alt="Mini Gráfico de 2 posiciones activas" />
//                         <input type="text" name="first" placeholder="Completar"/>
//                     </FirstLineSimpleSquare>
//                     <SecondLineSimpleSquare>
//                         <img  src="/images/hat.svg" alt="sombrero imagen" />
//                         <input type="text" name="first" placeholder="Completar"/>
//                     </SecondLineSimpleSquare>
//                     <SecondLineSimpleSquare>
//                         <img  src="/images/brain.svg" alt="Cabeza azul" />
//                         <input type="text" name="first" placeholder="Completar"/>
//                     </SecondLineSimpleSquare>
//                     <SecondLineSimpleSquare>
//                         <img  src="/images/destiny.svg" alt="Itinerario azul" />
//                         <input type="text" name="first" placeholder="Completar"/>
//                     </SecondLineSimpleSquare>
//                 </DivContainerWhatLookingForSimpleSquare>
//                 <DivContainerWhatLookingForSimpleSquare>
//                     <FirstLineSimpleSquare>
//                         <img  src="/images/miniGraph1pos.svg" alt="Mini Gráfico de 1 posición activa" />
//                         <input type="text" name="first" placeholder="Completar"/>
//                     </FirstLineSimpleSquare>
//                     <SecondLineSimpleSquare>
//                         <img  src="/images/twohands.svg" alt="Dos manos saludo" />
//                         <input type="text" name="first" placeholder="Completar"/>
//                     </SecondLineSimpleSquare>
//                     <SecondLineSimpleSquare>
//                         <img  src="/images/menuSquare.svg" alt="Menu Blue" />
//                         <input type="text" name="first" placeholder="Completar"/>
//                     </SecondLineSimpleSquare>
//                     <SecondLineSimpleSquare>
//                         <img  src="/images/bocadillos.svg" alt="Bocadillos Blue" />
//                         <input type="text" name="first" placeholder="Completar"/>
//                     </SecondLineSimpleSquare>
//                 </DivContainerWhatLookingForSimpleSquare>
//             </DivContainerWhatLookingForSquares>
//         </DivWhatLookingFor>
//         <ContainerFinalMatch>
//             <FirstLineFinalMatch>Si has llegado hasta aquí, es que algo en esta oferta te ha hecho clic.</FirstLineFinalMatch>
//             <div className="DichosoMatch">
//                 <SecondLineFinalMatch>Hagamos <span id="imgMatch"><SpanImageMatch src="/images/blueMatch.svg" alt="Match Azul" /></span></SecondLineFinalMatch><SecondLineFinalMatchBis>y comentamos qué</SecondLineFinalMatchBis>
//             </div>
//             <ThirdLineFinalMatch>te motiva para unirte a nuestro equipo.</ThirdLineFinalMatch>
//             <StyledLink to="/CompanyCandidatesView">
//             <ButtonFinalMatch>Continuar</ButtonFinalMatch>
//             </StyledLink>
//         </ContainerFinalMatch>
//     </ContainerDataOfferImage>
//     </>
//   )
// }
import { Bell, BriefcaseBusiness, House, Mail, Menu } from "lucide-react";
import {  AddCircleBelowBlueInput, 
    AvatarToMobile, 
    ButtonFinalMatch, 
    ContainerAllPage, 
    ContainerBigAvatar, 
    ContainerDataOffer, 
    ContainerDataOfferDetails, 
    ContainerDataOfferForAll, 
    ContainerDataOfferName, 
    ContainerExplainPage, 
    ContainerFinalMatch, 
    ContainerFooterToMobile, 
    ContainerImageOurProcess, 
    ContainerInputsBelowOurProcess, 
    ContainerIntroOffer, 
    ContainerLabelsForSquares, 
    ContainerResponsabilitiesInputs, 
    ContainerUpSearhAndItemsMobile, 
    DataOfferName, 
    DivContainerWhatLookingForSimpleSquare, 
    DivContainerWhatLookingForSquares, 
    FirstLineFinalMatch, 
    FirstLineSimpleSquare, 
    HeaderItemsToMobile, 
    LabelAboutUs, 
    OurProcessTitle, 
    QueHarasText, 
    ResponsibilitiesInputs, 
    ResponsibilitiesTitle, 
    SearchUpToMobile, 
    SecondLineFinalMatch, 
    SecondLineFinalMatchBis, 
    SecondLineSimpleSquare, 
    SpanImageMatch, 
    SubtractCircleBesideInput, 
    SurvivorKit, 
    TechnicalExperiencieBlueInput, 
    TextAreaExplainOffer, 
    TextAreaQueHarasExplainOffer, 
    ThirdLineFinalMatch,
    WhatSearchTitle, 
    WithWhoWork, 
    WithWhoWorkInput } from "./styles";
// import { Link } from "react-router-dom";

export default function CompanyOffer() {
  return (
    <ContainerAllPage>
        <ContainerIntroOffer>
            <ContainerUpSearhAndItemsMobile>
                <AvatarToMobile>
                    <img src="/images/BusinessCubeLogo.png" alt="Company Avatar" />
                </AvatarToMobile>
                <SearchUpToMobile>
                    <input type="text" placeholder="Búsqueda" />
                </SearchUpToMobile>
                <HeaderItemsToMobile>
                    <p><img src="/images/wiibucks.png" alt="wiibucks" />100</p>
                    <p><img src="/images/TrophyWiibucks.svg" alt="wiibucks" />00</p>
                    <Menu id="menu" stroke="#FFF" width={20} height={20}/>
                </HeaderItemsToMobile> 
            </ContainerUpSearhAndItemsMobile>
            <ContainerDataOffer>
                    <ContainerDataOfferName>
                        <DataOfferName placeholder="Nombre de la solicitud" />
                    </ContainerDataOfferName>
                    <ContainerDataOfferDetails>
                        <ContainerDataOfferForAll>
                            <label htmlFor="salary">Salario</label>
                            <input type="text" name="salary" id="salary" placeholder="Salary"/>
                        </ContainerDataOfferForAll>
                        <ContainerDataOfferForAll>
                            <label htmlFor="variable">Variable</label>
                            <input type="text" name="variable" id="variable" placeholder="Variable" />
                        </ContainerDataOfferForAll>
                        <ContainerDataOfferForAll>
                            <label htmlFor="modo">Modalidad</label>
                            <input type="text" name="modo" id="modo" placeholder="Modalidad" />
                        </ContainerDataOfferForAll>
                        <ContainerDataOfferForAll>
                            <label id="ubiclbl" htmlFor="ubic">Ubicación</label>
                            <input type="text" name="ubic" id="ubic" placeholder="Ubicación"/>
                        </ContainerDataOfferForAll>
                    </ContainerDataOfferDetails>
                    <LabelAboutUs>Sobre Nosotros</LabelAboutUs>
                    <TextAreaExplainOffer  placeholder="Cuenta sobre tu empresa sin dar datos específicos...."/>
                    <ContainerBigAvatar>
                        <img src="/images/avatarCompany1.svg" alt="Blue Company Avatar" />
                        <ul>
                            <li>Ayuda +</li>
                            <li>Preguntas +</li>
                            <li>Saber mas sobre +</li>
                        </ul>
                    </ContainerBigAvatar>
            </ContainerDataOffer>
        </ContainerIntroOffer>
        <ContainerExplainPage>
            <QueHarasText>
                <p>Qué harás</p>
                <div className="BlueRectangle1"></div>
            </QueHarasText>
            <TextAreaQueHarasExplainOffer placeholder="Describe el día a día del rol que estas buscando..."/>
            <WithWhoWork>
                <p>Con quién trabajarás</p>
                <div className="BlueRectangle1"></div>
            </WithWhoWork>
            <WithWhoWorkInput >
                <label htmlFor="super">Supervisor</label>
                <input type="text" name="super" id="super" placeholder="Completar" />
            </WithWhoWorkInput>
            <WithWhoWorkInput>
                <label htmlFor="lider">Lider</label>
                <input type="text" name="lider" id="lider" placeholder="Completar" />
            </WithWhoWorkInput>
            <WithWhoWorkInput>
                <label htmlFor="team">Equipo</label>
                <input type="text" name="team" id="team" placeholder="Completar" />
            </WithWhoWorkInput>
            <WithWhoWorkInput>
                <label htmlFor="compas">Compañeros</label>
                <input type="text" name="compas" id="compas" placeholder="Completar" />
            </WithWhoWorkInput>
            <SurvivorKit>
                <p>Kit de supervivencia</p>
                <div className="BlueRectangle1"></div>
            </SurvivorKit>
            <TechnicalExperiencieBlueInput>
                <input type="text" placeholder="Habilidad Técnica"/>
                <input type="text" placeholder="Habilidad Técnica"/>
                <input type="text" placeholder="Habilidad Técnica"/>
            </TechnicalExperiencieBlueInput>
            <AddCircleBelowBlueInput><p>+</p></AddCircleBelowBlueInput>
            <OurProcessTitle>
                <p>Nuestro proceso</p>
                <div className="BlueRectangle1"></div>
            </OurProcessTitle>
            <ContainerImageOurProcess>
                <img src="/images/nuestroProcesoBlue.svg" alt="Our Process Image" />
            </ContainerImageOurProcess>
            <ContainerInputsBelowOurProcess>
                <input type="text" placeholder="Describe el proceso..." />
                <input type="text" placeholder="Describe el proceso..." />
                <input type="text" placeholder="Describe el proceso..." />
                <input type="text" placeholder="Describe el proceso..." />
            </ContainerInputsBelowOurProcess>
            <ResponsibilitiesTitle>
                <p>Responsabilidades</p>
                <div className="BlueRectangle1"></div>
            </ResponsibilitiesTitle>
            <ContainerResponsabilitiesInputs>
                <ResponsibilitiesInputs>
                    <input type="text" placeholder="Describe las responsabiildades que tendrá el candidato"/>
                    <SubtractCircleBesideInput><p>-</p></SubtractCircleBesideInput>
                </ResponsibilitiesInputs>
                <ResponsibilitiesInputs>
                    <input type="text" placeholder="Describe las responsabiildades que tendrá el candidato"/>
                    <SubtractCircleBesideInput><p>-</p></SubtractCircleBesideInput>
                </ResponsibilitiesInputs>
                <ResponsibilitiesInputs>
                    <input type="text" placeholder="Describe las responsabiildades que tendrá el candidato"/>
                    <SubtractCircleBesideInput><p>-</p></SubtractCircleBesideInput>
                </ResponsibilitiesInputs>
                <ResponsibilitiesInputs>
                    <input type="text" placeholder="Describe las responsabiildades que tendrá el candidato"/>
                    <SubtractCircleBesideInput><p>-</p></SubtractCircleBesideInput>
                </ResponsibilitiesInputs>
                <WhatSearchTitle>
                    <p>Qué buscamos</p>
                    <div className="BlueRectangle1"></div>
                </WhatSearchTitle>
                <ContainerLabelsForSquares>
                    <h2 id="impre2">Imprescindible</h2>
                    <h2 id="ideal2">Ideal</h2>
                    <h2 id="plus2">Es un plus</h2>
                </ContainerLabelsForSquares>
                <DivContainerWhatLookingForSquares>
                <h2 id="impre">Imprescindible</h2>
                <DivContainerWhatLookingForSimpleSquare>
                    <FirstLineSimpleSquare>
                        <img  src="/images/miniGraph3pos.svg" alt="Mini Gráfico de 3 posiciones activas" />
                        <input type="text" name="first" placeholder="Completar"/>
                    </FirstLineSimpleSquare>
                    <SecondLineSimpleSquare>
                        <img  src="/images/zigzag.svg" alt="zigzag imagen" />
                        <input type="text" name="first" placeholder="Completar"/>
                    </SecondLineSimpleSquare>
                    <SecondLineSimpleSquare>
                        <img  src="/images/rueda.svg" alt="rueda imagen" />
                        <input type="text" name="first" placeholder="Completar"/>
                    </SecondLineSimpleSquare>
                    <SecondLineSimpleSquare>
                        <img  src="/images/pcsquare.svg" alt="Laptop azul imagen" />
                        <input type="text" name="first" placeholder="Completar"/>
                    </SecondLineSimpleSquare>
                </DivContainerWhatLookingForSimpleSquare>
                <h2 id="ideal">Ideal</h2>
                <DivContainerWhatLookingForSimpleSquare>
                    <FirstLineSimpleSquare>
                        <img  src="/images/miniGraph2pos.svg" alt="Mini Gráfico de 2 posiciones activas" />
                        <input type="text" name="first" placeholder="Completar"/>
                    </FirstLineSimpleSquare>
                    <SecondLineSimpleSquare>
                        <img  src="/images/hat.svg" alt="sombrero imagen" />
                        <input type="text" name="first" placeholder="Completar"/>
                    </SecondLineSimpleSquare>
                    <SecondLineSimpleSquare>
                        <img  src="/images/brain.svg" alt="Cabeza azul" />
                        <input type="text" name="first" placeholder="Completar"/>
                    </SecondLineSimpleSquare>
                    <SecondLineSimpleSquare>
                        <img  src="/images/destiny.svg" alt="Itinerario azul" />
                        <input type="text" name="first" placeholder="Completar"/>
                    </SecondLineSimpleSquare>
                </DivContainerWhatLookingForSimpleSquare>
                <h2 id="plus">Es un plus</h2>
                <DivContainerWhatLookingForSimpleSquare>
                    <FirstLineSimpleSquare>
                        <img  src="/images/miniGraph1pos.svg" alt="Mini Gráfico de 1 posición activa" />
                        <input type="text" name="first" placeholder="Completar"/>
                    </FirstLineSimpleSquare>
                    <SecondLineSimpleSquare>
                        <img  src="/images/twohands.svg" alt="Dos manos saludo" />
                        <input type="text" name="first" placeholder="Completar"/>
                    </SecondLineSimpleSquare>
                    <SecondLineSimpleSquare>
                        <img  src="/images/menuSquare.svg" alt="Menu Blue" />
                        <input type="text" name="first" placeholder="Completar"/>
                    </SecondLineSimpleSquare>
                    <SecondLineSimpleSquare>
                        <img  src="/images/bocadillos.svg" alt="Bocadillos Blue" />
                        <input type="text" name="first" placeholder="Completar"/>
                    </SecondLineSimpleSquare>
                </DivContainerWhatLookingForSimpleSquare>
            </DivContainerWhatLookingForSquares>
        
            </ContainerResponsabilitiesInputs>
            <ContainerFinalMatch>
                <FirstLineFinalMatch>Si has llegado hasta aquí, es que algo en esta oferta te ha hecho clic.</FirstLineFinalMatch>
                <div className="DichosoMatch">
                    <SecondLineFinalMatch>Hagamos <span id="imgMatch"><SpanImageMatch src="/images/blueMatch.svg" alt="Match Azul" /></span></SecondLineFinalMatch><SecondLineFinalMatchBis>y comentanos qué</SecondLineFinalMatchBis>
                </div>
                <ThirdLineFinalMatch>te motiva para unirte a nuestro equipo.</ThirdLineFinalMatch>
                {/* <Link to="/CompanyCandidatesView"> */}
                    <ButtonFinalMatch>Continuar</ButtonFinalMatch>
                {/* </Link> */}
            </ContainerFinalMatch>
        <ContainerFooterToMobile>
            <House className="items" fill="#FFF"  width={26} height={26}/>
            <BriefcaseBusiness className="items" fill="#FFF" width={26} height={26} />
            {/* <Link to="/CompanyOverview"> */}
              <img src="/images/rocketFooter.svg" alt="Rocket Footer Image" />
            {/* </Link> */}
            <Mail className="items" fill="#FFF" width={26} height={26}/>
            <Bell className="items" fill="#FFF" width={26} height={26}/>
        </ContainerFooterToMobile>
        </ContainerExplainPage>
    </ContainerAllPage> 
  )
}
