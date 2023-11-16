function TodoItem({ id, title, body }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
}

export default TodoItem;
