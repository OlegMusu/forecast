import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 6;
`;

export const Modal = styled.div`
  background-color: #ffffff;
  border-radius: 25px;
  padding: 28px 80px;
  width: 100%;
  max-width: 534px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: relative;

  p.error-text {
    color: #ff4d4d;
    font-size: 12px;
    align-self: flex-start;
  }
`;

export const ModalTitle = styled.h2`
  font-size: 28px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 28px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  font-size: 14px;
  font-weight: 500;
  text-align: left;

  label {
    margin-bottom: 8px;
  }

  input:not([type="password"]) {
    height: 50px;
    padding: 0 16px;
    font-size: 15px;
    background-color: #e4e4e4;
    border: 1px solid transparent;
    border-radius: 10px;
    outline: none;
    box-sizing: border-box;
    color: #1a1a1a;
    transition: all 0.2s ease;

    &::placeholder {
      color: #ababab;
    }

    &:focus {
      background-color: #e4e4e4;
    }

    &:disabled {
      background-color: #d6d6d6;
      color: #595f6b;
      cursor: not-allowed;
    }

    &[type="file"] {
      padding-top: 11px;
      cursor: pointer;
      background-color: #f9fafb;
      border: 1px dashed #d1d5db;
    }
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const PasswordInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 0 50px 0 16px;
  font-size: 15px;
  background-color: #e4e4e4;
  border: 1px solid transparent;
  border-radius: 10px;
  outline: none;
  box-sizing: border-box;
  color: #1a1a1a;
  transition: all 0.2s ease;

  &::placeholder {
    color: #ababab;
  }
`;

export const EyeButton = styled.button`
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  cursor: pointer;
  justify-content: center;
  width: 22px;
  height: 22px;

  img {
    width: 20px;
    height: 20px;
    opacity: 0.4;
    transition: opacity 0.3s ease;
  }

  &:hover img {
    opacity: 0.8;
  }
`;

export const SubmitButton = styled.button`
  width: auto;
  align-self: center;
  padding: 10px 30px;
  background-color: #ffb36c;
  color: #000000;
  font-size: 14px;
  font-weight: 400;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 10px;
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

export const DeleteButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  bottom: 15px;
  right: 15px;
  cursor: pointer;
  padding: 6px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 20px;
    height: 20px;
    display: block;
  }

  &:hover {
    opacity: 0.7;
  }
`;
