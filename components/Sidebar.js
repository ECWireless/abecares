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
            <p className="p-m" id="sidebar__item" onClick={props.onSidebarToggle.bind(this, 'about')}>About</p>
            <p className="p-m" id="sidebar__item" onClick={props.onSidebarToggle.bind(this, 'testimonials')}>Testimonials</p>
            <p className="p-m" id="sidebar__item" onClick={props.onSidebarToggle.bind(this, 'services')}>Services</p>
            <p className="p-m" id="sidebar__item" onClick={props.onSidebarToggle.bind(this, 'contact')}>Contact</p>
            <Link href="/application">
            <   p className="p-m" id="sidebar__item">Job Application</p>
            </Link>
        </div>
    )
}
