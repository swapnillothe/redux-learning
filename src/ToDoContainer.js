import {connect} from 'react-redux'
import ToDoComponent from "./ToDoComponent";
import toggleTodo from "./action"

const mapStateToProps = (state) => {
    return {
        isCompleted: state.todo.isCompleted,
        todo: state.todo.todo
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleTodo: () => {
            dispatch(toggleTodo())
        }
    }
};

const ToDoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoComponent);

export default ToDoContainer
