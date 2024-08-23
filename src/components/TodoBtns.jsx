/* eslint-disable react/prop-types */
function TodoBtns({
  isEditMode,
  removeTodo,
  toggleEditMode,
  handleChangeTodoName,
}) {
  if (isEditMode) {
    return (
      <>
        <button onClick={handleChangeTodoName} className="todo-item__delete">
          Змінити
        </button>
        <button onClick={toggleEditMode} className="todo-item__delete">
          Відхилити
        </button>
      </>
    );
  }

  return (
    <>
      <button onClick={removeTodo} className="todo-item__delete">
        Видалити
      </button>
      <button onClick={toggleEditMode} className="todo-item__delete">
        Редагувати
      </button>
    </>
  );
}

export default TodoBtns;
