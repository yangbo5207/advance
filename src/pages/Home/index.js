import React, { Component } from 'react';
import { Link  } from 'react-router-dom';
import CardReact from './CardReact';
import './style.scss';

class Home extends Component {
    render() {
        return (
            <div className="diashboard-main">
                <div className="main-cards">
                    <CardReact />
                    <Link to="/js"><div className="card"></div></Link>
                    <Link to="/dom"><div className="card"></div></Link>
                    <Link to="/css"><div className="card"></div></Link>
                </div>
            </div>
        )
    }
}

export default Home;
