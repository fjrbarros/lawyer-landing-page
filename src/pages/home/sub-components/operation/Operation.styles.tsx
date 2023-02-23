import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const WorkBx = styled.div`
  width: 50%;
  padding: 20px;
  @media (max-width: 600px) {
    width: 100%;
    padding: 10px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
