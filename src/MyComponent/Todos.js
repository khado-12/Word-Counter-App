import React from 'react'
import TodoItem from '../MyComponent/TodoItem';
export default function Todos (props)  {
  return (
   <div className='container'> 
       
     <h4>Todo List</h4>
     <TodoItem todo={props.todos[0]}/>
    
   </div>
  );
}