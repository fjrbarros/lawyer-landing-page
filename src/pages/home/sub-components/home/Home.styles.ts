import styled from 'styled-components';

export const Banner = styled.section`
  padding: 100px;
  position: relative;
  min-height: 100vh;
  background: url('https://www.pmattorneys.co.za/wp-content/uploads/2022/08/Law-Firms-In-Centurion.jpg');
  background-size: cover;
  background-position: right;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 991px) {
    padding: 150px 50px 100px;
  }
  @media (max-width: 600px) {
    padding: 150px 20px 100px;
  }
`;

export const TextBox = styled.div``;

export const Name = styled.h2`
  font-size: 3em;
  color: #ffffff;
  font-weight: 500;
  line-height: 1.5em;
  & > span {
    font-size: 1.5em;
    font-weight: 700;
  }
  @media (max-width: 991px) {
    font-size: 2em;
  }
`;

export const Description = styled.h3`
  font-size: 1.5em;
  color: #ffffff;
  font-weight: 500;
  @media (max-width: 991px) {
    font-size: 1.2em;
  }
`;

export const AboutMe = styled.a`
  position: relative;
  background-color: #2196f3;
  display: inline-block;
  color: #ffffff;
  margin-top: 20px;
  padding: 10px 30px;
  font-size: 18px;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  font-weight: 500;
  @media (max-width: 991px) {
    margin-top: 10px;
    padding: 10px 20px;
    font-size: 16px;
  }
`;
