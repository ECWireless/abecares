import React from 'react';
import Link from 'next/link';


export default function Header() {
    return (
        <header className="section" id="header">
            <div className="container">
                <Link href="/">
                    <a id="header__logo-link" >
                        <img src="/logo-horizontal.png" alt="Logo" id="header__logo" />
                    </a>
                </Link>
                <nav id="header__list">
                    <Link href="/">
                        <a id="header__item">Home</a>
                    </Link>
                    <Link href="/about">
                        <a id="header__item">About</a>
                    </Link>
                    <Link href="/services">
                        <a id="header__item">Services</a>
                    </Link>
                </nav>
                <Link href="/contact">
                    <button className="button button__s">Contact</button>
                </Link>
            </div>
        </header>
    )
}
