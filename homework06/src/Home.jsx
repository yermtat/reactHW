import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <h1>Hello, world</h1>
    </div>
  );
}
