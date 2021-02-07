import React from 'react';

export const InputTodo = (props) => {
  const { todoText, onChangeTodoText, onClickAdd } = props;
  return(
    <div className="inputTodoBox">
      <input placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} />
      <button onClick={onClickAdd}>追加</button>
    </div>
  );
};