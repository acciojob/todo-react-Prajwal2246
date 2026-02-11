import React, { useState } from "react";

function Todo({ todos, deletetodo }) {
  return (
    <div>
      {todos && (
        <div>
          {todos.map((item, idx) => (
            <div key={idx}>
              {item}
              <button onClick={() => deletetodo(idx)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Todo;
