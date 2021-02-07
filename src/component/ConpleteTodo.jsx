import React from 'react';

export const ConpleteTodo = (props) => {
  const { conpleteTodo, onClickBack } = props;
  return(
    <div className="conpleteBox">
        <h2>完成リスト</h2>
        <ul>
          {conpleteTodo.map((todo, index) => {
            return(
              <div className="listeBox">
            <li>{todo}</li>
            <button onClick={() => onClickBack(index)}>戻す</button>
          </div>
            );
          })}
        </ul>
    </div>
  );
};