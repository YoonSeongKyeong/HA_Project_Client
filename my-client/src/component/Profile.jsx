import React, { Component } from 'react'
import { BackButton } from '../component'

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                img:'',
                name:'이름',
                email:'이메일',
                phone:'모바일'
            }
            // ,
            // image:""
        }
    }

    componentDidMount() {
        let targetUrl1 = 'https://koreanjson.com/users/' + this.props.match.params.id
        fetch(targetUrl1).then(response => response.json()).then(result => (this.setState({user:result})))
    }

    render() {
        return (
            <div>
                <BackButton history={this.props.history} />
                <div>
                    <img src="https://randomuser.me/api/portraits/men/64.jpg" alt=""/>
                </div>
                <div>
                    <span>이름</span> <span>{this.state.user.name}</span>
                </div>
                <div>
                    <span>이메일</span> <span>{this.state.user.email}</span>
                </div>
                <div>
                    <span>모바일</span> <span>{this.state.user.phone}</span>
                </div>
            </div >
        )
    }
}

export default Profile