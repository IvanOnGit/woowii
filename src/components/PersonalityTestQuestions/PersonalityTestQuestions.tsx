import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ButtonNextSecondPage,
  ContainerWrapper,
  DivContainerButton,
  DivContainerLogo,
  GoToNextSection,
  LevelSelector,
  LogoSecondPageStyled,
  PersonalityQuestions,
  PersonalityQuestionsItems,
  PersonalityText,
  StyledLink,
} from "./styles";


export default function PersonalityTestQuestions() {
  const [selectedRatings, setSelectedRatings] = useState(Array(5).fill(null));
  const [showCongratulations, setShowCongratulations] = useState(false);

  const handleRatingClick = (questionIndex: number, value: number) => {
    const newRatings = [...selectedRatings];
    newRatings[questionIndex] = value;
    setSelectedRatings(newRatings);
  };

  const handleSendClick = () => {
    setShowCongratulations(true);
  };

  const navigate = useNavigate();

  const handleContinueClick = () => {
    navigate("/CongratulationsSteps");
  };

  const renderRatingButtons = (questionIndex: number) => {
    return (
      <>
        {[1, 2, 3, 4, 5, 6, 7].map((value) => (
          <LevelSelector
            key={value}
            onClick={() => handleRatingClick(questionIndex, value)}
            style={{
              backgroundColor: selectedRatings[questionIndex] === value ? "#8FFF00" : "#fff",
              color: selectedRatings[questionIndex] === value ? "#000" : "#555",
            }}
          >
            {value}
          </LevelSelector>
        ))}
      </>
    );
  };

  return (
    <ContainerWrapper>
      <DivContainerLogo>
        <LogoSecondPageStyled src="/images/GreenLogoDemo.svg" />
      </DivContainerLogo>
      <PersonalityText>
        <h1>Test de personalidad</h1>
        <p>
          Valora cada formación del <strong>1</strong> al <strong>7</strong> dónde:<br />
          <strong>1</strong> Totalmente en desacuerdo | <strong>7</strong> Totalmente de acuerdo.
        </p>
      </PersonalityText>
      <PersonalityQuestions>
        {["Tiendes a tomar la iniciativa en eventos sociales.",
          "Para ti, ver una película en casa, leer un libro o escuchar música es más interesante que un evento social.",
          "Eres más espontáneo en lugar de crear un plan de forma minuciosa.",
          "Sueles fundamentar tu punto de vista razonando en vez dejarte llevar por las emociones.",
          "A menudo te cuesta comprender como se sientes los demás.",
          "Generalmente te convencen más las ideas que conectan con tus sentimientos que las basadas en hechos concretos.",
          " La clave principal de cualquier proyecto es elaborar un plan y seguirlo paso a paso.",
          "Tiendes más a improvisar que a planificar.",
          "A menudo sientes la necesidad de explicar tus acciones a los demás.",
          "Sientes ansiedad en situaciones de estresantes.",
          "Te adaptas rápidamente y te involucras en actividades sociales en un nuevo entorno laboral.",
          "Tiendes a ser una persona discreta y de pocas palabras.",
          "Cuando alguien desafía tus ideas, te resulta sencillo poner en duda las suyas.",
          "Cuando estás afuera, prestas atención a tu entorno en lugar de quedarte ensimismado.",
          "Rara vez te inquieta el impacto que tus decisiones tienen en los demás.",
          "Te conectas más con los relatos y sentimientos de las personas que con los datos o cifras.",
          "Casi siempre te sientes confiado.",
          "Prefieres conservar la flexibilidad en tus decisiones.",
          "Te incomoda no responder a todos los correos que recibes en la bandeja de entrada y ordenarlos.",
          "Tiendes a ser cauteloso y no asumir riesgos innecesarios.",
          "Tus amigos siempre te cuentan algo emocionante en cuanto se enteran.",
          "En un evento social con bastante gente intentas ser el centro de atención.",
        ].map((question, index) => (
          <PersonalityQuestionsItems key={index}>
            <h2>{question}</h2>
            {renderRatingButtons(index)}
          </PersonalityQuestionsItems>
        ))}
      </PersonalityQuestions>
      <DivContainerButton>
        <StyledLink to={"/PersonalityTest"}>
          <ButtonNextSecondPage>Volver atrás</ButtonNextSecondPage>
        </StyledLink>
        <ButtonNextSecondPage onClick={handleSendClick}>Enviar</ButtonNextSecondPage>
      </DivContainerButton>

      {showCongratulations && (
        <GoToNextSection style={{ textAlign: "center", marginTop: "20px" }}>
          <img src="/images/GreenLogoDemo.svg" alt="" />
          <h2>¡Sección completa!</h2>
          <p>Has completado todas las <br /> preguntas de esta sección.</p>
          <ButtonNextSecondPage onClick={handleContinueClick}>
            Continuar
          </ButtonNextSecondPage>
        </GoToNextSection>
      )}
    </ContainerWrapper>
  );
}