import styled from "styled-components";

import BackgroungImage from "../../Images/hero/hero-background.png";


export const HeroSection = styled.section`
  min-height: 595px;
  width: 100%;
  background-image:
  linear-gradient( rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0.48)),
  url(${BackgroungImage});
  background-size: cover;
  background-position: center;
`;


export const HeroContainer = styled.div`
  height: 100%;
  min-height: 504px;
  margin: 0 auto;
  padding: 84px 20px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


export const TitleHero = styled.h1`
  font-size: 40px;
  font-weight: 600;
  text-align: center;
  color: #ffffff;
`;


export const HeroWrapper = styled.div`
  margin: 80px 0;
  display: flex;
  gap: 52px;
  transform: translateX(-71px);

  p {
    max-width: 262px;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.2;
    text-align: right;
    color: #ffffff;
  }

  span {
    width: 3px;
    height: 144px;
    background: #ffffff;
    border-radius: 2px;
  }
`;


export const DataList = styled.div`
  display: flex;
  flex-direction: column;
`;


export const DataItem = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: #ffffff;
  line-height: 1.2;
`;


export const SearchForm = styled.form`
  position: relative;
  display: flex;
  width: 554px;
  max-width: 100%;

  input {
    width: 509px;
    padding: 12px 29px;
    border: none;
    outline: none;
    border-radius: 10px 0 0 10px;
    background: #d9d9d9;
    font-size: 14px;
    color: #333;

    &::placeholder {
      color: #878787;
    }
  }

  button {
    width: 45px;
    min-width: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 0 10px 10px 0;
    background: #ffb36c;
    cursor: pointer;

    transition:
      background-color 0.2s ease;

    img {
      transition:
        transform 0.2s ease;
    }

    &:hover {
      background: #ee9649;
      img {
        transform: scale(0.85);
      }
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`;


export const SearchResults = styled.div`
  position: relative;
  z-index: 20;
  width: 554px;
  max-width: 100%;
  margin-top: 5px;
  padding: 5px;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  button {
    padding: 12px 15px;
    border: none;
    background: transparent;
    text-align: left;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 3px;
    border-radius: 7px;

    &:hover {
      background: #f2f2f2;
    }

    strong {
      font-size: 14px;
      color: #222;
    }

    span {
      font-size: 12px;
      color: #777;
    }
  }
`;


export const LocationButton = styled.button`
  display: block;
  margin: 12px auto 0;
  padding: 10px 22px;
  border: none;
  border-radius: 10px;
  background: #222222;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;


export const ErrorMessage = styled.p`
  margin-top: 12px;
  text-align: center;
  color: #e74c3c;
`;


export const LoadingMessage = styled.p`
  margin-top: 12px;
  color: white;
  text-align: center;
`;