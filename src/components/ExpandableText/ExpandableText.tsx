import { useState } from "react";
import { ButtonExpanded, ContainerExpanded, TextExpanded } from "./styles";

const ExpandableText = () => {
    const [expanded, setExpanded] = useState(false);
    return (
      <ContainerExpanded>
        <h2>WHAT I CAN BRING TO THE TABLE</h2>
        <TextExpanded expanded={expanded}>
        As a skilled Brand Manager, I can help your brand excel through a 
        blend of creativity and strategy. My record demostrates my 
        expertise in making brands stand out and succeed. Let’s work 
        together to elevate your brand’s story and leave a lasting impression.
          {expanded && " Curabitur ut magna nec ligula varius sodales. Cras aliquet " +
          "vestibulum neque, sed gravida lacus gravida eu. Pellentesque habitant morbi " +
          "tristique senectus et netus et malesuada fames ac turpis egestas."+ 
          " Curabitur ut magna nec ligula varius sodales. Cras aliquet " +
          "vestibulum neque, sed gravida lacus gravida eu. Pellentesque habitant morbi " +
          "tristique senectus et netus et malesuada fames ac turpis egestas."}
        </TextExpanded>
        <ButtonExpanded onClick={() => setExpanded(!expanded)}>
          {expanded ? "Contraer" : "Expandir"}
        </ButtonExpanded>
      </ContainerExpanded>
    );
  };
  
  export default ExpandableText;
  