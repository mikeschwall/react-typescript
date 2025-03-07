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
    getMessage: typeof getMessage;
}

type MergedProps = StateProps & DispatchProps;

const TodoList:React.FC<MergedProps> = ({todos,fetchTodos,deleteTodo,getMessage,header}) => {

    useEffect(() => {
        fetchTodos();
    },[]);

    const handleDelete = (id:number) => {
        deleteTodo(id);
    }

    const handleButton = (m:Message) => {
        getMessage(m);
    }

    return (
        <div>
            <h2>{header && header.title}</h2>
            <MyButton changeHeader={() => handleButton({title:"message changed"})}>change</MyButton>
            {todos && todos.map(item => <li onClick={() => handleDelete(item.id)} key={item.title}>{item.title}</li>)}
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