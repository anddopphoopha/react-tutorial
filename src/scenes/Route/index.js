import React from 'react'
import { Route } from 'react-router-dom'
import Login from '../Login'; 
import Movies from '../Movies'
import Detail from '../MovieDetail'
import './styles.css'

function Routes({ usernameSubmit }) {
    return (
        <div className="routeContainer">
            <Route exact path="/login" component={() => <Login usernameSubmit={usernameSubmit} />}/>
            <Route exact path="/movies" component={Movies}/>
            <Route exact path="/movies/:id" component={Detail}/>
        </div>
    )
}

export default Routes