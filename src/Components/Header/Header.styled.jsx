import styled from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
  height: 80px;
`;

export const HeaderContainer = styled.div`
  width: 1140px;
  display: flex;
  gap: 111px;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;

  ul {
    display: flex;
    gap: 42px;
  }

  a {
    color: black;
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

export const OpenSignup = styled.button`
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  display: flex;
  background-color: #ffb36c;
  border-radius: 10px;
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
