import React from 'react';

export default function TodoItem({todo}) {
  return (
    <div>
      <h2>{todo.title}</h2>
      <p>{todo.desc}</p>
      <button className="btn btn-sm btn-danger">Delete</button>
      
    </div>
  );
}
