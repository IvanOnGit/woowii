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
  DropdownItem
} from "./styles";
import { useParams, useNavigate } from "react-router-dom";

export default function CompanyCandidatesView() {
  const [dropdowns, setDropdowns] = useState({
    technicalSkills: false,
  });

  interface Candidate {
    id: number;
    name: string;
    username?: string;
    profile_picture?: string;
    skills: string[];
    experience: string;
    degree: string;
    lastProject: string;
  }

  const [openDropdownId, setOpenDropdownId] = useState<number | null>(null);
  const { jobId } = useParams<{ jobId: string }>();
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const navigate = useNavigate();
    
  const toggleMenu = (id: number) => {
    setOpenDropdownId(prevId => (prevId === id ? null : id));
  };
    
  const toggleDropdown = (dropdown: keyof typeof dropdowns) => {
    setDropdowns(prev => ({ 
      ...prev, 
      [dropdown]: !prev[dropdown] 
    }));
  };
  
  const handleViewProfile = (candidate: Candidate) => {
    // Navegar al perfil del candidato con todos los datos
    navigate(`/candidate/${candidate.id}`, { 
      state: { candidateData: candidate } 
    });
    setOpenDropdownId(null);
  };
  
  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const response = await fetch(`https://api.woowiihr.com/api/auth/candidates/by-job?jobId=${jobId}`);
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
            id: candidate.userId || index + 1, // Ahora usamos el userId real
            applicationId: candidate.applicationId,
            name: candidate.username || 'Usuario sin nombre',
            username: candidate.username, // Guardamos el username original
            profile_picture: candidate.profile_picture, // ¡Importante! Guardamos la imagen de perfil
            skills: skills,
            experience: candidate.experience || 'No especificada',
            degree: candidate.degree || 'No especificado',
            lastProject: candidate.lastProject || 'No especificado'
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
                    <DropdownItem onClick={() => handleViewProfile(candidate)}>Ver perfil</DropdownItem>
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
    </>
  );
}