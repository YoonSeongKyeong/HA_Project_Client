import React from 'react'
import { Link } from 'react-router-dom'

function TodoLinkButton(props) {// 이 버튼을 누르면 유저페이지 안의 투두 목록으로 이동합니다. 미완료 투두 갯수를 표시해주기도 합니다.
    return (
        <div>
            <Link to={props.match.url+"/todos"}>
                투두
            </Link>
        </div>
    )
}

export default TodoLinkButton
