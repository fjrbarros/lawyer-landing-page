import styled from 'styled-components';
import {
  Section as SectionComponent,
  SectionTitle as _SectionTitle,
} from '../../../../components';

export const Section = styled(SectionComponent)`
  background-color: #111;
`;

export const SectionTitle = styled(_SectionTitle)`
  color: #fff;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 20px;
  @media (max-width: 991px) {
    gap: 10px;
  }
`;

export const ImageBox = styled.div`
  position: absolute;
  left: 50%;
  top: -20%;
  transform: translateX(-50%);
  width: 150px;
  height: 150px;
  background-color: #fff;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.35);
  transition: 0.5s;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
`;

export const Details = styled.div`
  padding: 40px;
  text-align: center;
  width: 100%;
  transition: 0.5s;
  transform: translateY(110px);
`;

export const CardTitle = styled.h2`
  font-size: 1.25em;
  font-weight: 600;
  color: #555;
  line-height: 1.2em;
  margin-bottom: 20px;
  & > span {
    font-size: 0.75em;
    font-weight: 500;
    opacity: 0.5;
  }
`;

export const CardData = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 40px;

  & > a {
    font-size: 1.4rem;
    color: #777777;
    transition: 0.3s;
    &:hover {
      color: #2196f3;
    }
  }
`;

export const Card = styled.div`
  position: relative;
  width: 300px;
  height: 250px;
  margin-top: 80px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 35px 80px rgba(0, 0, 0, 0.15);
  transition: 0.3s;
  &:hover {
    transform: scale(1.1, 1.2);
    ${ImageBox} {
      width: 180px;
      height: 180px;
    }
    ${Details} {
      transform: translateY(75px);
    }
  }
`;
