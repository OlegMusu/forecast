import styled from "styled-components";

export const MapSection = styled.section`
  margin: 80px auto;
`;

export const MapTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 600;
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
`;