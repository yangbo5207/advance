import React, { Component } from 'react';
import classNames from 'classnames';
import { disposeMode } from './utils';
import defaultImg from './default.jpg';
import './style.scss';

class Image extends Component {

    state = {
        show: false,
        mode: null
    }

    componentDidMount() {
        const { mode, bindload, binderror } = this.props;
        const { wrap } = this.refs;

        disposeMode(wrap, mode).then(mode => {
            this.setState({
                mode
            })
            bindload && bindload();
        })
        .catch(err => {
             binderror && binderror();
        })

        const cb = () => {
            const viewHeight = document.documentElement.clientHeight;
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const woffsetTop = wrap.offsetTop;
            console.log(scrollTop);
            if (woffsetTop <= viewHeight + scrollTop && woffsetTop > scrollTop) {
                this.setState({
                    show: true
                })
            }
        }

        cb();

        window.addEventListener('scroll', cb, false);
    }

    render() {
        const { src, alt, width, height, className } = this.props;
        const { mode, show } = this.state;

        const wrapStyle = {
            width: `${width}px`,
            height: `${height}px`
        }

        const classes = classNames('image-wrap', {
            [className]: !!className,
            'fade-in': this.state.show
        });

        const curSrc = show ? src : defaultImg;

        return (
            <div ref="wrap" className={ classes } style={ wrapStyle }>
                <img ref="image" className={ mode } src={ curSrc } alt={ alt } />
            </div>
        )
    }
}

export default Image;


// 图片会缓存，在IE下，只有新图片才会触发图片的onLoad事件，因此在绑定onLoad事件之前，需要先判断是否已经缓存
// 如果已经缓存，那么img.complete = true
