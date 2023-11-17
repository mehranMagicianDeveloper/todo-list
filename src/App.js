import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TodosList from "./features/todo/TodosList";

function App() {
  return (
    <React.Fragment>
      <div className="app">
        <Navbar />
        <TodosList />
      </div>
    </React.Fragment>
  );
}

export default App;
