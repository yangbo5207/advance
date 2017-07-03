import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Create from './Create';
import Props from './Props';
import State from './State';
import Refs from './Refs';
import Interactive from './Interactive';

class Case extends Component {
    render() {
        const path = this.props.match.path;
        return (
            <div className="react_case_wrap">
                <div className="main">
                    react case
                    <Link to={`${path}/create`}>aaaa</Link>
                    <Link to={`${path}/props`}>bbb</Link>
                    <Link to={`${path}/state`}>ccc</Link>
                    <Link to={`${path}/refs`}>ddd</Link>
                    <Link to={`${path}/interactive`}>eee</Link>
                </div>

                <Route exact path={`${path}/create`} component={Create} />
                <Route exact path={`${path}/props`} component={Props} />
                <Route exact path={`${path}/state`} component={State} />
                <Route exact path={`${path}/refs`} component={Refs} />
                <Route exact path={`${path}/interactive`} component={Interactive} />
            </div>
        )
    }
}

export default Case;
