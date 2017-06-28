import React, { Component } from 'react';
import Header from './Header';
import './style.scss';

class Home extends Component {
    render() {
        return (
            <div className="wrap">
                <Header />
                <div className="diashboard-main">

                    <div className="main-cards">
                        <div className="card"></div>
                        <div className="card"></div>
                        <div className="card"></div>
                        <div className="card"></div>
                        <div className="card"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;
