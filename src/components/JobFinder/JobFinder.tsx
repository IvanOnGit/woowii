import { useEffect, useState } from "react";
import { Bell, Bookmark, BriefcaseBusiness, ChevronDown, ChevronUp, Mail, Menu, Star } from "lucide-react";
import { 
  FirstMenuAsideItem, 
  MenuAside,
  UserAndImageCombo, 
  DropdownContainer, 
  DropdownButton, 
  DropdownList,
  DropdownItem,
  SecondDropdownContainer,
  SecondDropdownButton,
  SecondDropdownList,
  SecondDropdownItem,
  HelpButton,
  Published,
  ContainerWrapper,
  Header,
  HeaderItems,
  SearchBar,
  MainTitleAndSubtitle,
  GreenCentralContainer,
  LastParragraph,
  LastThreeItems,
  LastThreeGreenImages,
  LastThreeTexts,
  GreenPeople,
  MainContainer,
  JobsContainer,
  StyledLink,
} from "./styles";
import NewPost from "../NewPost/NewPost";

export default function JobFinder() {
  const [isFirstDropdownOpen, setIsFirstDropdownOpen] = useState(false);
  const [isSecondDropdownOpen, setIsSecondDropdownOpen] = useState(false);
  const [isThirdDropdownOpen, setIsThirdDropdownOpen] = useState(false);
  const [isFourthDropdownOpen, setIsFourthDropdownOpen] = useState(false);
  const [isFifthDropdownOpen, setIsFifthDropdownOpen] = useState(false);
  const [isSixthDropdownOpen, setIsSixthDropdownOpen] = useState(false);
  const [isSeventhDropdownOpen, setIsSeventhDropdownOpen] = useState(false);
  const userId = localStorage.getItem("userId");
  const [userData, setUserData] = useState<{ username: string; profile_picture: string } | null>(null);

        useEffect(() => {
          const fetchUserData = async () => {
              if (!userId) return;
    
              const response = await fetch(`http://localhost:3000/api/auth/get-user?userId=${userId}`);
              const data = await response.json();
              console.log(data);  // Verifica qué datos estás recibiendo
              setUserData(data);
          };
    
          fetchUserData();
        }, [userId]);
  
        const [jobs, setJobs] = useState([]);

        useEffect(() => {
          const fetchJobs = async () => {
            try {
              const response = await fetch('http://localhost:3000/api/auth/jobs');
              const data = await response.json();
              setJobs(data);
            } catch (error) {
              console.error("❌ Error al traer los trabajos:", error);
            }
          };

          fetchJobs();
        }, []);
  
        interface Job {
          id: number;
          title: string;
          about_us: string;
          salary: number | null;
        }
  
  return (
    <>
      <MenuAside>
        <FirstMenuAsideItem>
          <img src="/images/GreenLogoDemo.svg" alt="Avatar" />
          <UserAndImageCombo>
          <img src={userData?.profile_picture || "/images/Avatar1.png"} alt="Avatar" />
          <h3>@{userData?.username || "Usuario"}</h3>
          </UserAndImageCombo>
          <UserAndImageCombo>
            <Star />
            <p>Perfil destacado</p>
          </UserAndImageCombo>
        </FirstMenuAsideItem>
        <span></span>

        {/* Primer Dropdown */}
        <DropdownContainer>
          <DropdownButton onClick={() => setIsFirstDropdownOpen(!isFirstDropdownOpen)}>
            Área profesional {isFirstDropdownOpen ? <ChevronUp /> : <ChevronDown />}
          </DropdownButton>
          {isFirstDropdownOpen && (
            <DropdownList>
              <DropdownItem>Desarrollador Fullstack</DropdownItem>
              <DropdownItem>UX | UI Designer</DropdownItem>
              <DropdownItem>Marketing Manager</DropdownItem>
            </DropdownList>
          )}
        </DropdownContainer>

        {/* Segundo Dropdown */}
        <SecondDropdownContainer>
          <SecondDropdownButton onClick={() => setIsSecondDropdownOpen(!isSecondDropdownOpen)}>
            Experiencia {isSecondDropdownOpen ? <ChevronUp /> : <ChevronDown />}
          </SecondDropdownButton>
          {isSecondDropdownOpen && (
            <SecondDropdownList>
              <SecondDropdownItem>0 - 1</SecondDropdownItem>
              <SecondDropdownItem>2 - 5</SecondDropdownItem>
              <SecondDropdownItem>6 - 10</SecondDropdownItem>
              <SecondDropdownItem>+10</SecondDropdownItem>
            </SecondDropdownList>
          )}
        </SecondDropdownContainer>
              
        {/* Tercer Dropdown */}
        <SecondDropdownContainer>
          <SecondDropdownButton onClick={() => setIsThirdDropdownOpen(!isThirdDropdownOpen)}>
            Horarios {isThirdDropdownOpen ? <ChevronUp /> : <ChevronDown />}
          </SecondDropdownButton>
          {isThirdDropdownOpen && (
            <SecondDropdownList>
              <SecondDropdownItem>Full time</SecondDropdownItem>
              <SecondDropdownItem>Part time</SecondDropdownItem>
              <SecondDropdownItem>Flexible</SecondDropdownItem>
              <SecondDropdownItem>Fines de semana</SecondDropdownItem>
            </SecondDropdownList>
          )}
        </SecondDropdownContainer>
        
        {/* Quinto Dropdown */}
        <SecondDropdownContainer>
          <SecondDropdownButton onClick={() => setIsFifthDropdownOpen(!isFifthDropdownOpen)}>
            Modalidad {isFifthDropdownOpen ? <ChevronUp /> : <ChevronDown />}
          </SecondDropdownButton>
          {isFifthDropdownOpen && (
            <SecondDropdownList>
              <SecondDropdownItem>Si</SecondDropdownItem>
              <SecondDropdownItem>No</SecondDropdownItem>
            </SecondDropdownList>
          )}
        </SecondDropdownContainer>
        
        {/* Sexto Dropdown */}
        <SecondDropdownContainer>
          <SecondDropdownButton onClick={() => setIsSixthDropdownOpen(!isSixthDropdownOpen)}>
            Preferencias {isSixthDropdownOpen ? <ChevronUp /> : <ChevronDown />}
          </SecondDropdownButton>
          {isSixthDropdownOpen && (
            <SecondDropdownList>
              <SecondDropdownItem><input type="text" placeholder="Busca tu idioma aquí"/></SecondDropdownItem>
              <SecondDropdownItem>ingles</SecondDropdownItem>
            </SecondDropdownList>
          )}
        </SecondDropdownContainer>
        
        {/* Séptimo Dropdown */}
        <SecondDropdownContainer>
          <SecondDropdownButton onClick={() => setIsSeventhDropdownOpen(!isSeventhDropdownOpen)}>
          Rango salarial <strong>€</strong> | <strong>$</strong> {isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
          </SecondDropdownButton>
          {isSeventhDropdownOpen && (
            <SecondDropdownList>
              <SecondDropdownItem><input type="text" placeholder="Minimo"/></SecondDropdownItem>
              <SecondDropdownItem><input type="text" placeholder="Máximo"/></SecondDropdownItem>
            </SecondDropdownList>
          )}
        </SecondDropdownContainer>
        
         {/* Cuarto Dropdown */}
         <SecondDropdownContainer>
          <SecondDropdownButton onClick={() => setIsFourthDropdownOpen(!isFourthDropdownOpen)}>
            Ubicación {isFourthDropdownOpen ? <ChevronUp /> : <ChevronDown />}
          </SecondDropdownButton>
          {isFourthDropdownOpen && (
            <SecondDropdownList>
              <SecondDropdownItem><input type="text" /></SecondDropdownItem>
              <SecondDropdownItem>Madrid, España</SecondDropdownItem>
            </SecondDropdownList>
          )}
        </SecondDropdownContainer>
        <Published>
        <h3>Publicado</h3>
        <p>Hoy <strong>(59)</strong></p>
        <p>Ayer <strong>(18)</strong></p>
        <p>Última semana <strong>(138)</strong></p>
        <p>Todos <strong>(323)</strong></p>
        </Published>
        <HelpButton> Chat de ayuda</HelpButton>
      </MenuAside>
    <MainContainer>
        <ContainerWrapper>
            <Header>
            <HeaderItems>
                <p><img src="/images/wiibucks.png" alt="wiibucks" />400</p>
                <p><img src="/images/wiibucks.png" alt="wiibucks" />00</p>
                <Bell />
                <Mail />
                <BriefcaseBusiness />
                <Bookmark />
                <Menu />
            </HeaderItems>
            </Header>
            <SearchBar>
            <input type="text" name="" id="" placeholder="Búsqueda"/>
        </SearchBar>
        </ContainerWrapper>
        <NewPost />
        <MainTitleAndSubtitle>
            <h1>¡Encontramos tu siguiente<br /> experiencia profesional!</h1>
            <p>Tu futuro profesional comienza aquí. Descubre ofertas de empleo <br /> personalizadas y herramientas para impulsar tu carrera.</p>
        </MainTitleAndSubtitle>
        <GreenCentralContainer>
            <div>
            <h2>Un mundo laboral <br />personalizado: <br /> Coincidencias <br />perfectas.</h2>
            <p>Recomendaciones de empleo basadas <br /> en tu perfil, preferencias y actividad. <br />¡Encuentra el trabajo ideal para ti!</p>
            </div>
            <div>
                <div>
                    <h3>Análisis de perfil.</h3>
                    <p>Algoritmos avanzados que <br /> identifican tus puntos fuertes.</p>
                </div>
                <div>
                    <h3>Preferencias definidas.</h3>
                    <p>Consideramos tus intereses<br /> y expectativas</p>
                </div>
            </div>
        </GreenCentralContainer>
        <LastParragraph>
            <p>Utiliza filtros avanzados para refinar tus búsquedas por ubicación, <br /> salario, industria y más. ¡Ahorra tiempo y encuentra lo que buscas!</p>
        </LastParragraph>
        <LastThreeItems>
            <LastThreeGreenImages>
                <img src="/images/GreenRectangle.png" alt="" />
                <img src="/images/GreenRectangle.png" alt="" />
                <img src="/images/GreenRectangle.png" alt="" />
            </LastThreeGreenImages>
            <LastThreeTexts>
                <h2>Palabras clave</h2>
                <p>Encuentra exactamente lo que buscas.</p>
                <h2>Ubicación</h2>
                <p>Define dónde quieres trabajar.</p>
                <h2>Salario</h2>
                <p>Establece tus expectativas económicas.</p>
            </LastThreeTexts>
            <GreenPeople>
                <img src="/images/GreenPeople.png" alt="" />
            </GreenPeople>
        </LastThreeItems>
    </MainContainer>
    <JobsContainer>
      <h2>Empleos destacados para ti</h2>
      <p>
        En función de tu perfil, preferencias <br /> y actividad como solicitudes,
        <br /> búsquedas y contenido guardado.
      </p>
      <hr />
      {jobs.map((job: Job) => (
        <StyledLink to={`/JobOpportunity/${job.id}`} key={job.id}>
          <h2>{job.title}</h2>
          <h3>Madrid, España | Modalidad mixta</h3> {/* opcional, podés hacerlo dinámico también */}
          <p>{job.about_us}</p>
          <p><strong>Salario: </strong>{job.salary ? `${job.salary} €` : "No especificado"}</p>
          <hr />
          <span></span>
          <hr />
        </StyledLink>
      ))}
    </JobsContainer>
    </>
  );
}