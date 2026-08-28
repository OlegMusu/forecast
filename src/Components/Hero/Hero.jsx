import { useEffect, useState } from "react";
import Search from "../../Images/hero/search.svg";

import {
  SearchCitiesApi,
  WeatherByCoordinatesApi,
  ForecastByCoordinatesApi,
} from "../../Api-document/WeatherApi";

import WeatherList from "./WeatherList/WeatherList";
import WeatherMap from "./WeatherMap/WeatherMap";
import WeatherTable from "./WeatherTable/WeatherTable";
import WeatherWeek from "./WeatherWeek/WeatherWeek";

import {
  HeroSection,
  HeroContainer,
  TitleHero,
  HeroWrapper,
  DataList,
  DataItem,
  SearchForm,
  LocationButton,
  ErrorMessage,
  SearchResults,
} from "./Hero.styled";

export default function Hero() {
  const [date, setDate] = useState(new Date());

  const [cities, setCities] = useState(() =>
    JSON.parse(localStorage.getItem("weather-cities") || "[]"),
  );

  const [selected, setSelected] = useState(
    () =>
      JSON.parse(localStorage.getItem("weather-cities") || "[]")[0]?.id || null,
  );

  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem("weather-cities", JSON.stringify(cities));
  }, [cities]);

  const selectedCity = cities.find((city) => city.id === selected);

  const addCity = async (lat, lon, place = {}) => {
    const [weather, forecast] = await Promise.all([
      WeatherByCoordinatesApi(lat, lon),
      ForecastByCoordinatesApi(lat, lon),
    ]);

    const id = `${lat}-${lon}`;

    setCities((prev) => {
      const exists = prev.find((city) => city.id === id);

      if (exists) {
        return prev.map((city) =>
          city.id === id
            ? {
                ...city,
                weather,
                forecast,
              }
            : city,
        );
      }

      return [
        ...prev,
        {
          id,
          name: weather.name || place.name,
          country: weather.sys?.country || place.country || "",
          lat,
          lon,
          weather,
          forecast,
          saved: false,
          image: "",
        },
      ];
    });

    setSelected(id);
  };

  const searchCity = async (name) => {
    try {
      setLoading(true);
      setError("");

      const places = await SearchCitiesApi(name);

      if (!places.length) {
        throw new Error();
      }

      const place = places[0];

      await addCity(place.lat, place.lon, place);
    } catch {
      setError("Город не найден");
    } finally {
      setLoading(false);
    }
  };

  const submit = async (event) => {
    event.preventDefault();

    if (!search.trim()) return;

    await searchCity(search.trim());

    setSearch("");
    setResults([]);
  };

  const changeSearch = async (event) => {
    const value = event.target.value;

    setSearch(value);

    if (value.length < 2) {
      setResults([]);
      return;
    }

    try {
      setResults(await SearchCitiesApi(value));
    } catch {
      setResults([]);
    }
  };

  const chooseResult = async (place) => {
    try {
      setLoading(true);

      await addCity(place.lat, place.lon, place);

      setSearch("");
      setResults([]);
    } catch {
      setError("Не удалось загрузить город");
    } finally {
      setLoading(false);
    }
  };

  const myLocation = () => {
    if (!navigator.geolocation) {
      setError("Геолокация не поддерживается");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords }) =>
        addCity(coords.latitude, coords.longitude).catch(() =>
          setError("Не удалось определить погоду"),
        ),
      () => setError("Разрешите доступ к геолокации"),
    );
  };

  return (
    <>
      <HeroSection>
        <HeroContainer className="container">
          <TitleHero>Weather dashboard</TitleHero>

          <HeroWrapper>
            <p>
              Create your personal list of favorite cities and always be aware
              of the weather.
            </p>

            <span />

            <DataList>
              <DataItem>
                {date.toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </DataItem>

              <DataItem>
                {date.toLocaleDateString("en-US", {
                  weekday: "long",
                })}
                , {date.getDate()}
              </DataItem>
            </DataList>
          </HeroWrapper>

          <SearchForm onSubmit={submit}>
            <input
              value={search}
              onChange={changeSearch}
              placeholder="Search location..."
            />

            <button type="submit">
              <img src={Search} alt="search" />
            </button>
          </SearchForm>

          {results.length > 0 && (
            <SearchResults>
              {results.map((place) => (
                <button
                  key={`${place.lat}-${place.lon}`}
                  onClick={() => chooseResult(place)}
                >
                  {place.name}
                  {place.state ? `, ${place.state}` : ""}, {place.country}
                </button>
              ))}
            </SearchResults>
          )}

          <LocationButton onClick={myLocation}>My location</LocationButton>

          {loading && <p>Loading...</p>}

          {error && <ErrorMessage>{error}</ErrorMessage>}
        </HeroContainer>
      </HeroSection>

      <WeatherList
        cities={cities}
        selected={selected}
        onSelect={setSelected}
        onCitiesChange={setCities}
      />

      {selectedCity && (
        <>
          <WeatherMap city={selectedCity} />

          <WeatherTable city={selectedCity} />

          <WeatherWeek city={selectedCity} />
        </>
      )}
    </>
  );
}
