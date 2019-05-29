import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1.2rem 0;
  h2 {
    font-size: 0.6rem;
  }
`;
const Footer = () => {
  return (
    <Wrapper>
      <h2>
        Created By{' '}
        <a target="_blank" rel="noopener noreferrer" href="https://yangerxiao.com">
          Tristan
        </a>{' '}
        with ❤️
      </h2>
    </Wrapper>
  );
};

export default Footer;
