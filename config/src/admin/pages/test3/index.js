import React, { Component } from 'react';

import { Modal } from "antd"

import "./index.less"
class TestThree extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            Modaltitle: '',
            NameData:'',
            AgeData:'',
            WorkData:'',
            listData: [
                {
                    name: '张三',
                    age: 18,
                    work: "工人"
                },
                {
                    name: '张三1',
                    age: 19,
                    work: "商人"
                },
                {
                    name: '张三2',
                    age: 20,
                    work: "机械师"
                },
                {
                    name: '张三3',
                    age: 21,
                    work: "老板"
                },
                {
                    name: '张三4',
                    age: 18,
                    work: "国王"
                }
            ]
        }
    }


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

    // 弹框
    showModal = (type, i) => {
        if (type == "add") {
            this.setState({
                Modaltitle: '编辑内容',
                visible: true,
            })
        } else {
            this.setState({
                Modaltitle: '修改当前内容',
                visible: true,
            })
            var newData = this.state.listData.splice(i, 1)

            this.refs.NameData.value = newData[0].name,
            this.refs.AgeData.value = newData[0].age,
            this.refs.WorkData.value = newData[0].work
        }

    }

    handleOk = (e) => {
        // console.log(e);
        var newArr = {
            name: this.refs.NameData.value,
            age: this.refs.AgeData.value,
            work: this.refs.WorkData.value,
        }
        var listDatatwo = []
        var listDatatwo = this.state.listData.push(newArr)
        this.setState({
            visible: false,
        })

        this.refs.NameData.value = '',
        this.refs.AgeData.value = '',
        this.refs.WorkData.value = ''
    }

    handleCancel = (e) => {
        // console.log(e);
        this.setState({
            visible: false,
        });
    }
    render() {

        return (
            <div className="test3">

                <span className="test-add" onClick={this.showModal.bind(this, "add")}>编辑</span>
                <div className="test-title">
                    <span>排名</span>
                    <span>名字</span>
                    <span>年龄</span>
                    <span>工作</span>
                    <span>操作</span>
                </div>
                {
                    this.state.listData != ''
                        ?
                        <div>
                            {
                                this.state.listData.map((item, i) => {
                                    return <div className="test-content" key={i}>
                                        <span>{i}</span>
                                        <span>{item.name}</span>
                                        <span>{item.age}</span>
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
                        <input placeholder="请输入姓名" ref="NameData"  defaultValue={this.state.NameData}/>
                    </div>
                    <div>
                        <p>年龄：</p>
                        <input placeholder="请输入年龄" ref="AgeData"  defaultValue={this.state.AgeData}/>
                    </div>
                    <div>
                        <p>工作：</p>
                        <input placeholder="请输入工作职业" ref="WorkData"  defaultValue={this.state.WorkData}/>
                    </div>
                </Modal>

            </div>
        );
    }
}

export default TestThree;