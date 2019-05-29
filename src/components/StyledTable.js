import styled from 'styled-components';
import { FadeIn } from './Animates';
const StyledTable = styled.table`
  margin: 0;
  border-collapse: collapse;
  font-weight: 200;
  background: #333;
  color: #fff;
  text-rendering: optimizeLegibility;
  border-radius: 0.4rem;
  animation: ${FadeIn} 1s;
  caption {
    font-size: 1.2rem;
    margin: 1rem;
  }
  thead {
    th {
      font-weight: 600;
      padding: 0.8rem;
      font-size: 1rem;
    }
  }
  tbody {
    background: #eee;
    tr {
      td {
        padding: 0.8rem;
        color: #000;
        ul li {
          color: #000;
        }
      }
      &:not(:last-child) {
        border-top: 1px solid #ddd;
        border-bottom: 1px solid #ddd;
      }
    }
  }
`;
export default StyledTable;
