// Создайте приложение для отображения информации о городах страны.
// Нужно отображать такие данные:

// Название страны
// Название города
// Краткое описание города
// Герб города
// Количество жителей
// Площадь города

import React from "react";

export default function Cities(proms) {
  const country = {
    countryName: proms.data.countryName,
    countryCities: proms.data.countryCities,
  };

  return (
    <div>
      <h1 class="font-bold text-6xl text-center m-10 font-serif">
        {country.countryName}
      </h1>
      <div class="flex justify-center w-screen h-screen m-10">
        <ul class="flex">
          {country.countryCities.map((x) => (
            <li class="m-10 size-30">
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  class="w-full"
                  src={x.imagePath}
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">{x.name}</div>
                  <p class="text-gray-700 text-base">{x.summary}</p>
                </div>
                <div class="px-6 pt-4 pb-2">
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    population: {x.population}
                  </span>
                  <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    area: {x.area}
                    <span>km&sup2;</span>
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
