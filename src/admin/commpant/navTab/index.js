import React, { Component } from 'react';

import './index.less'

class NavTab extends Component {

    render() {
        return (
            <div className="navTab-main">
                {this.props.navData && this.props.navData.map((item,i)=>{
                    return <div key={i} className={item.id == this.props.currentId ? "main-item item-checked" : "main-item"} onClick={this.props.onClick.bind(this,item.title,item.id,item.router)}>
                        <span className="item-title">{item.title}</span>
                        {this.props.navData.length > 1 ? <span className="item-close" onClickCapture={(e)=>this.props.onDel(item,e)}>X</span> : ''}
                        
                    </div>
                })}
            </div>
        );
    }
}

export default NavTab;