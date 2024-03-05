import React from 'react';
import { deleteTodo } from 'reduxStore/slice/todosSlice';
import { useDispatch } from 'react-redux';

export const RenderTodoItem = ( {item, index} ) => {

    const dispatch = useDispatch();    
    
    return (
        <div key={index}>
            <span>{index}-{item}</span> 
                    <button onClick={ () => { dispatch(deleteTodo(index)); }}>Delete</button>
            <br />
        </div>
    );
}