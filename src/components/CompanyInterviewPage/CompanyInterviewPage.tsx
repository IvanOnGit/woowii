import { Link } from "react-router-dom";
import { BtnInterviewPage, 
  BtnInterviewPageMobile, 
  ContainerBackInterview, 
  ContainerBackInterviewMobile, 
  PercentageImageMobile, 
  PercentageMatchImage, 
  } from "./styles";

export default function InterviewPage() {
  return (
    <>
    <ContainerBackInterview>
        <PercentageMatchImage src="/images/percentageImage.svg" alt="Match Image"/>
        <Link to={'/'}>
          <BtnInterviewPage src="/images/btnInterview.svg" alt="Interview Button" />
        </Link>
    </ContainerBackInterview>
    <ContainerBackInterviewMobile>
      <PercentageImageMobile src="/images/percentageImageMobile.svg" alt="Match Image"/>
      <Link to={'/'}>
        <BtnInterviewPageMobile src="/images/btnInterview.svg" alt="Interview Button" />
      </Link>
    </ContainerBackInterviewMobile>
    </>
  )
}