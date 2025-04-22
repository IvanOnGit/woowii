// import { Link } from "react-router-dom";
// import { BackSpiderDiv, 
//     BtnMatchCandidateDetail, 
//     ButtonNextCandidateDetail, 
//     CandidateDetailContainer, 
//     CenterCandidateDetailColumn, 
//     GraphBarCandidateDetail, 
//     HardsetDiv, 
//     ImageVideosCandidateDetail, 
//     LeftCandidateDetailColumn,  
//     LitleBlueDiv,    
//     LitleBlueDivCenterOne,  
//     LitleBlueDivCenterTwo,  
//     MatchAnalysisDiv, 
//     MenuCandidateDetail, 
//     NavigateBarCandidateDetail, 
//     PercentageBigGreen, 
//     RightCandidateDetailColumn, 
//     SoftsetDiv, 
//     SpiderGraph, 
//     SuperpowerDiv, 
//     ToolsetDiv, 
//     TxtUpCandidateDetail, 
//     UserImageCandidateDetail} from "./styles";
// import { ChevronLeft, 
//     Menu, 
//     ChartArea, 
//     Trophy, 
//     Eye, 
//     Wrench, 
//     Rocket} from "lucide-react";


// export default function CandidateDetail() {
//   return (
//     <>
//     <NavigateBarCandidateDetail>
//         <ChevronLeft id="chevron" size={(24)} />
//         <MenuCandidateDetail>
//             <li>Home</li>
//             <li>How</li>
//             <li>Features</li>
//             <li>Payments</li>
//             <li>MVP</li>
//         </MenuCandidateDetail>
//         <Menu id="hambur" size={24} />
//     </NavigateBarCandidateDetail>
//     <CandidateDetailContainer>
//         <LeftCandidateDetailColumn>
//             <UserImageCandidateDetail src="/images/userImgCandidateDetails.svg" />
//                 <h2>User_125a3j</h2>
//                 <p id="work">Brand Manager</p>
//             <MatchAnalysisDiv>
//                 <ChartArea size={24} color="#FFF" />
//                 <p>Match Analisys</p>
//             </MatchAnalysisDiv>
//             <h3>ALL MY STORIES</h3>
//             <LitleBlueDiv />
//             <HardsetDiv>
//                 <Trophy size={24} color="#FFF" />
//                 <p>Hardset</p>
//             </HardsetDiv>
//             <SoftsetDiv>
//                 <Eye size={24} color="#FFF" />
//                 <p>Softset</p>
//             </SoftsetDiv>
//             <ToolsetDiv>
//                 <Wrench size={24} color="#FFF" />
//                 <p>Toolset</p>
//             </ToolsetDiv>
//             <SuperpowerDiv>
//                 <Rocket size={24} color="#FFF" />
//                 <p>Superpower</p>
//             </SuperpowerDiv>
//             <MatchAnalysisDiv>
//                 <ChartArea size={24} color="#FFF" />
//                 <p>Match Analisys</p>
//             </MatchAnalysisDiv>
//             <PercentageBigGreen src="/images/percentageBig.svg" alt="Porcentaje Grande Verde"/>
//             <BtnMatchCandidateDetail>
//                 MATCH
//             </BtnMatchCandidateDetail>
//         </LeftCandidateDetailColumn>
//         <CenterCandidateDetailColumn>
//             <TxtUpCandidateDetail src="/images/textoUpCandDetail.svg" alt="Texto Superior" />
//             <h3>MY SKILLSET</h3>
//             <LitleBlueDivCenterOne />
//             <ImageVideosCandidateDetail src="/images/videosCandDetail.svg" alt="Cuadros de videos"/>
//             <h3 id="tool">MY TOOLSET</h3>
//             <LitleBlueDivCenterTwo />
//         </CenterCandidateDetailColumn>
//         <RightCandidateDetailColumn>
//             <GraphBarCandidateDetail src="/images/barrasCandidateDetail.svg" alt="Graphic Bars" />
//             <BackSpiderDiv>
//                 <SpiderGraph src="/images/spiderGraph.svg" alt="Spider Graph" />
//             </BackSpiderDiv>
//             <Link to={'/CompanyInterviewPage'}>
//             <ButtonNextCandidateDetail>
//                 Continuar
//             </ButtonNextCandidateDetail>
//             </Link>
//         </RightCandidateDetailColumn>
//     </CandidateDetailContainer>
//     </>
//   )
// }
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { AllPageMobile, 
  BackSpiderDiv,  
  ButtonNextCandidateDetail, 
  CandidateDetailContainer, 
  CenterCandidateDetailColumn, 
  CloseButton,  
  ContainerFooterToMobile,  
  ContainerLabelsColumnLogo, 
  ContainerLogo, 
  ContentContainer, 
  ContentWrapper, 
  DivContainerBigLogo, 
  HardsetDiv,  
  ImageLogoBlue,  
  Item, 
  ItemGrid,  
  LeftCandidateDetailColumn,      
  LogoBigCompany,     
  MatchAnalysisDiv, 
  MenuCandidateDetail, 
  MenuMobile, 
  NavigateBarCandidateDetail, 
  NavigateBarMobile, 
  RightCandidateDetailColumn, 
  SectionTitle, 
  Sidebar, 
  SidebarCloseButton, 
  SidebarToggleButton, 
  SoftsetDiv, 
  SuperpowerDiv, 
  ToolsetDiv,  
  UpNavigateMobile,  
  UserImageCandidateDetail} from "./styles";
import { ChevronLeft, 
  Menu, 
  ChartArea, 
  Trophy, 
  Eye, 
  Wrench, 
  Rocket,
  CircleChevronLeft,
  X,
  House,
  BriefcaseBusiness,
  Mail,
  Bell} from "lucide-react";
import RadarChartComponent from "../Radar/RadarChartComponent";
import { generateRandomData } from "../../utils/dataGenerator";
import type { DataPoint } from "../../types";
import BarCharts from "../BarCharts/BarCharts";
import ExpandableText from "../ExpandableText/ExpandableText";
import BarChartsMobile from "../BarChartsMobile/BarChartsMobile";
export default function CandidateDetail() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [data, setData] = useState<DataPoint[]>(generateRandomData())
    const regenerateData = () => {
      setData(generateRandomData())
    }
    const [activeItems, setActiveItems] = useState<{ id: number; title: string }[]>([]);
    const imageSrc = "images/botonRepro.svg";
    const addItem = (title: string) => {
      if (!activeItems.some((item) => item.title === title)) {
        setActiveItems([...activeItems, { id: Date.now(), title }]);
      }
    };
    const removeItem = (id: number) => {
      setActiveItems(activeItems.filter((item) => item.id !== id));
    };
    const getTitles = (category: string) => {
      switch (category) {
        case "Hardset":
          return ["Strategic Developper", "Data driven analytics", "Creativity", "Effective Communication"];
        case "Softset":
          return ["Java", "React", "JavaScript", "TypeScript"];
        case "Toolset":
          return ["Brand Analytics Platform", "Social Media Management", "Docker", "SQL Server"];
        default:
          return [];
      }
    };
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const playSound = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/Audio/DemoVoice.mp3");
    }
    audioRef.current.play().catch((error) => {
      console.error("Error reproduciendo el audio:", error);
    });
  };
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <>
    <NavigateBarCandidateDetail>
        <ChevronLeft id="chevron" size={(24)} />
        <MenuCandidateDetail>
            <li>Home</li>
            <li>How</li>
            <li>Features</li>
            <li>Payments</li>
            <li>MVP</li>
        </MenuCandidateDetail>
        <Menu id="hambur" size={24} />
    </NavigateBarCandidateDetail>
    <CandidateDetailContainer>
        <LeftCandidateDetailColumn>
            <UserImageCandidateDetail src="/images/userImgCandidateDetails.svg" />
                <h2>User_125a3j</h2>
                <p id="work">Brand Manager</p>
            <MatchAnalysisDiv>
                <ChartArea size={24} color="#FFF" />
                <p>Match Analysis</p>
            </MatchAnalysisDiv>
            <h3>ALL MY STORIES</h3>
            <HardsetDiv onClick={() => addItem("Hardset")}>
                <Trophy size={24} color="#FFF" />
                <p>Hardset</p>
            </HardsetDiv>
            <SoftsetDiv onClick={() => addItem("Softset")}>
                <Eye size={24} color="#FFF" />
                <p>Softset</p>
            </SoftsetDiv>
            <ToolsetDiv onClick={() => addItem("Toolset")}>
                <Wrench size={24} color="#FFF" />
                <p>Toolset</p>
            </ToolsetDiv>
            <SuperpowerDiv onClick={() => addItem("Superpower")}>
                <Rocket size={24} color="#FFF" />
                <p>Superpower</p>
            </SuperpowerDiv>
            <MatchAnalysisDiv>
                <ChartArea size={24} color="#FFF" />
                <p>Match Analysis</p>
            </MatchAnalysisDiv>
            <DivContainerBigLogo>
                <LogoBigCompany src="/images/avatarCompany1.svg"  alt="Company Big Logo"/>
            </DivContainerBigLogo>
        </LeftCandidateDetailColumn>
        <CenterCandidateDetailColumn>
            <ExpandableText />
        <div>
        {activeItems.map((item) => (
          <ContentWrapper key={item.id}>
            <SectionTitle>{item.title}</SectionTitle>
            <ContentContainer>
              <CloseButton onClick={() => removeItem(item.id)}>X</CloseButton>
              {item.title === "Superpower" ? (
                <Item id="super">
                  <h3>Superpower</h3>
                  <img src={imageSrc} alt="Imagen" width="50" onClick={playSound}/>
                  <audio ref={audioRef} src="/Audio/DemoVoice.mp3" />
                </Item>
              ) : (
                <ItemGrid>
                  {getTitles(item.title).map((title, i) => (
                    <Item key={i}>
                      <h3>{title}</h3>
                      <img src={imageSrc} alt="Imagen" width="50" onClick={playSound}/>
                      <audio ref={audioRef} src="/Audio/DemoVoice.mp3" />
                    </Item>
                  ))}
                </ItemGrid>
              )}
            </ContentContainer>
          </ContentWrapper>
        ))}
      </div>
        </CenterCandidateDetailColumn>
        <RightCandidateDetailColumn>
            <div className="containerBarCharts">
                <BarCharts />
            </div>
            <BackSpiderDiv>
                <RadarChartComponent data={data} />
                <button id="newGenerate" onClick={regenerateData}>Generar Nuevos Datos</button>
            </BackSpiderDiv>
            <Link to={'/CompanyMatchFound'}>
              <ButtonNextCandidateDetail>
                Continuar
              </ButtonNextCandidateDetail>
            </Link>
        </RightCandidateDetailColumn>
    </CandidateDetailContainer>
    <AllPageMobile>
      <UpNavigateMobile>
        <CircleChevronLeft fill='#460BFF' stroke='#FFF' width={30} height={30} />
        <SidebarToggleButton onClick={toggleSidebar}>
          <Menu stroke='#460BFF' width={30} height={30} />
        </SidebarToggleButton>
      </UpNavigateMobile>
      <NavigateBarMobile>
        <MenuMobile>
            <li>Home</li>
            <li>How</li>
            <li>Features</li>
            <li>Payments</li>
            <li>MVP</li>
        </MenuMobile>
      </NavigateBarMobile>
      <ExpandableText />
      <Sidebar isOpen={sidebarOpen}>
        <ContainerLogo>
          <ImageLogoBlue src="/images/LogoBlue.svg" alt="Blue Woowii's Logo" />
          <SidebarCloseButton onClick={toggleSidebar}>
            <X />
          </SidebarCloseButton>
        </ContainerLogo>
        <ContainerLabelsColumnLogo>
          <UserImageCandidateDetail src="/images/userImgCandidateDetails.svg" />
                <h2>User_125a3j</h2>
                <p id="work">Brand Manager</p>
            <MatchAnalysisDiv>
                <ChartArea size={24} color="#460BFF" />
                <p id="match">Match Analysis</p>
            </MatchAnalysisDiv>
            <h3>ALL MY STORIES</h3>
            <HardsetDiv onClick={() => {
              addItem("Hardset")
              toggleSidebar()
            }}
            >
            <Trophy size={24} color="#460BFF" />
              <p>Hardset</p>
            </HardsetDiv>
            <SoftsetDiv 
            onClick={() => {
              addItem("Softset")
              toggleSidebar()
            }}
            >
                <Eye size={24} color="#460BFF" />
                <p>Softset</p>
            </SoftsetDiv>
            <ToolsetDiv onClick={() => {
              addItem("Toolset")
              toggleSidebar()
            }}
            >
                <Wrench size={24} color="#460BFF" />
                <p>Toolset</p>
            </ToolsetDiv>
            <SuperpowerDiv onClick={() => {
              addItem("Superpower")
              toggleSidebar()
            }}
            >
                <Rocket size={24} color="#460BFF" />
                <p>Superpower</p>
            </SuperpowerDiv>
            <MatchAnalysisDiv>
                <ChartArea size={24} color="#460BFF" />
                <p>Match Analysis</p>
            </MatchAnalysisDiv>
            <DivContainerBigLogo>
                <LogoBigCompany src="/images/avatarCompany1.svg"  alt="Company Big Logo"/>
            </DivContainerBigLogo>
        </ContainerLabelsColumnLogo>
      </Sidebar>
      <div>
        {activeItems.map((item) => (
          <ContentWrapper key={item.id}>
            <SectionTitle>{item.title}</SectionTitle>
            <ContentContainer>
              <CloseButton onClick={() => removeItem(item.id)}>X</CloseButton>
              {item.title === "Superpower" ? (
                <Item id="super">
                  <h3>Superpower</h3>
                  <img src={imageSrc} alt="Imagen" width="50" onClick={playSound}/>
                  <audio ref={audioRef} src="/Audio/DemoVoice.mp3" />
                </Item>
              ) : (
                <ItemGrid>
                  {getTitles(item.title).map((title, i) => (
                    <Item key={i}>
                      <h3>{title}</h3>
                      <img src={imageSrc} alt="Imagen" width="50" onClick={playSound}/>
                      <audio ref={audioRef} src="/Audio/DemoVoice.mp3" />
                    </Item>
                  ))}
                </ItemGrid>
              )}
            </ContentContainer>
          </ContentWrapper>
        ))}
      </div>
      <div className="containerBarCharts">
        <BarChartsMobile />
      </div>
      <BackSpiderDiv>
        <RadarChartComponent data={data} />
        <button id="newGenerate" onClick={regenerateData}>Generar Nuevos Datos</button>
      </BackSpiderDiv>
      <Link to={'/CompanyMatchFound'}>
        <ButtonNextCandidateDetail>
          Continuar
        </ButtonNextCandidateDetail>
      </Link>
      <ContainerFooterToMobile>
        <House className="items" fill="#FFF"  width={26} height={26}/>
        <BriefcaseBusiness className="items" fill="#FFF" width={26} height={26} />
        <Link to='/CompanyMatchFound'>
            <img src="/images/rocketFooter.svg" alt="Rocket Footer Image" />
        </Link>
        <Mail className="items" fill="#FFF" width={26} height={26}/>
        <Bell className="items" fill="#FFF" width={26} height={26}/>
      </ContainerFooterToMobile>
    </AllPageMobile>
    </>
  )
}