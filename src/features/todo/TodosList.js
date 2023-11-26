import { useSelector } from "react-redux";
import { selectTodos, getSearchData } from "./todosSlice";
import TodoItem from "./components/TodoItem";

function TodosList() {
  const todos = useSelector(selectTodos);
  const searchData = useSelector(getSearchData);

  const renderTodos = todos.map((todo) => {
    let finalData = <></>;
    if (searchData === "") {
      finalData = <TodoItem key={todo.id} todo={todo} />;
    } else {
      if (todo.title.toLowerCase().includes(searchData)) {
        finalData = <TodoItem key={todo.id} todo={todo} />;
      }
    }
    return finalData;
  });

  return <main>{renderTodos}</main>;
}

export default TodosList;
