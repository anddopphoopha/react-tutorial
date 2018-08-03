import React from 'react'
import { Route } from 'react-router-dom'
import Login from '../Login'; 
import Movies from '../Movies';

function Routes() {
    return (
        <div>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/movies" component={Movies}/>
        </div>
    )
}

export default Routes