import {
  WeekSection,
  WeekTitle,
  WeekList,
  WeekItem,
  WeekDate,
  WeekIcon,
  WeekTemperature,
  WeekDescription,
} from "./WeatherWeek.styled";

export default function WeatherWeek({ city }) {
  const list = city.forecast?.list || [];
  const days = [];

  list.forEach((item) => {
    const date = item.dt_txt.split(" ")[0];

    if (!days.some((day) => day.date === date)) {
      days.push({
        date,
        item,
      });
    }
  });

  return (
    <WeekSection>
      <div className="container">
        <WeekTitle>forecast</WeekTitle>
        <WeekList>
          {days.slice(0, 7).map(({ date, item }) => (
            <WeekItem key={date}>
              <WeekDate>
                {new Date(item.dt * 1000).toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                })}
              </WeekDate>
              <WeekIcon
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={item.weather[0].description}
              />
              <WeekTemperature>{Math.round(item.main.temp)}°C</WeekTemperature>
              <WeekDescription>{item.weather[0].description}</WeekDescription>
            </WeekItem>
          ))}
        </WeekList>
      </div>
    </WeekSection>
  );
}
