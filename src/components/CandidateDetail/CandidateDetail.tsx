import { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Container, SideMenu, MainContent, DescriptionContainer } from "./styles";

export default function CandidateDetail() {
    const { candidateId } = useParams<{ candidateId: string }>();
    const location = useLocation();

    const [candidate, setCandidate] = useState({
        name: "User name",
        title: "",
        profilePicture: "/placeholder-user.png",
        email: "",
        description: "",
    });

    const applicationId = location.state?.candidateData?.applicationId;

    // Para debugging
    useEffect(() => {
        if (location.state && location.state.candidateData) {
            console.log("Datos recibidos en CandidateDetail:", location.state.candidateData);
            console.log("Application ID:", applicationId);
        }
    }, [applicationId, location.state]);

    useEffect(() => {
        const fetchUserDetails = async (userId: string) => {
            try {
                const res = await fetch(`http://localhost:3000/api/auth/get-user?userId=${userId}`);
                const data = await res.json();
                console.log("Detalles completos del usuario:", data);

                setCandidate(prev => ({
                    ...prev,
                    email: data.email || "",
                    title: data.title || "Sin título profesional",
                    description: data.description || "Sin descripción"
                }));
            } catch (error) {
                console.error("Error al obtener detalles del usuario:", error);
            }
        };

        if (location.state && location.state.candidateData) {
            const candidateData = location.state.candidateData;
            const userId = candidateData.id;

            setCandidate(prev => ({
                ...prev,
                name: candidateData.name || candidateData.username || "Usuario sin nombre",
                title: candidateData.title || "Sin título profesional",
                profilePicture: candidateData.profile_picture || "/placeholder-user.png"
            }));

            if (userId) {
                fetchUserDetails(userId);
            }
            return;
        }

        const fetchCandidateDetails = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/auth/candidates/${candidateId}`);
                if (!response.ok) throw new Error(`Error: ${response.status}`);
                const data = await response.json();

                setCandidate({
                    name: data.username || "Usuario sin nombre",
                    title: data.title || "Sin título profesional",
                    profilePicture: data.profile_picture || "/placeholder-user.png",
                    email: data.email || "",
                    description: data.description || "Sin descripción",
                });
            } catch (error) {
                console.error("Error fetching candidate details:", error);
                setCandidate({
                    name: `Candidato #${candidateId}`,
                    title: "Sin título profesional",
                    profilePicture: "/placeholder-user.png",
                    email: "",
                    description: "No se pudo cargar la descripción",
                });
            }
        };

        if (candidateId) {
            fetchCandidateDetails();
        }
    }, [candidateId, location.state]);

    const navigate = useNavigate();

    const handleAcceptCandidate = async () => {
        try {
            const res = await fetch(`http://localhost:3000/api/auth/applications/${applicationId}/match`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
            });
        
            if (!res.ok) throw new Error("Error al aceptar candidato");
        
            // Fetch de datos extra para el match
            const userDetails = await fetch(`http://localhost:3000/api/auth/get-user?userId=${candidateId}`);
            const userData = await userDetails.json();
        
            const companyId = localStorage.getItem("id");
            const companyDetails = await fetch(`http://localhost:3000/api/auth/get-company?id=${companyId}`);
            const companyData = await companyDetails.json();
        
            // Agregar logs más detallados para depuración
            console.log("Datos del usuario completos:", userData);
            console.log("Datos de la empresa completos:", companyData);
            console.log("Propiedades del usuario:", Object.keys(userData));
            console.log("Propiedades de la empresa:", Object.keys(companyData));
            
            // Determinar los valores correctos para pasar
            const userFullname = userData.fullname || userData.username ||"Usuario sin nombre";
            const userImage = userData.profile_picture || candidate.profilePicture || "/placeholder-user.png";
            const companyFullname = companyData.Company_fullname;
            const companyImage = companyData.Company_avatar;
            
            // Log de los valores finales que se pasarán
            console.log("Valores que voy a pasar:", {
                userFullname,
                userImage,
                companyFullname,
                companyImage
            });
        
            // Navegación con los valores corregidos
            navigate("/match-found", {
                state: {
                    userFullname,
                    userImage,
                    companyFullname,
                    companyImage,
                },
            });
        } catch (error) {
            console.error("Error al aceptar candidato:", error);
        }
    };

    return (
        <Container>
            <SideMenu>
                <img 
                    src={candidate.profilePicture} 
                    alt={`Foto de perfil de ${candidate.name}`}
                    onError={(e) => {
                        e.currentTarget.src = "/placeholder-user.png";
                    }}
                />
                <h2>{candidate.name}</h2>
                <h3>{candidate.title}</h3>
                {candidate.email && <p>Email: {candidate.email}</p>}
            </SideMenu>
            <MainContent>
                <DescriptionContainer>
                    <h1>Acerca de {candidate.name}</h1>
                    <p>{candidate.description}</p>
                    <button onClick={handleAcceptCandidate}>Aceptar Candidato</button>
                </DescriptionContainer>
            </MainContent>
        </Container>
    );
}