import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  let [city, setCity] = useState(null);
  let [temperature, setTemperature] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);

  function updateTemperature() {
    function handleResponse(response) {
      console.log(response.data);
      setTemperature(
        `Temperature: ${Math.round(response.data.current.temp_c)}°C`
      );
      setDescription(`Description: ${response.data.current.condition.text}`);
      setHumidity(`Humidity: ${Math.round(response.data.current.humidity)}%`);
      setWind(`Wind: ${response.data.current.wind_kph} km/h`);
      setIcon(response.data.current.condition.icon);
    }
    let Url = `https://api.weatherapi.com/v1/current.json?key=5ee98ea659694b6cb05174027242609&q=${city}&aqi=no
  `;
    axios.get(Url).then(handleResponse);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    updateTemperature();
  }

  return (
    <div className="WeatherApp">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter a city" onChange={updateCity} />
        <input type="submit" value="search" />
      </form>
      <h4>{temperature}</h4>
      <h4>{description}</h4>
      <h4>{humidity}</h4>
      <h4>{wind}</h4>
      <img src={icon} />
    </div>
  );
}
