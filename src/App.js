import React, { useState } from 'react';
import Form from "./components/FORM/Form";


import Tasks from './components/TASKS/Tasks';




const appTitle = "Gestor de Tareas"

const list = [
  {id: 1,title: "tarea1 ", description:"lorem ipsum",date:"2022-10-23",state:"incompleted",deleted:false},
  {id: 2,title:"tarea 2",description:"lorem ipsum",date:"2022-10-23",state:"incompleted",deleted:false},
  {id:3, title:"tarea 2",description:"lorem ipsum",date:"2022-10-23",state:"incompleted",deleted:false},

]

const  App=()=>{

 const [todoList, setTodoList] = useState(list)

 const addTodo = item =>{
   setTodoList((oldList)=>[...oldList,item])
 }

 const removeTodo = (id) => {

    const changesTodos = todoList.splice (todo => todo.id !== id);

    setTodoList(changesTodos);
 };

  return (
    <div className="App">
     
          <h1>{appTitle}</h1>
    

      
        <Form addTodo={addTodo}/>
     

     
        <Tasks removeTodoListProp={removeTodo} list={todoList} />
      

    </div>

  );
}

export default App;

