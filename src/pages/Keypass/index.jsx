import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Types from './Types';
import Accounts from './Accounts';

class Index extends Component {
    render() {
        return (
            <div className="key_pass">
                <Route exact path="/keypass" component={Types} />
                <Route path="/keypass/:account_type" component={Accounts} />
            </div>
        )
    }
}

export default Index;
