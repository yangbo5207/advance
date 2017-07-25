import React, { Component } from 'react';

import './style.scss';

class Button extends Component {
    render() {
        return (
            <button className="xxxx">{this.props.children}</button>
        )
    }
}

export default Button;
