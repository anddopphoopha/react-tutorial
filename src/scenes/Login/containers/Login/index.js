import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Login from '../../components/Login'

class LoginContainer extends Component {
    state = { 
        username: '',
        isValid: false
    }

    onUsernameChange = (event) => {
        const { value } = event.target
        if(value) {
            this.setState({ username: value, isValid: true })
        } else {
            this.setState({ username: value, isValid: false })
        }
    }

    onSubmit = () => {
        const { isValid, username } = this.state
        const { history, usernameSubmit } = this.props
        if (isValid) {
            history.push('/movies')
            usernameSubmit(username)
        }
    }

    render() {
        return (
            <div>
                <Login
                    onUsernameChange={this.onUsernameChange}
                    username={this.state.username}
                    isValid={this.state.isValid}
                    onSubmit={this.onSubmit}
                />
            </div>
        )
    }
}


export default withRouter(LoginContainer)