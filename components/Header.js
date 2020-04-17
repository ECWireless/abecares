import React from 'react';
import Link from 'next/link';


export default function Header(props) {
    return (
        <header className="container" id="header">
            <Link href="/">
                <a id="header__logo-link" >
                    <img src="/logo-horizontal.png" alt="Logo" id="header__logo" />
                </a>
            </Link>
            <nav id="header__list">
                <Link href="/">
                    <a id="header__item" className="p-m">Home</a>
                </Link>
                <Link href="/about">
                    <a id="header__item" className="p-m">About</a>
                </Link>
                <Link href="/services">
                    <a id="header__item" className="p-m">Services</a>
                </Link>
            </nav>
            <Link href="/contact">
                <button id="header__button" className="button button__s">Contact</button>
            </Link>

            {/* Sandwich Menu */}
            <div id="header__menu-container" onClick={props.onSidebarToggle}>
                <div id="header__menu-line-top" />
                <div id="header__menu-line-middle" />
                <div id="header__menu-line-bottom" />
            </div>
        </header>
    )
}
