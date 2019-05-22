// 已废弃

import React, { Component } from 'react';
import "./index.less"
class TeseTwoDelete extends Component {

    constructor(props){
        super(props)
        this.state={
            teseData:'',
        }
    }
    componentWillMount(){
        this.setState({
            teseData:[
                {
                    name:'燕十三',
                    introduce:'夺命十五剑',
                    details:'详情',
                    show:false,
                    txet:'燕十三是古龙小说《三少爷的剑》中的人物。是位绝世剑客，习练的家传武学「夺命十三剑」，后来不但创出了第十四种变化，更发现了代表死亡的第十五剑，这剑招是不祥毒龙的死亡神通变化——绝对静止，绝灭生机。剑中之魔，他的兵器是一柄缀著十三颗明珠的魔剑骨毒，生平愿望是与剑中帝王「天下第一神剑」'
                },
                {
                    name:'燕十三',
                    introduce:'夺命十五剑',
                    details:'详情',
                    show:true,
                    txet:'燕十三是古龙小说《三少爷的剑》中的人物。是位绝世剑客，习练的家传武学「夺命十三剑」，后来不但创出了第十四种变化，更发现了代表死亡的第十五剑，这剑招是不祥毒龙的死亡神通变化——绝对静止，绝灭生机。剑中之魔，他的兵器是一柄缀著十三颗明珠的魔剑骨毒，生平愿望是与剑中帝王「天下第一神剑」'
                },
                {
                    name:'燕十三',
                    introduce:'夺命十五剑',
                    details:'详情',
                    show:false,
                    txet:'燕十三是古龙小说《三少爷的剑》中的人物。是位绝世剑客，习练的家传武学「夺命十三剑」，后来不但创出了第十四种变化，更发现了代表死亡的第十五剑，这剑招是不祥毒龙的死亡神通变化——绝对静止，绝灭生机。剑中之魔，他的兵器是一柄缀著十三颗明珠的魔剑骨毒，生平愿望是与剑中帝王「天下第一神剑」'
                },
                {
                    name:'燕十三',
                    introduce:'夺命十五剑',
                    details:'详情',
                    show:false,
                    txet:'燕十三是古龙小说《三少爷的剑》中的人物。是位绝世剑客，习练的家传武学「夺命十三剑」，后来不但创出了第十四种变化，更发现了代表死亡的第十五剑，这剑招是不祥毒龙的死亡神通变化——绝对静止，绝灭生机。剑中之魔，他的兵器是一柄缀著十三颗明珠的魔剑骨毒，生平愿望是与剑中帝王「天下第一神剑」'
                }
            ],

        })
    }
    method = () => {
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += (Math.random() * 16 | 0).toString(16);
        }
        return color;
    }
    Details (i,item) {
        console.log(i,111111111)
        console.log(item,2222222)
        item.show=i? false:true
        this.setState({
        })

    }
    render() {
        return (
            <div className="teseTwoDelete">
                <p className="testtwo-title">列表组件:</p>
                <ul>
                    {
                        this.state.teseData.map((item,i)=>{
                            return <li key={i}>
                                        <span className="testtwo-title-name">{item.name}</span>
                                        <span className="testtwo-title-content">{item.introduce}</span>
                                        <span className="testtwo-title-details" 
                                                    style={{backgroundColor: this.method()}}
                                                    onClick={this.Details.bind(this,item.show,item)}
                                                    >
                                                    {item.details}
                                        </span>
                                        {
                                            // this.state.show
                                            item.show
                                            ?
                                            <div className="details-txt">
                                                <p>{item.name}:</p>
                                                <p className="details-txt-content">{item.txet}</p>
                                            </div>
                                            :''
                                        }
                                    </li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default TeseTwoDelete;