import React, { useCallback, useState, useMemo, useEffect } from "react";
import { AddTodo } from "./AddTodo/AddTodo";
import TodoList from "./TodoList/TodoList";
import { Filter } from "./Filter/Filter";
import { FILTER_TYPE } from "./constants/filterConstants";

function App() {
  const [todos, setTodos] = useState([]);
  const [, setRender] = useState({});
  const [filtered, setFiltered] = useState(todos);
  const [currentFilter, setCurrentFilter] = useState(FILTER_TYPE.ALL);

  useEffect(() => {
    console.log("FILTERING");
    setFiltered(
      todos.filter(
        (todo) =>
          (todo.done && currentFilter === FILTER_TYPE.DONE) ||
          (!todo.done && currentFilter === FILTER_TYPE.UNDONE) ||
          currentFilter === FILTER_TYPE.ALL
      )
    );
  }, [currentFilter, todos]);

  const createTodos = (value) => {
    setTodos((prevTodos) => {
      setTodos([...prevTodos, { id: Date.now(), value, done: false }]);
    });
  };

  const deleteTodo = useCallback(
    (id) => {
      setTodos((prevTodos) => prevTodos.filter((elem) => elem.id !== id));
    },
    [setTodos]
  );

  const changeFilter = (filterType) => {
    setCurrentFilter(filterType);
  };

  const onChangeTodoState = useCallback(
    (id) => {
      setTodos((prevTodos) =>
        prevTodos.map((todo) => ({
          ...todo,
          done: id === todo.id ? !todo.done : todo.done,
        }))
      );
    },
    [setTodos]
  );

  // const filtered = useMemo(
  //   () =>
  //     todos.filter(
  //       (todo) =>
  //         (todo.done && currentFilter === FILTER_TYPE.DONE) ||
  //         (!todo.done && currentFilter === FILTER_TYPE.UNDONE) ||
  //         currentFilter === FILTER_TYPE.ALL
  //     ),
  //   [currentFilter, todos]
  // );

  return (
    <>
      <button onClick={() => setRender({})}>Rerender</button>
      <Filter changeFilter={changeFilter} currentFilter={currentFilter} />
      <AddTodo createTodos={createTodos} />
      <TodoList
        filtered={filtered}
        deleteTodo={deleteTodo}
        onChangeTodoState={onChangeTodoState}
      />
    </>
  );
}

export default App;
