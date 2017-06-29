import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/Icon';
import './style.scss';

function Header() {
    return (
        <header>
            <div className="main">
                <Link to="/">
                    <Icon type="logo" color="#1585ff" />
                    <span className="logo">Advance</span>
                </Link>
                <Link to="/profile"><Icon type="profile"/></Link>
            </div>
        </header>
    )
}

export default Header;
