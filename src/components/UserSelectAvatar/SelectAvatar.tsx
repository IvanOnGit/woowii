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
  const [username, setUsername] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");

  const validateUsername = (username: string) => {
    const usernameRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{4,20}$/;
    return usernameRegex.test(username);
  };

  const saveAvatarAndUsername = async () => {
    if (!userId) {
      setError("Error: Usuario no identificado.");
      return;
    }

    if (!validateUsername(username)) {
      setError("El nombre de usuario debe tener entre 8 y 20 caracteres, incluyendo mayúsculas, minúsculas y números.");
      return;
    }

    setSaving(true);
    setError("");

    try {
      const selectedAvatar = avatars[selectedIndex].src;
      const response = await fetch(`http://localhost:3000/api/auth/update-avatar`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, profile_picture: selectedAvatar, username }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error al guardar el avatar y usuario.");
      }

      // Guardar en localStorage para UserHome
      localStorage.setItem("profile_picture", selectedAvatar);
      localStorage.setItem("username", username);

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

  return (
    <ContainerWrapper>
      <DivContainerLogoTerPage>
        <LogoTerceraPageStyled src="/images/GreenLogoDemo.svg" />
      </DivContainerLogoTerPage>

      <h2>Elige tu Avatar:</h2>

      <AvatarWrapper>
        <Button onClick={() => setSelectedIndex((prev) => (prev - 1 + avatars.length) % avatars.length)}>
          <ChevronLeft />
        </Button>
        <AvatarImage src={avatars[selectedIndex].src} alt="Selected Avatar" />
        <Button onClick={() => setSelectedIndex((prev) => (prev + 1) % avatars.length)}>
          <ChevronRight />
        </Button>
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
        <input
          type="text"
          placeholder="Prueba tu @"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p><Key />Entre 8 y 20 caracteres.</p>
        <p><Key />Debe contener letras minúsculas, mayúsculas y números.</p>
        <p><Key />Recuerda mantener el anonimato.</p>
        <p><Key />Sugerimos elegir un alias profesional.</p>
      </UsernameInput>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ButtonNextTerceraPage onClick={saveAvatarAndUsername} disabled={saving}>
        {saving ? "Guardando..." : "Continuar"}
      </ButtonNextTerceraPage>
    </ContainerWrapper>
  );
}