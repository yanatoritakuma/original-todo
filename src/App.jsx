import React from 'react';
import "./style.scss";

export const App = () => {
  return(
    <div className="todoBox">
      <h1>ToDoリスト</h1>

      <div className="inputTodoBox">
        <input placeholder="TODOを入力"/>
        <button>追加</button>
      </div>

      <div className="inconpleteBox">
        <h2>未完成リスト</h2>
        <ul>
          <div className="listeBox">
            <li>aaaaa</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div className="listeBox">
            <li>aaaaa</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div className="listeBox">
            <li>aaaaa</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>

      <div className="conpleteBox">
        <h2>完成リスト</h2>
        <ul>
          <div className="listeBox">
            <li>iiiiii</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>

    </div>
  );
};