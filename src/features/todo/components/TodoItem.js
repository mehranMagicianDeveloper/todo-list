function TodoItem({ todo }) {
  return (
    <main className="todo-container">
      <div className="check-box">
        {todo.isItDone && (
          <div className="tik-box">
            <div className="tik-icon"></div>
          </div>
        )}
      </div>
      <div className="detail-container">
        <h2 className="todo-title">{todo.title}</h2>
        <p className="todo-body">{todo.body}</p>
      </div>
    </main>
  );
}

export default TodoItem;
