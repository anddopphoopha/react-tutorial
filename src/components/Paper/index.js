import React from 'react'
import './styles.css'

function Paper(props) {
    return (
        <div className={ 'paper paper-' + props.type }>
            {props.children}
        </div>
    )
}

export default Paper