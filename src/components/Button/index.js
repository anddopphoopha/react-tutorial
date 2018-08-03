import React from 'react'
import './styles.css'

function Button(props) {
    const buttonStyle = props.primary ? 'orangeButton' : 'greyButton'
    return <button className={buttonStyle} {...props} >{props.children}</button>
}

export default Button
