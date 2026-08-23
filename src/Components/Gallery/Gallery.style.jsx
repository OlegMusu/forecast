import styled from "styled-components";

export const GallerySection = styled.section`
  padding-top: 40px;
  overflow: hidden;
  margin-bottom: 48px;
`;

export const GalleryTitle = styled.h3`
  font-size: 20px;
  margin: 0 0 40px;
`;

export const GalleryWrapper = styled.div`
  margin: 0 auto;
  height: 210px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: grab;

  &:active {
    cursor: grabbing;
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
`;

export const GalleryImage = styled.img`
  width: 384px;
  height: 211px;
  display: block;
  object-fit: cover;
`;