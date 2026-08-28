import styled, { css, keyframes } from "styled-components";

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(calc(var(--scroll-diff, 0px) * -0.15));
    opacity: 1;
  }
`;

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  height: 80px;
  width: 100%;
  position: relative;
  background-color: ${props => props.$theme === "dark" ? "#1e1e1e" : "#ffffff"};
  box-shadow: none;
  transition: 
    transform 0.4s cubic-bezier(0.1, 0.8, 0.2, 1), 
    background-color 0.3s ease, 
    box-shadow 0.3s ease;
  will-change: transform, opacity;

  ${props => props.$isFloating && css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    background-color: ${props => props.$theme === "dark" ? "rgba(30, 30, 30, 0.85)" : "rgba(255, 255, 255, 0.85)"};
    backdrop-filter: blur(10px);
    box-shadow: ${props => props.$theme === "dark" ? "0px 4px 30px rgba(0, 0, 0, 0.3)" : "0px 4px 30px rgba(0, 0, 0, 0.05)"};
    animation: ${slideDown} 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    transform: translateY(calc(var(--scroll-diff, 0px) * -0.15));
  `}

  a {
    color: ${props => props.$theme === "dark" ? "#ffffff" : "#000000"} !important;
    transition: color 0.3s ease;
  }
`;

export const HeaderContainer = styled.div`
  font-family: "Montserrat Alternates", sans-serif;
  width: 1140px;
  display: flex;
  gap: 111px;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  ul {
    display: flex;
    gap: 42px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    font-weight: 500;
    font-size: 12px;
  }
`;

export const UserRegistration = styled.div`
  display: flex;
  gap: 27px;
  margin-left: auto;
  align-items: center;

  img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    object-fit: cover;
  }
`;

export const ThemeToggleSlider = styled.button`
  position: relative;
  width: 54px;
  height: 28px;
  border-radius: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0;
  background-color: ${props => props.$theme === "dark" ? "#ffb36c" : "#ffffff"};
  border: 3px solid ${props => props.$theme === "dark" ? "#ffffff" : "#ffb36c"};
  transition: all 0.25s ease;

  .toggle-thumb {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: ${props => props.$theme === "dark" ? "#ffffff" : "#ffb36c"};
    transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.25s ease;
    transform: ${props => props.$theme === "dark" ? "translateX(26px)" : "translateX(0)"};
  }

  &:hover {
      box-shadow: 0px 0px 16px rgba(252, 174, 115, 0.486);
  }

  &:active .toggle-thumb {
    width: 22px;
    transform: ${props => props.$theme === "dark" ? "translateX(22px)" : "translateX(0)"};
  }
`;

export const OpenSignup = styled.button`
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  display: flex;
  background-color: #ffb36c;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f99a53;
    box-shadow: 0px 6px 16px rgba(252, 174, 115, 0.3);
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.96);
  }
`;

export const DeleteUser = styled.button`
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  display: flex;
  background-color: #ffb36c;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ff6752;
    box-shadow: 0px 6px 16px rgba(252, 174, 115, 0.3);
    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.96);
  }
`;
