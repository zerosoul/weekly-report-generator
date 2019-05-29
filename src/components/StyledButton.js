import styled from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;
  border-radius: 0.2rem;
  position: relative;
  top: 0;
  margin: 0;
  padding: 0.3rem 0.8rem;
  text-align: center;
  border: none;
  user-select: none;
  transition: all 0.3s ease;
  height: 3rem;
  font-size: 1.4rem;
  background: #c63c26;
  box-shadow: 0 0.2rem #aa2116;
  color: white;
  text-transform: uppercase;
  &.left {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  &.right {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  &.selected {
    background: #aa2116;
    box-shadow: 0 2px #aa2116;
  }
  &:active {
    top: 2px;
    box-shadow: 0 0 #d3545d;
  }
`;
export default StyledButton;
