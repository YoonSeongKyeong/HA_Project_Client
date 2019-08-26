import React from 'react'
import {Link} from 'react-router-dom'

function handleClick(params) {
    
}

const WithLink = (wrappedComponent, link) => props => {//이 버튼은 다른 링크 버튼을 만드는 템플릿입니다. 지금은 시간상 나중에 진행
    return (
        <div><Link to={link}>
            {/* <wrappedComponent/> */}
            </Link></div>
        
    )
}

export default WithLink;
