import {connect} from 'react-redux'
import ToDoComponent from "./ToDoComponent";
import toggleTodo from "./action"

const mapStateToProps = (state) => {
    console.log(state, "todocomponent")
    return {
        isCompleted: state.isCompleted,
        todo: state.todo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleTodo: () => {
            dispatch(toggleTodo())
        }
    }
}

const ToDoContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ToDoComponent)

export default ToDoContainer
