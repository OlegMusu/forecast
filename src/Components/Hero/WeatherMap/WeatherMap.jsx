import { useEffect } from "react";

import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

import L from "leaflet";

import "leaflet/dist/leaflet.css";

import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

import { MapSection, MapTitle, MapWrapper } from "./WeatherMap.styled";

const KEY = "42e7f5eb5e92e38d5b0259217b9039e7";

const marker = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,

  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function WeatherMap({ city }) {
  return (
    <MapSection>
      <div className="container">
        <MapTitle>Weather map</MapTitle>
        <MapWrapper>
          <MapContainer center={[city.lat, city.lon]} zoom={7}>
            <MoveMap city={city} />
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <TileLayer
              url={`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${KEY}`}
              opacity={0.6}
            />
            <TileLayer
              url={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${KEY}`}
              opacity={0.35}
            />
            <Marker position={[city.lat, city.lon]} icon={marker}>
              <Popup>
                {city.name}
                <br />
                {Math.round(city.weather.main.temp)}
                °C
              </Popup>
            </Marker>
          </MapContainer>
        </MapWrapper>
      </div>
    </MapSection>
  );
}

function MoveMap({ city }) {
  const map = useMap();

  useEffect(() => {
    map.flyTo([city.lat, city.lon], 7);
  }, [city.id]);

  return null;
}
