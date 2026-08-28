const KEY = "42e7f5eb5e92e38d5b0259217b9039e7";
const API = "https://api.openweathermap.org/data/2.5";
const GEO = "https://api.openweathermap.org/geo/1.0";

const get = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "API error");
  }

  return data;
};

export const SearchCitiesApi = (city) =>
  get(`${GEO}/direct?q=${encodeURIComponent(city)}&limit=5&appid=${KEY}`);

export const WeatherByCoordinatesApi = (lat, lon) =>
  get(`${API}/weather?lat=${lat}&lon=${lon}&appid=${KEY}&units=metric`);

export const ForecastByCoordinatesApi = (lat, lon) =>
  get(`${API}/forecast?lat=${lat}&lon=${lon}&appid=${KEY}&units=metric`);