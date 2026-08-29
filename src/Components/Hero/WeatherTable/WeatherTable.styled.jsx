import styled from "styled-components";

export const TableSection = styled.section`
  margin: 80px auto;

  @media (max-width: 600px) {
    margin: 40px auto;
  }
`;

export const ChartContainer = styled.div`
  display: grid;

  grid-template-rows: auto 1fr;
  grid-template-columns: auto 1fr;

  height: 552px;

  padding: 26px 40px 40px 33px;

  box-sizing: border-box;

  border-radius: 20px;

  background: #e8e8e8;

  @media (max-width: 1024px) {
    height: 480px;
    padding: 25px 25px 30px;
  }

  @media (max-width: 600px) {
    height: 380px;

    padding: 20px 12px 25px;

    border-radius: 15px;
  }
`;

export const Title = styled.h2`
  padding: 0 40px;

  grid-column: 1 / -1;

  font-size: 16px;
  font-weight: 600;

  color: #000000 !important;

  @media (max-width: 600px) {
    padding: 0 10px;
    font-size: 14px;
  }
`;

export const YLabels = styled.div`
  margin-right: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin-top: 57px;
  margin-bottom: 40px;

  span {
    font-size: 11px;
    font-weight: 500;
    color: #000;
  }

  @media (max-width: 600px) {
    margin-right: 8px;
    margin-top: 40px;
    margin-bottom: 30px;

    span {
      font-size: 9px;
    }
  }
`;

export const GridWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  min-width: 0;
`;

export const XLabels = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 20px;
  padding: 0 10px;

  span {
    width: 0;

    display: flex;
    justify-content: center;

    font-size: 11px;
    color: #000;

    white-space: nowrap;
    text-align: center;
  }

  @media (max-width: 1024px) {
    margin-top: 12px;
    padding: 0 5px;

    span {
      font-size: 10px;
    }
  }

  @media (max-width: 600px) {
    margin-top: 12px;
    padding: 0 5px;

    span {
      font-size: 4px;
    }
  }
`;

export const GridLines = styled.div`
  position: relative;

  flex: 1;

  min-width: 0;

  margin: 20px 10px 40px;

  border-top: 1px solid #c7c7c7;
  border-left: 1px solid #c7c7c7;

  background-image:
    linear-gradient(
      to bottom,
      transparent calc(100% - 1px),
      #c7c7c7 calc(100% - 1px)
    ),
    linear-gradient(
      to right,
      transparent calc(100% - 1px),
      #c7c7c7 calc(100% - 1px)
    );

  background-size:
    100% calc(100% / ${({ $rows }) => $rows}),
    calc(100% / ${({ $cols }) => $cols - 1}) 100%;

  @media (max-width: 600px) {
    margin: 12px 5px 30px;
  }
`;

export const ChartSvg = styled.svg`
  position: absolute;

  inset: 0;

  width: 100%;
  height: 100%;

  overflow: visible;
`;

export const Line = styled.polyline`
  fill: none;

  stroke: #ffb36c;
  stroke-width: 2.5;

  stroke-linecap: round;
  stroke-linejoin: round;

  vector-effect: non-scaling-stroke;
`;

export const Point = styled.div`
  position: absolute;

  left: ${({ $x }) => `${$x}%`};
  top: ${({ $y }) => `${$y}%`};

  width: 5px;
  height: 5px;

  transform: translate(-50%, -50%);

  border-radius: 50%;

  background: #ffb36c;

  cursor: pointer;
  z-index: 1;

  &:hover {
    transform: translate(-50%, -50%) scale(1.4);
  }
`;

export const Tooltip = styled.div`
  position: absolute;

  left: ${({ $x }) => `${$x}%`};
  top: ${({ $y }) => `${$y}%`};

  transform: translate(-50%, calc(-100% - 12px));

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 6px 9px;

  border-radius: 7px;

  background: #ffb36c;
  color: #000000;

  font-size: 11px;
  line-height: 1.2;

  white-space: nowrap;

  pointer-events: none;
  z-index: 10;

  &::after {
    content: "";

    position: absolute;

    left: 50%;
    bottom: -4px;

    width: 8px;
    height: 8px;

    background: #ffb36c;

    transform: translateX(-50%) rotate(45deg);
  }

  strong {
    font-size: 11px;
    font-weight: 500;
  }

  span {
    margin-top: 2px;

    font-size: 11px;
    font-weight: 500;
  }

  @media (max-width: 600px) {
    padding: 5px 7px;
    font-size: 9px;

    strong,
    span {
      font-size: 9px;
    }
  }
`;