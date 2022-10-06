import React, {useState} from "react";
import "./style.css";


function Form({todos, setTodos}) {  // TodoList 에서 받아온 props
    const initialState = {  // 기본 형식을 넣어주기 위해!
        id:0,
        title:"",
        body:"",
        isDone:false,
    };

    // const [value, setValue] = useState('초기상태값')

    const [todo, setTodo] = useState(initialState);  
    // Form.jsx 의 자식 (List.jsx)에게 정보를 보내주기위해 state를 만듬
    // 부모 컴포넌트인 TodoList에서 선언한 useState가 포장지라면, 여기서 선언한 useState는 그 내용을 채워주는 알맹이!
    
    const onChangeHandler = (event) => {
    // console.log(event, target) 
    // 객체 비구조화 할당으로 인해 event.target.value에서 value와 name을 추출해 사용할 수 있게 된다.
    const {value, name} = event.target;  // 객체 구조분해
    // console.log(event.target.name)
    // console.log(name) = console.log(event.target.name)

    setTodo({...todo, [name] : value, id : todos.length+1});
    //setTodo{}의 풀이 : ...todo는 리액트에서 특정 정보를 선택을 못하기에 전체를 다 가져오기위함, 가져온것에서 ([name]은 key : value는 value) 을 특정해주고,
    console.log(todo)
    }; 

    const onSubmitHandler = (event) => {
    event.preventDefault(); // event 실행 후 페이지 리로딩 되는 것 방지 (form의 기능 중 submit을 하면 자동으로 페이지를 리랜더링하는데 이걸 하면 정보가 다 날아가기 때문에 이를 방지)
    setTodos([...todos, todo]);  // 부모 상태값을 받아옴 props, todo는 현재 form에서 만들어지는 값
    setTodo(initialState); // setTodo를 초기화시킴. 제목과 내용이 안 바뀌면 2개씩 추가되어서 초기화 시켜줘야됨. input창을 빈칸으로!
    }


    return (
        <form className="form__container" onSubmit={onSubmitHandler}>

            <div className="input_box">
                <input 
                type="text" 
                name="title" 
                id="title" 
                value={todo.title} 
                onChange={onChangeHandler} //onChange 변화가 일어났는지 탐지
                placeholder="제목"
                
                />

                <input 
                type="text"
                name="content" 
                id="content" 
                value={todo.content} 
                onChange={onChangeHandler}
                placeholder="내용"
                />
                
            </div>

            <button>추가</button>

        </form>
    )
}

export default Form;

