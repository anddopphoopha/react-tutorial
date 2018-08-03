import React from 'react'
import './styles.css'

function Header({ name }) {
    return (
        <div className="header">
            <p>Top 10 IMDB movies</p>
            { name && <p>Hello, { name }</p> }
        </div>
    )
}

export default Header