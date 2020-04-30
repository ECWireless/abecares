import React from 'react'

export default function CloseIcon(props) {
    return (
        <div className="" id="close-icon" onClick={props.toggle}>
            <p className="p-m" id="close-icon__icon">&#10005;</p>
        </div>
    )
}
