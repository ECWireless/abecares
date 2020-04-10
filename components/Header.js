import React from 'react'

export default function Header() {
    return (
        <header className="section" id="header">
            <div className="container-main">
                <a id="header-logo-link" href="/">
                    <img src="/logo-horizontal.png" alt="Logo" id="header-logo" />
                </a>
                <nav id="container-nav">
                    <a className="nav-item" href="/">Home</a>
                    <a className="nav-item" href="/">About</a>
                    <a className="nav-item" href="/">Services</a>
                </nav>
                <button className="button">Contact</button>
            </div>
        </header>
    )
}
