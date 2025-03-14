import {connect} from 'react-redux';
import { deleteTodo, fetchTodos, getMessage, Message, Todo } from '../actions';
import { AppState } from '../reducers';
import { useEffect } from 'react';
import MyButton from './MyButton';

interface StateProps {
    todos: Todo[];
    header: Message;
}

interface DispatchProps {
    fetchTodos: () => void;
    deleteTodo: typeof deleteTodo;
    getMessage: typeof getMessage
}

type MergedProps = StateProps & DispatchProps;

const TodoList:React.FC<MergedProps> = ({todos,header,fetchTodos,deleteTodo,getMessage}) => {

    useEffect(() => {
        fetchTodos();
    },[]);

    const handleClick = (m:Message) => {
        getMessage(m);
    }

    return (
        <div>
            <h2>{header.title}</h2>
            <MyButton changeLabel={() => handleClick({title:"Title is changed"})}>change header</MyButton>
            {todos && todos.map(item => <li onClick={() => deleteTodo(item.id)} key={item.id}>{item.title}</li>)}
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
    fetchTodos:fetchTodos,
    deleteTodo: deleteTodo,
    getMessage: getMessage
}

export default connect(mapStateToProps,mapDispatchToProps)(TodoList);