import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ContainerWrapper,
  DivContainerLogoTerPage,
  LogoTerceraPageStyled,
  AvatarWrapper,
  AvatarImage,
  Button,
  ThumbnailsContainer,
  Thumbnail,
  UsernameInput,
  ButtonNextTerceraPage
} from "./styles";
import { ChevronLeft, ChevronRight, Key } from "lucide-react";

const avatars = [
  { id: 1, src: "/images/Avatar1.png" },
  { id: 2, src: "/images/Avatar2.png" },
  { id: 3, src: "/images/Avatar3.png" },
  { id: 4, src: "/images/Avatar4.png" },
  { id: 5, src: "/images/Avatar5.png" },
  { id: 6, src: "/images/Avatar6.png" },
  { id: 7, src: "/images/Avatar7.png" },
  { id: 8, src: "/images/Avatar8.png" },
  { id: 9, src: "/images/Avatar9.png" },
  { id: 10, src: "/images/Avatar10.png" },
  { id: 11, src: "/images/Avatar11.png" },
  { id: 12, src: "/images/Avatar12.png" },
  { id: 13, src: "/images/Avatar13.png" },
  { id: 14, src: "/images/Avatar14.png" },
];

export default function SelectAvatar() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const userId = localStorage.getItem("userId"); // Asegúrate de almacenar userId al iniciar sesión

  const saveAvatar = async (avatarUrl: string) => {
    if (!userId) {
      setError("Error: Usuario no identificado.");
      return;
    }

    setSaving(true);
    setError("");

    try {
      const response = await fetch(`http://localhost:3000/api/auth/update-avatar`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, profile_picture: avatarUrl }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error al guardar el avatar.");
      }

      setSaving(false);
      navigate("/UserHome");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Error desconocido");
      }
      setSaving(false);
    }
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % avatars.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + avatars.length) % avatars.length);
  };

  const handleSaveAvatar = () => {
    const selectedAvatar = avatars[selectedIndex].src;
    saveAvatar(selectedAvatar);
  };

  return (
    <ContainerWrapper>
      <DivContainerLogoTerPage>
        <LogoTerceraPageStyled src="/images/GreenLogoDemo.svg" />
      </DivContainerLogoTerPage>

      <h2>Elige tu Avatar:</h2>

      <AvatarWrapper>
        <Button onClick={handlePrev}><ChevronLeft /></Button>
        <AvatarImage src={avatars[selectedIndex].src} alt="Selected Avatar" />
        <Button onClick={handleNext}><ChevronRight /></Button>
      </AvatarWrapper>

      <ThumbnailsContainer>
        {avatars.map((avatar, index) => (
          <Thumbnail
            key={avatar.id}
            src={avatar.src}
            alt={`Avatar ${index + 1}`}
            isSelected={index === selectedIndex}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </ThumbnailsContainer>

      <UsernameInput>
        <h3>Elige tu usuario:</h3>
        <input type="text" placeholder="Prueba tu @" />
        <p><Key />Entre 8 y 20 caracteres.</p>
        <p><Key />Debe contener letras minúsculas, mayúsculas y números.</p>
        <p><Key />Recuerda mantener el anonimato.</p>
        <p><Key />Sugerimos elegir un alias profesional.</p>
      </UsernameInput>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ButtonNextTerceraPage onClick={handleSaveAvatar} disabled={saving}>
        {saving ? "Guardando..." : "Continuar"}
      </ButtonNextTerceraPage>
    </ContainerWrapper>
  );
}