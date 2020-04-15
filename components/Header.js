import React from 'react';
import Link from 'next/link';


export default function Header() {
    return (
        <header className="section" id="header">
            <div className="container">
                <Link href="/">
                    <a id="header-logo-link" >
                        <img src="/logo-horizontal.png" alt="Logo" id="header-logo" />
                    </a>
                </Link>
                <nav id="container-nav">
                    <Link href="/">
                        <a className="nav-item">Home</a>
                    </Link>
                    <Link href="/about">
                        <a className="nav-item">About</a>
                    </Link>
                    <Link href="/services">
                        <a className="nav-item">Services</a>
                    </Link>
                </nav>
                <Link href="/contact">
                    <button className="button button__s">Contact</button>
                </Link>
            </div>
        </header>
    )
}
