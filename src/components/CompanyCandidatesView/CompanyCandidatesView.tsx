
import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp, MoreVertical, Briefcase, GraduationCap, Folder } from "lucide-react";
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
  NoCandidates
} from "./styles";
import { useNavigate, useParams } from "react-router-dom";

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


  const toggleMenu = (id: number) => {
    setOpenDropdownId(prevId => (prevId === id ? null : id));
  };
    
  const toggleDropdown = (dropdown: keyof typeof dropdowns) => {
    setDropdowns(prev => ({ 
      ...prev, 
      [dropdown]: !prev[dropdown] 
    }));
  };
  
  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/auth/candidates/by-job?jobId=${jobId}`);
        const data = await response.json();
        
        // Imprimir los datos recibidos para debug
        console.log("Datos recibidos del API:", data);
        
        // Transformar los datos recibidos para que coincidan con la estructura que espera el componente
        const formattedCandidates = Array.isArray(data) ? data.map((candidate, index) => {
          // Manejar el campo toolset de manera segura
          let skills: string[] = ['No skills specified'];
          
          if (candidate.toolset) {
            if (typeof candidate.toolset === 'string') {
              // Si es una cadena, intentamos dividirla
              skills = candidate.toolset.split(',').map((skill: string) => skill.trim());
            } else if (Array.isArray(candidate.toolset)) {
              // Si ya es un array, lo usamos directamente
              skills = candidate.toolset;
            } else {
              // Si es otro tipo (objeto, número, etc.), lo convertimos a string
              skills = [String(candidate.toolset)];
            }
          }
            
          return {
            id: index + 1, // Asignar un ID único basado en el índice
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
        setCandidates([]); // Establecer un array vacío en caso de error
      }
    };
  
    if (jobId) fetchCandidates();
  }, [jobId]);
  
  const navigate = useNavigate();

  const handleContinueClick = () => {
    navigate("/CompanyCandidatesViewContact");
  };

  return (
    <>
      {/* Menú Lateral */}
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

      {/* Contenedor Principal */}
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
                    <DropdownItem onClick={handleContinueClick}>Contactar</DropdownItem>
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
          <NoCandidates>No hay candidatos disponibles.</NoCandidates>
        )}
      </MainContent>
    </>
  );
}