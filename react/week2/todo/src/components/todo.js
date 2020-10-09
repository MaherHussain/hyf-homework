import React, { useState,useEffect} from "react";
import Addtodo from "./AddTodo";
import Counter from "./counter";
const todosArr = [
  {
    id: 1,
    description: "Get out of bed",
  },
  {
    id: 2,
    description: "Brush teeth",
  },
  {
    id: 3,
    description: "Eat breakfast",
  },
];

const TodoList = (props) => {
   const [todos, setTodo] = useState(todosArr);
  
   
 
   const addTodo = () => {
    const arrLength = todos.length;
    const newTodo = {
      id: arrLength + 1,
      description: "randomText" + (arrLength + 1),
    };
    const newArray = todos.concat(newTodo);

    setTodo(newArray);
    console.log(newArray);
  };
  const deleteTodo = (id, index) => {
    const deleteditem = todos.filter((item) => {
      return item.id === id;
    });

    index = todos.findIndex((x) => x.id === id);

    todos.splice(index, 1);
    const newArr = todos.map((item) => {
      return item;
    });
    console.log(newArr);
    setTodo(newArr);
  };
  const completeTodo = (id) => {
    const updateTodo = todos.map((elem) => {
      if (elem.id === id) {
        elem.isComplete = !elem.isComplete;
      }
      return elem;
    });
    setTodo(updateTodo);
  };
 




  return (
    <div>
     <Counter />
      <ul>
        {todos.length === 0 && <p>no items</p>}

        {todos.map((todo, index) => {
          return (
            <li
              className={todo.isComplete ? "todo-row complete" : "todo-row"}
              key={index}
            >
              {todo.description}
              <input type="checkbox" onClick={() => completeTodo(todo.id)} />
              <button onClick={() => deleteTodo(todo.id)}>delete</button>;
            </li>
          );
        })}
      </ul>
      <Addtodo addTodo={addTodo} />
    </div>
  );
};

export default TodoList;