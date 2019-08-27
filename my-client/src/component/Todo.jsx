import React from 'react'

function Todo(props) {
    const {todo} = props
    return (
        <div>
            <span>{todo.title}</span>
            {todo.completed && <span>v</span>}
        </div>
    )
}

export default Todo
