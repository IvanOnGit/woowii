import { StyledInformationText, StyledMotivationText } from "./styles";

export default function CompanyMotivationText() {
    return (
    <>
        <StyledMotivationText>
            <div className="firstLine">
                <span><img src="/images/partenon.png" alt="Icono del Partenon" /></span>
                <h2> El talento ideal no cae del cielo… y Roma no se hizo en dos días</h2>
            </div>
            <p>
                Podríamos decirte que completarás un perfil irresistible en 3 minutos, pero… te estaríamos mintiendo. 🤷‍♂️ <br />
                Tu empresa tiene una historia, una cultura y un ADN único. Para atraer a los mejores talentos sin volverte loco
            </p>
            <p>
                filtrando CVs irrelevantes, tienes que ponerle cariño a tu perfil. ✨
            </p>
        </StyledMotivationText>
        <StyledInformationText>
            <div className="left">
                <div className="combinator">
                    <img src="/images/whiteStar.svg" alt="White Star" />
                    <p>Solo lo completarás una vez (pero siempre podrás actualizarlo).</p>
                </div>
                <div className="combinator">
                    <img src="/images/whiteStar.svg" alt="White Star" />
                    <p>Cuanto más cuentes, mejor matcheará el algoritmo.</p>
                </div>
            </div>
            <div className="right">
                <div className="combinator">
                    <img src="/images/whiteStar.svg" alt="White Star" />
                    <p>Menos trabajo para ti, más atracción de talento top.</p>
                </div>
                <div className="combinator">
                    <img src="/images/whiteStar.svg" alt="White Star" />
                    <p>Hazlo bien desde el principio y deja que la magia de Woowii haga el resto </p>
                    
                </div>
                
            </div>
        </StyledInformationText>
    </>
    );
}
