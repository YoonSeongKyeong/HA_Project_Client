import React, {Component} from 'react'
import { UserButton, SelectButton, BackButton } from '../component'

class UserList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value:undefined// 선택한 유저의 id를 갖고 있습니다. 기본값은 선택 안됨을 뜻하는 undefined
        }
        this.handleUserClick = this.handleUserClick.bind(this);
    }

    handleUserClick(id) {
        this.setState({value:id})
    }

    render() {
        return (
            <div>
                <div>유저 리스트</div>
                {this.props.users.map((user)=>(
                    <UserButton key={user.id} user={user} onClick={this.handleUserClick} />
                ))}
                <div>
                    <SelectButton value={this.state.value} /> <BackButton history={this.props.history} />
                </div>
            </div>
        )
    }
}

export default UserList