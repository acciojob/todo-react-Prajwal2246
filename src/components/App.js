import React, { useState } from "react";
import "./../styles/App.css";
import Todo from "./Todo";

const App = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (!input.trim()) return;
    setTodos([...todos, input]);
    setInput("");
  };

  const deleteTodo = (id) => {
    const filtered = todos.filter((_, i) => i != id);
    setTodos(filtered);
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <h3>To-Do List </h3>

      <input
        type="text"
        placeholder=""
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>Add Todo</button>

      <Todo todos={todos} deletetodo={deleteTodo} />
    </div>
  );
};

export default App;
