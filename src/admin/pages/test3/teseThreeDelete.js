import React, { Component } from 'react';

import { Modal } from "antd"

import "./index.less"
class TeseThreeDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            Modaltitle: '',
            modalValue: '',
            Name: '',
            Location: '',
            Work: '',
            listData: [
                {
                    name: '张三',
                    location: "上海",
                    work: "工人"
                },
                {
                    name: '张三1',
                    location: "北京",
                    work: "商人"
                },
                {
                    name: '张三2',
                    location: "南京",
                    work: "机械师"
                },
                {
                    name: '张三3',
                    location: "天津",
                    work: "老板"
                },
                {
                    name: '张三4',
                    location: "齐齐哈尔",
                    work: "国王"
                }
            ]
        }
    }

    /**
     * 删除
     */
    Delete = (value) => {
        var temArray = [];
        var lists = this.state.listData
        for (var i = 0; i < lists.length; i++) {
            if (i != value) {
                temArray.push(lists[i]);
            }
        }
        this.setState({
            listData: temArray
        })

    }

    /**
     * 确认信息
     */
    Affirm() {
        var newData = this.state.listData
        var addData = {
            name: this.state.Name,
            location: this.state.Location == '' ? "乌鲁木齐" : this.state.Location,
            work: this.state.Work == '' ? "工人" : this.state.Work,
        }
        if (addData.name == '') {
            alert("名字不能为空")
        } else {
            if (addData.name.length > 6) {
                alert("名字太长")
            } else {

                if (this.state.Modaltitle == "编辑内容") {
                    var newData = this.state.listData.push(addData)
                } else {

                    var value = this.state.modalValue
                    var newData = this.state.listData.splice(value, 1, addData)
                }
            }


        }
    }

    /**
     * 显示弹窗
     */
    showModal = (type, i) => {
        if (type == "add") {
            this.setState({
                Modaltitle: '编辑内容',
                visible: true,
            })
        } else {
            var oldList = this.state.listData
            this.setState({
                Modaltitle: '修改当前内容',
                visible: true,
                modalValue: i,
                Name: oldList[i].name,
                Location: oldList[i].location,
                Work: oldList[i].work,
            })
        }

    }
    /**
     * 关闭弹窗
     */
    handleOk = (e) => {
        this.Affirm()
        this.setState({
            visible: false,
            modalValue: '',
            Name: '',
            Location: '',
            Work: '',
        })
    }
    // 关闭弹窗
    handleCancel = (e) => {
        this.setState({
            visible: false,
            modalValue: '',
            Name: '',
            Location: '',
            Work: '',
        });
    }

    /**
     * 获取input中的value值
     */
    GitValue = (e) => {
        switch (e.target.name) {
            case "name":
                this.setState({
                    Name: e.target.value
                })
                break;
            case "location":
                this.setState({
                    Location: e.target.value
                })
                break;
            case "work":
                this.setState({
                    Work: e.target.value
                })
                break;
        }
    }
    render() {
        return (
            <div className="test3">

                <span className="test-add" onClick={this.showModal.bind(this, "add")}>编辑</span>
                <div className="test-title">
                    <span>排名</span>
                    <span>名字</span>
                    <span>地址</span>
                    <span>工作</span>
                    <span>操作</span>
                </div>
                {
                    this.state.listData != ''
                        ?
                        <div className="listData">
                            {
                                this.state.listData.map((item, i) => {
                                    return <div className="test-content" key={i}>
                                        <span>{i}</span>
                                        <span>{item.name}</span>
                                        <span>{item.location}</span>
                                        <span>{item.work}</span>
                                        <div className="test-content-amend">
                                            <span onClick={this.Delete.bind(this, i)}>删除</span>
                                            <span onClick={this.showModal.bind(this, "Alter", i)}>修改</span>
                                        </div>
                                    </div>
                                })
                            }
                        </div>

                        :
                        <div className="noData">
                            <img src="https://img.alicdn.com/tfs/TB1ZVolvwHqK1RjSZFgXXa7JXXa-423-341.jpg" />
                            <p>暂时没有数据</p>
                        </div>
                }


                <Modal
                    title={this.state.Modaltitle}
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <div>
                        <p>姓名：</p>
                        <input value={this.state.Name} onChange={this.GitValue} name="name" placeholder="请输入工作职业" />
                    </div>
                    <div>
                        <p>地点：</p>
                        <input value={this.state.Location} onChange={this.GitValue} name="location" placeholder="请输入地址" />
                    </div>
                    <div>
                        <p>工作：</p>
                        <input value={this.state.Work} onChange={this.GitValue} name="work" placeholder="请输入工作职业" />
                    </div>
                </Modal>

            </div>
        );
    }
}

export default TeseThreeDelete;