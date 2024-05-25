import TodoItem from "./TodoItem.jsx";
let TodoItems = ({ todo, handleDeleteClicked }) => {
  return (
    <>
      {todo.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.date}
          handleDeleteClicked={handleDeleteClicked}
        ></TodoItem>
      ))}
    </>
  );
};
export default TodoItems;
