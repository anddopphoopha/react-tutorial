import React from 'react'
import Paper from '../../../../components/Paper'
import Field from '../../../../components/Field'
import Button from '../../../../components/Button'
import './styles.css'

function Login({ onUsernameChange, username, isValid, onSubmit }) {
    return (
        <div className="login">
            <Paper type="login">
                <h1>Login</h1>
                <div className="fieldWrapper">
                    <Field value={username} onChange={onUsernameChange}/>
                </div>
                    { !isValid && <p className="error">This field is required</p> }
                <Button primary onClick={onSubmit}>Submit</Button>
            </Paper>
        </div>
    )
    
}

export default Login