import React from 'react';
import Icon from 'components/Icon';
import classnames from 'classnames';
import './style.scss';

const arr = [1, 2, 3, 4, 5];

export default function(props) {
    const { color = '#42b1e5', level, className } = props;
    const cls = classnames({
        'star_group': true,
        [className]: !!className
    })
    return (
        <div className={cls}>
            {arr.map((item, i) => (
                <Icon type="star" className="star" color={i < level ? color : '#d1d1d1'} key={i} />
            ))}
        </div>
    )
}
