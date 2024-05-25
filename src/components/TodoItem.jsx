import { MdDelete } from "react-icons/md";
function TodoItem({ todoName, todoDate, handleDeleteClicked }) {
  return (
    <div className="row">
      <div className="col-5">{todoName}</div>
      <div className="col-3">{todoDate}</div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => handleDeleteClicked(todoName)}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
}
export default TodoItem;
