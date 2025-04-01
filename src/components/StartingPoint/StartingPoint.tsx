
import LineSVG from "/images/lineStartingPoint.svg"
import LogoSVG from "/images/GreenLogo.svg"
import TextSVG from "/images/PerfectCandidate.svg"
import ButtonSVG from "/images/ButtonFirstPage.svg"
import { ContainerFirstPage, 
  FixedImageButton, 
  FixedImageLogo, 
  FixedImageText, 
  ResponsiveSVG, 
  Wrapper } from "./styles"
import { Link } from "react-router-dom"

export default function InitialFirstPage() {
  return (
    <Wrapper>
      <ContainerFirstPage>
          <ResponsiveSVG src={LineSVG} alt="Line Graphic med" />
        <FixedImageLogo src={LogoSVG} alt="Logo" />
        <FixedImageText src={TextSVG} alt="Perfect Candidate" />
        <Link to={'/TransformationWelcome'}>
            <FixedImageButton src={ButtonSVG} alt="Button" />
        </Link>
      </ContainerFirstPage>
    </Wrapper>
  )
}





