import React, { Component } from 'react';

import "./index.less"
// 引入组件
// import { Dropdown, Icon, Modal, Button, Pagination } from 'antd';

class Test5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { title: "01页码-小赵" }, { title: "02页码-小钱" }, { title: "03页码-小锁" }, { title: "04页码-小李" }, { title: "05页码-小周" }, { title: "06页码-小吴" }, { title: "07页码-小郑" }, { title: "08页码-小王" }, { title: "09页码-小欧阳" }, { title: "10页码-小诸葛" }, { title: "11页码-小司马" }, { title: "12页码-小刘" }, { title: "13页码-小马" }, { title: "14页码-页码-大熊" }
            ],
            dataList: [],
            // 分页器
            currentPage: 1, //当前页码
            groupCount: 5, //页码分组，显示7个页码，其余用省略号显示
            startPage: 1,  //分组开始页码
            totalPage: 1 //总页数
        }
        this.getCurrentPage = this.getCurrentPage.bind(this)

        this.createPage = this.createPage.bind(this) // 分页器
    }

    getCurrentPage(currentPage) {
        this.setState({
            dataList: this.state.data[currentPage - 1],
        })
    }

    // 分页器
    componentDidMount() {
        this.getCurrentPage()
        this.setState({
            totalPage: this.state.data.length,
            dataList: this.state.data[0],
        })

    }

    createPage() {
        const { currentPage, groupCount, startPage, totalPage } = this.state;
        let pages = []
        //上一页
        pages.push(<li className={currentPage === 1 ? "nomore" : null} onClick={this.prePageHandeler.bind(this)}
            key={0}>
            上一页</li>)

        if (totalPage <= 10) {
            /*总页码小于等于10时，全部显示出来*/
            for (let i = 1; i <= totalPage; i++) {
                pages.push(<li key={i} onClick={this.pageClick.bind(this, i)}
                    className={currentPage === i ? "activePage" : null}>{i}</li>)
            }
        } else {
            /*总页码大于10时，部分显示*/

            //第一页
            pages.push(<li className={currentPage === 1 ? "activePage" : null} key={1}
                onClick={this.pageClick.bind(this, 1)}>1</li>)

            let pageLength = 0;
            if (groupCount + startPage > totalPage) {
                pageLength = totalPage
            } else {
                pageLength = groupCount + startPage;
            }
            //前面省略号(当当前页码比分组的页码大时显示省略号)
            if (currentPage >= groupCount) {
                pages.push(<li className="" key={-1}>···</li>)
            }
            //非第一页和最后一页显示
            for (let i = startPage; i < pageLength; i++) {
                if (i <= totalPage - 1 && i > 1) {
                    pages.push(<li className={currentPage === i ? "activePage" : null} key={i}
                        onClick={this.pageClick.bind(this, i)}>{i}</li>)
                }
            }
            //后面省略号
            if (totalPage - startPage >= groupCount + 1) {
                pages.push(<li className="" key={-2}>···</li>)
            }
            //最后一页
            pages.push(<li className={currentPage === totalPage ? "activePage" : null} key={totalPage}
                onClick={this.pageClick.bind(this, totalPage)}>{totalPage}</li>)
        }
        //下一页
        pages.push(<li className={currentPage === totalPage ? "nomore" : null}
            onClick={this.nextPageHandeler.bind(this)}
            key={totalPage + 1}>下一页</li>)
        return pages;

    }

    //页码点击
    pageClick(currentPage) {
        const { groupCount } = this.state
        const getCurrentPage = this.getCurrentPage;
        //当 当前页码 大于 分组的页码 时，使 当前页 前面 显示 两个页码
        if (currentPage >= groupCount) {
            this.setState({
                startPage: currentPage - 2,
            })
        }
        if (currentPage < groupCount) {
            this.setState({
                startPage: 1,
            })
        }
        //第一页时重新设置分组的起始页
        if (currentPage === 1) {
            this.setState({
                startPage: 1,
            })
        }
        this.setState({
            currentPage
        })
        //将当前页码返回父组件
        getCurrentPage(currentPage)
    }

    //上一页事件
    prePageHandeler() {
        let { currentPage } = this.state
        if (--currentPage === 0) {
            return false
        }
        this.pageClick(currentPage)
    }

    //下一页事件
    nextPageHandeler() {
        let { currentPage, totalPage } = this.state
        if (++currentPage > totalPage) {
            return false
        }
        this.pageClick(currentPage)
    }


    render() {
        const pageList = this.createPage();
        console.log(this.state.dataList, this.state.data.length)
        return (
            <div className="testContent">
                <div className="page-content">
                    {this.state.dataList
                        ?
                        <div className="dataContent">{this.state.dataList.title}</div>

                        : <div className="nullData">没有数据</div>
                    }
                </div>
                <ul className="page-device">
                    {pageList}
                </ul>
            </div>
        );
    }
}

export default Test5;