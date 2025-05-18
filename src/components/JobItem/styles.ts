import styled from "styled-components"

export const JobItemContainer = styled.div`
  width: 16.563rem;
  height: 15rem; /* Increased significantly from 10rem */
  padding: 1rem;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  margin: 0 auto 1rem auto; /* Added bottom margin */
  position: relative;
  overflow: hidden; /* Ensure content doesn't overflow */
`

export const JobTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
  color: #333;
`

export const JobLocation = styled.p`
  margin: 0.5rem 0;
  font-size: 0.85rem;
  color: #555;
`

export const JobMode = styled.p`
  margin: 0.5rem 0;
  font-size: 0.85rem;
  color: #555;
  font-style: italic;
`

export const JobDescription = styled.p`
  margin: 0.75rem 0;
  font-size: 0.8rem;
  color: #666;
  line-height: 1.5;
  flex: 1; /* Take available space */
`

export const JobTimeContainer = styled.div`
  margin-top: 1rem;
  padding-top: 0.75rem;
  border-top: 2px solid #eee;
  width: 100%;
  position: absolute;
  bottom: 1rem;
  left: 0;
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #ffffff;
`

export const JobTime = styled.p`
  font-size: 0.8rem;
  color: #888;
  text-align: center;
  font-weight: 500;
`