import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export const ContentBox = styled.div`
  min-width: 50%;
  padding-right: 30px;
  @media (max-width: 991px) {
    margin-bottom: 20px;
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  @media (max-width: 991px) {
    font-size: 20px;
  }
`;

export const Paragraph = styled.p``;

export const W50 = styled.div`
  min-width: 50%;
`;

export const Image = styled.img`
  max-width: 100%;
`;
