import styled from "styled-components";

export const TableSection = styled.section`
  margin: 80px auto;
`;

export const ChartContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: auto 1fr;
  height: 552px;
  padding: 26px 40px 40px 33px;
  box-sizing: border-box;
  border-radius: 20px;
  background: #E8E8E8;
`;

export const Title = styled.h2`
  padding: 0 40px;
  grid-column: 1 / -1;
  font-size: 16px;
  font-weight: 600;
  color: #000000 !important; 
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
`;

export const GridWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
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
`;

export const GridLines = styled.div`
  position: relative;
  flex: 1;
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
  stroke: #FFB36C;
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
  background: #FFB36C;
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
  background: #FFB36C;
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
    background: #FFB36C;
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
`;
