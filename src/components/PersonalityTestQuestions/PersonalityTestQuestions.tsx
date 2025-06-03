import { useEffect, useRef, useState } from "react";
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
} from "./styles";

const allQuestions = [
  "Tiendes a tomar la iniciativa en eventos sociales.",
  "Para ti, ver una película en casa, leer un libro o escuchar música es más interesante que un evento social.",
  "Eres más espontáneo en lugar de crear un plan de forma minuciosa.",
  "Sueles fundamentar tu punto de vista razonando en vez dejarte llevar por las emociones.",
  "A menudo te cuesta comprender cómo se sienten los demás.",
  "Generalmente te convencen más las ideas que conectan con tus sentimientos que las basadas en hechos concretos.",
  "La clave principal de cualquier proyecto es elaborar un plan y seguirlo paso a paso.",
  "Tiendes más a improvisar que a planificar.",
  "A menudo sientes la necesidad de explicar tus acciones a los demás.",
  "Sientes ansiedad en situaciones estresantes.",
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
  "Sueles depender más de tu experiencia que de tu creatividad.",
  "Cuando estas conversando, eres un oyente excelente.",
  "Te resulta difícil exteriorizar tus emociones y comunicarlas a otras personas.",
  "A menudo te quedas ensimismado y te olvidas de tu entorno.",
  "Al planificarlo todo, eres eficiente y normalmente acabas tus tareas antes de la fecha límite.",
  "Tu mente constantemente genera ideas y planes que aún no has desarrollado.",
  "Le das mucha importancia a las opiniones de los demás.",
  "Siempre te han atraído temas inusuales y ambiguos, como cine alternativo, música de nicho y libros con temas profundos.",
  "Tienes tendencia a explorar nuevas ideas y experiencias emocionantes.",
  "En la situación de tener que hablar en público, te cuesta sentirte cómodo y relajarte.",
  "Generalmente te sientes motivado y energizado.",
  "En una discusión, valoras más la certeza de los argumentos que los sentimientos de las personas.",
  "Tomas decisiones  sin dudar y con rapidez.",
  "Sueles ser bastante sensible y emocional.",
  "Sueñas enfocando tus pensamientos en la realidad.",
  "Frecuentemente dedicas tiempo a explorar ideas imaginativas e inusuales, aunque no sean prácticas.",
  "Cuando alguien tarda en responder a tu correo electrónico, te preocupas pensando que pudiste haber dicho algo inapropiado.",
  "En el trabajo en equipo, consideras que es más importante estar en lo correcto que ser colaborativo.",
  "Te sientes cómodo y tranquilo siendo el centro de atención.",
  "Generalmente no tienes iniciativa para comenrzar una conversación",
  "Tu forma de trabajar se caracteriza más por explosiones esporádicas de alta energía que por un enfoque sistemático y ordenado.",
  "Actúas según tus propias convicciones sin dejarte influenciar por los demás.",
  "Te cuesta dejar atrás experiencias negativas que ya hayan pasado.",
  "Te importa más respetar los sentimientos de los demás que ganar una discusión de forma lógica y argumentada.",
  "Te ves a ti mismo como una persona más orientada a lo práctico que a lo creativo.",
  "Consideras que es más valioso ser auténtico que seguir las normas establecidas.",
  "En una discusión, te preocupa más evitar que alguien se sienta incómodo que salir victorioso.",
  "Siempre formulas un plan en todos los viajes que realizas.",
  "Te llena de energía compartir tiempo con otras personas.",
  "Te cuesta darte a conocer a los demás.",
  "Prefieres mantener todas tus opciones abiertas que tener  una lista fija de tareas",
  "Rara vez haces algo únicamente por mera curiosidad.",
  "Crees que el razonamiento lógico suele ser más crucial que las emociones al tomar decisiones importantes.",
  "Cuando un amigo está triste, tiendes a brindarle consuelo emocional antes que ofrecerle soluciones al problema.",
  "Es poco común que te pierdas en fantasías o ideas.",
  "Tiendes a procrastinar hasta que el tiempo para completar tus tareas es muy limitado.",
  "Crees que todas las opiniones merecen respeto, incluso si no están sustentadas por hechos comprobados.",
  "Te cuesta reconocer el error cometido.",
  "Me resulta incómodo contactar por teléfono o correo electrónico con tiendas, oficinas, y otros establecimientos.",
  "Identifico los intereses de mis colegas y los guío hacia un objetivo compartido.",
  "Procuro ser sincero/a y claro/a al comunicarme con mis compañeros de trabajo.",
  "Me percibo como una persona detallista en la enseñanza y capacitación de otros.",
  "En algunas situaciones, prefiero no asistir a reuniones sociales para evitar posibles equivocaciones o comentarios inapropiados.",
  "Estoy muy familiarizado/a con mis compañeros de trabajo y mantengo una relación cercana con ellos.",
  "Tengo dificultad para comunicar mis emociones a los demás.",
  "Me esfuerzo por brindar todo mi respaldo cuando un colega enfrenta una situación difícil.",
  "Si necesitara encontrar empleo, optaría solo por enviar correos electrónicos en lugar de asistir a entrevistas presenciales.",
  "Presto atención, valoro y reflexiono sobre las opiniones de los demás antes de expresar la mía o tomar una decisión.",
  "Prefiero mantener mis opiniones en privado.",
  "Me incomoda cuando alguien del género opuesto elogia mi apariencia física.",
  "Dirijo las reuniones de trabajo para asegurar una participación efectiva de todos.",
  "A veces, no hago preguntas porque temo que los demás me perciban como un ignorante.",
  "Monitoreo cuidadosamente el trabajo de mi equipo para garantizar que todo se realice según mis directrices.",
  "Me resulta difícil enfrentar mis propios fracasos y a veces tiendo a responsabilizar a otros por mis errores.",
  "Delego tareas y responsabilidades, pero mantengo la autoridad sobre las decisiones ya establecidas.",
  "Rechazo admitir mis fracasos personales y no acepto que me sugieran que mi perspectiva es incorrecta.",
  "Insisto en que mi equipo supere sus logros para continuar avanzando.",
  "Fomento una comunicación clara sobre los objetivos del equipo y cómo se alinean con las expectativas de mis colegas.",
  "Me resulta difícil compartir mi opinión en entornos grupales, como clases o reuniones.",
  "Tiendo a emplear los fracasos de las personas como herramienta para motivar su mejora.",
  "Fundamento mi proyecto en el optimismo, la fe en el futuro y el compromiso del equipo.",
  "Prefiero que otros asuman el control de una situación, ya que me inquieta tomar la iniciativa.",
  "Procuro constantemente las perspectivas de otros como fuente de inspiración para ideas nuevas y originales.",
  "Lograr resultados positivos y tangibles es mi prioridad, aceptando que la tensión y el estrés son parte del camino hacia el éxito.",
  "En momentos de crisis dentro del equipo, me dejo llevar por los nervios y encuentro difícil manejarlos.",
  "Cuido a quienes me siguen, respeto a quienes me desafían abiertamente, pero no tolero la deshonestidad.",
];

export default function PersonalityTestQuestions() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedRatings, setSelectedRatings] = useState(Array(88).fill(null));
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [showIntermediatePopup, setShowIntermediatePopup] = useState(false);
  const [showValidationMessage, setShowValidationMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const navigate = useNavigate();
  const titleRef = useRef<HTMLDivElement>(null);

  const questionsToShow = allQuestions.slice(currentStep * 22, (currentStep + 1) * 22);

  // Add effect to scroll to title when step changes
  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Hide validation message when changing steps
    setShowValidationMessage(false);
  }, [currentStep]);

  const handleRatingClick = (questionIndex: number, value: number) => {
    const newRatings = [...selectedRatings];
    newRatings[questionIndex + currentStep * 22] = value;
    setSelectedRatings(newRatings);
    // Hide validation message once the user starts responding
    setShowValidationMessage(false);
  };

  const handleBackClick = () => {
    if (currentStep === 0) {
      navigate(-1);
    } else {
      setCurrentStep(currentStep - 1);
    }
  };

  // Check if all questions in the current step are answered
  const areAllQuestionsAnswered = () => {
    const currentQuestionIndexes = Array.from(
      { length: 22 }, 
      (_, i) => i + currentStep * 22
    );
    
    return currentQuestionIndexes.every(
      index => selectedRatings[index] !== null
    );
  };

  // Nueva función para enviar resultados al servidor
  const submitPersonalityTest = async () => {
    try {
      setIsSubmitting(true);
      setSubmitError("");
      
      const userId = localStorage.getItem("userId");
      
      if (!userId) {
        throw new Error("No se encontró ID de usuario");
      }
  
      const response = await fetch('http://ec2-52-47-198-73.eu-west-3.compute.amazonaws.com:3000/api/auth/submit-personality-test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId: parseInt(userId),
          answers: selectedRatings
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error al guardar el test");
      }
  
      setShowCongratulations(true);
    } catch (error) {
      console.error("Error al enviar el test:", error);
      setSubmitError(error instanceof Error ? error.message : "Error desconocido");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendClick = () => {
    // Check if all questions have been answered
    if (!areAllQuestionsAnswered()) {
      setShowValidationMessage(true);
      return;
    }

    // Proceed as normal if all questions are answered
    if (currentStep < 2) {
      setShowIntermediatePopup(true);
    } else if (currentStep === 2) {
      setShowIntermediatePopup(true);
    } else if (currentStep === 3) {
      // En lugar de mostrar felicitaciones directamente, enviamos datos al servidor
      submitPersonalityTest();
    }
  };

  const handleClosePopup = () => {
    setShowIntermediatePopup(false);
    setCurrentStep(currentStep + 1);
  };

  const handleContinueClick = () => {
    navigate("/CongratulationsSteps");
  };

  const renderRatingButtons = (questionIndex: number) => (
    <>
      {[1, 2, 3, 4, 5, 6, 7].map((value) => (
        <LevelSelector
          key={value}
          onClick={() => handleRatingClick(questionIndex, value)}
          style={{
            backgroundColor: selectedRatings[questionIndex + currentStep * 22] === value ? "#8FFF00" : "#fff",
            color: selectedRatings[questionIndex + currentStep * 22] === value ? "#000" : "#555",
          }}
        >
          {value}
        </LevelSelector>
      ))}
    </>
  );

  return (
    <ContainerWrapper>
      <DivContainerLogo>
        <LogoSecondPageStyled src="/images/GreenLogoDemo.svg" />
      </DivContainerLogo>
      <PersonalityText ref={titleRef}>
        <h1>Test de personalidad</h1>
        <p>
          Valora cada formación del <strong>1</strong> al <strong>7</strong> dónde:<br />
          <strong>1</strong> Totalmente en desacuerdo | <strong>7</strong> Totalmente de acuerdo.
        </p>
      </PersonalityText>
      
      {/* Validation message */}
      {showValidationMessage && (
        <div style={{ 
          color: '#ff0000', 
          textAlign: 'center', 
          margin: '10px 0',
          padding: '10px',
          backgroundColor: '#ffe6e6',
          borderRadius: '5px',
          fontWeight: 'bold'
        }}>
          Por favor responde todas las preguntas antes de continuar.
        </div>
      )}
      
      {/* Error message for API submission */}
      {submitError && (
        <div style={{ 
          color: '#ff0000', 
          textAlign: 'center', 
          margin: '10px 0',
          padding: '10px',
          backgroundColor: '#ffe6e6',
          borderRadius: '5px',
          fontWeight: 'bold'
        }}>
          Error: {submitError}. Por favor intenta nuevamente.
        </div>
      )}
      
      <PersonalityQuestions>
        {questionsToShow.map((question, index) => (
          <PersonalityQuestionsItems key={index}>
            <h2>{question}</h2>
            {renderRatingButtons(index)}
          </PersonalityQuestionsItems>
        ))}
      </PersonalityQuestions>
      <DivContainerButton>
        <ButtonNextSecondPage onClick={handleBackClick} disabled={isSubmitting}>Volver atrás</ButtonNextSecondPage>
        <ButtonNextSecondPage onClick={handleSendClick} disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Continuar"}
        </ButtonNextSecondPage>
      </DivContainerButton>

      {/* Popup para los primeros 3 pasos */}
      {showIntermediatePopup && (
        <GoToNextSection style={{ textAlign: "center", marginTop: "20px" }}>
          <h2>¡Felicitaciones!</h2>
          <img src="/images/WiibuckCurrency.png" alt="" style={{ width: "120px", height: "120px" }} />
          <p>Has recibido 50 Wiibucks</p>
          <ButtonNextSecondPage onClick={handleClosePopup}>Cerrar</ButtonNextSecondPage>
        </GoToNextSection>
      )}

      {/* Popup final */}
      {showCongratulations && (
        <GoToNextSection style={{ textAlign: "center", marginTop: "20px" }}>
          <img src="/images/GreenLogoDemo.svg" alt="" />
          <h2>¡Sección completa!</h2>
          <p>Has completado todas las <br /> preguntas de esta sección.</p>
          <ButtonNextSecondPage onClick={handleContinueClick}>Continuar</ButtonNextSecondPage>
        </GoToNextSection>
      )}
    </ContainerWrapper>
  );
}