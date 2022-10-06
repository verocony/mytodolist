import React, {useState} from "react";
import './style.css';
import Todo from '../todo/Todo';



function List({ todos, setTodos }){
    const onDeleteHandler = (todoId) => {

        const newTodos = todos.filter((todo)=>{
            return todo.id !== todoId;
        });

        setTodos(newTodos); // 부모 컴포넌트에서 가져온 setTodos를 (newTodos)로 다시 채워줌
    };
    const onEditHandler = (todoId) => {
        const newTodos = todos.map((todo)=>{
            if(todo.id === todoId) {
                return{
                    ...todo,
                    isDone : !todo.isDone,
                };
            } else {
                return {...todo};
            }
        });
        setTodos(newTodos);
    };
    
    return (
        <div className="list__wrap">

                <div className="list__container">
                    <h2 className="list__title">Working 🔥</h2>
                    <div className="list">
                    {todos.map((todo) => {
                        if (!todo.isDone) {
                            return (
                            <Todo
                                todo={todo}
                                key={todo.id}
                                setTodos={setTodos}
                                onDeleteHandler={onDeleteHandler}
                                onEditHandler={onEditHandler}
                            />
                            );
                        } else {
                            return null;
                        }
                    })}
                    </div>
                    {/* list */}
                </div>
                {/* list__container */}


                <div className="list__container">
                    <h2 className="list__title">Done 😊</h2>
                    <div className="list">
                    {todos.map((todo) => {
                        if (todo.isDone) {
                            return (
                            <Todo
                                todo={todo}
                                key={todo.id}
                                setTodos={setTodos}
                                onDeleteHandler={onDeleteHandler}
                                onEditHandler={onEditHandler}
                            />
                            );
                        } else {
                            return null;
                        }
                    })}
                    </div>
                    {/* list */}
                </div>
                {/* list__container */}
           </div>
        //    list__wrap
           );
}

export default List;