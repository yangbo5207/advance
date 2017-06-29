import React from 'react';
import Card from 'components/Card';
import { Link } from 'react-router-dom';
import './style.scss';

export default function(props) {
    return (
        <Card className="react_card">
            <div className="react_card_bg"></div>
            <div className="react_card_head">React</div>
            <div className="react_card_body">
                <div>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</div>
            </div>
            <div className="react_card_foot">
                <div className="myself_blogs">
                    <a href="https://github.com/yangbo5207/advance" target="_blank"><i className="github"></i></a>
                    <a href="http://www.jianshu.com/u/10ae59f49b13" target="_blank"><i className="jianshu"></i></a>
                    <a href="https://segmentfault.com/u/meetbo" target="_blank"><i className="segmentfault"></i></a>
                    <a href="https://juejin.im/user/577a770ea633bd00573520f7"  target="_blank"><i className="juejin"></i></a>
                </div>
                <Link to="/react"><div className="know_more">了解详情</div></Link>
            </div>
        </Card>
    )
}
