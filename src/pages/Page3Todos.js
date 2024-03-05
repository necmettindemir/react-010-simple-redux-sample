import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from 'reduxStore/slice/todosSlice';
import { Menu } from "pages/Menu";
import { RenderTodoItem } from 'components/RenderTodoItem';


export const Page3Todos = () => {

    const [todo, setTodo] = React.useState('');

    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todos.todoList);

    return (         
        <div>
            <Menu />
            <div>Page3 - Todo List Add/Delete</div>                    
            <hr />
            <div>
                 <input type='text' value={todo} onChange={ (e) => setTodo(e.target.value)} /> 
                 <button onClick={ () => { dispatch(addTodo(todo)); setTodo('');  }}>Add</button>
                 <hr /> 
                 {todoList.map( (item, index) => {
                    return ( <RenderTodoItem
                                key={index}
                                item = {item}
                                index = {index} />);
                 })}               
            </div>
        </div>            
    );
}