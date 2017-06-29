import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LearnReact extends Component {
    render() {
        return (
            <div className="learn_react_wrap">
                <div className="main">
                    <Link to="/reactcase"><div>案例</div></Link>
                    <div className="wrap">
                        <div className="title">列表</div>
                        <div className="list-wrap">
                            <div>1</div>
                            <div>1</div>
                            <div>1</div>
                            <div>1</div>
                            <div>1</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LearnReact;
