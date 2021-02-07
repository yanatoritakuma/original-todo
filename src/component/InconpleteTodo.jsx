import React from 'react';

export const InconpleteTodo = (props) => {
  const { inconpleteTodo, onClickConplete, onClickDelete } = props;
  return(
    <div className="inconpleteBox">
      <h2>未完成リスト</h2>
      <ul>
        {inconpleteTodo.map((todo, index) => {
          return(
            <div key={todo} className="listeBox">
              <li>{todo}</li>
              <button onClick={() => onClickConplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};