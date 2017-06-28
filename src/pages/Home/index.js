import React, { Component } from 'react';
import Header from './Header';
import './style.scss';

class Home extends Component {
    render() {
        return (
            <div className="wrap">
                <Header />
            </div>
        )
    }
}

export default Home;
