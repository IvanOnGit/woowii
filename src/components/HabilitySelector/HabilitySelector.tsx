import { useState } from "react";
import { MainContainer, Section, Button } from "./Styles";

const categories = {
  hardset: ["Análisis de Datos", "Ciberseguridad", "Desarrollo web", "Soporte técnico", "Testing en Software", "Infraestructura", "Diseño UX | UI", "Soporte técnico", "Gestión de Proyecto"],
  softset: ["Comunicación efectiva", "Trabajo en equipo", "Gestión del tiempo", "Creatividad", "Resolución de problemas", "Empatía", "Liderazgo", "Adaptabilidad", "Responsabilidad"],
  toolset: ["Python", "C++", "SQL", "JavaScript", "Ruby", "PHP", ".NET", "HTML/CSS", "Trello"],
};

export default function HabilitySelector() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSelection = (item: string) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <MainContainer>
      {Object.entries(categories).map(([key, items]) => (
        <Section key={key}>
          <h3>Sobre tus {key.toUpperCase()}:</h3>
          <div>
            {items.map((item) => (
              <Button
                key={item}
                onClick={() => toggleSelection(item)}
                isSelected={selected.includes(item)}
              >
                {item}
              </Button>
            ))}
          </div>
        </Section>
      ))}
    </MainContainer>
  );
}