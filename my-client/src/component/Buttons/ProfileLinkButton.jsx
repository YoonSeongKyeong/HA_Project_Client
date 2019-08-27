import React from 'react'
import { Link } from 'react-router-dom'

function ProfileLinkButton(props) {//이 버튼을 누르면 해당 유저의 프로필 페이지로 가게 됩니다.
    return (
        <span><Link to={props.match.url}>프로필</Link></span>)
}

export default ProfileLinkButton
