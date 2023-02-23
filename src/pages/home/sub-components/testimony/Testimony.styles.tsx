import styled from 'styled-components';
import { Section as _Section } from '../../../../components';

export const Section = styled(_Section)`
  background-color: #f7f7f7;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const TestimonialBx = styled.div`
  max-width: calc(50% - 40px);
  padding: 60px 40px;
  margin: 20px;
  background-color: #2196f3;
  @media (max-width: 991px) {
    max-width: calc(100% - 20px);
    padding: 40px 20px;
    margin: 10px;
  }
`;

export const TestimonialP = styled.p`
  color: #fff;
  font-style: italic;
  font-size: 16px;
  font-weight: 300;
`;

export const TestimonialH3 = styled.h3`
  margin-top: 40px;
  text-align: end;
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  line-height: 1em;
  @media (max-width: 991px) {
    margin-top: 20px;
  }
`;

export const TestimonialSpan = styled.span`
  font-size: 14px;
  font-weight: 400;
`;
