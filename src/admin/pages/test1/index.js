
/*
 topData（）对清除，取反，百分比，的方法
 parseOperator() 重新设置状态的方法
 this.state.dataListOne[...渲染数据],

  contentData（）对数据的处理方法
  parseNumber（）重新设置状态的方法
  this.state.dataListTwo[...渲染数据],

  rightData() 加减乘除等于的方法
  parseCompute（）等于 设置状态的方法
  computeResult（）加减乘除，处理数据的方法
  this.state.dataListThere[...渲染数据],

*/

import React, { Component } from 'react';
import History from '../../commpant/history'

import "./index.less"
// import TeseOneDelete from './teseOneDelete'
class TestOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataListOne: [{ value: 'C' }, { value: '+/-' }, { value: '%' }],
      dataListTwo: [{ value: '7' }, { value: '8' }, { value: '9' }, { value: '4' }, { value: '5' }, { value: '6' }, { value: '1' }, { value: '2' }, { value: '3' }, { value: '0' }, { value: '.' },],
      dataListThere: [{ value: '÷' }, { value: '×' }, { value: '-' }, { value: '+' }, { value: '=' }],
      result: '0',//限制长度最大为9
      compute: null,//获取值，判断加减乘除（+-/）
      temp: null,//值
      reset: false
    }
  }
  topData(operator) {
    this.setState(this.parseOperator(operator));
  }
  contentData(number) {
    this.setState({
      result: this.parseNumber(number),
      reset: false
    });
  }
  rightData(compute) {
    this.setState(this.parseCompute(compute));
  }
  parseOperator(operator) {
    let result = this.state.result;
    if (operator === 'C') {
      return {
        result: '0',
        compute: null,
        temp: null
      };
    }
    if (operator === '+/-') {
      return {
        result: `${-Number(result)}`
      };
    }
    if (operator === '%') {
      return {
        result: `${Number(result) / 100}`
      };
    }
  }
  parseNumber(number) {
    let { result, reset } = this.state;
    if (!reset && result.length === 9) {
      return result;
    }
    if (number !== '.' && result === '0') {
      return `${number}`;
    }
    if (number === '.' && result.indexOf('.') !== -1) {
      return result;
    }

    if (reset) {
      return `${number}`;
    }
    return `${result}${number}`;
  }
  parseCompute(compute) {
    let { result, temp } = this.state;
    const newResult = this.computeResult();
    if (compute === '=') {
      return {
        temp: null,
        compute: compute,
        result: temp === null ? result : newResult,
        reset: true
      }
    } else {
      if (temp === null) {
        return {
          temp: result,
          compute: compute,
          reset: true
        };
      } else {
        return {
          temp: newResult,
          compute: compute,
          result: newResult,
          reset: true
        };
      }
    }
  }
  computeResult() {
    let { result, temp, compute } = this.state;
    let computeResult;
    if (temp === null) {
      return;
    }
    if (compute === '+') {
      computeResult = `${Number(temp) + Number(result)}`;
    }
    if (compute === '-') {
      computeResult = `${Number(temp) - Number(result)}`;
    }
    if (compute === '×') {
      if (Number(temp) < 1 && Number(result) < 1) {
        console.log(temp, result)
        var a = temp
        var b = result
        var aNew = a.split(".")[1].length;
        var bNew = b.split(".")[1].length;

        var aMagnification = 1
        var bMagnification = 1
        var cMagnification = 1
        for (var i = 0; i < aNew; i++) {
          aMagnification = aMagnification + '0'
        }
        for (var i = 0; i < bNew; i++) {
          bMagnification = bMagnification + '0'
        }

        for (var i = 0; i < bNew + aNew; i++) {
          cMagnification = cMagnification + '0'
        }
        var newTemp = Math.trunc(Number(temp) * (Number(aMagnification)))
        var newResult = Math.trunc(Number(result) * (Number(bMagnification)))
        computeResult = `${Number(newTemp) * Number(newResult) / Number(cMagnification)}`;

        // console.log("原字符串"+temp,result,"字符串转数字",Number(temp),Number(result),"转化整数",newTemp,newResult,'倍数',Number(cMagnification),"结果",computeResult)
      } else {
        computeResult = `${Number(temp) * Number(result)}`;
      }
    }

    if (compute === '÷') {
      computeResult = `${Number(temp) / Number(result)}`;
    }
    if (computeResult.length > 9) {
      return Number(computeResult).toExponential(3);
    } else {
      return computeResult;
    }
  }

  render() {
    return (
      <div className="testOne">
        {/* <TeseOneDelete/> */}
        <div className='calculator'>
          <div className='showData'>
            <span>{this.state.result}</span>
          </div>
          <div className="keyboard">

            <div className="topData">
              {
                this.state.dataListOne.map((item, i) => {
                  return <div key={i} onClick={(e) => { this.topData(item.value) }}>{item.value}</div>
                })
              }
            </div>


            <div className="contentData">
              {
                this.state.dataListTwo.map((item, i) => {
                  return <div key={i} onClick={(e) => { this.contentData(item.value) }}>{item.value}</div>
                })
              }
            </div>

            <div className="rightData">
              {
                this.state.dataListThere.map((item, i) => {
                  return <div key={i} onClick={(e) => { this.rightData(item.value) }}>{item.value}</div>
                })
              }
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default TestOne;