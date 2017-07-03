import React, { Component } from 'react';
import Card from 'components/Card';
import Icon from 'components/Icon';
import Star from 'components/Star';
import Image from 'components/Image';
import config from 'configs';
import defaultImg from './default.jpg';
import './style.scss';

class LearnReact extends Component {
    render() {
        return (
            <div className="learn_react_wrap">
                <div className="main">
                    <Card className="react_case" title="React Demo List" path="/reactcase" type="case">《秦时明月》系列是由中国杭州玄机科技信息技术有限公司制作的3D武侠动画，于2007年春节期间起在中国全国各地正式首映，网络上亦有授权播出，已播出4部共100集。另有衍生出的仅在网络、不在电视播出的姐妹篇《天行九歌》等。目前动画第5部《秦时明月之君临天下》正与《天行九歌》交替在每周四19：00网络更新中。</Card>
                    <Card className="react_list" title="React Tutorial List" disback="true" type="list">
                        <div className="react_tutorial_list_wrap">
                            {config.reactTutorialList.map((item, i) => (
                                <div className="react_tutorial_list_item" key={i}>
                                    <div className="body">
                                        <Image className="img" src={item.img ? item.img : defaultImg} mode="wspectFill" />
                                        <div className="content">
                                            <div className="title">{item.title}</div>
                                            <Star className="star" level={item.star} />
                                            <div className="desc">{item.desc}</div>
                                            <a href={item.url} className="know_more"><Icon type="xiangqing" className="xiangqing" />查看详情</a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        )
    }
}

export default LearnReact;
