import {connect} from 'react-redux';
import { useEffect } from "react";
import { AppState } from "../reducers";
import { deleteTodo, fetchTodos, getMessage, Message, Todo } from "../actions";
import MyButton from './MyButton';

interface TodoProps {
    todos:Todo[];
    fetchTodos: () => void;
    deleteTodo(id:number):void;
    header:Message;
    getMessage(m:Message):void;
}

const TodoList:React.FC<TodoProps> = ({todos,fetchTodos,deleteTodo,getMessage,header}) => {

    useEffect(() => {
        fetchTodos();
    },[]);

    const handleDelete = (id:any) => {
        console.log(id);
        deleteTodo(id);
    }

    const handleHeader = (m:Message) => {
        getMessage(m);
    }

    //console.log(todos);

    return (
        <div>
            <h2>Todos</h2>
            <div>{header && header.title}</div>
            <MyButton changeLabel={() => handleHeader({title:"message is changed here"})}>change</MyButton>
            {todos && todos.map(item => <li key={item.id}>{item.title} 
                <button onClick={() => handleDelete(item.id)}>X</button>
            </li>)}
        </div>
    )
}

const mapStateToProps = (state:AppState) => {
    return {
        todos: state.todos,
        header: state.header
    }
}

const mapDispatchToProps = {
    fetchTodos: fetchTodos,
    deleteTodo: deleteTodo,
    getMessage: getMessage
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);