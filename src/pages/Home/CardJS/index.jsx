import React from 'react';
import Card from 'components/Card';
import './style.scss';

export default function(props) {
    return (
        <Card className="js_card" type="js" title="JavaScript" path="/js" >
            React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
        </Card>
    )
}
