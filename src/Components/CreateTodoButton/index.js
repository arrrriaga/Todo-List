import React from "react";
import "./CreateTodoButton.css";

const CreateTodoButton = (props) => {
  const oncliButton = () => {
    props.setOpenModal((prevState) => !prevState);
  };

  return (
    <button className="CreateTodoButton" onClick={oncliButton}>
      +
    </button>
  );
};

export default CreateTodoButton;
