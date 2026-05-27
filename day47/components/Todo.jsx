import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  addTodo,
  toggleTodo,
} from "../features/todosSlice";

function Todo() {
  const [text, setText] = useState("");

  const todos = useSelector((state) => state.todos.todos);

  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim() !== "") {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div>
      <h1>Todo App</h1>

      <input
        type="text"
        placeholder="Enter todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleAddTodo}>
        Add Todo
      </button>

      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => dispatch(toggleTodo(todo.id))}
            style={{
              cursor: "pointer",
              textDecoration: todo.completed
                ? "line-through"
                : "none",
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;