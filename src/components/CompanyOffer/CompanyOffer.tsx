
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
import { Link } from "react-router-dom";
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
                <Link to="/CompanyCandidatesView">
                    <ButtonFinalMatch>Continuar</ButtonFinalMatch>
                </Link>
            </ContainerFinalMatch>
        <ContainerFooterToMobile>
            <House className="items" fill="#FFF"  width={26} height={26}/>
            <BriefcaseBusiness className="items" fill="#FFF" width={26} height={26} />
            <Link to="/CompanyCandidatesView">
              <img src="/images/rocketFooter.svg" alt="Rocket Footer Image" />
            </Link>
            <Mail className="items" fill="#FFF" width={26} height={26}/>
            <Bell className="items" fill="#FFF" width={26} height={26}/>
        </ContainerFooterToMobile>
        </ContainerExplainPage>
    </ContainerAllPage> 
  )
}
