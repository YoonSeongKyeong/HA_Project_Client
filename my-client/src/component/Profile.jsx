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
        // let targetUrl2 = 'https://randomuser.me/api/portraits/men/64.jpg'// 그림 관련
        // const proxyurl = "https://cors-anywhere.herokuapp.com/";
        // fetch(proxyurl+targetUrl2)
        // .then(data =>{
        //     var binaryData = [];
        //     binaryData.push(data);
        //     return window.URL.createObjectURL(new Blob(binaryData, {type: "image/jpeg"}))})
        // .then(ret=>this.setState({image:ret.slice(5)}))
    }

    render() {
        return (
            <div>
                <BackButton history={this.props.history} />
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