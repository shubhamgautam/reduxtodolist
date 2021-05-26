import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import todoReducer from "./reducers";
import { v4 as uuid } from "uuid";
import Todo from "./components/TodoForm/TodoForm";

const store = createStore(todoReducer, [{ id: 1, task: "initial task" }]);
const rootEl = document.getElementById("root");

const add = (text) => {
  store.dispatch({ type: "ADD", id: uuid(), text: text });
};

const remove = (id) => {
  store.dispatch({ type: "DELETE", id: id });
};

const render = () =>
  ReactDOM.render(
    <>
      <Todo add={add} remove={remove} todolist={store.getState()} />
    </>,
    rootEl
  );

render();
const unsubscribe = store.subscribe(render);
