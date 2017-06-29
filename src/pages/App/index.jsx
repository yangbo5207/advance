import React, { Component } from 'react';
import { HashRouter as Router, Route  } from 'react-router-dom';
import Header from 'components/Header';

import routers from './router';

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    {routers.map((router, i) => (
                        <Route exact={router.exact ? true : false} path={router.path} component={router.component} key={i} />
                    ))}
                </div>
            </Router>
        )
    }
}

export default App;
