import { BackgroundZigZag, BlueLogoWoowii, Container, ItsAMatch, MatchHandShake, WhatWooWiiConnects, BackgroundZigZagMobile } from "./styles";

export default function MatchFound() {
    return (
        <>
        <Container>
                <BackgroundZigZag src="/images/ZigZagWhite.png" alt="" />
                <BackgroundZigZagMobile src="/images/Vector_24.svg" alt="" />
                <ItsAMatch src="/images/ItsAMatch.png" alt="" />
                <MatchHandShake src="/images/MatchHandShake.png" alt="" />
                <h1>La <strong>Desarrolladora</strong> y la <strong>recruiter</strong></h1>
                <WhatWooWiiConnects src="/images/WhatWoowiiConnects.png" alt="" />
                <input type="text" placeholder="¡Hora de romper el hielo!" />
                <BlueLogoWoowii src="/images/BlueLogoWoowii.png" alt="" />
        </Container>
        </>
  );
}