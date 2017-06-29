import React from 'react';
import classnames from 'classnames';
import './style.scss';

const defaultProps = {
    type: '',
    spin: false
}

const preFix = 'advance';

export default (props = defaultProps) => {
    const { type, className, spin, color, ...other } = props;
    const cls = classnames({
        [`${preFix}-icon`]: true,
        [`${preFix}-icon-spin`]: !!spin || type === 'loading',
        [`${preFix}-icon-${type}`]: true
    }, className);

    const style = { color }

    return (
        <i className={cls} {...other} style={style}></i>
    )
}
