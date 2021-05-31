import React from 'react'
import './university-info.scss'

import zquImage from '../../../assest/images/zqu.jpg'
class UniversityInfo extends React.Component {
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div className={'university-info'}>

                <div className={`university-info-main animate__animated ${this.props.className1}`}>
                    <div className={'university-info-main-block'}></div>

                    <p className={'university-info-main-p'}>2020年6月毕业于广东肇庆学院计算机软件学院，大学本科专业是物联网工程，在校期间曾获三好学生及一等奖学金、校园先进个人等称号</p>
                    <p className={'university-info-main-p'}>主修课程：数据库运用技术（mySQL,Oracle）、Linux操作系统、c语言程序设计、面向对象程序设计（java）、安卓系统开发、JSP网络程序设计、JAVA EE程序设计与应用开发，历年平均学分绩点3.45</p>
                    <p className={'university-info-main-p'}>获得了英语四、六级证书及中级软件设计师证书</p>
                    <p className={'university-info-main-p'}>在校期间完成过微信小程序、安卓APP程序、java在线聊天系统、JSP网页开发</p>

                    {/*<span className={'university-info-main-miss-corner upon-corner'} data-content={'成绩表'}>成绩表</span>*/}
                    {/*<span className={'university-info-main-miss-corner lower-corner'} data-content={'证书及获奖情况'}>证书及获奖情况</span>*/}
                </div>


                <img src={zquImage} className={'university-info-background'}/>

                <div className={`university-info-title-container animate__animated ${this.props.className2}`}>
                    <p>教育背景</p>
                    <p>EDUCATIONAL</p>
                    <p>BACKGROUND</p>
                </div>
            </div>
        )
    }
}

export default UniversityInfo;