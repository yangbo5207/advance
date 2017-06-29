import React from 'react';
import classnames from 'classnames';
import './style.scss';

export default function(props) {
    const cls = classnames('advance_card', {
        [props.className]: !!props.className
    })
    return (
        <div className={cls}>{props.children}</div>
    )
}
