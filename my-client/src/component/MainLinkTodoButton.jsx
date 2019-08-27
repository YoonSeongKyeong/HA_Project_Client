import React from 'react'
import { Link } from 'react-router-dom'


function MainLinkTodoButton() {
    return (
        <span>
            <Link to={'/users'}>투두</Link>
        </span>
    )
}

export default MainLinkTodoButton