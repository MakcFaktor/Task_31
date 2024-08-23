/* eslint-disable react/prop-types */

import { useState } from "react";
import { useTodo } from "../store/todoSlice";
import TodoName from "./TodoName";
import TodoBtns from "./TodoBtns";

function TodoItem({ todo }) {
  const { fetchRemoveTodo, fetchChangeTodo } = useTodo();
  const [isEditMode, setEditMode] = useState(false);
  const [inputText, setInputText] = useState(todo.text);

  const onChangeChecked = (event) => {
    const checked = event.target.checked;

    fetchChangeTodo({ id: todo._id, body: { checked } });
  };

  const toggleEditMode = () => {
    setEditMode((prevState) => !prevState);
  };

  const onChangeTodoName = (event) => {
    setInputText(event.target.value);
  };

  const removeTodo = () => {
    fetchRemoveTodo(todo._id);
  };

  const handleChangeTodoName = () => {
    fetchChangeTodo({ id: todo._id, body: { ...todo, text: inputText } });
    setEditMode(false);
  };

  return (
    <>
      <input
        onChange={onChangeChecked}
        type="checkbox"
        defaultChecked={todo.checked}
      />
      <TodoName
        isEditMode={isEditMode}
        controlledTodoName={inputText}
        defaultTodoName={todo.text}
        onChangeTodoName={onChangeTodoName}
      />
      <TodoBtns
        handleChangeTodoName={handleChangeTodoName}
        isEditMode={isEditMode}
        removeTodo={removeTodo}
        toggleEditMode={toggleEditMode}
      />
    </>
  );
}

export default TodoItem;
