import React from 'react'
import { Link } from 'react-router-dom'

function MainLinkPostButton() {
    return (
        <span><Link to={'/posts'}>게시판</Link></span>
    )
}

export default MainLinkPostButton