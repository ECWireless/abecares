import React from 'react'

export default function CloseIcon(props) {
    return (
        <div id="close-icon" onClick={props.toggle}>
            {props.color === 'blue'
            ? <p style={{color: '#2A558C'}} className="p-m" id="close-icon__icon">&#10005;</p>
            : <p className="p-m" id="close-icon__icon">&#10005;</p>
        }
        </div>
    )
}
