import { useState } from "react";
import {
  TableSection,
  Title,
  ChartContainer,
  YLabels,
  GridWrapper,
  GridLines,
  XLabels,
  ChartSvg,
  Line,
  Point,
  Tooltip,
} from "./WeatherTable.styled";

const formatHour = (item) =>
  new Date(item.dt * 1000).toLocaleTimeString("en-US", {
    hour: "numeric",
  });

const formatTime = (item) =>
  new Date(item.dt * 1000).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });

export default function WeatherTable({ city }) {
  const [activePoint, setActivePoint] = useState(null);

  const data = city?.forecast?.list?.slice(0, 20) ?? [];

  if (!data.length) return null;

  const temps = data.map((item) => Math.round(item.main.temp));

  const min = Math.floor(Math.min(...temps) / 5) * 5;
  const max = Math.ceil(Math.max(...temps) / 5) * 5;

  const points = temps.map((temp, i) => ({
    x: (i / Math.max(data.length - 1, 1)) * 100,
    y: 100 - ((temp - min) / Math.max(max - min, 1)) * 100,
  }));

  const labelsY = Array.from(
    { length: (max - min) / 5 + 1 },
    (_, i) => max - i * 5,
  );

  return (
    <TableSection>
      <div className="container">
        <ChartContainer>
          <Title>Hourly forecast</Title>

          <YLabels>
            {labelsY.map((temp) => (
              <span key={temp}>{temp}°C</span>
            ))}
          </YLabels>

          <GridWrapper>
            <XLabels>
              {data.map((item) => (
                <span key={item.dt}>{formatHour(item)}</span>
              ))}
            </XLabels>

            <GridLines $cols={data.length} $rows={labelsY.length - 1}>
              <ChartSvg viewBox="0 0 100 100" preserveAspectRatio="none">
                <Line
                  points={points.map(({ x, y }) => `${x},${y}`).join(" ")}
                />
              </ChartSvg>

              {points.map(({ x, y }, i) => (
                <Point
                  key={data[i].dt}
                  $x={x}
                  $y={y}
                  onMouseEnter={() => setActivePoint(i)}
                  onMouseLeave={() => setActivePoint(null)}
                />
              ))}

              {activePoint !== null && (
                <Tooltip $x={points[activePoint].x} $y={points[activePoint].y}>
                  <strong>{formatTime(data[activePoint])}</strong>
                  <span>{temps[activePoint]}°C</span>
                </Tooltip>
              )}
            </GridLines>
          </GridWrapper>
        </ChartContainer>
      </div>
    </TableSection>
  );
}
