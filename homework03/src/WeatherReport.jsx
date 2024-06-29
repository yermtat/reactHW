import React, { useRef } from "react";
import { useState } from "react";

export default function WeatherReport() {
  const [data, setData] = useState([]);
  const city = useRef();

  function handleClick() {
    console.log(city.current.value);
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city.current.value}&appid=7e1dedf994df2c6df432cfb1daf1a65c&units=metric`
    ).then((res) => {
      res.json().then((data) => {
        setData(data);
      });
    });
    console.log(data);
  }

  return (
    <div>
      <div className="w-screen h-screen m-10">
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
    </div>
  );
}
