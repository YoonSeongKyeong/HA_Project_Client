import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ProfileLinkButton, TodoLinkButton, Profile, TodoList } from '../component'


function UserPage(props) {
    return (
        <div>
            <ProfileLinkButton {...props}/>
            <TodoLinkButton {...props}/>
            <Switch>
                <Route exact path="/users/:id" render={(props)=><Profile {...props} /> } />
                <Route path="/users/:id/todos" render={(props)=><TodoList {...props} /> } />
            </Switch>
        </div>
    )
}

export default UserPage
