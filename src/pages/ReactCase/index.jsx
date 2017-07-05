import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Create from './Create';
import routers from './router';

import './style.scss';

class Case extends Component {
    render() {
        const path = this.props.match.path;
        return (
            <div className="react_case_wrap">
                <div className="react_case_side">
                    {routers.map((item, i) => (
                        <div className={`${path}${item.path}` === this.props.location.pathname ? 'side_item active' : 'side_item' } key={i}>
                            <Link to={`${path}${item.path}`}>{item.title}</Link>
                        </div>
                    ))}
                </div>

                <div className="react_case_content">
                    <Route exact path={path} component={Create} />
                    {routers.map((item, i) => (
                        <Route path={`${path}${item.path}`} component={item.component} key={i} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Case;
