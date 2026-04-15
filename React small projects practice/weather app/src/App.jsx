import React, { useState } from "react";
import { Search, Droplets, Wind } from "lucide-react";
import clearImg from "./assets/clear.png";
import cloudImg from "./assets/cloud.png";
import drizzleImg from "./assets/drizzle.png";
import humidityImg from "./assets/humidity.png";
import snowImg from "./assets/snow.png";
import windImg from "./assets/wind.png";

const API_KEY = "1d950eae8889a129d09abd4055cff3e7";

const allIcons = {
  Clear: clearImg,
  Clouds: cloudImg,
  Drizzle: drizzleImg,
  Rain: drizzleImg,
  Snow: snowImg,
  Mist: humidityImg,
  Haze: humidityImg,
};

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeather() {
    if (!inputValue.trim()) return;

    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=${API_KEY}`,
      );

      if (!res.ok) {
        throw new Error("city not found");
      }

      const data = await res.json();
      setWeatherData(data);
    } catch (e) {
      console.log("error", e.message);
      alert("City not found. Please try again!");
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchWeather();
    }
  };

  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-pink-200 p-4">
      <div className="w-full max-w-md bg-indigo-600 p-8 rounded-3xl shadow-2xl transition-all duration-500">
        <div className="flex justify-between items-center gap-2">
          <input
            value={inputValue}
            onKeyDown={handleKeyDown}
            onChange={(e) => setInputValue(e.target.value)}
            className="flex-1 bg-white/20 border border-transparent text-white rounded-full py-3 px-6 outline-none focus:border-white placeholder:text-indigo-200"
            type="text"
            placeholder="Search Cities..."
          />
          <button
            onClick={fetchWeather}
            className="bg-white rounded-full p-3 hover:bg-indigo-100 transition-colors"
          >
            <Search size={24} className="text-indigo-600" />
          </button>
        </div>

        {weatherData ? (
          <div className="animate-in fade-in zoom-in duration-500">
            <div className="flex justify-center items-center mt-10">
              <img
                src={allIcons[weatherData.weather[0].main] || clearImg}
                alt="weather condition"
                className="w-44 md:w-52 drop-shadow-lg"
              />
            </div>

            <div className="text-center mt-4">
              <h1 className="text-7xl font-bold text-white tracking-tight">
                {Math.floor(weatherData.main.temp)}°C
              </h1>
              <h2 className="text-3xl font-medium text-white/90 mt-2 capitalize">
                {weatherData.name}
              </h2>
              <p className="text-indigo-200 text-lg mt-1 font-light">
                {weatherData.weather[0].description}
              </p>
            </div>

            <div className="flex justify-between mt-12 px-2">
              <div className="flex items-center gap-3">
                <Droplets className="w-8 h-8 text-blue-300" />
                <div className="flex flex-col">
                  <span className="font-bold text-2xl text-white">
                    {weatherData.main.humidity}%
                  </span>
                  <span className="text-xs text-indigo-200 uppercase tracking-wider">
                    Humidity
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Wind className="w-8 h-8 text-indigo-200" />
                <div className="flex flex-col">
                  <span className="font-bold text-2xl text-white">
                    {weatherData.wind.speed}
                    <span className="text-lg font-normal ml-1">Km/h</span>
                  </span>
                  <span className="text-xs text-indigo-200 uppercase tracking-wider">
                    Wind Speed
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-20 text-center text-indigo-200">
            <p className="text-lg">Enter a city to see the weather!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
