import React from 'react';
import TodoList from './TodoList';
import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import combineReducers from '../reducers/index';
import thunk from 'redux-thunk';
const store = createStore(combineReducers,applyMiddleware(thunk));

console.log(store.getState());

class App extends React.Component {
  render() {
    return (
        <div>
            <Provider store={store}>
            <TodoList/>
            </Provider>
        </div>
    )
  }
}

export default App;