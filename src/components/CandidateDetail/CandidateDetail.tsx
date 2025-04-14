import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
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

    // Para debugging - eliminar en producción
    useEffect(() => {
        if (location.state && location.state.candidateData) {
            console.log("Datos recibidos en CandidateDetail:", location.state.candidateData);
        }
    }, [location.state]);

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
                </DescriptionContainer>
            </MainContent>
        </Container>
    );
}