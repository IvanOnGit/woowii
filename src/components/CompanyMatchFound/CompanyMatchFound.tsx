import { useNavigate } from 'react-router-dom';
import { BackgroundZigZag, BlueLogoWoowii, Container, ContainerFooterToMobile, ContainerUpNav, ItsAMatch, MatchHandShake, WhatWooWiiConnects } from "./styles";
import { Bell, BriefcaseBusiness, CircleChevronLeft, House, Mail, Menu } from 'lucide-react';

export default function CompanyMatchFound() {
    const navigate = useNavigate();

    const handleKeyDown = (event: { key: string; }) => {
        if (event.key === 'Enter') {
            
            navigate('/CandidateDetail');
        }
    };

    return (
        <>
        <Container>
                <ContainerUpNav>
                    <CircleChevronLeft fill='#460BFF' stroke='#FFF' width={30} height={30} />
                    <Menu stroke='#FFF' width={30} height={30} />
                </ContainerUpNav>
                <BackgroundZigZag src="/images/ZigZagWhite.png" alt="" />
                <ItsAMatch src="/images/ItsAMatch.png" alt="" />
                <MatchHandShake src="/images/MatchHandShake.png" alt="" />
                <h1>La <strong>Desarrolladora</strong> y la <strong>recruiter</strong></h1>
                <WhatWooWiiConnects src="/images/WhatWoowiiConnects.png" alt="" />
                <input 
                    type="text" 
                    placeholder="¡Hora de romper el hielo!" 
                    onKeyDown={handleKeyDown}
                />
                <BlueLogoWoowii src="/images/BlueLogoWoowii.png" alt="" />
                <ContainerFooterToMobile>
                    <House className="items" fill="#FFF"  width={26} height={26}/>
                    <BriefcaseBusiness className="items" fill="#FFF" width={26} height={26} />
                    {/* <Link to="/CompanyOverview"> */}
                        <img src="/images/rocketFooter.svg" alt="Rocket Footer Image" />
                    {/* </Link> */}
                    <Mail className="items" fill="#FFF" width={26} height={26}/>
                    <Bell className="items" fill="#FFF" width={26} height={26}/>
                </ContainerFooterToMobile>
        </Container>
        </>
    );
}