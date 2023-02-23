import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #272727;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Text404 = styled.p`
  font-size: 3rem;
  color: #fff;
  letter-spacing: 0.5rem;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 2rem;
  }
`;

export const Text = styled.span`
  font-size: 2rem;
  color: #fff;
  text-align: center;
  margin-top: 15px;
  @media (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  border-radius: 50px;
  padding: 15px 30px;
  outline: none;
  border: none;
  background-color: #2196f3;
  margin-top: 30px;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  @media (max-width: 600px) {
    padding: 10px 15px;
    font-size: 0.8rem;
  }
`;
