import * as React from "react";
import "./todolist.css";

const todolist = (props) => {
  console.log(props);
  const onClick = () => {
    props.remove(props.id);
  };
  return (
    <div className="task">
      <div>{props.task}</div>
      <button onClick={onClick}>
        <i id={props.id} className="fas fa-trash" />
      </button>
    </div>
  );
};

export default todolist;
