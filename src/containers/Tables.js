import React from 'react';
import { connect } from 'react-redux';
import StyledTable from '../components/StyledTable';

import styled from 'styled-components';
import { FadeInUp } from '../components/Animates';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #0003;
  max-width: 50rem;
  padding: 1rem 2rem 2rem 2rem;
  margin: 0 0.2rem;
  margin: 0 auto;
  animation-fill-mode: both;
  animation: ${FadeInUp} 1s;
`;
const Tables = ({ currWeek, nextWeek, lang, dones, todos }) => {
  // const { logos: Logos } = state;
  return (
    <Wrapper>
      {currWeek && (
        <StyledTable>
          <caption>{lang.thisWeekIntro}</caption>
          <thead>
            <tr>
              <th>{lang.title}</th>
              <th>{lang.progress}</th>
              <th>{lang.remark}</th>
            </tr>
          </thead>
          <tbody>
            {dones.map(({ title, progress, remark }) => {
              return (
                <tr key={title}>
                  <td>{title}</td>
                  <td>{progress}%</td>
                  <td dangerouslySetInnerHTML={{ __html: remark }} />
                </tr>
              );
            })}
          </tbody>
        </StyledTable>
      )}
      {nextWeek && (
        <StyledTable>
          <caption>{lang.nextWeekIntro}</caption>
          <thead>
            <tr>
              <th>{lang.title}</th>
              <th>{lang.progress}</th>
              <th>{lang.remark}</th>
            </tr>
          </thead>
          <tbody>
            {todos.map(({ title, progress, remark }) => {
              return (
                <tr key={title}>
                  <td>{title}</td>
                  <td>{progress}%</td>
                  <td dangerouslySetInnerHTML={{ __html: remark }} />
                </tr>
              );
            })}
          </tbody>
        </StyledTable>
      )}
    </Wrapper>
  );
};
const mapStateToPorps = ({ currWeek, nextWeek, lang, data: { dones, todos } }) => {
  return { currWeek, nextWeek, lang, dones, todos };
};
export default connect(mapStateToPorps)(Tables);
