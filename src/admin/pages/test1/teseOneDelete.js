
// 以废弃




import React, { Component } from 'react';
import "./index.less"
class TeseOneDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: [
                {
                    url: 'https://img.alicdn.com/tfs/TB1rDkevrPpK1RjSZFFXXa5PpXa-1077-751.jpg',
                    title: '我是标题一',
                    content: 'ONE PIECE”在故事中为“一个大秘宝”之意。故事描述男主角“草帽”蒙其·D·路飞为了当上“海贼王”而踏上“伟大航道”及与其伙伴的经历。',
                    time: '2018-12-01 00:00:00'
                },
                {
                    url: 'https://img.alicdn.com/tfs/TB1jFslvpzqK1RjSZFoXXbfcXXa-960-540.jpg',
                    title: '我是标题一',
                    content: 'ONE PIECE”在故事中为“一个大秘宝”之意。故事描述男主角“草帽”蒙其·D·路飞为了当上“海贼王”而踏上“伟大航道”及与其伙伴的经历。',
                    time: '2018-12-01 00:00:00'
                },
                {
                    url: 'https://img.alicdn.com/tfs/TB1hFslvwHqK1RjSZFgXXa7JXXa-1920-1080.jpg',
                    title: '我是标题一',
                    content: 'ONE PIECE”在故事中为“一个大秘宝”之意。故事描述男主角“草帽”蒙其·D·路飞为了当上“海贼王”而踏上“伟大航道”及与其伙伴的经历。',
                    time: '2018-12-01 00:00:00'
                },
                {
                    url: 'https://img.alicdn.com/tfs/TB1hTokvpzqK1RjSZFCXXbbxVXa-389-220.jpg',
                    title: '我是标题一',
                    content: 'ONE PIECE”在故事中为“一个大秘宝”之意。故事描述男主角“草帽”蒙其·D·路飞为了当上“海贼王”而踏上“伟大航道”及与其伙伴的经历。',
                    time: '2018-12-01 00:00:00'
                },
                {
                    url: 'https://img.alicdn.com/tfs/TB1NmkyvxjaK1RjSZFAXXbdLFXa-500-313.jpg',
                    title: '我是标题一',
                    content: 'ONE PIECE”在故事中为“一个大秘宝”之意。故事描述男主角“草帽”蒙其·D·路飞为了当上“海贼王”而踏上“伟大航道”及与其伙伴的经历。',
                    time: '2018-12-01 00:00:00'
                },
                {
                    url: 'https://img.alicdn.com/tfs/TB15hQgvzTpK1RjSZKPXXa3UpXa-1024-731.jpg',
                    title: '我是标题一',
                    content: 'ONE PIECE”在故事中为“一个大秘宝”之意。故事描述男主角“草帽”蒙其·D·路飞为了当上“海贼王”而踏上“伟大航道”及与其伙伴的经历。',
                    time: '2018-12-01 00:00:00'
                }
            ],
            title: 'zan'
        }
    }

    // 普通函数
    linkTo () {
        History.push('test2');
        window.LinkChange(null, 222, 333, 444);
    }
    // 箭头函数
    method = () => {
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += (Math.random() * 16 | 0).toString(16);
        }
        return color;
    }

    render() {
        return (
            <div className="liseContent">
                <p style={{ backgroundColor: this.method() }} className="liseContent-title">首页组件</p>
                <ul className="licontent">
                    {
                        this.state.listData.map((item, i) => {
                            return <li key={i} onClick={this.linkTo.bind(this)}>
                                <div  className="licontent-details">
                                    <img src={item.url}/>
                                    <div className="licontent-details-title" >
                                        <p style={{lineHeight:"33px"}}>{item.title}</p>
                                        <span className="licontent-title-txt">{item.content}</span>
                                        <p style={{lineHeight:"30px"}}>{item.time}</p>
                                    </div>                              
                                </div>
                            </li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default TeseOneDelete;