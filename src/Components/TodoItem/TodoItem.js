const TodoItem = ({ deleteTodo, props ,handleCompleted }) => {
  const { id , title ,isCompleted } = props;

  return (
    <li className="siteItem">
      <strong className={isCompleted ? "completed" : "text"} >{title}</strong>
      <div className="checkbtn">
      <input checked={isCompleted} onChange={handleCompleted} data-id={id} type="checkbox" className="checkbox"/>
      <button onClick={deleteTodo} data-id={id} className="siteBtn">
        Delete
      </button>
      </div>
    </li>
  );
};

export default TodoItem;
