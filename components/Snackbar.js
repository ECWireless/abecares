import React from 'react'

export default function Snackbar(props) {
    return (
        <div id={`snackbar--${props.success ? 'success' : 'fail'}`}>
            <p className="p-s white">{props.success ? 'Message sent!' : 'Message failed to send.'}</p>
            <div id="snackbar__close-container" onClick={props.onCloseSnackbar}>
                <p className="p-s white" id="snackbar__close-icon">&#10005;</p>
            </div>
        </div>
    )
}
