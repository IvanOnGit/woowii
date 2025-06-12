import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  BaseQuestions,
  BaseQuestionsInputs,
  BaseQuestionsInputsFirstContainer,
  BaseQuestionsInputsSecondContainer,
  Circle,
  ConnectingLine,
  Container,
  FourthContainer,
  Header,
  HeaderItems,
  InnerSuccessApply,
  Logo,
  ProcessStepsContainer,
  ResponsibilitiesContainer,
  ResponsibilityInputGroup,
  Reward,
  SearchBar,
  SecondContainer,
  SkillsContainer,
  StepInput,
  StepLineContainer,
  StepNumber,
  StepWrapper,
  StyledLink,
  SuccessApply,
  SuccessButton,
  TextContainer,
  ThirdContainer,
  ThirdContainerColumnsContainer,
  WhatWeLookingForContainer
} from "./styles";
import { Bell, Bookmark, BriefcaseBusiness, Mail } from "lucide-react";

export default function JobOpportunityView() {
  const { jobId } = useParams();

  const [title, setTitle] = useState("");
  const [salary, setSalary] = useState("");
  const [variable, setVariable] = useState("");
  const [presencial, setPresencial] = useState("");
  const [remoto, setRemoto] = useState("");
  const [aboutUs, setAboutUs] = useState("");
  const [whatYouWillDo, setWhatYouWillDo] = useState("");
  const [leaderRole, setLeaderRole] = useState("");
  const [teamRole, setTeamRole] = useState("");
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectionProcess, setSelectionProcess] = useState(["", "", "", ""]);
  const [responsibilities, setResponsibilities] = useState<string[]>(['']);
  const [indispensable, setIndispensable] = useState(["", "", "", ""]);
  const [ideal, setIdeal] = useState(["", "", "", ""]);
  const [plus, setPlus] = useState(["", "", "", ""]);
  const [showModal, setShowModal] = useState(false);
  const [hasApplied, setHasApplied] = useState(false);

  const steps = [
    { reward: "50 Wiibucts", number: 1 },
    { reward: "100 Wiibucts", number: 2 },
    { reward: "200 Wiibucts", number: 3 },
    { reward: "50 Wiibucts", number: 4 }
  ];

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(`https://api.woowiihr.com/api/auth/job/${jobId}`);
        const data = await response.json();

        setTitle(data.title);
        setSalary(data.salary);
        setVariable(data.variable);
        setPresencial(data.presencial_percentage?.toString() || "");
        setRemoto(data.remote_percentage?.toString() || "");
        setAboutUs(data.about_us);
        setWhatYouWillDo(data.what_you_will_do);

        const who = data.who_you_will_work_with?.split(", ");
        if (who && who.length === 2) {
          setLeaderRole(who[0].replace("Líder: ", ""));
          setTeamRole(who[1].replace("Equipo: ", ""));
        }

        setSelectedSkills(data.survival_kit || []);
        setSelectionProcess(data.selection_process || ["", "", "", ""]);
        setResponsibilities(data.responsibilities || [""]);
        setIndispensable(data.indispensable || ["", "", "", ""]);
        setIdeal(data.ideal || ["", "", "", ""]);
        setPlus(data.plus || ["", "", "", ""]);
      } catch (error) {
        console.error("Error al obtener la oferta:", error);
      }
    };

    fetchJob();
  }, [jobId]);
    
  useEffect(() => {
    console.log("✅ Qué buscamos:", { indispensable, ideal, plus });
  }, [indispensable, ideal, plus]);
    
  const handleApply = async () => {
    const userId = localStorage.getItem("userId");
  
    if (!userId) {
      console.error("❌ No se encontró userId en localStorage");
      return;
    }
  
    try {
      const response = await fetch("https://api.woowiihr.com/api/auth/apply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ userId, jobId })
      });
  
      const data = await response.json();
  
      if (response.ok) {
        console.log("✅ Postulación exitosa:", data);
        setShowModal(true);
      } else {
        console.error("❌ Error en la postulación:", data);
      }
    } catch (error) {
      console.error("❌ Error al postularse:", error);
    }
  };
  
  useEffect(() => {
    const userId = localStorage.getItem("userId");
  
    if (!userId || !jobId) return;
  
    const checkApplication = async () => {
      try {
        const res = await fetch(
          `https://api.woowiihr.com/api/auth/has-applied?userId=${userId}&jobId=${jobId}`
        );
        const data = await res.json();
        setHasApplied(data.applied);
      } catch (err) {
        console.error("❌ Error al verificar postulación:", err);
      }
    };
  
    checkApplication();
  }, [jobId]);

  return (
    <>
      <Container>
        <Header>
          <Logo src="/images/LogoBlue.svg" alt="" />
          <SearchBar type="Búsqueda" placeholder="Búsqueda" />
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
              <h1>{title}</h1>
              <div className="questions">
                <div className="input-group">
                  <label>Salario</label>
                  <p>{salary}</p>
                </div>
                <div className="input-group">
                  <label>Variable</label>
                  <p>{variable}</p>
                </div>
                <div className="input-group">
                  <label>Presencial</label>
                  <p>{presencial}%</p>
                </div>
                <div className="input-group">
                  <label>Remoto</label>
                  <p>{remoto}%</p>
                </div>
              </div>
            </BaseQuestionsInputsFirstContainer>

            <BaseQuestionsInputsSecondContainer>
              <h2>Sobre Nosotros</h2>
              <p>{aboutUs}</p>
            </BaseQuestionsInputsSecondContainer>
          </BaseQuestionsInputs>
        </BaseQuestions>
      </Container>

      <SecondContainer>
        <h1>Qué harás</h1>
        <p>{whatYouWillDo}</p>
      </SecondContainer>

      <ThirdContainer>
        <h2>Con quién trabajarás</h2>
        <ThirdContainerColumnsContainer>
          <div className="Column">
            <label>Líder</label>
            <p>{leaderRole}</p>
          </div>
          <p>Equipo</p>
          <div className="Column">
            <label>Rol del equipo</label>
            <p>{teamRole}</p>
          </div>
        </ThirdContainerColumnsContainer>
      </ThirdContainer>

      <SkillsContainer>
        <h2>El kit de supervivencia que necesitarás</h2>
        <div className="tags-container">
          {selectedSkills.map((skill, index) => (
            <span key={index} className="tag">{skill}</span>
          ))}
        </div>
      </SkillsContainer>

      <FourthContainer>
        <h2>Nuestro proceso de selección</h2>
        <ProcessStepsContainer>
          {steps.map((step, index) => (
            <StepWrapper key={index}>
              <Reward>{step.reward}</Reward>
              <StepLineContainer>
                <Circle><StepNumber>{step.number}</StepNumber></Circle>
                {index < steps.length - 1 && <ConnectingLine />}
              </StepLineContainer>
              <StepInput type="text" value={selectionProcess[index]} readOnly />
            </StepWrapper>
          ))}
        </ProcessStepsContainer>
      </FourthContainer>

      <ResponsibilitiesContainer>
        <h2>Responsabilidades</h2>
        {responsibilities.map((resp, index) => (
          <ResponsibilityInputGroup key={index}>
            <p>{resp}</p>
          </ResponsibilityInputGroup>
        ))}
      </ResponsibilitiesContainer>

      <WhatWeLookingForContainer>
        <h2>Qué buscamos</h2>
        <div className="Needs-Container">
            {[{ label: "Imprescindible", value: indispensable },
            { label: "Ideal", value: ideal },
            { label: "Es un plus", value: plus }]
            .map((section, i) => (
                <div key={i}>
                <h3>{section.label}</h3>
                <div className="Needs-Columns">
                    {section.value.map((val, idx) => (
                    <p key={idx}>{val}</p>
                    ))}
                </div>
                </div>
            ))}
        </div>
        </WhatWeLookingForContainer>

        <TextContainer>
        <h2>¿Sentís que esta oportunidad es para vos?</h2>
        <h3>Contanos qué te motiva a sumarte a este equipo.</h3>
        {hasApplied ? (
            <p style={{ fontWeight: "bold", color: "#2b8a3e" }}>
            Ya te postulaste a este trabajo
            </p>
        ) : (
            <button onClick={handleApply}>Postularse</button>
        )}
        </TextContainer>
        
        {showModal && (
        <SuccessApply>
            <InnerSuccessApply>
            <h2>✅ Postulación enviada con éxito</h2>
            <StyledLink to={'/JobFinder'}>
            <SuccessButton onClick={() => setShowModal(false)}>
                OK
            </SuccessButton>
            </StyledLink>
            </InnerSuccessApply>
        </SuccessApply>
        )}
    </>
  );
}