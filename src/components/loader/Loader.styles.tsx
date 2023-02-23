import styled, { keyframes } from 'styled-components';

const floating = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-25px);
  }
`;

const animloader = keyframes`
  0% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1.2);
  }
`;

export const Loader = styled.span`
  position: relative;
  display: inline-block;
  &::before {
    content: 'Carregando...';
    color: #424242;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 2rem;
    letter-spacing: 2px;
    display: inline-block;
    box-sizing: border-box;
    animation: ${floating} 1s ease-out infinite alternate;
  }
  &::after {
    content: '';
    width: 100%;
    height: 10px;
    background: rgba(0, 0, 0, 0.15);
    position: absolute;
    left: 0;
    top: 100%;
    filter: blur(4px);
    border-radius: 50%;
    box-sizing: border-box;
    animation: ${animloader} 1s ease-out infinite alternate;
  }
`;

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
