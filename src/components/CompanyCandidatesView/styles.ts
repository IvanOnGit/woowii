import styled from "styled-components";

export const MenuAside = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 19rem;
  height: 100vh;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  padding: 1rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const FirstMenuAsideItem = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 1rem;

  img {
    width: 10rem;
  }
`;

export const Separator = styled.div`
  width: 100%;
  height: 1px;
  background-color: grey;
  margin: 1rem 0;
`;

export const SecondDropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SecondDropdownButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  color: white;
  font-size: 1rem;
  padding: 0.5rem;
  cursor: pointer;
  width: 100%;
  text-align: left;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const SecondDropdownList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
`;

export const SecondDropdownItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem 1rem;

  input {
    accent-color: white;
  }

  label {
    font-size: 0.9rem;
  }
`;

export const MainContent = styled.div`
  margin-left: 21rem;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  font-family: 'Roboto', sans-serif;
  height: 100vh;
  overflow-y: auto;
  background-color: black;

&::-webkit-scrollbar {
  width: 6px;
}

&::-webkit-scrollbar-track {
  background: #f1f1f1;
}

&::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 3px;
}

&::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`;

export const CandidateCard = styled.div`
  background-color: #3b1beb; 
  color: white;
  border-radius: 20px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
  height: 15rem;
`;
export const CandidateHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CandidateName = styled.h2`
  font-size: 1.4rem;
  font-weight: bold;
`;

export const MoreOptions = styled.div`
  cursor: pointer;
`;

export const SkillsContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 10px;
`;

export const SkillTag = styled.div`
  background-color: #d9d9d9;
  color: black;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 0.9rem;
`;

export const CandidateInfo = styled.div`
  margin-top: 10px;

  p {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 5px 0;
  }
`;

export const DropdownMenu = styled.div`
  background-color: black;
  color: white;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const DropdownItem = styled.div`
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const NoCandidates = styled.p`
  color: white;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  font-family: 'Roboto', sans-serif;
`;

export const ModalContainer = styled.div`
  background-color: white;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
`;

export const ModalHeader = styled.div`
  padding: 16px;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h3 {
    margin: 0;
    color: #333;
  }
`;

export const ModalContent = styled.div`
  overflow-y: hidden;
  overflow-x: hidden;
`;

export const ModalFooter = styled.div`
  padding: 16px;
  border-top: 1px solid #e0e0e0;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const InputGroup = styled.div`
  margin-bottom: 16px;
  margin: 1rem;
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
    color: #333;
  }

  p {
    margin: 0;
    color: #666;
  }
`;

export const StyledInput = styled.input`
  width: 96%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

export const StyledTextarea = styled.textarea`
  width: 96%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  resize: none;
  
  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

export const ModalButton = styled.button<{ primary?: boolean; secondary?: boolean }>`
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  border: none;
  transition: background-color 0.3s;
  
  ${({ primary }) => primary && `
    background-color: #007bff;
    color: white;
    
    &:hover {
      background-color: #0069d9;
    }
  `}
  
  ${({ secondary }) => secondary && `
    background-color: #6c757d;
    color: white;
    
    &:hover {
      background-color: #5a6268;
    }
  `}
`;