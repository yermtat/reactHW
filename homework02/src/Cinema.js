// Задание 1
// Создайте приложение для отображения расписания кинотеатра.
// Нужно отображать такие данные:

// Название фильма
// Описание фильма
// Постер
// Сеансы

import React, { useState } from "react";

export default function Cinema(props) {
  const film = {
    name: props.name,
    summary: props.summary,
    poster: props.poster,
    shows: props.shows,
  };

  return (
    <div>
      <div class="flex justify-center items-center h-screen w-screen">
        <ul class="list-none flex">
          <li class="filmPoster h-1/4 w-1/4 m-10">
            <img src={film.poster} class="h-full" />
          </li>
          <li id="filmInfo" class="m-10">
            <div class="block max-w-[18rem] rounded-lg border border-success-600 bg-transparent text-surface shadow-secondary-1 dark:bg-surface-dark dark:text-white">
              <div class="p-6">
                <h5 class="mb-2 text-xl font-medium leading-tight text-success-600">
                  {film.name}
                </h5>
                <p class="text-base text-success-600">{film.summary}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>

      <div class="flex justify-center">
        <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Schedule
          </span>
        </h1>
      </div>

      <div class="flex justify-center h-screen w-screen">
        <ul>
          <li>
            <ul class="flex flex-col sm:flex-row">
              <li class="w-80 inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px  dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
                <span class="mr-10 ml-10">Session</span>
              </li>
              <li class="w-80 inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px  dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
                <span class="mr-10 ml-10">Cinema</span>
              </li>
              <li class="w-80 inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px  dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
                <span class="mr-10 ml-10">Hall</span>
              </li>
              <li class="w-80 inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px  dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
                <span class="mr-10 ml-10">Price</span>
              </li>
            </ul>
          </li>

          <li>
            {film.shows.map((x) => (
              <ul class=" flex-col sm:flex-row">
                <li class="w-80 inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px  dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
                  <span class="mr-10 ml-10">{x.session}</span>
                </li>
                <li class="w-80 inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px  dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
                  <span class="mr-10 ml-10">{x.cinema}</span>
                </li>
                <li class="w-80 inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px  dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
                  <span class="mr-10 ml-10">{x.hall}</span>
                </li>
                <li class="w-80 inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px  dark:bg-neutral-900 dark:border-neutral-700 dark:text-white">
                  <span class="mr-10 ml-10">{x.price}</span>
                </li>
              </ul>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
}
