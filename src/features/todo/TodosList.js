import { useSelector } from "react-redux";
import { selectTodos } from "./todosSlice";
import TodoItem from "./components/TodoItem";

function TodosList() {
  const todos = useSelector(selectTodos);

  const renderTodos = todos.map((todo) => {
    return <TodoItem key={todo.id} title={todo.title} body={todo.body} />;
  });
  return <main>{renderTodos}</main>;
}

export default TodosList;
