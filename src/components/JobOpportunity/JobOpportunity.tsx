// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import {
//   BaseQuestions,
//   BaseQuestionsInputs,
//   BaseQuestionsInputsFirstContainer,
//   BaseQuestionsInputsSecondContainer,
//   Circle,
//   ConnectingLine,
//   Container,
//   FourthContainer,
//   Header,
//   HeaderItems,
//   InnerSuccessApply,
//   Logo,
//   ProcessStepsContainer,
//   ResponsibilitiesContainer,
//   ResponsibilityInputGroup,
//   Reward,
//   SearchBar,
//   SecondContainer,
//   SkillsContainer,
//   StepInput,
//   StepLineContainer,
//   StepNumber,
//   StepWrapper,
//   StyledLink,
//   SuccessApply,
//   SuccessButton,
//   TextContainer,
//   ThirdContainer,
//   ThirdContainerColumnsContainer,
//   WhatWeLookingForContainer
// } from "./styles";
// import { Bell, Bookmark, BriefcaseBusiness, Mail } from "lucide-react";

// export default function JobOpportunityView() {
//   const { jobId } = useParams();

//   const [title, setTitle] = useState("");
//   const [salary, setSalary] = useState("");
//   const [variable, setVariable] = useState("");
//   const [presencial, setPresencial] = useState("");
//   const [remoto, setRemoto] = useState("");
//   const [aboutUs, setAboutUs] = useState("");
//   const [whatYouWillDo, setWhatYouWillDo] = useState("");
//   const [leaderRole, setLeaderRole] = useState("");
//   const [teamRole, setTeamRole] = useState("");
//   const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
//   const [selectionProcess, setSelectionProcess] = useState(["", "", "", ""]);
//   const [responsibilities, setResponsibilities] = useState<string[]>(['']);
//   const [indispensable, setIndispensable] = useState(["", "", "", ""]);
//   const [ideal, setIdeal] = useState(["", "", "", ""]);
//   const [plus, setPlus] = useState(["", "", "", ""]);
//   const [showModal, setShowModal] = useState(false);
//   const [hasApplied, setHasApplied] = useState(false);

//   const steps = [
//     { reward: "50 Wiibucts", number: 1 },
//     { reward: "100 Wiibucts", number: 2 },
//     { reward: "200 Wiibucts", number: 3 },
//     { reward: "50 Wiibucts", number: 4 }
//   ];

//   useEffect(() => {
//     const fetchJob = async () => {
//       try {
//         const response = await fetch(`http://localhost:3000/api/auth/job/${jobId}`);
//         const data = await response.json();

//         setTitle(data.title);
//         setSalary(data.salary);
//         setVariable(data.variable);
//         setPresencial(data.presencial_percentage?.toString() || "");
//         setRemoto(data.remote_percentage?.toString() || "");
//         setAboutUs(data.about_us);
//         setWhatYouWillDo(data.what_you_will_do);

//         const who = data.who_you_will_work_with?.split(", ");
//         if (who && who.length === 2) {
//           setLeaderRole(who[0].replace("Líder: ", ""));
//           setTeamRole(who[1].replace("Equipo: ", ""));
//         }

//         setSelectedSkills(data.survival_kit || []);
//         setSelectionProcess(data.selection_process || ["", "", "", ""]);
//         setResponsibilities(data.responsibilities || [""]);
//         setIndispensable(data.indispensable || ["", "", "", ""]);
//         setIdeal(data.ideal || ["", "", "", ""]);
//         setPlus(data.plus || ["", "", "", ""]);
//       } catch (error) {
//         console.error("Error al obtener la oferta:", error);
//       }
//     };

//     fetchJob();
//   }, [jobId]);
    
//   useEffect(() => {
//     console.log("✅ Qué buscamos:", { indispensable, ideal, plus });
//   }, [indispensable, ideal, plus]);
    
//   const handleApply = async () => {
//     const userId = localStorage.getItem("userId");
  
//     if (!userId) {
//       console.error("❌ No se encontró userId en localStorage");
//       return;
//     }
  
//     try {
//       const response = await fetch("http://localhost:3000/api/auth/apply", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ userId, jobId })
//       });
  
//       const data = await response.json();
  
//       if (response.ok) {
//         console.log("✅ Postulación exitosa:", data);
//         setShowModal(true);
//       } else {
//         console.error("❌ Error en la postulación:", data);
//       }
//     } catch (error) {
//       console.error("❌ Error al postularse:", error);
//     }
//   };
  
//   useEffect(() => {
//     const userId = localStorage.getItem("userId");
  
//     if (!userId || !jobId) return;
  
//     const checkApplication = async () => {
//       try {
//         const res = await fetch(
//           `http://localhost:3000/api/auth/has-applied?userId=${userId}&jobId=${jobId}`
//         );
//         const data = await res.json();
//         setHasApplied(data.applied);
//       } catch (err) {
//         console.error("❌ Error al verificar postulación:", err);
//       }
//     };
  
//     checkApplication();
//   }, [jobId]);

//   return (
//     <>
//       <Container>
//         <Header>
//           <Logo src="/images/LogoBlue.svg" alt="" />
//           <SearchBar type="Búsqueda" placeholder="Búsqueda" />
//           <HeaderItems>
//             <p><img src="/images/wiibucks.png" alt="wiibucks" />400</p>
//             <p><img src="/images/wiibucks.png" alt="wiibucks" />00</p>
//             <Bell />
//             <Mail />
//             <BriefcaseBusiness />
//             <Bookmark />
//           </HeaderItems>
//         </Header>

//         <BaseQuestions>
//           <img src="/images/JobOpportunityBackground.png" alt="" />
//           <BaseQuestionsInputs>
//             <BaseQuestionsInputsFirstContainer>
//               <h1>{title}</h1>
//               <div className="questions">
//                 <div className="input-group">
//                   <label>Salario</label>
//                   <p>{salary}</p>
//                 </div>
//                 <div className="input-group">
//                   <label>Variable</label>
//                   <p>{variable}</p>
//                 </div>
//                 <div className="input-group">
//                   <label>Presencial</label>
//                   <p>{presencial}%</p>
//                 </div>
//                 <div className="input-group">
//                   <label>Remoto</label>
//                   <p>{remoto}%</p>
//                 </div>
//               </div>
//             </BaseQuestionsInputsFirstContainer>

//             <BaseQuestionsInputsSecondContainer>
//               <h2>Sobre Nosotros</h2>
//               <p>{aboutUs}</p>
//             </BaseQuestionsInputsSecondContainer>
//           </BaseQuestionsInputs>
//         </BaseQuestions>
//       </Container>

//       <SecondContainer>
//         <h1>Qué harás</h1>
//         <p>{whatYouWillDo}</p>
//       </SecondContainer>

//       <ThirdContainer>
//         <h2>Con quién trabajarás</h2>
//         <ThirdContainerColumnsContainer>
//           <div className="Column">
//             <label>Líder</label>
//             <p>{leaderRole}</p>
//           </div>
//           <p>Equipo</p>
//           <div className="Column">
//             <label>Rol del equipo</label>
//             <p>{teamRole}</p>
//           </div>
//         </ThirdContainerColumnsContainer>
//       </ThirdContainer>

//       <SkillsContainer>
//         <h2>El kit de supervivencia que necesitarás</h2>
//         <div className="tags-container">
//           {selectedSkills.map((skill, index) => (
//             <span key={index} className="tag">{skill}</span>
//           ))}
//         </div>
//       </SkillsContainer>

//       <FourthContainer>
//         <h2>Nuestro proceso de selección</h2>
//         <ProcessStepsContainer>
//           {steps.map((step, index) => (
//             <StepWrapper key={index}>
//               <Reward>{step.reward}</Reward>
//               <StepLineContainer>
//                 <Circle><StepNumber>{step.number}</StepNumber></Circle>
//                 {index < steps.length - 1 && <ConnectingLine />}
//               </StepLineContainer>
//               <StepInput type="text" value={selectionProcess[index]} readOnly />
//             </StepWrapper>
//           ))}
//         </ProcessStepsContainer>
//       </FourthContainer>

//       <ResponsibilitiesContainer>
//         <h2>Responsabilidades</h2>
//         {responsibilities.map((resp, index) => (
//           <ResponsibilityInputGroup key={index}>
//             <p>{resp}</p>
//           </ResponsibilityInputGroup>
//         ))}
//       </ResponsibilitiesContainer>

//       <WhatWeLookingForContainer>
//         <h2>Qué buscamos</h2>
//         <div className="Needs-Container">
//             {[{ label: "Imprescindible", value: indispensable },
//             { label: "Ideal", value: ideal },
//             { label: "Es un plus", value: plus }]
//             .map((section, i) => (
//                 <div key={i}>
//                 <h3>{section.label}</h3>
//                 <div className="Needs-Columns">
//                     {section.value.map((val, idx) => (
//                     <p key={idx}>{val}</p>
//                     ))}
//                 </div>
//                 </div>
//             ))}
//         </div>
//         </WhatWeLookingForContainer>

//         <TextContainer>
//         <h2>¿Sentís que esta oportunidad es para vos?</h2>
//         <h3>Contanos qué te motiva a sumarte a este equipo.</h3>
//         {hasApplied ? (
//             <p style={{ fontWeight: "bold", color: "#2b8a3e" }}>
//             Ya te postulaste a este trabajo
//             </p>
//         ) : (
//             <button onClick={handleApply}>Postularse</button>
//         )}
//         </TextContainer>
        
//         {showModal && (
//         <SuccessApply>
//             <InnerSuccessApply>
//             <h2>✅ Postulación enviada con éxito</h2>
//             <StyledLink to={'/JobFinder'}>
//             <SuccessButton onClick={() => setShowModal(false)}>
//                 OK
//             </SuccessButton>
//             </StyledLink>
//             </InnerSuccessApply>
//         </SuccessApply>
//         )}
//     </>
//   );
// }

// import { Bell, Bookmark, BriefcaseBusiness, Mail, Menu } from "lucide-react";
// import {  BackgroundImage, 
//     Container, 
//     ContainerLogo, 
//     HeaderContainerWrapper, 
//     Header, 
//     HeaderItems, 
//     SearchBar, 
//     MainContainer, 
//     MainContainerImage, 
//     MainContainerText, 
//     MainContainerFirstText,
//     MainContainerSecondText, 
//     MatchDetailsContainer, 
//     MatchDetailsText, 
//     MatchDetailsTextItems, 
//     CompatibilityContainer, 
//     WhatWillYouDoContainer, 
//     WhoWillYouWorkWithContainer, 
//     SurvivalKit, 
//     OurSelectionProcess, 
//     ResponsabilitiesContainer, 
//     ResponsabilitiesItems, 
//     GreenUnderline, 
//     WhatAreWeLookingFor, 
//     IfYouGotHere, 
//     ApplyNowButton, 
//     StyledLink } from "./styles";

// export default function JobOpportunity() {
//     return (
//         <>

//         <Container>
//             <HeaderContainerWrapper>
//                 <BackgroundImage />
//                 <ContainerLogo>
//                     <img src="/images/GreenLogoDemo.svg" alt="" />
//                 </ContainerLogo>
//                 <SearchBar>
//                 <input type="text" name="" id="" placeholder="Búsqueda"/>
//                 </SearchBar>
//                 <Header>
//                     <HeaderItems>
//                         <p><img src="/images/wiibucks.png" alt="wiibucks" />400</p>
//                         <p><img src="/images/wiibucks.png" alt="wiibucks" />00</p>
//                         <Bell />
//                         <Mail />
//                         <BriefcaseBusiness />
//                         <Bookmark />
//                         <Menu />
//                     </HeaderItems>
//                 </Header>
//             </HeaderContainerWrapper>
//                 <MainContainer>
//                     <MainContainerImage>
//                     <img src="/images/JobOpportunityBackground.png" alt="" />
//                     </MainContainerImage>
//                     <MainContainerText>
//                         <h1>Desarrollador Web</h1>
//                         <MainContainerFirstText>
//                             <div>
//                                 <h3>Salario</h3>
//                                 <p>40 - 50 K</p>
//                             </div>
//                             <div>
//                                 <h3>Variable</h3>
//                                 <p>5K</p>
//                             </div>
//                             <div>
//                                 <h3>Presencial</h3>
//                                 <p>Madrid</p>
//                             </div>
//                             <div>
//                                 <h3>Remoto</h3>
//                                 <p>75%</p>
//                             </div>
//                         </MainContainerFirstText>
//                         <MainContainerSecondText>
//                             <h2>Sobre nosotros</h2>
//                             <p>Somos un equipo que rompe moldes en el mundo del desarrollo web.<br /> Creemos en la innovación, el trabajo en equipo y las ideas frescas. Si te<br />gusta desafiar lo establecido y construir código que marque la diferencia,<br /> este es tu sitio.</p>
//                         </MainContainerSecondText>
//                     </MainContainerText>
//                 </MainContainer>
//                 <MatchDetailsContainer>
//                         <img src="/images/BusinessCubeLogo.png" alt="" />
//                         <MatchDetailsText>
//                             <h2>Detalles del Match</h2>
//                             <MatchDetailsTextItems>
//                                 <div>
//                                     <p>Match</p>
//                                     <img src="/images/SeventyOnePercent.png" alt="" />
//                                     <p>Transparencia</p>
//                                     <img src="/images/SeventyPercent.png" alt="" />
//                                     <span></span>
//                                     <p>Requisitos</p>
//                                     <img src="/images/SixtyPercent.png" alt="" />
//                                     <span></span>
//                                     <p>Salarios</p>
//                                     <img src="/images/NinetyPercent.png" alt="" />
//                                     <span></span>
//                                 </div>
//                                 <div>
//                                     <p>Cultura</p>
//                                     <img src="/images/SixtyPercent.png" alt="" />
//                                     <span></span>
//                                     <p>Tecnologías</p>
//                                     <img src="/images/SeventyPercent.png" alt="" /> 
//                                     <span></span>
//                                     <p>Ubicación</p>
//                                     <img src="/images/SixtyPercent.png" alt="" />
//                                     <span></span>
//                                     <p>Identidad</p>
//                                     <img src="/images/SeventyPercent.png" alt="" /> 
//                                     <span></span>
//                                 </div>
//                             </MatchDetailsTextItems>
//                         </MatchDetailsText>
//                         <CompatibilityContainer>
//                                     <h2>COMPATIBILIDAD <br />CON MI PERFIL</h2>
//                                     <img src="/images/SevenPercent.png" alt="" />
//                         </CompatibilityContainer>
//                 </MatchDetailsContainer>
//                 <WhatWillYouDoContainer>
//                     <h2>Qué harás</h2>
//                     <img src="/images/GreenUnderline.png" alt="" />
//                     <p>Si buscas un sitio donde tu código impacte, donde cada día suponga un reto y <br />donde puedas crecer profesionalmente, sigue leyendo.<br /> <strong>Lo que harás</strong><br />
//                         <li>Construir y mejorar productos digitales con un enfoque en escalabilidad.</li> <br />
//                         <li>Diseñar arquitecturas eficientes y elegantes.</li> <br />
//                         <li>Colaborar con el equipo de diseño y producto para crear experiencias increíbles.</li> <br />
//                         <li>Resolver problemas complejos con soluciones innovadoras.</li><br />
//                         <li>Participar en revisiones de código y en la mejora continua del stack tecnológico.</li>
//                     </p>
//                 </WhatWillYouDoContainer>
//                 <WhoWillYouWorkWithContainer>
//                     <h2>Con quién trabajarás</h2>
//                     <img src="/images/GreenUnderline.png" alt="" />
//                     <img src="/images/TeamImage.png" alt="" />
//                 </WhoWillYouWorkWithContainer>
//                 <SurvivalKit>
//                     <h2>El kit de supervivencia que necesitarás:</h2>
//                     <img src="/images/SurvivalKit.png" alt="" />
//                 </SurvivalKit>
//                 <OurSelectionProcess>
//                     <h2>Nuestro proceso de selección</h2>
//                     <img src="/images/GreenUnderline.png" alt="" />
//                     <img src="/images/SelectionProcess.png" alt="" />
//                 </OurSelectionProcess>
//                 <ResponsabilitiesContainer>
//                     <h2>Responsabilidades</h2>
//                     <GreenUnderline src="/images/GreenUnderline.png" alt="" />
//                     <ResponsabilitiesItems>
//                         <p><img src="/images/GreenEmptyCircle.png" alt="" />Liderar el desarrollo de nuevas funcionalidades y productos digitales.</p>
//                         <p><img src="/images/GreenEmptyCircle.png" alt="" />Diseñar y mantener arquitecturas escalables y eficientes.</p>
//                         <p><img src="/images/GreenEmptyCircle.png" alt="" />Asegurar la calidad del código mediante buenas prácticas y revisiones.</p>
//                         <p><img src="/images/GreenEmptyCircle.png" alt="" />Colaborar estrechamente con equipos de diseño, producto y operaciones.</p>
//                         <p><img src="/images/GreenEmptyCircle.png" alt="" />Implementar soluciones técnicas innovadoras para optimizar rendimiento y seguridad.</p>
//                         <p><img src="/images/GreenEmptyCircle.png" alt="" />Documentar procesos y código para garantizar la escalabilidad del proyecto.</p>
//                         <p><img src="/images/GreenEmptyCircle.png" alt="" />Gestionar y solucionar incidencias en el backend y frontend.</p>
//                     </ResponsabilitiesItems>
//                 </ResponsabilitiesContainer>
//                 <WhatAreWeLookingFor>
//                     <h2>Qué buscamos</h2>
//                     <GreenUnderline src="/images/GreenUnderline.png" alt="" />
//                     <img src="/images/WhatAreWeLookingFor.png" alt="" />
//                 </WhatAreWeLookingFor>
//                 <IfYouGotHere src="/images/IfYouGotHere.png" alt="" />
//                 <ApplyNowButton>
//                     <StyledLink to="/MatchFound">
//                         <button>¡Aplicar ahora!</button>
//                     </StyledLink>
//                 </ApplyNowButton>
//         </Container>
//         </>
//   );
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
    ContainerJobOfferTltle, 
    ContainerLabelsForSquares, 
    ContainerResponsabilitiesInputs, 
    ContainerUpSearhAndItemsMobile, 
    DataOfferName, 
    DivContainerWhatLookingForSimpleSquare, 
    DivContainerWhatLookingForSquares, 
    FirstLineFinalMatch, 
    FirstLineSimpleSquare, 
    HeaderItemsToMobile, 
    JobOfferTitle, 
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

export default function CompanyOffer() {
  return (
    <ContainerAllPage>
        <ContainerIntroOffer>
            <ContainerUpSearhAndItemsMobile>
                <AvatarToMobile>
                    <img src="/images/Avatar2.png" alt="User Avatar" />
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
                    <ContainerJobOfferTltle>
                        <JobOfferTitle>
                            Senior Fullstack Developer
                        </JobOfferTitle>
                    </ContainerJobOfferTltle>
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
                        <div>
                          <img src="/images/Avatar2.png" alt="User Avatar" />
                        </div>
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
                <input type="text" placeholder="React"/>
                <input type="text" placeholder="Python"/>
                <input type="text" placeholder="Ruby"/>
            </TechnicalExperiencieBlueInput>
            <AddCircleBelowBlueInput><p>+</p></AddCircleBelowBlueInput>
            <OurProcessTitle>
                <p>Nuestro proceso</p>
                <div className="BlueRectangle1"></div>
            </OurProcessTitle>
            <ContainerImageOurProcess>
                <img src="/images/nuestroProcesoGreen.svg" alt="Our Process Image" />
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
                    <SecondLineFinalMatch>Hagamos <span id="imgMatch"><SpanImageMatch src="/images/greenMatchGray.svg" alt="Match Green" /></span></SecondLineFinalMatch><SecondLineFinalMatchBis>y comentanos qué</SecondLineFinalMatchBis>
                </div>
                <ThirdLineFinalMatch>te motiva para unirte a nuestro equipo.</ThirdLineFinalMatch>
                <Link to="/MatchFound">
                    <ButtonFinalMatch>Continuar</ButtonFinalMatch>
                </Link>
            </ContainerFinalMatch>
        <ContainerFooterToMobile>
            <House className="items" fill="#FFF"  width={26} height={26}/>
            <BriefcaseBusiness className="items" fill="#FFF" width={26} height={26} />
            <Link to="/MatchFound">
              <img src="/images/greenRocket.svg" alt="Rocket Footer Image" />
            </Link>
            <Mail className="items" fill="#FFF" width={26} height={26}/>
            <Bell className="items" fill="#FFF" width={26} height={26}/>
        </ContainerFooterToMobile>
        </ContainerExplainPage>
    </ContainerAllPage> 
  )
}
