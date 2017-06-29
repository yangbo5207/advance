import React from 'react';
import Card from 'components/Card';
import './style.scss';

export default function(props) {
    return (
        <Card className="dom_card" type="dom" title="DOM" path="/dom" >
            React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
        </Card>
    )
}
