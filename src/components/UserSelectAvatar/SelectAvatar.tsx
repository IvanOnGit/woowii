import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  ButtonNextTerceraPage,
  SliderNavButton,
  ThumbnailsSlider,
  ContainerWrapperMobile,
  DivContainerLogoTerPageMobile,
  LogoTerceraPageStyledMobile,
  AvatarWrapperMobile,
  AvatarImageMobile,
  ButtonMobile,
  ThumbnailsContainerMobile,
  ThumbnailMobile,
  UsernameInputMobile,
  ButtonNextTerceraPageMobile
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
  const [sliderPosition, setSliderPosition] = useState(0)
  const [visibleThumbnails, setVisibleThumbnails] = useState(5)
  const sliderRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");

   // Update visible thumbnails based on screen size
   useEffect(() => {
    const updateVisibleThumbnails = () => {
      if (window.innerWidth < 480) {
        setVisibleThumbnails(3)
      } else if (window.innerWidth < 768) {
        setVisibleThumbnails(5)
      } else {
        setVisibleThumbnails(7)
      }
    }

    updateVisibleThumbnails()
    window.addEventListener("resize", updateVisibleThumbnails)

    return () => {
      window.removeEventListener("resize", updateVisibleThumbnails)
    }
  }, [])

  // Ensure selected avatar is visible in slider
  useEffect(() => {
    if (selectedIndex < sliderPosition) {
      setSliderPosition(selectedIndex)
    } else if (selectedIndex >= sliderPosition + visibleThumbnails) {
      setSliderPosition(selectedIndex - visibleThumbnails + 1)
    }
  }, [selectedIndex, visibleThumbnails, sliderPosition])

  const handlePrevSlide = () => {
    setSliderPosition(Math.max(0, sliderPosition - 1))
  }

  const handleNextSlide = () => {
    setSliderPosition(Math.min(avatars.length - visibleThumbnails, sliderPosition + 1))
  }

  const saveAvatarAndUsername = async () => {
    if (!userId) {
      setError("Error: Usuario no identificado.");
      return;
    }
    if (!username || username.length < 4 || username.length > 20) {
      setError("El usuario debe tener entre 8 y 20 caracteres.");
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
        body: JSON.stringify({ userId, username, profile_picture: avatars[selectedIndex].src }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || "Error al guardar el avatar y usuario.");
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

  return (
    <>
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
          placeholder="Ejemplo: ProUser23"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p><Key />Entre 8 y 20 caracteres.</p>
        <p><Key />Debe contener letras y números.</p>
      </UsernameInput>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ButtonNextTerceraPage onClick={saveAvatarAndUsername} disabled={saving}>
        {saving ? "Guardando..." : "Continuar"}
      </ButtonNextTerceraPage>
    </ContainerWrapper>
    {/* ---------------------------------mobile---------------------------------------- */}
    <ContainerWrapperMobile>
      <DivContainerLogoTerPageMobile>
        <LogoTerceraPageStyledMobile src="/images/GreenLogoDemo.svg" />
      </DivContainerLogoTerPageMobile>
      <h2>Elige tu Avatar:</h2>
      <AvatarWrapperMobile>
        <ButtonMobile onClick={() => setSelectedIndex((prev) => (prev - 1 + avatars.length) % avatars.length)}>
          <ChevronLeft />
        </ButtonMobile>
        <AvatarImageMobile src={avatars[selectedIndex].src || "/placeholder.svg"} alt="Selected Avatar" />
        <ButtonMobile onClick={() => setSelectedIndex((prev) => (prev + 1) % avatars.length)}>
          <ChevronRight />
        </ButtonMobile>
      </AvatarWrapperMobile>
      <ThumbnailsContainerMobile>
        <SliderNavButton direction="left" onClick={handlePrevSlide} disabled={sliderPosition === 0}>
          <ChevronLeft />
        </SliderNavButton>
        <ThumbnailsSlider ref={sliderRef}>
          <div
            style={{
              display: "flex",
              transform: `translateX(-${sliderPosition * 56}px)`,
              transition: "transform 0.3s ease",
            }}
          >
            {avatars.map((avatar, index) => (
              <ThumbnailMobile
                key={avatar.id}
                src={avatar.src}
                alt={`Avatar ${index + 1}`}
                isSelected={index === selectedIndex}
                onClick={() => setSelectedIndex(index)}
              />
            ))}
          </div>
        </ThumbnailsSlider>
        <SliderNavButton
          direction="right"
          onClick={handleNextSlide}
          disabled={sliderPosition >= avatars.length - visibleThumbnails}
        >
          <ChevronRight />
        </SliderNavButton>
      </ThumbnailsContainerMobile>
      <UsernameInputMobile>
        <h3>Elige tu usuario:</h3>
        <input
          type="text"
          placeholder="Ejemplo: ProUser23"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <p>
          <Key />
          Entre 8 y 20 caracteres.
        </p>
        <p>
          <Key />
          Debe contener letras y números.
        </p>
        <p>
          <Key />
          Recuerda mantener el anonimato.{" "}
        </p>
        <p>
          <Key />
          Sugerimos elegir un alias profesional.
        </p>
      </UsernameInputMobile>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ButtonNextTerceraPageMobile onClick={saveAvatarAndUsername} disabled={saving}>
        {saving ? "Grabando..." : "GUARDAR"}
      </ButtonNextTerceraPageMobile>
      <Link to={"/UserHome"}>
        <ButtonNextTerceraPageMobile>
          SIGUIENTE
        </ButtonNextTerceraPageMobile>
      </Link>
    </ContainerWrapperMobile>
    </>
  );
}