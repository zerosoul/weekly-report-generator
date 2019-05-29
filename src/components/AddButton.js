import styled from 'styled-components';

const AddButton = styled.button`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  cursor: pointer;
  border-radius: 50%;
  margin: 0;
  padding: 0.3rem 0.8rem;
  text-align: center;
  border: none;
  user-select: none;
  transition: all 0.3s ease;
  width: 2.6rem;
  height: 2.6rem;
  font-size: 1.6rem;
  background: #b54334;
  box-shadow: 0 0.2rem #7a1723;
  color: white;
  &:active {
    bottom: 0.8rem;
    box-shadow: 0 0 #6950a1;
  }
`;
export default AddButton;
