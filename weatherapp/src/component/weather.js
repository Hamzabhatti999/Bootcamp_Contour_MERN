import React, { useState } from "react";
import logo from "../logo.jpg";
export default function Weather() {
  const data = [
    {
      Key: 1,
      country: "Pakistan",
      cities: ["Islamabad", "Karachi", "Lahore"],
    },
    {
      Key: 2,
      country: "Turkey",
      cities: ["Istanbul", "Ankara", "Konya"],
    },
    {
      Key: 3,
      country: "Australia",
      cities: ["Melbourne", "Sydney", "Perth"],
    },
  ];
  //state Variables
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  //handle change function
  const handleCountryChange = (event) => {
    const selectedCountryName = event.target.value;
    const countryName = data.find(
      (value) => value.country === selectedCountryName
    );
    setSelectedCountry(selectedCountryName);
    setSelectedCity(countryName.cities);
  };

  const handleCityChange = (e) => {
    const city = e.target.value;
    const apiKey = "77655563d6808b11de280ca95dfd419a";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      })
      .catch((error) => console.error("api Failed"));
  };
  return (
    <div
      className="bg-cover bg-no-repeat bg-center h-screen p-32"
      style={{ backgroundImage: `url(${logo})` }}
    >
      <h1 className="text-center text-blue-400 text-5xl font-extrabold font-serif">
        Weather App
      </h1>
      <div className="flex flex-col gap-5 justify-center items-center mt-10">
        <select
          className="w-80 p-2 outline-none rounded-lg border-2 bg-slate-400 text-lg text-sky-900 font-semibold"
          value={selectedCountry}
          onChange={handleCountryChange}
        >
          {data.map((option) => (
            <option className="border-teal-950" value={option.country}>
              {option.country}
            </option>
          ))}
        </select>
        {selectedCountry && (
          <select
            className="w-80 p-2 outline-none rounded-lg border-2 bg-slate-400 text-lg text-sky-900 font-semibold"
            value={selectedCity}
            onChange={handleCityChange}
          >
            {selectedCity.map((city) => (
              <option value={city}>{city}</option>
            ))}
          </select>
        )}
      </div>
      <div className="flex flex-col justify-center items-center text-lg mt-20 text-blue-400 font-semibold">
        <p>Temperature : {Math.ceil(weatherData?.main?.temp)} °C </p>
        <p>Humidity : {Math.ceil(weatherData?.main?.humidity)}%</p>
        <p>Wind: {Math.floor(weatherData?.wind?.speed)} km/h</p>
      </div>
    </div>
  );
}
