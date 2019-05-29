import React from 'react';
import Particles from 'react-particles-js';
import styled, { createGlobalStyle } from 'styled-components';

const BodyRelative = createGlobalStyle`
body{
  position:relative;
}
`;

const Wrapper = styled.div`
  .background {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: -1;
  }
`;

const Background = () => {
  return (
    <>
      <BodyRelative />
      <Wrapper>
        <Particles
          className="background"
          params={{
            particles: {
              number: {
                value: 160,
                density: {
                  enable: false
                }
              },
              size: {
                value: 3,
                random: true,
                anim: {
                  speed: 4,
                  size_min: 0.3
                }
              },
              line_linked: {
                enable: false
              },
              move: {
                random: true,
                speed: 1,
                direction: 'top',
                out_mode: 'out'
              }
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: 'bubble'
                },
                onclick: {
                  enable: true,
                  mode: 'repulse'
                }
              },
              modes: {
                bubble: {
                  distance: 250,
                  duration: 2,
                  size: 0,
                  opacity: 0
                },
                repulse: {
                  distance: 400,
                  duration: 4
                }
              }
            }
          }}
        />
      </Wrapper>
    </>
  );
};
export default Background;
