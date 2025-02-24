import { Bell, Bookmark, BriefcaseBusiness, Mail, Menu } from "lucide-react";
import { HeaderItems } from "../CompanyHome/styles";
import { BtnAplicarOffer, ContainerAllOffer, ContainerBodyOfferImage, ContainerCardOfferImage, ContainerColumnBodyOffer, ContainerColumnCard, ContainerDataOfferImage, ContainerOfferPage, Header } from "./styles";


export default function CompanyOffer() {
  return (
    <>
    <ContainerAllOffer>
        
        <ContainerOfferPage>
        
            <ContainerColumnCard>
                <img id="logo" src="/images/greenLogoLittle.svg" alt="Logo Green Woowii" />
                <ContainerCardOfferImage src="/images/cardOffer.svg" alt="Card Offer image" /> 
            </ContainerColumnCard>
            <ContainerColumnBodyOffer>
            <Header>
                <HeaderItems>
                    <p><img src="/images/wiibucks.png" alt="wiibucks" />100</p>
                    <p><img src="/images/wiibucks.png" alt="wiibucks" />00</p>
                <Bell />
                <Mail />
                <BriefcaseBusiness />
                <Bookmark />
                <Menu />
                </HeaderItems>
            </Header>
                <ContainerBodyOfferImage src="/images/imageBodyOffer.svg" alt="Body Offer Image" /> 
            </ContainerColumnBodyOffer>
        </ContainerOfferPage>
    </ContainerAllOffer>
    <ContainerDataOfferImage>
        <img src="/images/dataOfferImage.svg" alt="Datos Oferta" />
        <p>Hagamos <span>MATCH</span> y comentamos qué </p>
        <p>te motiva para unirte a nuestro equipo.</p>
        <BtnAplicarOffer>
            Publicar Solicitud
        </BtnAplicarOffer>
    </ContainerDataOfferImage>
    </>
  )
}
