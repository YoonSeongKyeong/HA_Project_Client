import React from 'react'
import { Link } from 'react-router-dom'

function SelectButton(props) {
    return (
        props.value === undefined ? 
        <span>선택</span> : 
        <span><Link to={'/users/' + props.value}>선택</Link></span>
    )
}

export default SelectButton
