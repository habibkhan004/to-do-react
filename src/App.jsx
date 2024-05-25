import AppName from "./components/AppName.jsx";
import AddTodo from "./components/AddTodo.jsx";
import TodoItems from "./components/TodoItems.jsx";
import Welcome from "./components/Welcome.jsx";
import "./App.css";
import { useState } from "react";

function App() {
  let todos = [];
  const [todoItems, setTodes] = useState(todos);
  let handleNewItem = (itemName, ItemDate) => {
    let newTodoItems = [...todoItems, { name: itemName, date: ItemDate }];
    setTodes(newTodoItems);
  };
  let handleDeleteClicked = (deletedName) => {
    let newTodoArr = todoItems.filter((item) => item.name !== deletedName);
    setTodes(newTodoArr);
  };
  return (
    <div>
      <center>
        <AppName />
      </center>
      <div className="container">
        <AddTodo newItemHandler={handleNewItem}></AddTodo>
        {todoItems.length === 0 && <Welcome></Welcome>}
        <TodoItems
          todo={todoItems}
          handleDeleteClicked={handleDeleteClicked}
        ></TodoItems>
      </div>
    </div>
  );
}

export default App;
