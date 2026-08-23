import styled from "styled-components";
import BackgroungImage from "../../Images/hero/hero-background.png";

export const HeroSection = styled.section`
  min-height: 595px;
  width: 100%;
  background-image:
  linear-gradient(rgba(0, 0, 0, 0.48)), url(${BackgroungImage});
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
  display: flex;

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
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 0 10px 10px 0;
    background: #ffb36c;
    cursor: pointer;
    transition: background-color 0.2s ease;

    img {
      transition: transform 0.2s ease;
    }

    &:hover {
      background: #ee9649;
      img {
        transform: scale(0.85);
      }
    }
  }
`;
