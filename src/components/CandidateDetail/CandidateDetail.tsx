import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Container, SideMenu, MainContent, DescriptionContainer } from "./styles";

export default function CandidateDetail() {
    const { candidateId } = useParams<{ candidateId: string }>();
    const location = useLocation();
    const [candidate, setCandidate] = useState({
        name: "User name",
        title: "Desarrollador",
        profilePicture: "/placeholder-user.png"
    });
    
    // Para debugging - eliminar en producción
    useEffect(() => {
        if (location.state && location.state.candidateData) {
            console.log("Datos recibidos en CandidateDetail:", location.state.candidateData);
        }
    }, [location.state]);
    
    useEffect(() => {
        // Usar los datos pasados por state
        if (location.state && location.state.candidateData) {
            const candidateData = location.state.candidateData;
            console.log("Profile picture:", candidateData.profile_picture);
            
            setCandidate({
                name: candidateData.name || candidateData.username || 'Usuario sin nombre',
                title: 'Desarrollador',
                profilePicture: candidateData.profile_picture || "/placeholder-user.png"
            });
            return;
        }
        
        // Si no hay state, intentar obtener los datos del API
        const fetchCandidateDetails = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/auth/candidates/${candidateId}`);
                
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                
                const data = await response.json();
                setCandidate({
                    name: data.username || 'Usuario sin nombre',
                    title: data.title || 'Desarrollador',
                    profilePicture: data.profile_picture || "/placeholder-user.png"
                });
            } catch (error) {
                console.error("Error fetching candidate details:", error);
                setCandidate({
                    name: `Candidato #${candidateId}`,
                    title: 'Desarrollador',
                    profilePicture: "/placeholder-user.png"
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
                    onError={(e) => {;
                        e.currentTarget.src = "/placeholder-user.png";
                    }}
                />
                <h2>{candidate.name}</h2>
                <h3>{candidate.title}</h3>
            </SideMenu>
            <MainContent>
                <DescriptionContainer>
                    <h1>Acerca de {candidate.name}</h1>
                    <p>This is the proper user description that is going to work as a placeholder</p>
                </DescriptionContainer>
            </MainContent>
        </Container>
    );
}