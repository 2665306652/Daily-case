import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import './index.less';



const Content=()=>(<div  className="mui-act"><img src={require('../../public/images/NoColor.png')} /></div>);




ReactDOM.render(<Content />,document.getElementById("test1"));