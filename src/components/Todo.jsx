import React, { useState } from "react";

function Todo({ todos, deletetodo }) {
  return (
    <div>
      {todos && (
        <ul>
          {todos.map((item, idx) => (
            <li key={idx}>
              {item}
              <button onClick={() => deletetodo(idx)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Todo;
