import React, { Component } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default class Home extends Component {
  render() {
    return (
      <div>
        <header>
          <Navbar />
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    );
  }
}

// import "./App.css";
// import Login from "./Login";
// import Navbar from "./Navbar";
// import Home from "./Home";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <Login/>
//     </div>
//   );
// }

// export default App;
