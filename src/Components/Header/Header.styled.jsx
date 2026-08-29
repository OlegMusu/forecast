import styled, { css, keyframes } from "styled-components";

const slideDown = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }

  to {
    transform: translateY(
      calc(var(--scroll-diff, 0px) * -0.15)
    );
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

  background-color: ${({ $theme }) =>
    $theme === "dark" ? "#1e1e1e" : "#ffffff"};

  box-shadow: none;

  transition:
    transform 0.4s cubic-bezier(0.1, 0.8, 0.2, 1),
    background-color 0.3s ease,
    box-shadow 0.3s ease;

  will-change: transform, opacity;

  ${({
    $isFloating,
    $theme,
  }) =>
    $isFloating &&
    css`
      position: fixed;

      top: 0;
      left: 0;

      z-index: 1050;

      background-color: ${$theme === "dark"
        ? "rgba(30, 30, 30, 0.85)"
        : "rgba(255, 255, 255, 0.85)"};

      backdrop-filter: blur(10px);

      box-shadow: ${$theme === "dark"
        ? "0px 4px 30px rgba(0, 0, 0, 0.3)"
        : "0px 4px 30px rgba(0, 0, 0, 0.05)"};

      animation: ${slideDown}
        0.35s
        cubic-bezier(0.16, 1, 0.3, 1)
        forwards;

      transform: translateY(
        calc(var(--scroll-diff, 0px) * -0.15)
      );
    `}

  a {
    color: ${({ $theme }) =>
      $theme === "dark"
        ? "#ffffff"
        : "#000000"} !important;

    transition: color 0.3s ease;
  }

  @media (max-width: 768px) {
    height: 70px;
    padding: 10px 15px;
    box-sizing: border-box;
  }

  @media (max-width: 480px) {
    height: 65px;
  }
`;

export const HeaderContainer = styled.div`
  width: 1140px;

  display: flex;

  gap: 111px;

  align-items: center;

  justify-content: space-between;

  box-sizing: border-box;

  /* LOGO */

  > a {
    display: flex;
    align-items: center;

    flex-shrink: 0;

    img {
      display: block;
      max-width: 100%;
    }
  }

  /* NAVIGATION */

  ul {
    display: flex;

    gap: 42px;

    list-style: none;

    padding: 0;
    margin: 0;

    align-items: center;
  }

  ul a {
    text-decoration: none;

    font-weight: 500;

    font-size: 12px;
  }

  /* TABLET */

  @media (max-width: 1024px) {
    width: 100%;

    padding: 0 20px;

    gap: 40px;

    ul {
      gap: 25px;
    }
  }

  /* PHONE */

  @media (max-width: 600px) {
    padding: 0;

    gap: 10px;

    ul {
      display: none;
    }

    > a {
      img {
        max-width: 110px;
      }
    }
  }

  @media (max-width: 380px) {
    > a {
      img {
        max-width: 95px;
      }
    }
  }
`;

export const UserRegistration = styled.div`
  display: flex;

  gap: 27px;

  margin-left: auto;

  align-items: center;

  flex-shrink: 0;

  /* DESKTOP CONTROLS */

  .desktop-user-controls {
    display: flex;

    align-items: center;

    gap: 27px;
  }

  .profile-button {
    background: none;

    border: none;

    padding: 0;

    cursor: pointer;

    display: flex;

    align-items: center;
    justify-content: center;
  }

  .profile-button img {
    border-radius: 50%;

    width: 50px;
    height: 50px;

    object-fit: cover;

    display: block;
  }

  /* TABLET */

  @media (max-width: 1024px) {
    gap: 15px;

    .desktop-user-controls {
      gap: 15px;
    }

    .profile-button img {
      width: 42px;
      height: 42px;
    }
  }

  /* PHONE */

  @media (max-width: 600px) {
    gap: 8px;

    .desktop-user-controls {
      display: none;
    }
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

  flex-shrink: 0;

  background-color: ${({ $theme }) =>
    $theme === "dark"
      ? "#ffb36c"
      : "#ffffff"};

  border: 3px solid
    ${({ $theme }) =>
      $theme === "dark"
        ? "#ffffff"
        : "#ffb36c"};

  transition: all 0.25s ease;

  .toggle-thumb {
    position: absolute;

    top: 2px;
    left: 2px;

    width: 18px;
    height: 18px;

    border-radius: 50%;

    background-color: ${({ $theme }) =>
      $theme === "dark"
        ? "#ffffff"
        : "#ffb36c"};

    transition:
      transform 0.25s
        cubic-bezier(0.4, 0, 0.2, 1),
      background-color 0.25s ease;

    transform: ${({ $theme }) =>
      $theme === "dark"
        ? "translateX(26px)"
        : "translateX(0)"};
  }

  &:hover {
    box-shadow:
      0px 0px 16px
      rgba(252, 174, 115, 0.486);
  }

  &:active .toggle-thumb {
    width: 22px;

    transform: ${({ $theme }) =>
      $theme === "dark"
        ? "translateX(22px)"
        : "translateX(0)"};
  }

  @media (max-width: 600px) {
    width: 50px;
    height: 27px;

    .toggle-thumb {
      width: 17px;
      height: 17px;

      transform: ${({ $theme }) =>
        $theme === "dark"
          ? "translateX(23px)"
          : "translateX(0)"};
    }
  }
`;

export const MenuButton = styled.button`
  display: none;

  position: relative;

  width: 40px;
  height: 40px;

  padding: 0;

  border: none;

  border-radius: 10px;

  background: #ffb36c;

  cursor: pointer;

  align-items: center;
  justify-content: center;

  flex-direction: column;

  gap: 4px;

  flex-shrink: 0;

  transition:
    transform 0.2s ease,
    background-color 0.2s ease;

  span {
    display: block;

    width: 21px;
    height: 2px;

    border-radius: 2px;

    background: #000000;

    transition:
      transform 0.25s ease,
      opacity 0.25s ease;
  }

  &:hover {
    background: #f99a53;

    transform: scale(1.04);
  }

  &:active {
    transform: scale(0.95);
  }

  /* превращаем ☰ в X */

  ${({ $isOpen }) =>
    $isOpen &&
    css`
      span:nth-child(1) {
        transform: translateY(6px) rotate(45deg);
      }

      span:nth-child(2) {
        opacity: 0;
      }

      span:nth-child(3) {
        transform: translateY(-6px) rotate(-45deg);
      }
    `}

  @media (max-width: 600px) {
    display: flex;
  }
`;

export const MobileMenu = styled.div`
  position: absolute;

  top: calc(100% + 10px);

  right: 15px;

  width: 220px;

  padding: 8px;

  display: flex;

  flex-direction: column;

  gap: 4px;

  border-radius: 15px;

  background: ${({ $theme }) =>
    $theme === "dark"
      ? "#2a2a2a"
      : "#ffffff"};

  box-shadow:
    0 10px 30px
    rgba(0, 0, 0, 0.2);

  z-index: 1100;

  animation: mobileMenuOpen 0.2s ease;

  @keyframes mobileMenuOpen {
    from {
      opacity: 0;

      transform: translateY(-8px);
    }

    to {
      opacity: 1;

      transform: translateY(0);
    }
  }

  a,
  button {
    width: 100%;

    padding: 12px 14px;

    border: none;

    border-radius: 9px;

    background: transparent;

    color: ${({ $theme }) =>
      $theme === "dark"
        ? "#ffffff"
        : "#000000"};

    font-family: inherit;

    font-size: 13px;

    font-weight: 500;

    text-decoration: none;

    text-align: left;

    cursor: pointer;

    box-sizing: border-box;

    transition:
      background-color 0.2s ease,
      color 0.2s ease;

    &:hover {
      background: ${({ $theme }) =>
        $theme === "dark"
          ? "#3a3a3a"
          : "#f2f2f2"};
    }
  }

  @media (min-width: 601px) {
    display: none;
  }

  @media (max-width: 380px) {
    right: 10px;

    width: 200px;
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

    box-shadow:
      0px 6px 16px
      rgba(252, 174, 115, 0.3);

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

    box-shadow:
      0px 6px 16px
      rgba(252, 174, 115, 0.3);

    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.96);
  }
`;
