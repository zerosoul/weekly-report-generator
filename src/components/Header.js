import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

const Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.4rem 0;
  h1 {
    font-size: 1.4rem;
    font-weight: 800;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 0.8rem;
  }
`;
const Header = ({ lang }) => {
  return (
    <Wrapper>
      <h1>📈 {lang.header} 📈</h1>
      <h2>{lang.intro}</h2>
    </Wrapper>
  );
};

const mapStateToProps = ({ lang }) => {
  return { lang };
};
export default connect(mapStateToProps)(Header);
