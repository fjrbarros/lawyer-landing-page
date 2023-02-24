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
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const FormBox = styled.div`
  min-width: 60%;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const H3 = styled.h3`
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input<{ error?: boolean }>`
  padding: 15px;
  font-size: 16px;
  border: ${({ error }) => `1px solid ${error ? '#ff2727' : 'transparent'}`};
  outline: none;
  background-color: #222;
  color: #fff;
  resize: none;
  &::placeholder {
    color: #999;
  }
`;

export const InputError = styled.span`
  color: #ff2727;
  font-weight: 500;
  font-size: 0.8rem;
  margin-top: 3px;
`;

export const TextArea = styled(Input).attrs({ as: 'textarea' })`
  min-height: 200px;
`;

export const Submit = styled(Input).attrs({ type: 'submit' })`
  max-width: 50%;
  background-color: #2196f3;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-radius: 30px;
  margin-left: 50%;
  transform: translate(-50%);
  @media (max-width: 600px) {
    padding: 8px;
  }
`;

export const ContactInfo = styled.div`
  min-width: 40%;
  @media (max-width: 991px) {
    margin: 20px 0;
  }
`;

export const ContactInfoBox = styled.div`
  position: relative;
`;

export const Box = styled.div`
  position: relative;
  padding: 20px 0;
  display: flex;
`;

export const Icon = styled.div`
  min-width: 40px;
  padding-top: 4px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  font-size: 24px;
`;

export const Text = styled.div`
  display: flex;
  margin-left: 20px;
  font-size: 16px;
  color: #fff;
  flex-direction: column;
  font-weight: 300;
  & > h3 {
    color: #2196f3;
    margin-bottom: 0;
  }
`;
