import type React from "react"
import type { Empleo } from "../../types/empleo"
import { Descripcion, ItemContainer, Modo, Oferta, Tiempo, Ubicacion } from "./styles"

export interface EmpleoItemProps {
  empleo: Empleo
}

export const EmpleoItem: React.FC<EmpleoItemProps> = ({ empleo }) => {
  return (
    <ItemContainer>
      <Oferta>{empleo.oferta}</Oferta>
      <Ubicacion>
        {empleo.lugar}/{empleo.pais}
      </Ubicacion>
      <Modo>{empleo.modo}</Modo>
      <Descripcion>{empleo.descripcion}</Descripcion>
      <Tiempo>{empleo.tiempò}</Tiempo>
    </ItemContainer>
  )
}
