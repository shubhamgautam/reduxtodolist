import * as React from "react";
import Todolist from "../todolist/todolist";
import "./TodoForm.css";

const TodoForm = ({ add, remove, todolist }) => {
  const [inputText, setInputText] = React.useState("");
  const handleSubmit = () => {
    add(inputText);
    //console.log(Itemlist);
    setInputText("");
  };

  const handleChange = (evt) => {
    if (evt.key === "Enter") {
      handleSubmit();
    } else {
      setInputText(evt.target.value);
    }
  };

  const onRemove = (id) => {
    remove(id);
  };

  return (
    <div className="root-cont">
      <div>
        <h2>Todo List example</h2>
        <h3>by redux</h3>
        <div>
          <input type="text" value={inputText} onChange={handleChange} />
          <button onClick={handleSubmit}>Add</button>
        </div>
        <div>
          {todolist.map((item) => (
            <Todolist {...item} remove={onRemove} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoForm;
