import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { UserList, HomeButton } from '../component'
import { UserPage } from '../pages'

class TodoInPage extends Component {// 여기는 User의 id만 받아와서 id 리스트를 뿌리는 역할
    constructor(props) {
        super(props)

        this.state = {// fake data로 미리 rendering한다.
            users: [
                { "id": 1, "name": "이정도", "username": "jd1386", "email": "lee.jungdo@gmail.com", "phone": "010-3192-2910", "website": "https://leejungdo.com", "province": "경기도", "city": "성남시", "district": "분당구", "street": "대왕판교로 160", "zipcode": "13525", "createdAt": "2019-02-24T16:17:47.000Z", "updatedAt": "2019-02-24T16:17:47.000Z" },
                { "id": 2, "name": "김재완", "username": "lastrites2018", "email": "jaewan@gmail.com", "phone": "02-879-5000", "website": "https://github.com/lastrites2018", "province": "", "city": "서울특별시", "district": "관악구", "street": "관악로 145", "zipcode": "08832", "createdAt": "2019-02-24T16:17:47.000Z", "updatedAt": "2019-02-24T16:17:47.000Z" }, 
                { "id": 3, "name": "김성은", "username": "sunnysid3up", "email": "sunny@daum.net", "phone": "010-4280-1991", "website": "https://github.com/sunnysid3up", "province": "", "city": "서울특별시", "district": "강동구", "street": "성내로 25", "zipcode": "05397", "createdAt": "2019-02-24T16:17:47.000Z", "updatedAt": "2019-02-24T16:17:47.000Z" }
            ]
        }
    }

    componentDidMount() {
        this.getUserListFromServer();
    }

    getUserListFromServer() {
        let targetUrl = 'https://koreanjson.com/users';
        fetch(targetUrl)
            .then(response => response.json())
            .then(json => this.setState({ users: json }))
            .catch(error => console.log(error));
    }

    render() {
        const {users} = this.state
        return (
            <div>
                <HomeButton />
                <Switch>
                    <Route exact path="/users" render={(props)=><UserList {...props} users={users} />} />
                    <Route path="/users/:id" render={(props)=><UserPage {...props} users={users} /> } />
                </Switch>
            </div>
        )
    }
}

export default TodoInPage