import styled from "styled-components";

export const GallerySection = styled.section`
  padding-top: 40px;
  overflow: hidden;
  margin-bottom: 48px;

  @media (max-width: 600px) {
    padding-top: 30px;
    margin-bottom: 30px;
  }
`;

export const GalleryTitle = styled.h3`
  font-size: 20px;
  margin: 0 0 40px;

  @media (max-width: 600px) {
    font-size: 18px;
    margin-bottom: 25px;
  }
`;

export const GalleryWrapper = styled.div`
  margin: 0 auto;
  height: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: grab;
  position: relative;

  &:active {
    cursor: grabbing;
  }

  @media (max-width: 600px) {
    height: 170px;
  }
`;

export const GalleryCard = styled.div`
  position: absolute;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.7s ease;

  ${({ $position }) =>
    $position === 0 &&
    `
      transform: translateX(0) scale(1);
      filter: brightness(1);
      z-index: 5;
    `}

  ${({ $position }) =>
    $position === -1 &&
    `
      transform: translateX(-155px) scale(0.82);
      filter: brightness(0.65);
      z-index: 4;
      margin-right: 74px;
    `}

  ${({ $position }) =>
    $position === 1 &&
    `
      transform: translateX(155px) scale(0.82);
      filter: brightness(0.65);
      z-index: 4;
      margin-left: 74px;
    `}

  ${({ $position }) =>
    $position === -2 &&
    `
      transform: translateX(-279px) scale(0.64);
      filter: brightness(0.5);
      z-index: 3;
      margin-right: 148px;
    `}

  ${({ $position }) =>
    $position === 2 &&
    `
      transform: translateX(279px) scale(0.64);
      filter: brightness(0.5);
      z-index: 3;
      margin-left: 148px;
    `}

  &:hover {
    filter: brightness(1);
  }

  @media (max-width: 1024px) {
    ${({ $position }) =>
      $position === -1 &&
      `
        transform: translateX(-125px) scale(0.78);
        margin-right: 50px;
      `}

    ${({ $position }) =>
      $position === 1 &&
      `
        transform: translateX(125px) scale(0.78);
        margin-left: 50px;
      `}

    ${({ $position }) =>
      $position === -2 &&
      `
        transform: translateX(-220px) scale(0.6);
        margin-right: 100px;
      `}

    ${({ $position }) =>
      $position === 2 &&
      `
        transform: translateX(220px) scale(0.6);
        margin-left: 100px;
      `}
  }

  @media (max-width: 600px) {
    ${({ $position }) =>
      $position === 0 &&
      `
        transform: translateX(0) scale(0.75);
      `}

    ${({ $position }) =>
      $position === -1 &&
      `
        transform: translateX(-100px) scale(0.6);
        margin-right: 0;
      `}

    ${({ $position }) =>
      $position === 1 &&
      `
        transform: translateX(100px) scale(0.6);
        margin-left: 0;
      `}

    ${({ $position }) =>
      $position === -2 &&
      `
        transform: translateX(-170px) scale(0.45);
        margin-right: 0;
      `}

    ${({ $position }) =>
      $position === 2 &&
      `
        transform: translateX(170px) scale(0.45);
        margin-left: 0;
      `}
  }
`;

export const GalleryImage = styled.img`
  width: 384px;
  height: 211px;
  display: block;
  object-fit: cover;

  @media (max-width: 600px) {
    width: 320px;
    height: 175px;
  }
`;