import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

function getColor(props) {
  const d = document.createElement('div');
  d.style.color = props.color;
  document.body.appendChild(d);
  const rgbcolor = window.getComputedStyle(d).color;
  const match = /rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*\d+[.d+]*)*\)/g.exec(rgbcolor);
  const color = `${match[1]}, ${match[2]}, ${match[3]}`;
  return color;
}

const RotateSpin = styled.div`
  animation: ${props => `${loading} ${props.duration}s infinite linear`};
  border: ${props => `1.1em solid rgba(${getColor(props)}, 0.2)`};
  border-left: ${props => `1.1em solid ${props.color}`};
  border-radius: 50%;
  font-size: ${props => `${props.size}px`};
  height: 10em;
  margin: 60px auto;
  position: relative;
  text-indent: -9999em;
  transform: translateZ(0);
  width: 10em;

  &:after {
    border-radius: 50%;
    height: 10em;
    width: 10em;
  }
`;

export default RotateSpin;
