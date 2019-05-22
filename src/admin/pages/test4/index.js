import React, { Component } from 'react';
import { Icon } from 'antd';
import './index.less';


/**
 * 使用props属性
 * 
 * 渲染的组件通过方法引入  {this.renderImg()}，进行渲染
 * 
 * 通过状态实现布局之间的切换  renderImg()
 * 
 * 引入插件的图标  import { Icon } from 'antd'; 使用<Icon />
 */ 
class Test4 extends Component {
    constructor(props) {
        super(props)
        this.state = {
          imgFile: null,
          imgSrc: this.props.imgSrc||"",
          renderState: this.props.renderState||"init",
          isPreview: false,
          disabled:this.props.disabled || false
        }
      }
    
      static defaultProps = {
        imgTitle: "",
        height: "200px",
        renderState: "init",
        imgSrc: "",
        titleClass: "",
        accept:"*"
      }

    
      renderImg() {
        if (this.state.renderState === "init") {
          return this.renderInit()
        } else if (this.state.renderState === "upload") {
          return this.renderUpload()
        }
      }

      renderInit() {//初始化渲染
        return (
          <div className="img-box" style={{ height: this.props.height }}>
            <input type="file" className="img-file" onChange={this.imgChange.bind(this)} accept="image/*"/>
            <div className={"img-add " + this.props.titleClass}>
              <Icon type="plus" className="img-add-icon" />
              <div>{this.props.imgTitle}</div>
            </div>
          </div>
        )
      }
      
      renderUpload() {//上传完成
        const imgSrc = (this.state.imgSrc&&this.state.imgSrc!="")?this.state.imgSrc:"/static/admin/img/error_img.jpg"
        const imgBox = this.state.disabled ? "img-box-preview-hide" : "img-box-preview-show"
        return (
          <div className={imgBox} style={{ height: this.props.height }}>
            <img src={imgSrc} className="img-wh" />
            <div className="img-preview">
           
              <Icon type="delete" className="img-operate" onClick={this.deleteImg.bind(this)} />
             
                <a className='modal-a-hover' href={imgSrc} download="" onClick={this.downImg.bind(this)}>
                    <Icon type="arrow-down" className="img-operate" />
                </a>
            </div>
          </div>
        )
      }


      imgChange(event) {//获取文件图片
        this.setState({ imgFile: event.target.files[0], renderState: "loading" }, () => {
          this.previewImg()
        })
      }
    
      previewImg() {//本地预览
        const that = this;
        const file = this.state.imgFile;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
          that.setState({ renderState: "upload", imgSrc: this.result })
        }
      }

      deleteImg() {//删除图片
        this.setState({ renderState: "init", imgFile: null, isPreview: false, imgSrc: "" })
      }
      
      downImg(){

      }
      render() {
        return (
          <div>
            {this.renderImg()}
            <p className="img-box-title">本地上传图片</p>

            <a ></a>
          </div>
        )
      }
}

export default Test4;