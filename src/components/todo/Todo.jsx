import React from "react";
import './style.css';

function Todo({todo, onDeleteHandler, onEditHandler}){
    return (

    <div className="todo__container">
              <h2 className="todo__title">{todo.title}</h2>
              <div>{todo.content}</div>
            
              <div className="btns">
                <button className="todo_del" onClick={()=>onDeleteHandler(todo.id)}>
                  삭제
                </button>
                <button className="todo_done" onClick={()=>onEditHandler(todo.id)}>
                  {todo.isDone ? "취소" : "완료"}
                </button>
              </div>
              {/* btns */}

          </div>
        // todo__container

          );
}

export default Todo;