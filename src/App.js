import "./App.css";
import Navbar from "./components/Navbar";
import TodosList from "./features/todo/TodosList";

function App() {
  return (
    <>
      <Navbar />
      <TodosList />
    </>
  );
}

export default App;
