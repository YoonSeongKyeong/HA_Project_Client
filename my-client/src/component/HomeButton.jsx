import React from 'react'
import { Link } from 'react-router-dom'

function HomeButton() {// 이 버튼을 누르면 홈으로 가게 됩니다. 링크 버튼 템플릿을 사용합니다.
    return (
        <span>
            <Link to={'/'}>
                홈
            </Link>
        </span>)
}

export default HomeButton
