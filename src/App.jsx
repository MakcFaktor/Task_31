import { useEffect } from "react";
import { useTodo } from "./store/todoSlice";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

export default function App() {
  const { todo, fetchTodos, fetchAddTodo } = useTodo();

  useEffect(() => {
    fetchTodos();
  }, []);

  const onSubmit = (data, formikBag) => {
    fetchAddTodo(data.text);
    formikBag.resetForm();
  };

  return (
    <div className="container">
      <TodoForm onSubmit={onSubmit} />
      <TodoList items={todo.items} />
    </div>
  );
}
