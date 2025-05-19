import styled from "styled-components"

export const ItemContainer = styled.div`
  width: 125px;
  height: 98px;
  flex-shrink: 0;
  border-radius: 6px;
  background: #C6DD9C;
  padding: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  font-family: Arial, sans-serif;
`

export const Oferta = styled.h3`
  margin: 0;
  font-size: 12px;
  font-weight: bold;
  color: #333;
  text-align: center;
`

export const Ubicacion = styled.p`
  margin: 2px 0;
  font-size: 10px;
  color: #666;
  text-align: center;
`

export const Modo = styled.p`
  margin: 2px 0;
  font-size: 10px;
  color: #666;
  text-align: center;
  font-style: italic;
`

export const Descripcion = styled.p`
  margin: 2px 0;
  font-size: 8px;
  color: #777;
  text-align: center;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

export const Tiempo = styled.p`
  margin: 2px 0;
  font-size: 9px;
  color: #999;
  text-align: center;
  font-weight: bold;
`