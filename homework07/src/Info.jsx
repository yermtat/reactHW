import React from "react";
import { useSelector } from "react-redux";
import { selectInfo } from "./store/infoSlice";
import { Link } from "react-router-dom";

export default function Info() {
  const user = useSelector(selectInfo);
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="bg-red-300 rounded-[30px] m-4 p-4">
        <h1 className="font-bold text-4xl text-center m-4">Userinfo</h1>
        <div className="grid">
          <label className="font-mono text-xl m-5">
            Username: {user.username}
          </label>
          <label className="font-mono text-xl m-5">Email: {user.email}</label>
          <label className="font-mono text-xl m-5">Name: {user.name}</label>
          <label className="font-mono text-xl m-5">
            Surname: {user.surname}
          </label>
          <label className="font-mono text-xl m-5">Age: {user.age}</label>
          <label className="font-mono text-xl m-5">
            Workplace: {user.workplace}
          </label>
          <label className="font-mono text-xl m-5">
            Position: {user.position}
          </label>
        </div>

        <div className="flex justify-center">
          <Link
            to="/edit"
            class="bg-blue-200 border-7 border-black lg:rounded-xl w-24 h-10 hover:text-blue-600 hover:bg-gray-200 text-center"
          >
            Edit
          </Link>
        </div>
      </div>
    </div>
  );
}

{
  /* <input
  id="countryCode"
  className="m-1 border p-3 dark:bg-indigo-700 dark:text-gray-300  dark:border-gray-700 shadow-md placeholder:text-base focus:scale-105 ease-in-out duration-300 border-gray-300 rounded-lg w-full"
  type="text"
  placeholder="Enter a country code, ex: US, GB"
  ref={countryCode}
></input>; */
}
