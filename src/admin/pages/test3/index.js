import React, { Component } from 'react';
import "./index.less"
import TeseThreeDelete from "./teseThreeDelete.js"//已经废弃

class TeseThree extends Component {
    constructor(props) {
        super(props);
        this.state={
            number:0,
            dataList:[
               {text:'天猫精灵',money:20,isDown:false},
               {text:'大黄蜂',money:80,isDown:true},
               {text:'普拉多',money:300,isDown:false},
               {text:'娃哈哈饮料',money:588,isDown:false},
            ],
            hah:'456',
            chooseState:false,
            selectNumber:0,
            selectMoney:0,
        }

    }

    componentWillMount(){
        this.supervise()
    }

    // 全选和反选
    choose=()=>{
        this.setState({
            chooseState:this.state.chooseState?false:true,
            selectNumber:0,
            selectMoney:0
        })
        for (var i in this.state.dataList){
            this.state.dataList[i].isDown=this.state.chooseState?false:true
         }
        this.supervise()
    }
    // 判断是否全选
    supervise=()=>{
        let showValue=0
        let totalMoney=0
        for (var i in this.state.dataList){
           if( this.state.dataList[i].isDown){
                showValue++
                totalMoney=totalMoney+this.state.dataList[i].money
                this.setState({
                    selectNumber:showValue,
                    selectMoney:totalMoney
                })
           }
         }

         if(showValue == this.state.dataList.length){
             this.setState({
                chooseState:true
             })
         }else{
            this.setState({
                chooseState:false
             })
         }
    }
    // 复选框的选择
    handleChange=(value)=>{
        this.state.dataList[value].isDown=this.state.dataList[value].isDown?false:true
        this.setState({
            dataList:this.state.dataList,
            selectNumber:0,
            selectMoney:0
        })
        this.supervise()
    }

    // 增加一个数据
    handleKey=(e)=>{
        if(e.keyCode == 13){
            if(!e.target.value) return;
            let moneyValue=this.refs.money.value.replace(/[^\d{1,}\.\d{1,}|\d{1,}]/g,'')
            let textValue=this.input.value
           if(textValue!=''){
            if(moneyValue){
                var addData = {
                    text : textValue,
                    money : Number(moneyValue),
                    isDown: false
                }
                this.state.dataList.push(addData);
                this.setState({
                    dataList:this.state.dataList
                })
                this.input.value='',
                this.refs.money.value=''
               
            }else {
                alert('请输入正确的金额')
            }
           }else {
               alert("请输入商品名称")
           }
           
        }

        this.supervise()
    }
    // 删除当前的数据
    deleteData=(value)=>{
        this.state.dataList.splice(value,1)
        this.setState({
            dataList:this.state.dataList,
            selectNumber:0,
            selectMoney:0
        })
        this.supervise()
    }
    
    render() {
        return (
            <div className="testThree">
                {/* 全选/反选 */}
                <div className="chooseContent">
                    <span>全选和反选</span>
                    <input type="checkbox" onChange={this.choose} checked={this.state.chooseState}/>
                </div>
                {/* 增加一个标签 */}
                <div onKeyUp={this.handleKey} className="addData">
                    <p style={{fontSize:'16px'}}>键盘增加一个新数据：</p>
                    <span>商品名称：</span><input type="text" placeholder="请输入商品名称" ref={input => this.input = input}/>
                    <span>商品价格：</span><input type="text" placeholder="请输入商品价格" ref="money" />
                </div>
       
                {/* 数据展示 */}
                    {
                        this.state.dataList
                        ?
                        this.state.dataList.map((item,i)=>{
                            return(
                                <div key={i} className="dataListContent">
                                    <input type="checkbox" checked={item.isDown} onChange={this.handleChange.bind(this,i)}/>
                                   <span>商品名称：{item.text}</span>
                                   <span>商品价格：{item.money}</span>
                                   <span onClick={this.deleteData.bind(this,i)} className="shopOperation">删除</span>
                                </div>
                            )
                        })
                        :
                        <span>目前没有任何数据</span>
                    }

                {/* 展示信息 */}
                <div className="statistics">
                商品总数：<span>{this.state.dataList.length}件</span>
                当前选择：<span>{this.state.selectNumber}件</span>
                总共消费：<span>{this.state.selectMoney}RMB</span>
                    
                </div>

             {/* <TeseThreeDelete/> */}
            </div>

        );
    }
}

export default TeseThree;