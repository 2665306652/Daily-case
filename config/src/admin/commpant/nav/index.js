import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';


import "antd/dist/antd.css";
import "./index.less";

import history from '../history';


const {  Sider } = Layout;



class Nav extends Component {
    
    unlisten = history.listen((e) => {
        // console.log(e, 3333)
    })

    componentDidMount() {
        this.props.onClick && this.props.onClick('首页',1,'')
    }
    

    render() {
        let currentKey = [];
        currentKey.push(JSON.stringify(this.props.currentKey));
        return (
            <Sider
                collapsible
                collapsed={this.props.collapsed}
                onCollapse={this.props.onCollapse}
                className="act-nav"
            >
                <div className="logo" />
                <Menu theme="dark" mode="inline" selectedKeys={currentKey}>
                    <Menu.Item key="1" onClick={this.props.onClick.bind(this,'test1',1,'')}>
                        <Icon type="user" />
                        <span>首页</span>
                    </Menu.Item>
                    <Menu.Item key="2" onClick={this.props.onClick.bind(this,'列表',2,'test2')}>
                        <Icon type="video-camera" />
                        <span>列表</span>
                    </Menu.Item>
                    <Menu.Item key="3" onClick={this.props.onClick.bind(this,'展示',3,'test3')}>
                        <Icon type="upload" />
                        <span>展示</span>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}

export default Nav;