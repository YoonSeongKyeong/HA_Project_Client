import React from 'react'

function Todo(props) {
    const {todo} = props
    return (
        <div>
            <div>{todo.title}</div>
            {todo.completed && <div>완료했다면 v</div>}
        </div>
    )
}

export default Todo
