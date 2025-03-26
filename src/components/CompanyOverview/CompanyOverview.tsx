import { useState } from "react";
import { Bell, Bookmark, BriefcaseBusiness, Mail, Menu, ChevronDown } from "lucide-react";
import { ColumnDashBoardDownLeftTitle, 
  ColumnDashBoardDownRightTitle, 
  ContainerColumnDashBoard, 
  ContainerColumnDashBoardDown, 
  ContainerColumnDashBoardDownLeft, 
  ContainerColumnDashBoardDownRight, 
  ContainerColumnDashBoardUp, 
  ContainerColumnLogoAndSelects, 
  ContainerCompanyOverviewAll, 
  ContainerFirstSquareRightHirings, 
  ContainerFirstSquareSelects, 
  ContainerGraphs,  
  ContainerLogo, 
  ContainerLogoAndNameCompany, 
  ContainerSecondSquareSelects, 
  ContainerSelects, 
  ContainerUpFirstSquareLeftDashBoard, 
  FirstSquareLeftDashboard, 
  FirstSquareRightDashboard, 
  Graphics, 
  GraphicsPercentage, 
  Header, 
  HeaderItems, 
  ImageLogoCompany, 
  ImageLogoWhite, 
  ImageMatchesLeftDashBoard, 
  ImageReviewsLeftDashBoard, 
  SearchContainer, 
  TextUnderImagesLeftDashBoard,
  TitleCommentAndMessages,
  WoodyChat} from "./styles";
  import ImageSlider from "../ImageSlider/ImageSlider";
  import VerticalSlider from "../VerticalSlider/VerticalSlider";
  import VerticalSliderOverview from "../VerticalSliderOverview/VerticalSliderOverview";
  import ChatBox from "../ChatBox/ChatBox";


export default function CompanyOverview() {
    const [isChatOpen, setIsChatOpen] = useState(false);
  return (
    <ContainerCompanyOverviewAll>
        <ContainerColumnLogoAndSelects>
            <ContainerLogo>
                <ImageLogoWhite src="/images/WhiteLogo.svg" />
            </ContainerLogo>
            <ContainerFirstSquareSelects>
                <ContainerSelects>
                    <p>DashBoard</p>
                    <ChevronDown className="chev" stroke="#FFF" />
                </ContainerSelects>
                <ContainerSelects>
                    <p>Interviews</p>
                    <ChevronDown className="chev" stroke="#FFF" />
                </ContainerSelects>
                <ContainerSelects>
                    <p>Hiring Summary</p>
                    <ChevronDown className="chev" stroke="#FFF" />
                </ContainerSelects>
                <ContainerSelects>
                    <p>Talent Data</p>
                    <ChevronDown className="chev" stroke="#FFF" />
                </ContainerSelects>
                <ContainerSelects>
                    <p>Resources</p>
                    <ChevronDown className="chev" stroke="#FFF" />
                </ContainerSelects>
                <ContainerSelects>
                    <p>Alerts</p>
                    <ChevronDown className="chev" stroke="#FFF" />
                </ContainerSelects>
            </ContainerFirstSquareSelects>
            <ContainerSecondSquareSelects>
                <ContainerSelects>
                    <p>Settings</p>
                    <ChevronDown className="chev" stroke="#FFF" />
                </ContainerSelects>
                <ContainerSelects>
                    <p>Sign Out</p>
                    <ChevronDown className="chev" stroke="#FFF" />
                </ContainerSelects>
                <ContainerSelects>
                    <p>Help</p>
                    <ChevronDown className="chev" stroke="#FFF" />
                </ContainerSelects>
            </ContainerSecondSquareSelects>
            <WoodyChat src="/images/woodyWhiteChat.svg" alt="Woody Chat Image" onClick={() => setIsChatOpen(!isChatOpen)} >
            </WoodyChat>
            {isChatOpen && <ChatBox onClose={() => setIsChatOpen(false)} />}
        </ContainerColumnLogoAndSelects>
        <ContainerColumnDashBoard>
            <ContainerColumnDashBoardUp>
            <Header>
                <ContainerLogoAndNameCompany>
                    <ImageLogoCompany src="/images/avatarCompany1.svg" />
                    <p>@Empresa</p>
                </ContainerLogoAndNameCompany>
                <SearchContainer>
                    <input type="text" placeholder="Búsqueda" />
                </SearchContainer>
                <HeaderItems>
                    <p><img src="/images/wiibucks.png" alt="wiibucks" />50</p>
                    <p><img src="/images/trophy.svg" alt="wiibucks" />00</p>
                    <Bell stroke="#FFF" fill="#460BFF" width={40} height={40}/>
                    <Mail stroke="#FFF" fill="#460BFF" width={40} height={40}/>
                    <BriefcaseBusiness stroke="#FFF" fill="#460BFF" width={40} height={40} />
                    <Bookmark stroke="#FFF" fill="#460BFF" width={40} height={40}/>
                    <Menu stroke="#460BFF"width={40} height={40}/>
                </HeaderItems> 
            </Header>
            </ContainerColumnDashBoardUp>
            <ContainerColumnDashBoardDown>
                <ContainerColumnDashBoardDownLeft>
                    <ColumnDashBoardDownLeftTitle>Overview</ColumnDashBoardDownLeftTitle>
                    <div className="columnLeftArreglo">
                    <FirstSquareLeftDashboard>
                        <ContainerUpFirstSquareLeftDashBoard>
                            <ImageMatchesLeftDashBoard src="/images/matches.svg" alt="Imagen Matches"/>
                            <ImageReviewsLeftDashBoard src="/images/reviews.svg" alt="Imagen Reviews"/>
                        </ContainerUpFirstSquareLeftDashBoard>
                        <TextUnderImagesLeftDashBoard>
                            Interviews done     
                        </TextUnderImagesLeftDashBoard>
                        <ImageSlider />
                    </FirstSquareLeftDashboard>
                    <TitleCommentAndMessages>Comment & Message</TitleCommentAndMessages>
                    <VerticalSliderOverview />
                    </div>
                </ContainerColumnDashBoardDownLeft>
                <ContainerColumnDashBoardDownRight>
                    <ColumnDashBoardDownRightTitle>Hirings in Progress</ColumnDashBoardDownRightTitle>
                    <FirstSquareRightDashboard>
                        <ContainerFirstSquareRightHirings>
                            <VerticalSlider />
                        </ContainerFirstSquareRightHirings>
                        <ContainerGraphs>
                            <Graphics src="/images/matchGraph.svg" alt="Match Graphic" />
                            <GraphicsPercentage>
                                <h2>89%</h2>
                                <p>MATCHES</p>
                            </GraphicsPercentage>
                        </ContainerGraphs>    
                        <ContainerGraphs>
                            <Graphics src="/images/reviewsGraph.svg" alt="Review Graphic" />
                            <GraphicsPercentage>
                            <h3>-10%</h3>
                            <p id="rev">REVIEWS</p>
                            </GraphicsPercentage>
                        </ContainerGraphs>
                    </FirstSquareRightDashboard>
                </ContainerColumnDashBoardDownRight>
            </ContainerColumnDashBoardDown>
        </ContainerColumnDashBoard>
    </ContainerCompanyOverviewAll>
  )
}