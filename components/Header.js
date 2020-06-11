import React from 'react';

export default function Header(props) {
    return (
        <header className="container" id="header">
            <a id="header__logo-link" onClick={props.scrollToLocation.bind(this, 'home')}>
                <img src="/logo-horizontal.png" alt="Logo" id="header__logo" />
            </a>
            <nav id="header__list">
            <a id="header__item" className="p-m" onClick={props.scrollToLocation.bind(this, 'about')}>About</a>
            <a id="header__item" className="p-m" onClick={props.scrollToLocation.bind(this, 'testimonials')}>Testimonials</a>
            <a id="header__item" className="p-m" onClick={props.scrollToLocation.bind(this, 'services')}>Services</a>
            </nav>
            <button id="header__button" className="button button__s" onClick={props.scrollToLocation.bind(this, 'contact')}>Contact</button>

            {/* Sandwich Menu */}
            <div id="header__menu-container" onClick={props.onSidebarToggle}>
                <div id="header__menu-line-top" />
                <div id="header__menu-line-middle" />
                <div id="header__menu-line-bottom" />
            </div>
        </header>
    )
}
