import React, { Component } from 'react';
import classNames from 'classnames';
import debounce from 'lodash/debounce';
import defaultImg from './default.jpg';
import './style.scss';

class Image extends Component {

    state = {
        show: false
    }

    componentDidMount() {
        const { wrap } = this.refs;

        const cb = () => {
            const viewHeight = document.documentElement.clientHeight;
            const wbounds = wrap.getBoundingClientRect();
            if (wbounds.top <= viewHeight && wbounds.top > 0) {
                this.setState({
                    show: true
                })
            }
        }

        cb();

        window.addEventListener('scroll', debounce(cb, 100), false);
    }

    render() {
        const { src, width, height, className } = this.props;
        const { mode, show } = this.state;

        const wrapSty = {
            width: `${width}px`,
            height: `${height}px`
        }

        const classes = classNames('image-wrap', {
            [className]: !!className
        });

        const imgcls = classNames({
            [mode]: !!mode,
            "fade-in": show
        })

        const curSrc = show ? src : defaultImg;
        const imgsty = {
            backgroundImage: `url(${curSrc})`
        }

        return (
            <div ref="wrap" className={ classes } style={ wrapSty }>
                <div ref="image" className={ imgcls } style={imgsty}></div>
            </div>
        )
    }
}

export default Image;
