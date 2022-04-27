import React from "react";
import TodoItem from "../TodoItem/TodoItem";

function TodoList(props) {
  console.log("TODOLIST RENDER");
  return (
    <>
      {props.filtered.map((elem) => (
        <TodoItem
          key={elem.id}
          id={elem.id}
          value={elem.value}
          done={elem.done}
          deleteTodo={props.deleteTodo}
          onChangeTodoState={props.onChangeTodoState}
        />
      ))}
    </>
  );
}

export default React.memo(TodoList);
