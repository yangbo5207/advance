import React, { Component } from 'react';
import { Link  } from 'react-router-dom';
import './style.scss';

class Home extends Component {
    render() {
        return (
            <div className="diashboard-main">
                <div className="main-cards">
                    <Link to="/react"><div className="card"></div></Link>
                    <Link to="/js"><div className="card"></div></Link>
                    <Link to="/dom"><div className="card"></div></Link>
                    <Link to="/css"><div className="card"></div></Link>
                </div>
            </div>
        )
    }
}

export default Home;
