import React, { useEffect, useRef } from "react";
import { items, categories } from "./Items";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const [cardItems, setCardItems] = useState(items);
  // const selectedCat = useRef();
  const [selectedCat, setSelectedCat] = useState("all");

  useEffect(() => {
    if (selectedCat == "all") setCardItems(items);
    else setCardItems(items.filter((x) => x.category == selectedCat));
  }, [selectedCat]);

  const navigate = useNavigate();

  const navigateTo = (path) => {
    navigate(path);
  };

  return (
    <div>
      <h1 class="font-bold text-6xl text-center m-10 font-serif">Products</h1>

      <form class="max-w-sm mx-auto">
        <label
          for="countries"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select a category
        </label>
        <select
          id="category"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          // ref={selectedCat}
          defaultValue={selectedCat}
          onChange={(event) => setSelectedCat(event.target.value)}
        >
          <option value="all">All</option>
          <option value={categories[0]}>{categories[0]}</option>
          <option value={categories[1]}>{categories[1]}</option>
          <option value={categories[2]}>{categories[2]}</option>
          <option value={categories[3]}>{categories[3]}</option>
        </select>
      </form>

      <div class="flex justify-center w-screen h-screen m-10">
        <ul class="flex">
          {cardItems.map((x) => (
            <li class="m-10 size-30">
              <div class="max-w-sm rounded overflow-hidden shadow-lg">
                <img
                  class="w-full"
                  src={x.photo}
                  alt="Sunset in the mountains"
                />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">{x.name}</div>
                  <p class="text-gray-700 text-base">{x.price}</p>
                </div>

                <div class="flex justify-center m-10">
                  <button
                    class="bg-blue-200 border border-green-400 rounded-lg"
                    onClick={""}
                  >
                    More
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
