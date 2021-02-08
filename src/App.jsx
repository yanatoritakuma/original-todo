import React, { useState } from 'react';
import "./style.scss";
import { InputTodo } from './component/InputTodo';
import { InconpleteTodo } from './component/InconpleteTodo';
import { ConpleteTodo } from './component/ConpleteTodo';

export const App = () => {
  const [todoText, setTodoText] = useState([]);
  const onChangeTodoText = (e) => setTodoText(e.target.value);

  const [inconpleteTodo, setInconpleteTodo] = useState([]);

  const [conpleteTodo, setConpleteTodo] = useState([]);

  const onClickAdd = () => {
    if (todoText === '') return;
    const newInconpleteTodo = [...inconpleteTodo, todoText];
    setInconpleteTodo(newInconpleteTodo);
    setTodoText('');
  };

  const onClickDelete = (index) => {
    const newInconpleteTodo = [...inconpleteTodo];
    newInconpleteTodo.splice(index, 1);
    setInconpleteTodo(newInconpleteTodo);
  };

  const onClickConplete = (index) => {
    const newInconpleteTodo = [...inconpleteTodo];
    newInconpleteTodo.splice(index, 1);

    const newConpleteTodo = [...conpleteTodo, inconpleteTodo[index]];
    setInconpleteTodo(newInconpleteTodo);
    setConpleteTodo(newConpleteTodo);
  };

  const onClickBack = (index) => {
    const newConpleteTodo = [...conpleteTodo];
    newConpleteTodo.splice(index, 1);

    const backInconpleteTodo = [...inconpleteTodo, conpleteTodo[index]];

    setConpleteTodo(newConpleteTodo);
    setInconpleteTodo(backInconpleteTodo);
  };



  return(
    <div className="todoBox">
      <h1>ToDoリスト</h1>
      <InputTodo todoText={todoText} onChangeTodoText={onChangeTodoText} onClickAdd={onClickAdd} />
      <InconpleteTodo inconpleteTodo={inconpleteTodo} onClickConplete={onClickConplete} onClickDelete={onClickDelete} />
      <ConpleteTodo conpleteTodo={conpleteTodo} onClickBack={onClickBack} />
      

      

      

    </div>
  );
  
};