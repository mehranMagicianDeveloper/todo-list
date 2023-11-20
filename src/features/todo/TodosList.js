import { useSelector } from "react-redux";
import { selectTodos, getSearchData } from "./todosSlice";
import TodoItem from "./components/TodoItem";

function TodosList() {
  const todos = useSelector(selectTodos);
  const searchData = useSelector(getSearchData);

  console.log("====================================");
  console.log(`serching: ${searchData}`);
  console.log("====================================");

  const renderTodos = todos.map((todo) => {
    return <TodoItem key={todo.id} todo={todo} />;
  });
  return <main>{renderTodos}</main>;
}

export default TodosList;
