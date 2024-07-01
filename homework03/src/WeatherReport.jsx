import React, { useRef } from "react";
import { useState } from "react";
import Sun from "./sun.png";
import Moon from "./moon.png";

export default function WeatherReport() {
  const [data, setData] = useState();
  const city = useRef();
  const [sunTime, setSunTime] = useState({});

  async function weatherFetch() {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${city.current.value}&appid=7e1dedf994df2c6df432cfb1daf1a65c&units=metric`,
        {
          method: "GET",
        }
      );

      if (response.ok) {
        await response.json().then((data) => {
          setData(data);

          setSunTime({
            sunriseTime: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
            sunsetTime: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
            date: new Date(data.dt * 1000).toLocaleDateString(),
            currentTime: new Date(
              Date.now() - (14400 - data.timezone) * 1000
            ).toLocaleTimeString(),
          });
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  function handleClick() {
    weatherFetch();
  }

  function renderImage() {
    const cityTime = Date.now() / 1000 - 14400 + data.timezone;

    if (cityTime > data.sys.sunrise && cityTime < data.sys.sunset) {
      return <img src={Sun} />;
    } else if (cityTime < data.sys.sunrise || cityTime > data.sys.sunset) {
      return <img src={Moon} />;
    }
  }

  return (
    <div>
      <div className=" flex justify-center m-10">
        <div className="w-1/2">
          <input
            id="city"
            className="border p-3 dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
            type="text"
            placeholder="Enter a city"
            ref={city}
            required
          ></input>

          <button
            className="bg-gradient-to-r dark:text-gray-300 bg-black shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
            type="Button"
            onClick={handleClick}
          >
            Search
          </button>
        </div>
      </div>

      {data && (
        <div className="min-h-screen flex justify-center m-10">
          <div className="flex flex-col bg-white rounded p-4 w-full max-w-xs">
            <div className="font-bold text-xl">{data.name}</div>
            <div className="text-sm text-gray-500">{sunTime.date}</div>
            <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
              {renderImage()}
            </div>
            <div className="flex flex-row items-center justify-center mt-6">
              <div className="font-medium text-6xl">{data.main.temp}°C</div>
              <div className="flex flex-col items-center ml-6">
                <div>{data.weather[0].main}</div>
                <div className="mt-1">
                  <span className="text-sm">
                    <i className="far fa-long-arrow-up"></i>
                  </span>
                  <span className="text-sm font-light text-gray-500">
                    {data.main.temp_max}°C
                  </span>
                </div>
                <div>
                  <span className="text-sm">
                    <i className="far fa-long-arrow-down"></i>
                  </span>
                  <span className="text-sm font-light text-gray-500">
                    {data.main.temp_min}°C
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between mt-6">
              <div className="flex flex-col items-center">
                <div className="font-medium text-sm">Wind</div>
                <div className="text-sm text-gray-500">
                  {data.wind.speed} k/h
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="font-medium text-sm">Humidity</div>
                <div className="text-sm text-gray-500">
                  {data.main.humidity}%
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="font-medium text-sm">Visibility</div>
                <div className="text-sm text-gray-500">{data.visibility} m</div>
              </div>
            </div>
            <div className="flex flex-row justify-between mt-6">
              <div className="flex flex-col items-center">
                <div className="font-medium text-sm">Sunrise</div>
                <div className="text-sm text-gray-500">
                  {sunTime.sunriseTime}
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="font-medium text-sm">Sunset</div>
                <div className="text-sm text-gray-500">
                  {sunTime.sunsetTime}
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="font-medium text-sm">Current time</div>
                <div className="text-sm text-gray-500">
                  {sunTime.currentTime}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
