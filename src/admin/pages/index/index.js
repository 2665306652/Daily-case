import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import {Layout} from 'antd';

import History from '../../commpant/history'

import './index.less';
import "antd/dist/antd.css";

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { HashRouter, Route, Link, Switch } from 'react-router-dom'

const { Header, Content, Footer, Sider } = Layout;


import Nav from '../../commpant/nav';
import Owner from '../../commpant/owner'
import NavTab from '../../commpant/navTab'


import TestOne from '../test1/index.js'
import TestTwo from '../test2'
import TestThree from '../test3'
import TestFour from '../test4'
import TestFive from '../test5'
import TestSix from '../test6'
window.LinkChange = function (callback,e,d,f) { 
    // console.log(2222)
    callback && callback(e,d,f)
 }
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            navData: [],
            navId: null
        }
    }
   
    unlisten = History.listen((e) => {
        // console.log(e, 3333)
    })

    aa = window.LinkChange((e,d,f)=>{
        // console.log(e,d,f)
    })

    /**
     * todo 左侧导航的收起和展开
     * @memberof App
     */
    onCollapse = () => {
        this.setState({
            collapsed: !this.state.collapsed
        })
    }



    /**
     * todo 导航点击
     * @param {string} title 顶部导航显示文案
     * @param {number} key 左侧导航对应的key,具有唯一性,不在左侧导航就传null
     * @param {string} router 地址栏对应的路由名称,跳转使用
     * @memberof App
     */
    navClick = (title, key, router) => {
        // console.log(this.props, 3333)
        let _self = this;
        let isHistory = false;
        let current = {
            title: title,
            id: key,
            router: router
        }

        if(key == _self.state.navId){
            return false;
        }


        _self.state.navData.forEach((item, i) => {
            if (item.id == key) {
                isHistory = true;
            }
        })
        if (!isHistory) {
            _self.state.navData.push(current)
        }
        this.setState({
            navId: key
        })

        // location.replace("#/" + router);
        History.push(router)
    }
    /**
     * todo 关闭当前页
     * @param {object} current 当前删除的导航对应 {title : xxx,id : xxx,router : xxx}
     * @param {object} e 当前点击的event对象,阻止事件冒泡使用
     * @memberof App
     */
    navDel = (current, e) => {
        e.stopPropagation()
        let _self = this;

        _self.state.navData.forEach((item, i) => {
            if (item.id == current.id) {
                _self.state.navData.splice(i, 1)
            }
        })

        if (current.id == _self.state.navId) {
            _self.setState({
                navId: _self.state.navData[0]['id'],
                navData: _self.state.navData
            })
            location.replace("#/" + _self.state.navData[0].router);

        } else {
            // console.log(3333)
            _self.setState({
                navData: _self.state.navData
            })
        }
    }

    render() {
        return (
            <HashRouter>
                <Layout className="act-body">
                    <Nav
                        collapsed={this.state.collapsed}
                        onCollapse={this.onCollapse}
                        onClick={this.navClick}
                        currentKey={this.state.navId}
                    />
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }}>
                            <Owner
                                onRouteChange={this.navClick}
                            />
                        </Header>
                        <NavTab
                            navData={this.state.navData}
                            currentId={this.state.navId}
                            onClick={this.navClick}
                            onDel={this.navDel}
                        />
                        <Content style={{ margin: '0 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                            <Switch>
                                <Route exact path="/" component={TestOne} />
                                <Route path="/test2" component={TestTwo} />
                                <Route path="/test3" component={TestThree} />
                                <Route path="/test4" component={TestFour} /> 
                                <Route path="/test5" component={TestFive} />                 
                                <Route path="/test6" component={TestSix} />
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </HashRouter>
        );
    }
}

// export default componentName;

ReactDOM.render(
    <App />, document.getElementById("app"));