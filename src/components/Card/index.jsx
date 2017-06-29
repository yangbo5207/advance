import React from 'react';
import classnames from 'classnames';
import Icon from 'components/Icon';
import { Link } from 'react-router-dom';
import './style.scss';

export default function(props) {
    const { title, type, className, path, children } = props;
    const cls = classnames('advance_card', {
        [className]: !!className
    })
    return (
        <div className={cls}>
            <div className="advance_card_bg"></div>
            <div className="advance_card_head">
                <Icon type={type} />
                <span>{title}</span>
                <Icon type="list" />
            </div>
            <div className="advance_card_body">{children}</div>
            <div className="advance_card_foot">
                <div className="myself_blogs">
                    <a href="https://github.com/yangbo5207/advance" target="_blank"><Icon type="github" /></a>
                    <a href="http://www.jianshu.com/u/10ae59f49b13" target="_blank"><Icon type="jianshu" /></a>
                    <a href="https://segmentfault.com/u/meetbo" target="_blank"><Icon type="segmentfault" /></a>
                    <a href="https://juejin.im/user/577a770ea633bd00573520f7"  target="_blank"><Icon type="juejin" /></a>
                </div>
                <Link to={path}>
                    <Icon type="xiangqing" className="know_more_icon" />
                    <span className="know_more">了解详情</span>
                </Link>
            </div>
        </div>
    )
}
