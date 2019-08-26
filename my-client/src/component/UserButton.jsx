import React from 'react'

function UserButton(props) {//유저 리스트안에서 사용되며, 유저페이지로 들어가는 링크입니다. 링크버튼 템플릿을 사용합니다.
    return (
        <button onClick={()=>props.onClick(props.user.id)}>{props.user.name}</button>
    )
}

export default UserButton
