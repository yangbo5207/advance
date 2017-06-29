import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

function Header() {
    return (
        <header>
            <div className="main">
                <Link to="/"><div className="logo">Advance</div></Link>
                <Link to="/profile"><div className="profile"></div></Link>
            </div>
        </header>
    )
}

export default Header;
