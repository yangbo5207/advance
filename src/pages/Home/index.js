import React, { Component } from 'react';
import CardReact from './CardReact';
import CardJS from './CardJS';
import CardDOM from './CardDOM';
import CardCSS from './CardCSS';
import Button from 'components/base/Button';
import './style.scss';

class Home extends Component {
    render() {
        return (
            <div className="diashboard-main">
                <div className="main-cards">
                    <CardReact />
                    <CardJS />
                    <CardDOM />
                    <CardCSS />
                </div>

                <Button>testxxxxx</Button>
            </div>
        )
    }
}

export default Home;
