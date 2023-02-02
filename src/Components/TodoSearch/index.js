import React, { useContext } from "react";
import { TodoContext } from "../../TodoContext";
import "./TodoSearch.css";

const TodoSearch = () => {
  const { searchValue, setSearchValue } = useContext(TodoContext);
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return [
    <input
      className="TodoSearch"
      placeholder="Buscar ToDo"
      value={searchValue}
      onChange={onSearchValueChange}
    />,
  ];
};

export default TodoSearch;
