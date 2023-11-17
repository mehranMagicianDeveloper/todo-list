function TodoItem({ id, title, body, isChecked }) {
  isChecked = true;
  return (
    <main className="todo-container">
      <div className="check-box">
        {isChecked && (
          <div className="tik-box">
            <div className="tik-icon"></div>
          </div>
        )}
      </div>
      <div className="detail-container">
        <h2 className="todo-title">{title}</h2>
        <p className="todo-body">{body}</p>
      </div>
    </main>
  );
}

export default TodoItem;
