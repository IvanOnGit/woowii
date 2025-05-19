// import { BackgroundZigZag, BlueLogoWoowii, Container, ItsAMatch, MatchHandShake, WhatWooWiiConnects } from "./styles";

// export default function MatchFound() {
//     return (
//         <>
//         <Container>
//                 <BackgroundZigZag src="/images/ZigZagWhite.png" alt="" />
//                 <ItsAMatch src="/images/ItsAMatch.png" alt="" />
//                 <MatchHandShake src="/images/MatchHandShake.png" alt="" />
//                 <h1>La <strong>Desarrolladora</strong> y la <strong>recruiter</strong></h1>
//                 <WhatWooWiiConnects src="/images/WhatWoowiiConnects.png" alt="" />
//                 <input type="text" placeholder="¡Hora de romper el hielo!" />
//                 <BlueLogoWoowii src="/images/BlueLogoWoowii.png" alt="" />
//         </Container>
//         </>
//   );
// }
import { Link } from "react-router-dom";
import { BackgroundZigZag,
  BlueLogoWoowii, 
  Container, 
  ItsAMatch, 
  MatchHandShake, 
  UpIcons, 
  WhatWooWiiConnects } from "./styles";
import { ChevronLeft, Menu } from "lucide-react";

export default function MatchFound() {
    return (
        <>
        <Container>
                <UpIcons>
                  <ChevronLeft strokeWidth="2.5"/>
                  <Menu strokeWidth="2.5"/>
                </UpIcons>
                <BackgroundZigZag src="/images/GreenBackWithZigZag.svg" alt="Green Back With Zig Zag Line" />
                <ItsAMatch src="/images/itsAMatchTrans.svg" alt="Its A Match Title" />
                <MatchHandShake src="/images/itsAMatchWithBlueLines.svg" alt="Its A Match Image" />
                <h1>La <strong>diseñadora</strong> y la <strong>recruiter</strong></h1>
                <WhatWooWiiConnects src="/images/WhatWoowiiConnect.svg" alt="What Woowii Connect Image" />
                  <input type="text" placeholder="¡Hora de romper el hielo!  ▶ " />
                  <BlueLogoWoowii src="/images/BlueLogoWoowii.png" alt="" />
                <Link to={"/"}>
                  <button>NEXT</button>
                </Link>
        </Container>
        </>
  );
}