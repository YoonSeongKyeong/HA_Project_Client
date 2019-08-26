import React from 'react'

function BackButton({history}) {// 이 버튼을 누르면 뒤로 가게 됩니다. 대신 props를 넘겨야 합니다. (즉 한단계 밖으로 나갑니다.)
    return (
        <button onClick={()=>history.goBack()}>뒤로 가기</button>
    )
}

export default BackButton
