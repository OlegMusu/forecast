import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  box-sizing: border-box;

  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 1060;
  overflow-y: auto;
`;

export const ModalWindow = styled.div`
  width: 100%;
  max-width: 534px;
  max-height: calc(100vh - 40px);

  padding: 28px 80px;

  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  position: relative;

  overflow-y: auto;

  border-radius: 25px;

  background-color: #ffffff;
  color: #000000;

  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  h2 {
    font-size: 28px;
    font-weight: 500;
    text-align: center;
    color: #000000;

    transition: color 0.3s ease;
  }

  &.dark-modal {
    background-color: #1e1e1e;
    color: #ffffff;

    h2 {
      color: #ffffff;
    }
  }

  @media (max-width: 600px) {
    padding: 25px 20px;
    border-radius: 20px;

    h2 {
      font-size: 23px;
    }
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  label {
    align-self: flex-start;

    font-size: 14px;
    font-weight: 500;

    margin-top: 30px;
    margin-bottom: 15px;

    color: #000000;

    transition: color 0.3s ease;
  }

  &.dark-form {
    label {
      color: #ffffff;
    }

    .footer-text {
      color: #ffffff;

      a {
        color: #ffffff;
      }
    }
  }

  input {
    width: 100%;
    height: 50px;

    padding: 0 50px 0 16px;

    box-sizing: border-box;

    font-size: 15px;

    background-color: #e4e4e4;
    color: #1a1a1a;

    border: 1px solid transparent;
    border-radius: 10px;

    outline: none;

    &::placeholder {
      color: #ababab;
    }

    &:focus {
      background-color: #eeeeee;
    }
  }

  p.error-text {
    align-self: flex-start;

    margin: 4px 0 0 4px;

    color: #ff4d4d;

    font-size: 12px;
  }

  button[type="submit"] {
    width: auto;

    align-self: center;

    margin-top: 35px;
    margin-bottom: 15px;

    padding: 10px 30px;

    background-color: #ffb36c;
    color: #000000;

    border: none;
    border-radius: 10px;

    font-size: 14px;
    font-weight: 400;

    cursor: pointer;

    transition: all 0.3s ease;

    &:hover {
      background-color: #f99a53;

      box-shadow:
        0 6px 16px
        rgba(252, 174, 115, 0.3);

      transform: scale(1.02);
    }

    &:active {
      transform: scale(0.96);
    }
  }

  .footer-text {
    color: #000000;

    font-size: 10px;

    a {
      color: #000000;
    }
  }

  @media (max-width: 600px) {
    label {
      font-size: 13px;

      margin-top: 20px;
      margin-bottom: 8px;
    }

    input {
      height: 46px;
      font-size: 14px;
    }

    button[type="submit"] {
      margin-top: 25px;
      padding: 10px 25px;
    }
  }
`;
