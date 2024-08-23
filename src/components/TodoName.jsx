/* eslint-disable react/prop-types */
function TodoName({
  isEditMode,
  onChangeTodoName,
  defaultTodoName,
  controlledTodoName,
}) {
  if (isEditMode) {
    return (
      <input
        onChange={onChangeTodoName}
        className="todo-item__description"
        style={{ minHeight: "30px" }}
        type="text"
        value={controlledTodoName}
      />
    );
  }

  return (
    <>
      <span className="todo-item__description">{defaultTodoName}</span>
    </>
  );
}

export default TodoName;
