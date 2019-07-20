import {ADD_TODO, TOGGLE_TODO} from './action'
import {combineReducers} from 'redux-loop';

function todo(state = {todo: "Default todo", isCompleted: false}, action) {
    switch (action.type) {
        case TOGGLE_TODO:
            return {
                todo: state.todo,
                isCompleted: !state.isCompleted
            };
        default:
            return state;
    }
}

function todos(state = [{todo: "Default todo", isCompleted: false}, {todo: "Deplicate todo", isCompleted: false}], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    todo: action.todo,
                    isCompleted: false
                }];
        default:
            return state;
    }
}


export default combineReducers({todo, todos});
