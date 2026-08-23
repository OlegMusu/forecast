const API_KEY = "42e7f5eb5e92e38d5b0259217b9039e7";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const WeatherApi = async (city) => {
  const response = await fetch(
    `${BASE_URL}/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=ru`
  );

  return response.json();
};

export const ForecastApi = async (city) => {
  const response = await fetch(
    `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=ru`
  );

  return response.json();
};