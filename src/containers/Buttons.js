import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import StyledButton from '../components/StyledButton';
import { bindActionCreators } from 'redux';
import { setWeek } from '../redux/actions';

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 1rem;
`;
const Buttons = ({ currWeek, nextWeek, setWeek, lang }) => {
  // const { logos: Logos } = state;
  const handleClick = week => {
    if (week === 'curr') {
      setWeek({ currWeek: true, nextWeek: false });
    } else {
      setWeek({ currWeek: false, nextWeek: true });
    }
  };
  return (
    <Wrapper>
      <StyledButton
        onClick={handleClick.bind(this, 'curr')}
        className={`left ${currWeek && `selected`}`}
      >
        {lang.thisWeek}
      </StyledButton>
      <StyledButton
        onClick={handleClick.bind(this, 'next')}
        className={`right ${nextWeek && `selected`}`}
      >
        {lang.nextWeek}
      </StyledButton>
    </Wrapper>
  );
};
const mapStateToPorps = ({ currWeek, nextWeek, lang }) => {
  return { currWeek, nextWeek, lang };
};
const mapDispatchToProps = dispatch => ({
  setWeek: bindActionCreators(setWeek, dispatch)
});
export default connect(
  mapStateToPorps,
  mapDispatchToProps
)(Buttons);
