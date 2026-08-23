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

export const ModalWindow = styled.div`
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

  h2 {
    font-size: 28px;
    font-weight: 500;
    text-align: center;
  }
`;

// Единый контейнер формы, который стилизует обычные label и input внутри себя
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  // Стилизация ОБЫЧНОГО тега label
  label {
    align-self: flex-start;
    font-family: sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #000000;
    margin-bottom: 15px;
    margin-top: 30px;

    &:first-of-type {
      margin-top: 40px;
    }
  }

  // Стилизация ОБЫЧНЫХ тегов input (и text, и password)
  input {
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
  }

  // Стилизация ОБЫЧНОГО тега p для ошибок под инпутами
  p.error-text {
    color: #ff4d4d;
    font-size: 12px;
    align-self: flex-start;
    margin: 4px 0 0 4px;
  }

  // Стилизация ОБЫЧНОЙ кнопки отправки
  button[type="submit"] {
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
    margin-top: 35px;
    margin-bottom: 15px;
    transition: all 0.3s ease;

    &:hover {
      background-color: #f99a53;
      box-shadow: 0px 6px 16px rgba(252, 174, 115, 0.3);
      transform: scale(1.02);
    }

    &:active {
      transform: scale(0.96);
    }
  }

  // Стилизация нижнего текста со ссылкой
  p.footer-text {
    font-size: 10px;
    color: #000000;

    a {
      color: #000000;
    }
  }
`;
