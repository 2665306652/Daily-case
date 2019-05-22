import React, { Component } from 'react';
import "./index.less"
import { Icon } from 'antd';
// import TeseTwoDelete from"./teseTwoDelete.js" 

class TestTwo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            imgFile: null,
            imgSrc: this.props.imgSrc || "",
            renderState: this.props.renderState || "init",
            isPreview: false,
            disabled: this.props.disabled || false
        }
    }

    static defaultProps = {
        imgTitle: "",
        height: "200px",
        renderState: "init",
        imgSrc: "",
        titleClass: "",
        accept: "*"
    }


    renderImg() {
        if (this.state.renderState === "init") {
            return this.renderInit()
        } else if (this.state.renderState === "upload") {
            return this.renderUpload()
        }
    }
    //初始化渲染
    renderInit() {
        return (
            <div className="img-box" style={{ height: this.props.height }}>
                <input type="file" className="img-file" onChange={this.imgChange.bind(this)} accept="image/*" />
                <div className={"img-add " + this.props.titleClass}>
                    <Icon type="plus" className="img-add-icon" />
                    <div>{this.props.imgTitle}</div>
                </div>
            </div>
        )
    }

    //上传完成
    renderUpload() {
        const imgSrc = (this.state.imgSrc && this.state.imgSrc != "") ? this.state.imgSrc : "/static/admin/img/error_img.jpg"
        const imgBox = this.state.disabled ? "img-box-preview-hide" : "img-box-preview-show"
        return (
            <div className={imgBox} style={{ height: this.props.height }}>
                <img src={imgSrc} className="img-wh" />
                <div className="img-preview">
                    <Icon type="delete" className="img-operate" onClick={this.deleteImg.bind(this)} />
                    <a className='modal-a-hover' href={imgSrc} download="">
                        <Icon type="arrow-down" className="img-operate" />
                    </a>
                </div>
            </div>
        )
    }

    //获取文件图片
    imgChange(event) {
        this.setState({ imgFile: event.target.files[0], renderState: "loading" }, () => {
            this.previewImg()
        })
    }

    //本地预览
    previewImg() {
        const that = this;
        const file = this.state.imgFile;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function (e) {
            that.setState({ renderState: "upload", imgSrc: this.result })
        }
    }
    //删除图片
    deleteImg() {
        this.setState({ renderState: "init", imgFile: null, isPreview: false, imgSrc: "" })
    }

    render() {
        return (
            <div className='testTwo'>
                {this.renderImg()}
                <p className="img-box-title">本地上传图片</p>

                {/* <TeseTwoDelete/> */}
            </div>
        )
    }
}
export default TestTwo;