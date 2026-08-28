import { useEffect, useState } from "react";

import { GalleryImages } from "../../../Api-document/GalleryImages";
import { getWeatherSearchQuery } from "../../../Api-document/getWeatherSearchQuery";

import Delete from "../../../Images/forecast/delete.svg";
import Refresh from "../../../Images/forecast/refresh.svg";

import {
  WeatherSection,
  WeatherListWrapper,
  WeatherCard,
  WeatherImage,
  WeatherOverlay,
  WeatherInfo,
  WeatherCity,
  WeatherCountry,
  WeatherTemperature,
  WeatherDescription,
  WeatherActions,
  ActionButton,
  SelectedLabel,
  ActionImg,
} from "./WeatherList.styled";

export default function WeatherList({
  cities,
  selected,
  onSelect,
  onCitiesChange,
}) {
  const sortedCities = [...cities].sort(
    (a, b) => Number(b.saved) - Number(a.saved)
  );

  const toggleSave = (id) => {
    onCitiesChange(
      cities.map((city) =>
        city.id === id
          ? {
              ...city,
              saved: !city.saved,
            }
          : city
      )
    );
  };

  const deleteCity = (id) => {
    onCitiesChange(
      cities.filter((city) => city.id !== id)
    );
  };

  const refreshCity = async (city) => {
    const {
      WeatherByCoordinatesApi,
      ForecastByCoordinatesApi,
    } = await import(
      "../../../Api-document/WeatherApi"
    );

    const [weather, forecast] = await Promise.all([
      WeatherByCoordinatesApi(city.lat, city.lon),
      ForecastByCoordinatesApi(city.lat, city.lon),
    ]);

    onCitiesChange(
      cities.map((item) =>
        item.id === city.id
          ? {
              ...item,
              weather,
              forecast,
              image: "",
            }
          : item
      )
    );
  };

  return (
    <WeatherSection>
      <div className="container">
      <WeatherListWrapper>
        {sortedCities.map((city) => (
          <WeatherCardItem
            key={city.id}
            city={city}
            selected={selected === city.id}
            onSelect={() => onSelect(city.id)}
            onSave={() => toggleSave(city.id)}
            onDelete={() => deleteCity(city.id)}
            onRefresh={() => refreshCity(city)}
            onImage={(image) =>
              onCitiesChange(
                cities.map((item) =>
                  item.id === city.id
                    ? {
                        ...item,
                        image,
                      }
                    : item
                )
              )
            }
          />
        ))}
      </WeatherListWrapper>
      </div>
    </WeatherSection>
  );
}

function WeatherCardItem({
  city,
  selected,
  onSelect,
  onSave,
  onDelete,
  onRefresh,
  onImage,
}) {
  const [image, setImage] = useState(city.image);
  const [isHeartAnimating, setIsHeartAnimating] =
    useState(false);

  useEffect(() => {
    if (city.image) {
      setImage(city.image);
      return;
    }

    const query = getWeatherSearchQuery(
      city.weather.weather[0],
      city.name
    );

    GalleryImages(query)
      .then((data) => {
        const image = data.hits?.[0]?.largeImageURL;

        if (!image) return;

        setImage(image);
        onImage(image);
      })
      .catch(() => {});
  }, [city.id]);

  const handleSave = () => {
    if (!city.saved) {
      setIsHeartAnimating(true);

      setTimeout(() => {
        setIsHeartAnimating(false);
      }, 550);
    }

    onSave();
  };

  return (
    <WeatherCard
      $selected={selected}
      onClick={onSelect}
    >
      {image && (
        <WeatherImage
          src={image}
          alt={city.name}
        />
      )}

      <WeatherOverlay />

      <WeatherInfo>
        <WeatherCity>
          {city.name}
        </WeatherCity>

        <WeatherCountry>
          {city.country}
        </WeatherCountry>

        <WeatherTemperature>
          {Math.round(city.weather.main.temp)}°
        </WeatherTemperature>

        <WeatherDescription>
          {city.weather.weather[0].description}
        </WeatherDescription>
      </WeatherInfo>

      {selected && (
        <SelectedLabel>
          Selected
        </SelectedLabel>
      )}

      <WeatherActions
        onClick={(e) => e.stopPropagation()}
      >
        <ActionButton
          type="button"
          $saved={city.saved}
          className={
            isHeartAnimating
              ? "heart-active"
              : ""
          }
          onClick={handleSave}
          aria-label={
            city.saved
              ? "Remove from saved"
              : "Save city"
          }
        >
          {city.saved ? "♥" : "♡"}
        </ActionButton>

        <ActionButton
          type="button"
          onClick={onRefresh}
          aria-label="Refresh weather"
        >
          <ActionImg
            src={Refresh}
            alt=""
          />
        </ActionButton>

        <ActionButton
          type="button"
          onClick={onDelete}
          aria-label="Delete city"
        >
          <ActionImg
            src={Delete}
            alt=""
          />
        </ActionButton>
      </WeatherActions>
    </WeatherCard>
  );
}