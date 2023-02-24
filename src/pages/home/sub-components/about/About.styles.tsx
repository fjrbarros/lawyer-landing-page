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
    padding-right: 0;
  }
`;

export const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  @media (max-width: 991px) {
    font-size: 20px;
  }
`;

export const Paragraph = styled.p`
  text-align: justify;
`;

export const W50 = styled.div`
  min-width: 50%;
`;

export const Image = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`;
