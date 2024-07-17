import React from "react";
import { getItem } from "./Items";
import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  const item = await getItem(params.itemId);
  return { item };
}

export default function ItemCard() {
  const { item } = useLoaderData();
  return (
    <div className="flex justify-center">
      <div className="block justify-center m-10 w-2/5 h-3/5 border border-green-300 rounded-xl bg-gray-100">
        <div className="static m-10">
          <h1 className="m-3 font-bold text-4xl font-serif text-center">
            {item.name}
          </h1>
          <img className="w-full" src={item.photo} />
        </div>

        <div className="static m-5">
          <p className="m-1 font-sans font-base">{item.summary}</p>
        </div>
        <div className="static m-5">
          <span className="m-1 font-sans font-base">
            materials: {item.materials}
          </span>
        </div>
        <div className="static m-10">
          <span className="font-bold text-xl">Price: ${item.price}</span>
        </div>
      </div>
    </div>
  );
}
