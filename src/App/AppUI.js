import React, { useContext } from "react";
import "./App.css";
import { TodoContext } from "../TodoContext";
import CreateTodoButton from "../Components/CreateTodoButton";
import TodoCounter from "../Components/TodoCounter/index.js";
import TodoItem from "../Components/TodoItem";
import TodoList from "../Components/TodoList";
import TodoSearch from "../Components/TodoSearch";
import Modal from "../Components/Modal";
import TodoForm from "../Components/TodoForm";

const AppUI = () => {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = useContext(TodoContext);
  return (
    <>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <p>Desesperate, hubo un error...</p>}
        {loading && <p>Estamos cargando, no desesperes...</p>}
        {!loading && !searchedTodos.length && <p>Crea tu primer todo</p>}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} />
    </>
  );
};

export default AppUI;
