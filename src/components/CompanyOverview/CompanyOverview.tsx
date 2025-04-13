// import { useState } from "react";
// import { Bell, Bookmark, BriefcaseBusiness, Mail, Menu, ChevronDown } from "lucide-react";
// import { ColumnDashBoardDownLeftTitle, 
//   ColumnDashBoardDownRightTitle, 
//   ContainerColumnDashBoard, 
//   ContainerColumnDashBoardDown, 
//   ContainerColumnDashBoardDownLeft, 
//   ContainerColumnDashBoardDownRight, 
//   ContainerColumnDashBoardUp, 
//   ContainerColumnLogoAndSelects, 
//   ContainerCompanyOverviewAll, 
//   ContainerFirstSquareRightHirings, 
//   ContainerFirstSquareSelects, 
//   ContainerGraphs,  
//   ContainerLogo, 
//   ContainerLogoAndNameCompany, 
//   ContainerSecondSquareSelects, 
//   ContainerSelects, 
//   ContainerUpFirstSquareLeftDashBoard, 
//   FirstSquareLeftDashboard, 
//   FirstSquareRightDashboard, 
//   Graphics, 
//   GraphicsPercentage, 
//   Header, 
//   HeaderItems, 
//   ImageLogoCompany, 
//   ImageLogoWhite, 
//   ImageMatchesLeftDashBoard, 
//   ImageReviewsLeftDashBoard, 
//   SearchContainer, 
//   StyledLink, 
//   TextUnderImagesLeftDashBoard,
//   TitleCommentAndMessages,
//   WoodyChat} from "./styles";
//   import ImageSlider from "../ImageSlider/ImageSlider";
//   import VerticalSlider from "../VerticalSlider/VerticalSlider";
//   import VerticalSliderOverview from "../VerticalSliderOverview/VerticalSliderOverview";
//   import ChatBox from "../ChatBox/ChatBox";


// export default function CompanyOverview() {
//     const [isChatOpen, setIsChatOpen] = useState(false);
//   return (
//     <ContainerCompanyOverviewAll>
//         <ContainerColumnLogoAndSelects>
//             <ContainerLogo>
//                 <ImageLogoWhite src="/images/WhiteLogo.svg" />
//             </ContainerLogo>
//             <ContainerFirstSquareSelects>
//                 <ContainerSelects>
//                     <p>DashBoard</p>
//                     <ChevronDown className="chev" stroke="#FFF" />
//                 </ContainerSelects>
//                 <ContainerSelects>
//                     <p>Interviews</p>
//                     <ChevronDown className="chev" stroke="#FFF" />
//                 </ContainerSelects>
//                 <ContainerSelects>
//                     <p>Hiring Summary</p>
//                     <ChevronDown className="chev" stroke="#FFF" />
//                 </ContainerSelects>
//                 <ContainerSelects>
//                     <p>Talent Data</p>
//                     <ChevronDown className="chev" stroke="#FFF" />
//                 </ContainerSelects>
//                 <ContainerSelects>
//                     <p>Resources</p>
//                     <ChevronDown className="chev" stroke="#FFF" />
//                 </ContainerSelects>
//                 <ContainerSelects>
//                     <p>Alerts</p>
//                     <ChevronDown className="chev" stroke="#FFF" />
//                 </ContainerSelects>
//             </ContainerFirstSquareSelects>
//             <ContainerSecondSquareSelects>
//                 <ContainerSelects>
//                     <p>Settings</p>
//                     <ChevronDown className="chev" stroke="#FFF" />
//                 </ContainerSelects>
//                 <ContainerSelects>
//                     <p>Sign Out</p>
//                     <ChevronDown className="chev" stroke="#FFF" />
//                 </ContainerSelects>
//                 <ContainerSelects>
//                     <p>Help</p>
//                     <ChevronDown className="chev" stroke="#FFF" />
//                 </ContainerSelects>
//             </ContainerSecondSquareSelects>
//             <WoodyChat src="/images/woodyWhiteChat.svg" alt="Woody Chat Image" onClick={() => setIsChatOpen(!isChatOpen)} >
//             </WoodyChat>
//             {isChatOpen && <ChatBox onClose={() => setIsChatOpen(false)} />}
//         </ContainerColumnLogoAndSelects>
//         <ContainerColumnDashBoard>
//             <ContainerColumnDashBoardUp>
//             <Header>
//                 <ContainerLogoAndNameCompany>
//                     <ImageLogoCompany src="/images/avatarCompany1.svg" />
//                     <p>@Empresa</p>
//                 </ContainerLogoAndNameCompany>
//                 <SearchContainer>
//                     <input type="text" placeholder="Búsqueda" />
//                 </SearchContainer>
//                 <HeaderItems>
//                     <p><img src="/images/wiibucks.png" alt="wiibucks" />100</p>
//                     <p><img src="/images/trophy.svg" alt="wiibucks" />00</p>
//                     <Bell stroke="#FFF" fill="#460BFF" width={30} height={30}/>
//                     <Mail stroke="#FFF" fill="#460BFF" width={30} height={30}/>
//                     <BriefcaseBusiness stroke="#FFF" fill="#460BFF" width={30} height={30} />
//                     <Bookmark stroke="#FFF" fill="#460BFF" width={30} height={30}/>
//                     <Menu stroke="#460BFF"width={30} height={30}/>
//                 </HeaderItems> 
//             </Header>
//             </ContainerColumnDashBoardUp>
//             <ContainerColumnDashBoardDown>
//                 <ContainerColumnDashBoardDownLeft>
//                     <ColumnDashBoardDownLeftTitle>Overview</ColumnDashBoardDownLeftTitle>
//                     <div className="columnLeftArreglo">
//                     <FirstSquareLeftDashboard>
//                         <ContainerUpFirstSquareLeftDashBoard>
//                             <ImageMatchesLeftDashBoard src="/images/matches.svg" alt="Imagen Matches"/>
//                             <ImageReviewsLeftDashBoard src="/images/reviews.svg" alt="Imagen Reviews"/>
//                         </ContainerUpFirstSquareLeftDashBoard>
//                         <TextUnderImagesLeftDashBoard>
//                             Interviews done     
//                         </TextUnderImagesLeftDashBoard>
//                         <ImageSlider />
//                     </FirstSquareLeftDashboard>
//                     <TitleCommentAndMessages>Comment & Message</TitleCommentAndMessages>
//                     <VerticalSliderOverview />
//                     </div>
//                 </ContainerColumnDashBoardDownLeft>
//                   <ContainerColumnDashBoardDownRight>
//                       <StyledLink to={'/CompanyOffer'}>
//                           <ColumnDashBoardDownRightTitle>Hirings in Progress</ColumnDashBoardDownRightTitle>
//                       </StyledLink>
//                     <FirstSquareRightDashboard>
//                         <ContainerFirstSquareRightHirings>
//                             <VerticalSlider />
//                         </ContainerFirstSquareRightHirings>
//                         <ContainerGraphs>
//                             <Graphics src="/images/matchGraph.svg" alt="Match Graphic" />
//                             <GraphicsPercentage>
//                                 <h2>89%</h2>
//                                 <p>MATCHES</p>
//                             </GraphicsPercentage>
//                         </ContainerGraphs>    
//                         <ContainerGraphs>
//                             <Graphics src="/images/reviewsGraph.svg" alt="Review Graphic" />
//                             <GraphicsPercentage>
//                             <h3>-10%</h3>
//                             <p id="rev">REVIEWS</p>
//                             </GraphicsPercentage>
//                         </ContainerGraphs>
//                     </FirstSquareRightDashboard>
//                 </ContainerColumnDashBoardDownRight>
//             </ContainerColumnDashBoardDown>
//         </ContainerColumnDashBoard>
//     </ContainerCompanyOverviewAll>
//   )
// }
import { useState } from "react";
import { Bell, Bookmark, BriefcaseBusiness, ChevronDown, House, Mail, Menu } from "lucide-react";
import { AvatarToMobile,  
    ColumnDashBoardDownLeftTitle,  
    ColumnDashBoardDownRightTitle,  
    ContainerAllMobile, 
    ContainerChevronDown, 
    ContainerChevronDownForHirings, 
    ContainerChevronDownForMessages, 
    ContainerColumnDashBoard, 
    ContainerColumnDashBoardDown, 
    ContainerColumnDashBoardDownLeft, 
    ContainerColumnDashBoardDownRight, 
    ContainerColumnDashBoardUp, 
    ContainerColumnLogoAndSelects, 
    ContainerCompanyOverviewAll, 
    ContainerFirstSquareRightHirings, 
    ContainerFirstSquareSelects, 
    ContainerFooterToMobile, 
    ContainerGraphs, 
    ContainerGraphsUpMobile, 
    ContainerGraphsUpMobileFirst, 
    ContainerLogo, 
    ContainerLogoAndNameCompany, 
    ContainerOverviewTitle, 
    ContainerSecondSquareSelects, 
    ContainerSelects, 
    ContainerUpFirstSquareLeftDashBoard, 
    ContainerUpFirstSquareLeftDashBoardUpMobile, 
    ContainerUpSearhAndItemsMobile, 
    FirstSquareLeftDashboard, 
    FirstSquareLeftDashboardUpMobile, 
    FirstSquareRightDashboardUpMobile, 
    Graphics, 
    GraphicsPercentage,  
    GraphicsPercentageUpMobile,  
    GraphicsUpMobile,  
    Header,  
    HeaderItems,  
    HeaderItemsToMobile, 
    ImageLogoCompany, 
    ImageLogoWhite, 
    ImageMatchesLeftDashBoard, 
    ImageMatchesLeftDashBoardUpMobile, 
    ImageReviewsLeftDashBoard, 
    ImageReviewsLeftDashBoardUpMobile, 
    SearchContainer, 
    SearchUpToMobile, 
    SliderContainerTitle,   
    StyledLink,   
    TextUnderImagesLeftDashBoard, 
    TextUnderImagesLeftDashBoardUpMobile, 
    TitleCommentAndMessages, 
    TitleCommentAndMessagesUpMobile, 
    WoodyChat} from "./styles";
import ImageSlider from "../ImageSlider/ImageSlider";
import VerticalSliderOverview from "../VerticalSliderOverview/VerticalSliderOverview";
import VerticalSlider from "../VerticalSlider/VerticalSlider";
import ChatBox from "../ChatBox/ChatBox";


export default function NewCompanyOverview() {
    const [isChatOpen, setIsChatOpen] = useState(false);
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
        <ContainerOverviewTitle>
            <h2>Overview</h2>
        </ContainerOverviewTitle>
        <ContainerChevronDown>
            <ChevronDown id="arrow" width={20} height={20} stroke="#460BFF" />
        </ContainerChevronDown>
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
        <ContainerChevronDownForMessages>
            <ChevronDown width={20} height={20} stroke="#460BFF" />
        </ContainerChevronDownForMessages>
        <VerticalSliderOverview />
        <SliderContainerTitle>Hirings in Process</SliderContainerTitle>
        <ContainerChevronDownForHirings>
            <ChevronDown width={20} height={20} stroke="#460BFF" />
        </ContainerChevronDownForHirings>
        <VerticalSlider />
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
        <ContainerFooterToMobile>
            <House className="items" fill="#FFF"  width={26} height={26}/>
            <BriefcaseBusiness className="items" fill="#FFF" width={26} height={26} />
            {/* <Link to="/CompanyOverview"> */}
              <img src="/images/rocketFooter.svg" alt="Rocket Footer Image" />
            {/* </Link> */}
            <Mail className="items" fill="#FFF" width={26} height={26}/>
            <Bell className="items" fill="#FFF" width={26} height={26}/>
        </ContainerFooterToMobile>
    </ContainerAllMobile>
    {/* //   -----------------Laptop and upper sreens------------------------------------------------- */}
    <ContainerCompanyOverviewAll>
    <ContainerColumnLogoAndSelects>
            <ContainerLogo>
                <ImageLogoWhite src="/images/WhiteLogo.svg" />
            </ContainerLogo>
            <ContainerFirstSquareSelects>
                <ContainerSelects>
                    <select id="dashboard" name="dashboard">
                        <option value="">DashBoard</option>
                        <hr></hr>
                    </select>
                </ContainerSelects>
                <ContainerSelects>
                    <select id="interviews" name="interviews">
                        <option value="">Interviews</option>
                        <hr></hr>
                    </select>
                </ContainerSelects>
                <ContainerSelects>
                    <select id="hiring" name="hiring">
                        <option value="">Hiring Summary</option>
                        <hr></hr>
                    </select>
                </ContainerSelects>
                <ContainerSelects>
                    <select id="talent" name="talent">
                        <option value="">Talent Data</option>
                        <hr></hr>
                    </select>
                </ContainerSelects>
                <ContainerSelects>
                    <select id="resources" name="resources">
                        <option value="">Resources</option>
                        <hr></hr>
                    </select>
                </ContainerSelects>
                <ContainerSelects>
                    <select id="alerts" name="alerts">
                        <option value="">Alerts</option>
                        <hr></hr>
                    </select>
                </ContainerSelects>
            </ContainerFirstSquareSelects>
            <ContainerSecondSquareSelects>
                <ContainerSelects>
                    <select id="settings" name="settings">
                        <option value="">Settings</option>
                        <hr></hr>
                    </select>
                </ContainerSelects>
                <ContainerSelects>
                    <select id="signout" name="signout">
                        <option value="">Sign Out</option>
                        <hr></hr>
                    </select>
                </ContainerSelects>
                <ContainerSelects>
                    <select id="help" name="help">
                        <option value="">Help</option>
                        <hr></hr>
                    </select>
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
                    <p><img src="/images/wiibucks.png" alt="wiibucks" />100</p>
                    <p><img src="/images/trophy.svg" alt="wiibucks" />00</p>
                    <Bell stroke="#FFF" fill="#460BFF" width={30} height={30}/>
                    <Mail stroke="#FFF" fill="#460BFF" width={30} height={30}/>
                    <BriefcaseBusiness stroke="#FFF" fill="#460BFF" width={30} height={30} />
                    <Bookmark stroke="#FFF" fill="#460BFF" width={30} height={30}/>
                    <Menu stroke="#460BFF"width={30} height={30}/>
                </HeaderItems> 
            </Header>
            </ContainerColumnDashBoardUp>
            <ContainerColumnDashBoardDown>
                <ContainerColumnDashBoardDownLeft>
                    <ColumnDashBoardDownLeftTitle>Overview</ColumnDashBoardDownLeftTitle>
                    <div className="columnLeftArreglo">
                    <FirstSquareLeftDashboardUpMobile>
                        <ContainerUpFirstSquareLeftDashBoardUpMobile>
                            <ImageMatchesLeftDashBoardUpMobile src="/images/matches.svg" alt="Imagen Matches"/>
                            <ImageReviewsLeftDashBoardUpMobile src="/images/reviews.svg" alt="Imagen Reviews"/>
                        </ContainerUpFirstSquareLeftDashBoardUpMobile>
                        <TextUnderImagesLeftDashBoardUpMobile>
                            Interviews done     
                        </TextUnderImagesLeftDashBoardUpMobile>
                        <ImageSlider />
                    </FirstSquareLeftDashboardUpMobile>
                    <TitleCommentAndMessagesUpMobile>Comment & Message</TitleCommentAndMessagesUpMobile>
                    <VerticalSliderOverview />
                    </div>
                </ContainerColumnDashBoardDownLeft>
                  <ContainerColumnDashBoardDownRight>
                      <StyledLink to={'/Postulacion'}>
                          <ColumnDashBoardDownRightTitle>Hirings in Progress</ColumnDashBoardDownRightTitle>
                      </StyledLink>
                    <FirstSquareRightDashboardUpMobile>
                        <ContainerFirstSquareRightHirings>
                            <VerticalSlider />
                        </ContainerFirstSquareRightHirings>
                        <ContainerGraphsUpMobileFirst>
                            <GraphicsUpMobile src="/images/matchGraph.svg" alt="Match Graphic" />
                            <GraphicsPercentageUpMobile>
                                <h2>89%</h2>
                                <p>MATCHES</p>
                            </GraphicsPercentageUpMobile>
                        </ContainerGraphsUpMobileFirst>    
                        <ContainerGraphsUpMobile>
                            <GraphicsUpMobile src="/images/reviewsGraph.svg" alt="Review Graphic" />
                            <GraphicsPercentageUpMobile>
                            <h3>-10%</h3>
                            <p id="rev">REVIEWS</p>
                            </GraphicsPercentageUpMobile>
                        </ContainerGraphsUpMobile>
                    </FirstSquareRightDashboardUpMobile>
                </ContainerColumnDashBoardDownRight>
            </ContainerColumnDashBoardDown>
        </ContainerColumnDashBoard>
    </ContainerCompanyOverviewAll>
  </>
  )
}
