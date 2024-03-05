import { useSelector } from 'react-redux';
import { Menu } from "pages/Menu";
import { RenderTodoItem } from 'components/RenderTodoItem';

export const Page4Todos = () => {

    const todoList = useSelector((state) => state.todos.todoList);

    return (         
        <div>
            <Menu />
            <div>Page3 - Todo List Delete Only</div>    
            <hr />
            <div>
                 Todo List in redux state 
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