import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
		box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5);
	}
	80% {
		box-shadow: 0 0 0 14px rgba(37, 211, 102, 0);
	}
`;

export const WhatsappContainer = styled.a`
  background: #25d366;
  color: white;
  position: fixed;
  bottom: 20px;
  right: 20px;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0;
  height: 0;
  padding: 35px;
  text-decoration: none;
  border-radius: 50%;
  animation-name: ${pulse};
  animation-duration: 1.5s;
  animation-timing-function: ease-out;
  animation-iteration-count: infinite;
  @media (max-width: 600px) {
    padding: 28px;
    bottom: 15px;
    right: 15px;
  }
`;
