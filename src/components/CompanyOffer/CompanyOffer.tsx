import { Bell, Bookmark, BriefcaseBusiness, Mail} from "lucide-react";
import { BaseQuestions, BaseQuestionsInputs, BaseQuestionsInputsFirstContainer, BaseQuestionsInputsSecondContainer, Container, Header, HeaderItems, Logo, SearchBar } from "./styles";

export default function CompanyOffer() {

    return (
        <>
        <Container>
            <Header>
                <Logo src="/images/LogoBlue.svg" alt="" />
                <SearchBar type="Búsqueda" placeholder="Búsqueda"/>
            <HeaderItems>
                <p><img src="/images/wiibucks.png" alt="wiibucks" />400</p>
                <p><img src="/images/wiibucks.png" alt="wiibucks" />00</p>
                <Bell />
                <Mail />
                <BriefcaseBusiness />
                <Bookmark />
            </HeaderItems>
            </Header>
            <BaseQuestions>
                <img src="/images/JobOpportunityBackground.png" alt="" />
                <BaseQuestionsInputs>
                    <BaseQuestionsInputsFirstContainer>
                        <input type="text" placeholder="Nombre de la solicitud" />
                        <div className="questions">
                        <div className="input-group">
                            <label htmlFor="salary">Salario</label>
                            <input id="salary" type="text" placeholder="Completar" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="variable">Variable</label>
                            <input id="variable" type="text" placeholder="Completar" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="presencial">Presencial</label>
                            <input id="presencial" type="text" placeholder="Completar" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="remoto">Remoto</label>
                            <input id="remoto" type="text" placeholder="Completar" />
                        </div>
                        </div>
                    </BaseQuestionsInputsFirstContainer>
                    <BaseQuestionsInputsSecondContainer>
                        <h2>Sobre Nosotros</h2>
                        <textarea name="" id="" placeholder="Cuenta sobre tu empresa sin dar tus datos específicos"></textarea>
                    </BaseQuestionsInputsSecondContainer>
                </BaseQuestionsInputs>
            </BaseQuestions>
        </Container>
        <div>
            <h1>Que harás</h1>
        </div>
        </>
  );
}