import React, { Component } from 'react'
import UserMessage from './UserMessage'
import UserData from './UserData'

export class NestingComponents extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         is_loaded : true, 
         isLoggedIn : false,
      }
    }
    render() {
        return (
            <div>
                <UserData is_loaded={this.state.is_loaded}/>
                <UserMessage isLoggedIn={this.state.isLoggedIn}/>
            </div>
        )
    }
}

export default NestingComponents