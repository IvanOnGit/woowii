
import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, MoreVertical, Briefcase, GraduationCap, Folder, X } from "lucide-react";
import { 
  FirstMenuAsideItem, 
  MenuAside,
  SecondDropdownContainer,
  SecondDropdownButton,
  SecondDropdownList,
  SecondDropdownItem,
  Separator,
  MainContent, 
  CandidateCard, 
  CandidateHeader,
  CandidateName,
  MoreOptions,
  SkillsContainer,
  SkillTag,
  CandidateInfo,
  DropdownMenu,
  DropdownItem,
  ModalOverlay,
  ModalContainer,
  ModalHeader,
  ModalContent,
  ModalFooter,
  ModalButton,
  InputGroup,
  StyledTextarea,
  StyledInput
} from "./styles";
import { useParams } from "react-router-dom";

export default function CompanyCandidatesView() {
  const [dropdowns, setDropdowns] = useState({
    technicalSkills: false,
  });

  interface Candidate {
    id: number;
    name: string;
    skills: string[];
    experience: string;
    degree: string;
    lastProject: string;
  }

  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  const { jobId } = useParams<{ jobId: string }>();
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);
  const [messageForm, setMessageForm] = useState({
    subject: '',
    message: ''
  });

  const toggleMenu = (id: number) => {
    setOpenDropdownId(prevId => (prevId === id ? null : id));
  };
    
  const toggleDropdown = (dropdown: keyof typeof dropdowns) => {
    setDropdowns(prev => ({ 
      ...prev, 
      [dropdown]: !prev[dropdown] 
    }));
  };
  
  const handleOpenModal = (candidate: Candidate) => {
    setSelectedCandidate(candidate);
    setShowModal(true);
    setOpenDropdownId(null);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setMessageForm({ subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setMessageForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSendMessage = () => {
    console.log("Enviando mensaje a:", selectedCandidate?.name);
    console.log("Asunto:", messageForm.subject);
    console.log("Mensaje:", messageForm.message);
    
    handleCloseModal();
    
    alert("Mensaje enviado correctamente");
  };
  
  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/auth/candidates/by-job?jobId=${jobId}`);
        const data = await response.json();
        
        console.log("Datos recibidos del API:", data);
        
        const formattedCandidates = Array.isArray(data) ? data.map((candidate, index) => {
          let skills: string[] = ['No skills specified'];
          
          if (candidate.toolset) {
            if (typeof candidate.toolset === 'string') {
              skills = candidate.toolset.split(',').map((skill: string) => skill.trim());
            } else if (Array.isArray(candidate.toolset)) {
              skills = candidate.toolset;
            } else {
              skills = [String(candidate.toolset)];
            }
          }
            
          return {
            id: index + 1,
            name: candidate.username || 'Usuario sin nombre',
            skills: skills,
            experience: 'No especificada',
            degree: 'No especificado',
            lastProject: 'No especificado'
          };
        }) : [];
        
        setCandidates(formattedCandidates);
      } catch (error) {
        console.error("Error fetching candidates:", error);
        setCandidates([]);
      }
    };
  
    if (jobId) fetchCandidates();
  }, [jobId]);

  return (
    <>
      <MenuAside>
        <FirstMenuAsideItem>
          <img src="/images/WhiteLogo.png" alt="Avatar" /> 
        </FirstMenuAsideItem>

        <h1>Filtrar por</h1>
        <Separator />

        <SecondDropdownContainer>
          <SecondDropdownButton onClick={() => toggleDropdown("technicalSkills")}>
            Herramientas técnicas {dropdowns.technicalSkills ? <ChevronUp /> : <ChevronDown />}
          </SecondDropdownButton>
          {dropdowns.technicalSkills && (
            <SecondDropdownList>
              <SecondDropdownItem>
                <input type="checkbox" id="javascript" />
                <label htmlFor="javascript">JavaScript</label>
              </SecondDropdownItem>
              <SecondDropdownItem>
                <input type="checkbox" id="javascript" />
                <label htmlFor="javascript">.Net</label>
              </SecondDropdownItem>
              <SecondDropdownItem>
                <input type="checkbox" id="javascript" />
                <label htmlFor="javascript">Data Science</label>
              </SecondDropdownItem>
              <SecondDropdownItem>
                <input type="checkbox" id="javascript" />
                <label htmlFor="javascript">Python</label>
              </SecondDropdownItem>
            </SecondDropdownList>
          )}
          
          <SecondDropdownButton onClick={() => toggleDropdown("technicalSkills")}>
           Habilidades blandas {dropdowns.technicalSkills ? <ChevronUp /> : <ChevronDown />}
          </SecondDropdownButton>
          {dropdowns.technicalSkills && (
            <SecondDropdownList>
              <SecondDropdownItem>
                <input type="checkbox" id="javascript" />
                <label htmlFor="javascript">Autogestión</label>
              </SecondDropdownItem>
              <SecondDropdownItem>
                <input type="checkbox" id="javascript" />
                <label htmlFor="javascript">Liderazgo</label>
              </SecondDropdownItem>
              <SecondDropdownItem>
                <input type="checkbox" id="javascript" />
                <label htmlFor="javascript">Gestión del tiempo</label>
              </SecondDropdownItem>
              <SecondDropdownItem>
                <input type="checkbox" id="javascript" />
                <label htmlFor="javascript">flexibilidad</label>
              </SecondDropdownItem>
            </SecondDropdownList>
          )}
          
          <SecondDropdownButton onClick={() => toggleDropdown("technicalSkills")}>
            Experiencia previa {dropdowns.technicalSkills ? <ChevronUp /> : <ChevronDown />}
          </SecondDropdownButton>
          {dropdowns.technicalSkills && (
            <SecondDropdownList>
              <SecondDropdownItem>
                <input type="checkbox" id="javascript" />
                <label htmlFor="javascript">Junior</label>
              </SecondDropdownItem>
              <SecondDropdownItem>
                <input type="checkbox" id="javascript" />
                <label htmlFor="javascript">Semi Senior</label>
              </SecondDropdownItem>
              <SecondDropdownItem>
                <input type="checkbox" id="javascript" />
                <label htmlFor="javascript">Senior</label>
              </SecondDropdownItem>
              <SecondDropdownItem>
                <input type="checkbox" id="javascript" />
                <label htmlFor="javascript">1 año de experiencia</label>
              </SecondDropdownItem>
              <SecondDropdownItem>
                <input type="checkbox" id="javascript" />
                <label htmlFor="javascript">2 años de experiencia</label>
              </SecondDropdownItem>
              <SecondDropdownItem>
                <input type="checkbox" id="javascript" />
                <label htmlFor="javascript">3 años de experiencia</label>
              </SecondDropdownItem>
              <SecondDropdownItem>
                <input type="checkbox" id="javascript" />
                <label htmlFor="javascript">4 años de experiencia</label>
              </SecondDropdownItem>
            </SecondDropdownList>
          )}
        </SecondDropdownContainer>

        <Separator />
      </MenuAside>

      <MainContent>
        {candidates.length > 0 ? (
          candidates.map(candidate => (
            <CandidateCard key={candidate.id}>
              <CandidateHeader>
                <CandidateName>{candidate.name}</CandidateName>
                <MoreOptions onClick={() => toggleMenu(candidate.id)}>
                  <MoreVertical />
                </MoreOptions>
                {openDropdownId === candidate.id && (
                  <DropdownMenu>
                    <DropdownItem onClick={() => handleOpenModal(candidate)}>Contactar</DropdownItem>
                  </DropdownMenu>
                )}
              </CandidateHeader>

              <SkillsContainer>
                {candidate.skills.map((skill: string) => (
                  <SkillTag key={skill}>{skill}</SkillTag>
                ))}
              </SkillsContainer>

              <CandidateInfo>
                <p><Briefcase size={18} /> {candidate.experience}</p>
                <p><GraduationCap size={18} /> {candidate.degree}</p>
                <p><Folder size={18} /> Last Project: {candidate.lastProject}</p>
              </CandidateInfo>
            </CandidateCard>
          ))
        ) : (
          <p>No hay candidatos disponibles.</p>
        )}
      </MainContent>

      {showModal && (
        <ModalOverlay>
          <ModalContainer>
            <ModalHeader>
              <h3>Contactar Candidato</h3>
              <X onClick={handleCloseModal} style={{ cursor: 'pointer' }} />
            </ModalHeader>
            <ModalContent>
              <InputGroup>
                <label>Destinatario:</label>
                <p>{selectedCandidate?.name || 'Usuario'}</p>
              </InputGroup>
              <InputGroup>
                <label htmlFor="subject">Asunto:</label>
                <StyledInput 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={messageForm.subject} 
                  onChange={handleInputChange} 
                  placeholder="Escribe el asunto..."
                />
              </InputGroup>
              <InputGroup>
                <label htmlFor="message">Mensaje:</label>
                <StyledTextarea 
                  id="message" 
                  name="message" 
                  value={messageForm.message} 
                  onChange={handleInputChange} 
                  placeholder="Escribe tu mensaje..."
                  rows={6}
                />
              </InputGroup>
            </ModalContent>
            <ModalFooter>
              <ModalButton onClick={handleCloseModal} secondary>Cancelar</ModalButton>
              <ModalButton onClick={handleSendMessage} primary>Enviar</ModalButton>
            </ModalFooter>
          </ModalContainer>
        </ModalOverlay>
      )}
    </>
  );
}