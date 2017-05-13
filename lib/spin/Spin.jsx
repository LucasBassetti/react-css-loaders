import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spin = styled.div`
  animation: ${props => `${loading} ${props.duration}s infinite linear;`};
  background: ${props => props.color};
  background: ${props => `linear-gradient(to right, ${props.color} 10%, rgba(255, 255, 255, 0) 42%);`};
  border-radius: 50%;
  font-size: ${props => `${props.size}px`};
  height: 11em;
  margin: 50px auto;
  position: relative;
  text-indent: -9999em;
  transform: translateZ(0);
  width: 11em;

  &:before {
    background: ${props => props.color};
    border-radius: 100% 0 0 0;
    content: '';
    height: 50%;
    left: 0;
    position: absolute;
    top: 0;
    width: 50%;
  }

  &:after {
    background: ${props => props.background};
    border-radius: 50%;
    bottom: 0;
    content: '';
    height: 75%;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: 0;
    width: 75%;
  }
`;

export default Spin;
