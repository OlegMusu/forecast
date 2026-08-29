import styled from "styled-components";

export const MapSection = styled.section`
  margin: 80px auto;

  @media (max-width: 600px) {
    margin: 40px auto;
  }
`;

export const MapTitle = styled.h2`
  margin-bottom: 20px;

  font-size: 16px;
  font-weight: 600;

  @media (max-width: 600px) {
    font-size: 15px;
    margin-bottom: 15px;
  }
`;

export const MapWrapper = styled.div`
  overflow: hidden;

  border-radius: 20px;

  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);

  position: relative;
  z-index: 1;

  .leaflet-container {
    height: 500px;
  }

  @media (max-width: 1024px) {
    .leaflet-container {
      height: 420px;
    }
  }

  @media (max-width: 600px) {
    border-radius: 15px;

    .leaflet-container {
      height: 320px;
    }
  }
`;