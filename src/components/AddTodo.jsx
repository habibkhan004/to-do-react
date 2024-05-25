import { useRef } from "react";
import { BiMessageAdd } from "react-icons/bi";
import style from "./css/Input.module.css";
import { MdTextRotationDown } from "react-icons/md";
function AddTodo({ newItemHandler }) {
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  let onSubmitForm = (event) => {
    event.preventDefault();
    let todoName = todoNameElement.current.value;
    let todoDate = todoDateElement.current.value;
    todoDateElement.current.value = "";
    todoNameElement.current.value = "";
    newItemHandler(todoName, todoDate);
  };

  return (
    <form action="" onSubmit={onSubmitForm}>
      <div className="row">
        <div className="col-5">
          <input
            className={style.input}
            type="text"
            placeholder="Enter Todo Here"
            required
            ref={todoNameElement}
          />
        </div>
        <div className="col-3">
          <input
            ref={todoDateElement}
            className={style.input}
            type="date"
            required
          />
        </div>
        <div className="col-2">
          <button className="btn btn-success">
            <BiMessageAdd />
          </button>
        </div>
      </div>
    </form>
  );
}
export default AddTodo;
