import { useEffect, useState } from "react";
import { Bell, Bookmark, BriefcaseBusiness, ChevronDown, ChevronUp,  Mail, Menu } from "lucide-react";
import { 
  ContainerWrapper, 
  FirstMenuAsideItem, 
  Header, 
  HeaderItems, 
  MenuAside,
  DropdownContainer, 
  DropdownButton, 
  DropdownList,
  DropdownItem,
  SecondDropdownContainer,
  SecondDropdownButton,
  SecondDropdownList,
  SecondDropdownItem,
  HelpButton,
  SearchBar,
  ContainerLogoCompAndUser,
  Avatar,
  MainContainer,
  InnerContainerOne,
  OverviewContainer,
  InnerContainerTwo,
  StyledLink,
  HiringsInnerContainer,
} from "./styles";

export default function CompanyOverview() {
  const [isFirstDropdownOpen, setIsFirstDropdownOpen] = useState(false);
  const [isSecondDropdownOpen, setIsSecondDropdownOpen] = useState(false);
  const [isThirdDropdownOpen, setIsThirdDropdownOpen] = useState(false);
  const [isFourthDropdownOpen, setIsFourthDropdownOpen] = useState(false);
  const [isFifthDropdownOpen, setIsFifthDropdownOpen] = useState(false);
  const [isSixthDropdownOpen, setIsSixthDropdownOpen] = useState(false);
  const [isSeventhDropdownOpen, setIsSeventhDropdownOpen] = useState(false);
  
   const id = localStorage.getItem("id");
    const [companyData, setCompanyData] = useState<{ Company_username: string; Company_avatar: string } | null>(null);
  
    useEffect(() => {
      const fetchCompanyData = async () => {
        if (!id) {
          console.error("ID is missing or invalid.");
          return; // No hacemos la solicitud si la id es inválida
        }
  
        const numericId = Number(id);
        if (isNaN(numericId) || numericId <= 0) {
          console.error("ID is not a valid number.");
          return; // Si no es un número válido, no hacemos la solicitud
        }
  
        // Cambié 'companyId' por 'id' en la URL
        const url = `http://localhost:3000/api/auth/get-company?id=${numericId}`;
        console.log("Requesting URL:", url); // Verifica si la URL es correcta
  
        try {
          const response = await fetch(url);
          const data = await response.json();
          setCompanyData(data);
        } catch (error) {
          console.error("Error fetching company data:", error);
        }
      };
  
      fetchCompanyData();
    }, [id]);
  
    interface Job {
      id: number;
      title: string;
      salary: number;
    }
  
    const [companyJobs, setCompanyJobs] = useState<Job[]>([]);

    useEffect(() => {
      const fetchCompanyJobs = async () => {
        if (!id) return;

        try {
          const response = await fetch(`http://localhost:3000/api/auth/jobs/by-company/${id}`);
          const data = await response.json();
          setCompanyJobs(data);
        } catch (error) {
          console.error("Error fetching company jobs:", error);
        }
      };

      fetchCompanyJobs();
    }, [id]);

  return (
    <>
      <MenuAside>
        <FirstMenuAsideItem>
          <img src="/images/WhiteLogo.svg" alt="Avatar" />
        </FirstMenuAsideItem>

        {/* Primer Dropdown */}
        <DropdownContainer>
          <DropdownButton onClick={() => setIsFirstDropdownOpen(!isFirstDropdownOpen)}>
            Dashboard {isFirstDropdownOpen ? <ChevronUp /> : <ChevronDown />}
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
            Interviews {isSecondDropdownOpen ? <ChevronUp /> : <ChevronDown />}
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
            Hiring Summary {isThirdDropdownOpen ? <ChevronUp /> : <ChevronDown />}
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
        
        {/* Cuarto Dropdown */}
        <SecondDropdownContainer>
          <SecondDropdownButton onClick={() => setIsFourthDropdownOpen(!isFourthDropdownOpen)}>
            Talent Data {isFourthDropdownOpen ? <ChevronUp /> : <ChevronDown />}
          </SecondDropdownButton>
          {isFourthDropdownOpen && (
            <SecondDropdownList>
              <SecondDropdownItem><input type="text" /></SecondDropdownItem>
              <SecondDropdownItem>Madrid, España</SecondDropdownItem>
            </SecondDropdownList>
          )}
        </SecondDropdownContainer>
        
        {/* Quinto Dropdown */}
        <SecondDropdownContainer>
          <SecondDropdownButton onClick={() => setIsFifthDropdownOpen(!isFifthDropdownOpen)}>
            Resources {isFifthDropdownOpen ? <ChevronUp /> : <ChevronDown />}
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
            Alerts {isSixthDropdownOpen ? <ChevronUp /> : <ChevronDown />}
          </SecondDropdownButton>
          {isSixthDropdownOpen && (
            <SecondDropdownList>
              <SecondDropdownItem><input type="text" placeholder="Busca tu idioma aquí"/></SecondDropdownItem>
              <SecondDropdownItem>ingles</SecondDropdownItem>
            </SecondDropdownList>
          )}
        </SecondDropdownContainer>
        <span></span>
        
        {/* Séptimo Dropdown */}
        <SecondDropdownContainer>
          <SecondDropdownButton onClick={() => setIsSeventhDropdownOpen(!isSeventhDropdownOpen)}>
            Settings {isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
          </SecondDropdownButton>
          {isSeventhDropdownOpen && (
            <SecondDropdownList>
              <SecondDropdownItem>Rango salarial | <strong>€</strong> $</SecondDropdownItem>
              <SecondDropdownItem>Minimo</SecondDropdownItem>
              <SecondDropdownItem>Máximo</SecondDropdownItem>
            </SecondDropdownList>
          )}
        </SecondDropdownContainer>
        
         <SecondDropdownContainer>
          <SecondDropdownButton>
            Sing Out {isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
          </SecondDropdownButton>
        </SecondDropdownContainer>
        
        <SecondDropdownContainer>
          <SecondDropdownButton>
            Help {isSeventhDropdownOpen ? <ChevronUp /> : <ChevronDown />}
          </SecondDropdownButton>
        </SecondDropdownContainer>
        
        <HelpButton> Chat de ayuda</HelpButton>
      </MenuAside>
      <ContainerWrapper>
        <Header>
            <ContainerLogoCompAndUser>
                <Avatar>
                    <img src={companyData?.Company_avatar || "/images/defaultCompanyAvatar.svg"} alt="Company Avatar" />
                </Avatar>
                    <p>@{companyData?.Company_username || "Empresa"}</p>
            </ContainerLogoCompAndUser>
          <SearchBar type="Búsqueda" placeholder="Búsqueda" />
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
      </ContainerWrapper>
      <MainContainer>
        <div className="vertical">
                <InnerContainerOne>
                    <h2>Overview</h2>
                    <OverviewContainer>
                        <p>Matches</p>
                        <p>Reviews</p>
                        <h3>Interviews done</h3>
                    </OverviewContainer>
                </InnerContainerOne>
                <InnerContainerTwo>
                    <div className="duo">
                        <h2>Open Positions</h2>
                        <StyledLink to={"/CompanyOffer"}>
                          <button>Create New Offer</button>
                        </StyledLink>
                    </div>
                    <OverviewContainer>
                      {companyJobs.length === 0 ? (
                        <p>No open positions yet.</p>
                      ) : (
                        companyJobs.map((job) => (
                          <div key={job.id} style={{ marginBottom: '1rem' }}>
                            <h3>{job.title}</h3>
                            <p>€ {job.salary}</p>
                          </div>
                        ))
                      )}
                  </OverviewContainer>
                </InnerContainerTwo>
        </div>
        <div>
            <h2>Hirings in progress</h2>
            <HiringsInnerContainer>
              <h3>User 1</h3>
              <p>Software Developer | Madrid</p>
              <h3>User 2</h3>
              <p>Data Scientist | Barcelona</p>
              <h3>User 3</h3>
              <p>Scrum Master | Valencia</p>
            </HiringsInnerContainer>
        </div>
      </MainContainer>
    </>
  );
}