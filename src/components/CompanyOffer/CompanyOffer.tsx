import { Bell, Bookmark, BriefcaseBusiness, Mail} from "lucide-react";
import { BaseQuestions, BaseQuestionsInputs, BaseQuestionsInputsFirstContainer, BaseQuestionsInputsSecondContainer, Circle, ConnectingLine, Container, FourthContainer, Header, HeaderItems, Logo, ProcessStepsContainer, ResponsibilitiesContainer, ResponsibilityButton, ResponsibilityInput, ResponsibilityInputGroup, Reward, SearchBar, SecondContainer, SkillsContainer, StepInput, StepLineContainer, StepNumber, StepWrapper, TextContainer, ThirdContainer, ThirdContainerColumnsContainer, WhatWeLookingForContainer } from "./styles";
import { useState } from "react";

export default function CompanyOffer() {

    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

    const skills = [
      "React",
      "Node.js",
      "Figma",
      "UX Writing",
      "Python",
      "SQL",
      "Illustrator",
      "Firebase",
      "Docker",
      "Photoshop",
      "CSS",
      "HTML",
      "TypeScript",
      "Power BI"
    ];

    const steps = [
        { reward: "50 Wiibucts", number: 1, active: true },
        { reward: "100 Wiibucts", number: 2 },
        { reward: "200 Wiibucts", number: 3 },
        { reward: "50 Wiibucts", number: 4 },
    ];
    
    const [responsibilities, setResponsibilities] = useState<string[]>(['']);

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
        <SecondContainer>
            <h1>Que harás</h1>
            <textarea name="" id="" placeholder="Describe el día a día del rol que estás buscando"></textarea>
        </SecondContainer>
        <ThirdContainer>
            <h2>Con quién trabajarás</h2>
            <ThirdContainerColumnsContainer>
                <div className="Column">
                    <label htmlFor="">Líder</label>
                    <input type="text" name="" id="" placeholder="Puesto"/>
                </div>
                <p>Equipo</p>
                <div className="Column">
                    <label htmlFor="">Rol del equipo</label>
                    <input type="text" name="" id="" placeholder="Descripción"/>
                </div>
            </ThirdContainerColumnsContainer>
        </ThirdContainer>
        <SkillsContainer>
            <h2>El kit de supervivencia que necesitarás</h2>
            <div>
                <select
                    onChange={(e) => {
                    const value = e.target.value;
                    if (value && !selectedSkills.includes(value)) {
                        setSelectedSkills([...selectedSkills, value]);
                    }
                    }}
                    defaultValue=""
                >
                    <option value="" disabled>Seleccioná una habilidad</option>
                    {skills.map((skill) => (
                    <option key={skill} value={skill}>
                        {skill}
                    </option>
                    ))}
                </select>

                <div className="tags-container">
                    {selectedSkills.map((skill, index) => (
                    <span key={index} className="tag">
                        {skill}
                    </span>
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
                        <Circle>
                        <StepNumber>{step.number}</StepNumber>
                        </Circle>
                        {index < steps.length - 1 && <ConnectingLine />}
                    </StepLineContainer>
                    <StepInput type="text" placeholder="Describe el proceso.." />
                    </StepWrapper>
                ))}
            </ProcessStepsContainer>
            </FourthContainer>
            <ResponsibilitiesContainer>
                <h2>Responsabilidades</h2>
                {responsibilities.map((resp, index) => (
                    <ResponsibilityInputGroup key={index}>
                    <ResponsibilityInput
                        type="text"
                        placeholder="Describe las responsabilidades que tendrá el candidato..."
                        value={resp}
                        onChange={(e) => handleResponsibilityChange(index, e.target.value)}
                    />
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
                    <div>
                    <h3>Imprescindible</h3>
                        <div className="Needs-Columns">
                            <input type="text" name="" id="" placeholder="Completar" />
                            <input type="text" name="" id="" placeholder="Completar" />
                            <input type="text" name="" id="" placeholder="Completar" />
                            <input type="text" name="" id="" placeholder="Completar" />
                        </div>
                    </div>
                    <div>
                    <h3>Ideal</h3>
                        <div className="Needs-Columns">
                            <input type="text" name="" id="" placeholder="Completar" />
                            <input type="text" name="" id="" placeholder="Completar" />
                            <input type="text" name="" id="" placeholder="Completar" />
                            <input type="text" name="" id="" placeholder="Completar" />
                        </div>
                    </div>
                    <div>
                    <h3>Es un plus</h3>
                        <div className="Needs-Columns">
                            <input type="text" name="" id="" placeholder="Completar" />
                            <input type="text" name="" id="" placeholder="Completar" />
                            <input type="text" name="" id="" placeholder="Completar" />
                            <input type="text" name="" id="" placeholder="Completar" />
                        </div>
                    </div>
                </div>
            </WhatWeLookingForContainer>
            <TextContainer>
                <h2>Si haz llegado hasta aquí es que algo en la oferta te ah hecho click</h2>
                <h3>Hagamos match y comentanos qué te motiva para unirte para nuestro equipo.</h3>
                <button>Publicar solicitud</button>
            </TextContainer>
        </>
  );
}