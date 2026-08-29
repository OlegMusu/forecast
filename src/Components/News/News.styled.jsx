import styled from "styled-components";

export const NewsTitle = styled.h3`
  font-size: 20px;
  margin-top: 80px;

  @media (max-width: 600px) {
    font-size: 18px;
    margin-top: 40px;
  }
`;

export const NewsButton = styled.button`
  align-items: center;
  justify-content: center;

  padding: 10px 30px;

  display: flex;

  background-color: #ffb36c;

  border-radius: 10px;

  border: none;

  transition: all 0.3s ease;

  margin-top: 40px;

  cursor: pointer;

  &:hover {
    background-color: #f99a53;

    box-shadow: 0px 6px 16px
      rgba(252, 174, 115, 0.3);

    transform: scale(1.02);
  }

  &:active {
    transform: scale(0.96);
  }

  @media (max-width: 600px) {
    margin-top: 25px;
    padding: 9px 20px;
    font-size: 12px;
  }
`;

export const GalleryNews = styled.h3`
  display: flex;
  flex-wrap: wrap;

  gap: 20px;

  margin: 0;

  div {
    margin-top: 40px;

    width: 270px;

    display: flex;
    flex-direction: column;
  }

  img {
    width: 100%;
    height: 208px;

    border-radius: 10px;

    transition: all 0.3s ease;

    object-fit: cover;

    &:hover {
      box-shadow: 0px 6px 16px
        rgba(0, 0, 0, 0.4);

      transform: scale(1.03);
    }
  }

  p {
    margin-top: 20px;

    font-size: 16px;
    font-weight: 500;
  }

  @media (max-width: 1024px) {
    div {
      width: calc(50% - 10px);
    }
  }

  @media (max-width: 600px) {
    gap: 15px;

    div {
      width: 100%;
      margin-top: 25px;
    }

    img {
      height: 200px;
    }

    p {
      margin-top: 12px;
      font-size: 14px;
    }
  }
`;