import React, { Component } from 'react';
import { HashRouter as Router, Route  } from 'react-router-dom';
import Header from 'components/Header';

import routers from './router';
import './style.scss';

class App extends Component {
    render() {
        return (
            <Router>
                <div id="container">
                    <Header />
                    <div className="main">
                        {routers.map((router, i) => (
                            <Route exact={router.exact ? true : false} path={router.path} component={router.component} key={i} />
                        ))}
                    </div>
                </div>
            </Router>
        )
    }
}

export default App;
