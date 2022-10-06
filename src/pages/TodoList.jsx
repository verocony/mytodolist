import React, {useState} from "react";
import Layout from "../components/layout/Layout";
import Header from "../components/header/Header";
import Form from "../components/form/Form";
import List from "../components/list/List";




const TodoList = () => {
    // useState 로 자식 컴포넌트에서 보내준다 todos는 작성되어져 있는 값, setTodos는 작성될 값
    // 자식 컴포넌트들끼리의 정보 교환을 위해 공통된 상위 컴포넌트인 TodoList에서 넘겨줄 useState 선언 (포장지라고 생각!)
    const [todos, setTodos] = useState([
      {
        id: 1,
        title: "리액트 공부하기",
        content: "리액트 모르겠다",
        isDone: false,
      },
      {
        id: 2,
        title: "리액트 공부하기",
        content: "자바스크립트도 모르겠는데,,,?",
        isDone: true,
      },
    ]);
  
    return (
      <Layout>
        <Header />
        {/* props를 내려준다 */}
        <Form todos={todos} setTodos={setTodos}/>
        <List todos={todos} setTodos={setTodos} />
      </Layout>
    );
  };
  
  export default TodoList;