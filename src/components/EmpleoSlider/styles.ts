import styled from "styled-components"

export const SliderContainer = styled.div`
  width: 250px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: white;
  padding: 10px;
  margin: 1rem 0 0 3.5rem;
`

export const SliderContent = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  scrollbar-width: none; /* Para Firefox */
  -ms-overflow-style: none; /* Para Internet Explorer y Edge */
  &::-webkit-scrollbar {
    display: none; /* Para Chrome, Safari y Opera */
  }
`

export const ScrollbarContainer = styled.div`
  width: 100%;
  height: 8px;
  background-color: #f0f0f0;
  border-radius: 4px;
  position: relative;
`

export const Scrollbar = styled.div<{ width: number; position: number }>`
  height: 100%;
  width: ${(props) => props.width}%;
  background-color: #c0c0c0;
  border-radius: 4px;
  position: absolute;
  left: ${(props) => props.position}%;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: #a0a0a0;
  }
`