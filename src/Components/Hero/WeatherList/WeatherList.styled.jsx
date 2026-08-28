import styled from "styled-components";

export const WeatherSection = styled.section`
  margin: 80px auto 0;
`;

export const WeatherListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

export const WeatherCard = styled.article`
  position: relative;
  height: 250px;
  overflow: hidden;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  border: 3px solid ${({ $selected }) => ($selected ? "#ffb36c" : "transparent")};
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
  }
`;

export const WeatherImage = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #777;
`;

export const WeatherOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7));
`;

export const WeatherInfo = styled.div`
  position: absolute;
  z-index: 1;
  left: 20px;
  right: 20px;
  bottom: 20px;
  color: white;
`;

export const WeatherCity = styled.h2`
  margin: 0;
  font-size: 32px;
  font-weight: 500;
`;

export const WeatherCountry = styled.span`
  font-size: 12px;
`;

export const WeatherTemperature = styled.div`
  margin-top: 5px;
  font-size: 40px;
  font-weight: 500;
`;

export const WeatherDescription = styled.p`
  margin: 0;
  font-size: 14px;
  text-transform: capitalize;
`;

export const WeatherActions = styled.div`
  position: absolute;
  z-index: 1;
  top: 12px;
  right: 12px;
  display: flex;
  gap: 8px;
`;

export const ActionButton = styled.button`
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: none;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  color: red;
  font-size: 22px;
  line-height: 1;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
    background: white;
  }

  &.heart-active {
    animation: heartPop 0.55s;
  }
`;

export const SelectedLabel = styled.span`
  position: absolute;
  z-index: 1;
  top: 15px;
  left: 15px;
  padding: 5px 10px;
  border-radius: 20px;
  background: #ffb36c;
  color: #222;
  font-size: 14px;
  font-weight: 600;
`;

export const EmptyMessage = styled.p`
  padding: 50px;
  text-align: center;
  color: #777;
`;

export const ActionImg = styled.img`
  width: 18px;
  height: 18px;
`;
