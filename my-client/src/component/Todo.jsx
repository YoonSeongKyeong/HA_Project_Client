import React from 'react'

function Todo(props) {
    const { todo, onClick } = props
    return (
        <div>
            <span>
                <button onClick={()=>onClick(todo.id)}>
                    {todo.title}
                </button>
            </span>
            {todo.completed && <span>v</span>}
        </div>
    )
}

export default Todo
