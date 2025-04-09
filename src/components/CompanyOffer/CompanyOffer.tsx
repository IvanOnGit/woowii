import { Bell, Bookmark, BriefcaseBusiness, Mail } from "lucide-react";
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
  Logo,
  ProcessStepsContainer,
  ResponsibilitiesContainer,
  ResponsibilityButton,
  ResponsibilityInput,
  ResponsibilityInputGroup,
  Reward,
  SearchBar,
  SecondContainer,
  SkillsContainer,
  StepInput,
  StepLineContainer,
  StepNumber,
  StepWrapper,
  TextContainer,
  ThirdContainer,
  ThirdContainerColumnsContainer,
  WhatWeLookingForContainer
} from "./styles";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CompanyOffer() {
  const navigate = useNavigate();

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

  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const skills = [
    "React", "Node.js", "Figma", "UX Writing", "Python", "SQL",
    "Illustrator", "Firebase", "Docker", "Photoshop", "CSS",
    "HTML", "TypeScript", "Power BI"
  ];

  const steps = [
    { reward: "50 Wiibucts", number: 1, active: true },
    { reward: "100 Wiibucts", number: 2 },
    { reward: "200 Wiibucts", number: 3 },
    { reward: "50 Wiibucts", number: 4 }
  ];

  const handleResponsibilityChange = (index: number, value: string) => {
    const updated = [...responsibilities];
    updated[index] = value;
    setResponsibilities(updated);
  };

  const addResponsibility = () => {
    if (responsibilities[responsibilities.length - 1].trim() !== '') {
      setResponsibilities([...responsibilities, '']);
    }
  };

  const removeResponsibility = (index: number) => {
    const updated = responsibilities.filter((_, i) => i !== index);
    setResponsibilities(updated);
  };

  const handleSelectionProcessChange = (index: number, value: string) => {
    const updated = [...selectionProcess];
    updated[index] = value;
    setSelectionProcess(updated);
  };

  const handleArrayInputChange = (setter: React.Dispatch<React.SetStateAction<string[]>>, index: number, value: string) => {
    setter((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setErrorMessage("");

    if (!title || presencial === "" || remoto === "") {
      setErrorMessage("Por favor completá todos los campos obligatorios.");
      setIsSubmitting(false);
      return;
    }

    const token = localStorage.getItem("token");

    if (!token) {
      setErrorMessage("Token no encontrado. Por favor iniciá sesión nuevamente.");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/auth/create-job", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          title,
          salary,
          variable,
          presencial_percentage: parseInt(presencial),
          remote_percentage: parseInt(remoto),
          about_us: aboutUs,
          what_you_will_do: whatYouWillDo,
          who_you_will_work_with: `Líder: ${leaderRole}, Equipo: ${teamRole}`,
          survival_kit: selectedSkills,
          selection_process: selectionProcess,
          responsibilities,
          indispensable,
          ideal,
          plus
        })
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || "Error al crear el trabajo");

      navigate("/CompanyCandidatesView");
    } catch (err) {
        console.error(err);
        setErrorMessage("Error al conectar con el servidor");
    } finally {
      setIsSubmitting(false);
    }
  };

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
              <input type="text" placeholder="Nombre de la solicitud" value={title} onChange={(e) => setTitle(e.target.value)} />
              <div className="questions">
                <div className="input-group">
                  <label htmlFor="salary">Salario</label>
                  <input id="salary" type="text" placeholder="Completar" value={salary} onChange={(e) => setSalary(e.target.value)} />
                </div>
                <div className="input-group">
                  <label htmlFor="variable">Variable</label>
                  <input id="variable" type="text" placeholder="Completar" value={variable} onChange={(e) => setVariable(e.target.value)} />
                </div>
                <div className="input-group">
                  <label htmlFor="presencial">Presencial</label>
                  <input id="presencial" type="text" placeholder="Completar" value={presencial} onChange={(e) => setPresencial(e.target.value)} />
                </div>
                <div className="input-group">
                  <label htmlFor="remoto">Remoto</label>
                  <input id="remoto" type="text" placeholder="Completar" value={remoto} onChange={(e) => setRemoto(e.target.value)} />
                </div>
              </div>
            </BaseQuestionsInputsFirstContainer>
            <BaseQuestionsInputsSecondContainer>
              <h2>Sobre Nosotros</h2>
              <textarea placeholder="Cuenta sobre tu empresa sin dar tus datos específicos" value={aboutUs} onChange={(e) => setAboutUs(e.target.value)} />
            </BaseQuestionsInputsSecondContainer>
          </BaseQuestionsInputs>
        </BaseQuestions>
      </Container>

      <SecondContainer>
        <h1>Que harás</h1>
        <textarea placeholder="Describe el día a día del rol que estás buscando" value={whatYouWillDo} onChange={(e) => setWhatYouWillDo(e.target.value)} />
      </SecondContainer>

      <ThirdContainer>
        <h2>Con quién trabajarás</h2>
        <ThirdContainerColumnsContainer>
          <div className="Column">
            <label htmlFor="">Líder</label>
            <input type="text" placeholder="Puesto" value={leaderRole} onChange={(e) => setLeaderRole(e.target.value)} />
          </div>
          <p>Equipo</p>
          <div className="Column">
            <label htmlFor="">Rol del equipo</label>
            <input type="text" placeholder="Descripción" value={teamRole} onChange={(e) => setTeamRole(e.target.value)} />
          </div>
        </ThirdContainerColumnsContainer>
      </ThirdContainer>

      <SkillsContainer>
        <h2>El kit de supervivencia que necesitarás</h2>
        <div>
          <select onChange={(e) => {
            const value = e.target.value;
            if (value && !selectedSkills.includes(value)) {
              setSelectedSkills([...selectedSkills, value]);
            }
          }} defaultValue="">
            <option value="" disabled>Seleccioná una habilidad</option>
            {skills.map(skill => <option key={skill} value={skill}>{skill}</option>)}
          </select>

          <div className="tags-container">
            {selectedSkills.map((skill, index) => (
              <span key={index} className="tag">{skill}</span>
            ))}
          </div>
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
              <StepInput type="text" placeholder="Describe el proceso.." value={selectionProcess[index]} onChange={(e) => handleSelectionProcessChange(index, e.target.value)} />
            </StepWrapper>
          ))}
        </ProcessStepsContainer>
      </FourthContainer>

      <ResponsibilitiesContainer>
        <h2>Responsabilidades</h2>
        {responsibilities.map((resp, index) => (
          <ResponsibilityInputGroup key={index}>
            <ResponsibilityInput type="text" placeholder="Describe las responsabilidades que tendrá el candidato..." value={resp} onChange={(e) => handleResponsibilityChange(index, e.target.value)} />
            {index === responsibilities.length - 1 ? (
              <ResponsibilityButton onClick={addResponsibility}>＋</ResponsibilityButton>
            ) : (
              <ResponsibilityButton onClick={() => removeResponsibility(index)}>－</ResponsibilityButton>
            )}
          </ResponsibilityInputGroup>
        ))}
      </ResponsibilitiesContainer>

      <WhatWeLookingForContainer>
        <h2>Qué buscamos</h2>
        <div className="Needs-Container">
          {[
            { label: "Imprescindible", value: indispensable, setter: setIndispensable },
            { label: "Ideal", value: ideal, setter: setIdeal },
            { label: "Es un plus", value: plus, setter: setPlus }
          ].map((section, i) => (
            <div key={i}>
              <h3>{section.label}</h3>
              <div className="Needs-Columns">
                {section.value.map((val, idx) => (
                  <input key={idx} type="text" placeholder="Completar" value={val} onChange={(e) => handleArrayInputChange(section.setter, idx, e.target.value)} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </WhatWeLookingForContainer>

      <TextContainer>
        <h2>Si haz llegado hasta aquí es que algo en la oferta te ha hecho click</h2>
        <h3>Hagamos match y comentanos qué te motiva para unirte a nuestro equipo.</h3>
        <button onClick={handleSubmit} disabled={isSubmitting}>
          {isSubmitting ? "Publicando..." : "Publicar solicitud"}
        </button>
        {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      </TextContainer>
    </>
  );
}