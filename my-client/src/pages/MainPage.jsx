import React from 'react'
import {MainLinkTodoButton, MainLinkPostButton} from '../component'

function MainPage() {
    return (
        <div>
            <div>어플리케이션을 골라주세요</div>
            <div>
                <MainLinkTodoButton/>
                <MainLinkPostButton/>
            </div>
        </div>
    )
}

export default MainPage
