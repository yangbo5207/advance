import React, { Component } from 'react';
import Icon from 'components/Icon';
import { Link } from 'react-router-dom';
import './style.scss';

const defaultClass = [
    {
        type: 'jianshu',
        name: '简书',
        baseColor: '#f9e6f1',
        iconColor: '#da317f',
        accounts: []

    },
    {
        type: 'case',
        name: 'Google',
        baseColor: '#e9f5f6',
        iconColor: '#73c2c5',
        accounts: []
    },
    {
        type: 'xiangqing',
        name: '腾讯',
        baseColor: '#e3ecfd',
        iconColor: '#5482f6',
        accounts: []
    },
    {
        type: 'profile',
        name: 'QQ',
        baseColor: '#ebfbff',
        iconColor: '#4db4d1',
        accounts: []
    },
    {
        type: 'react',
        name: ' 微信',
        baseColor: '#f3e3fd',
        iconColor: '#b853f8',
        accounts: []
    },
    {
        type: 'dom',
        name: '支付宝',
        baseColor: '#fdece3',
        iconColor: '#f38c54',
        accounts: []
    },
    {
        type: 'star',
        name: '苹果',
        baseColor: '#e0f3f7',
        iconColor: '#2fc1db',
        accounts: []
    }
]

class Types extends Component {
    state = {
        accounts: defaultClass
    }
    componentDidMount() {
        const accounts = window.localStorage.getItem('accounts');
        if (accounts && accounts.length > 0) {
            this.setState({ accounts })
        }
    }
    render() {
        return (
            <div className="key_pass_types">
                <div className="key_pass_header">user and password</div>
                <div className="key_pass_body">
                    {this.state.accounts.map((item, i) => (
                        <Link to={`keypass/${item.type}`} className="class_item" key={i}>
                            <div className="icon_wrap" style={{ background: item.baseColor }}>
                                <Icon className="icon" type={item.type} color={item.iconColor} />
                            </div>
                            <div>{item.name}</div>
                        </Link>
                    ))}
                    <div className="class_item">
                        <div className="icon_wrap" style={{ background: '#f0f1f4' }}>
                            <Icon className="icon" type="github" color="#9d9d9d" />
                        </div>
                        <div>新增</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Types;
