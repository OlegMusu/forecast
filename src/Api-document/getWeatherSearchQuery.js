export const getWeatherSearchQuery = (weather, city) => {
  const id = weather.id;

  if (id >= 200 && id < 300) return `${city} thunderstorm`;
  if (id >= 300 && id < 400) return `${city} drizzle`;
  if (id >= 500 && id < 600) return `${city} rain`;
  if (id >= 600 && id < 700) return `${city} snow`;
  if (id >= 700 && id < 800) return `${city} fog`;
  if (id === 800) return `${city} sunny`;
  if (id > 800) return `${city} cloudy`;

  return `${city} weather`;
};