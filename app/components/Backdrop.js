import React from 'react'

export default function Backdrop(props) {
    return (
        <div className={props.backdropToggle} onClick={props.onSidebarToggle} />
    )
}
