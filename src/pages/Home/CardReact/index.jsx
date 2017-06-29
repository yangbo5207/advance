import React from 'react';
import Card from 'components/Card';
import Icon from 'components/Icon';
import CardTip from 'components/CardTip';
import './style.scss';

export default function(props) {
    return (
        <Card className="react_card">
            <div className="react_card_bg"></div>
            <div className="react_card_head">
                <Icon type="react" />
                <span>React</span>
                <Icon type="list" />
            </div>
            <div className="react_card_body">
                <div>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</div>
            </div>
            <CardTip className="react_card_foot" path="/react" />
        </Card>
    )
}
