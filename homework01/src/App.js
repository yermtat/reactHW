import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import Register from "./Register";
import ToDoList from "./ToDoList";

function App() {
  return (
    <div className="App">
      <main className="main">
        {/* <Login /> */}
        {/* <Register /> */}
        <ToDoList />
      </main>
    </div>
  );
}

export default App;
