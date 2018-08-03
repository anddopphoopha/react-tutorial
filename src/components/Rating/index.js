import React from 'react'
import './styles.css'

function Rating ({ rating }) {
    return (
        <div className="rate">
            <span>{ rating }</span> / 10
        </div>
    )
}

export default Rating