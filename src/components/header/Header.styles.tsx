import styled from 'styled-components';
import menu from '../../assets/menu.png';
import close from '../../assets/close.png';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 40px 100px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.5s;
  &.stick {
    background-color: #fff;
    padding: 20px 100px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  }
  @media (max-width: 991px) {
    padding: 20px 50px;
    z-index: 1000;
    &.stick {
      padding: 20px 50px;
      z-index: 1000;
    }
  }
  @media (max-width: 600px) {
    padding: 15px;
    z-index: 1000;
    &.stick {
      padding: 15px;
    }
  }
`;

export const Logo = styled.a`
  color: #ffffff;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
  &.stick {
    color: #111;
  }
  @media (max-width: 600px) {
    font-size: 1.3rem;
  }
`;

export const Toggle = styled.div<{ isToggle: boolean; isStick: boolean }>`
  width: 30px;
  height: 30px;
  display: none;
  background: ${({ isToggle }) => `url(${isToggle ? close : menu})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: ${({ isToggle }) => (isToggle ? '20px' : '25px')};
  cursor: pointer;
  filter: ${({ isStick }) => `invert(${isStick ? 1 : 0})`};
  @media (max-width: 991px) {
    display: block;
  }
`;

export const List = styled.ul<{ isToggle: boolean }>`
  position: relative;
  display: flex;
  @media (max-width: 991px) {
    position: fixed;
    top: 75px;
    left: ${({ isToggle }) => (isToggle ? 0 : '-100%')};
    display: block;
    padding: 100px 50px;
    text-align: center;
    width: 100%;
    height: 100vh;
    background-color: #fff;
    transition: 0.5s;
    z-index: 999;
    border-top: 1px solid rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 600px) {
    top: 61px;
  }
`;

export const ItemList = styled.li`
  position: relative;
  list-style: none;
`;

export const Menu = styled.a`
  position: relative;
  display: inline-block;
  margin: 0 15px;
  color: #ffffff;
  font-weight: 500;
  &.stick {
    color: #111;
  }
  @media (max-width: 991px) {
    color: #111;
    font-size: 24px;
    margin: 10px;
  }
`;
