import React from 'react';
import Link from 'next/link';

// Components
import CloseIcon from '../components/CloseIcon';

export default function Sidebar(props) {
    return (
        <div className={props.sidebarToggle} id="sidebar">
            <div id="sidebar__icon-item">
                <CloseIcon color={'blue'} toggle={props.onSidebarToggle} />
            </div>
            <Link href="/">
                <p className="p-m" id="sidebar__item" onClick={props.onSidebarToggle}>Home</p>
            </Link>
            <Link href="/about">
                <p className="p-m" id="sidebar__item" onClick={props.onSidebarToggle}>About</p>
            </Link>
            <Link href="/services">
                <p className="p-m" id="sidebar__item">Services</p>
            </Link>
            <Link href="/contact">
                <p className="p-m" id="sidebar__item">Contact</p>
            </Link>
            <Link href="/">
                <p className="p-m" id="sidebar__item">Job Application</p>
            </Link>
        </div>
    )
}
