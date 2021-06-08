import React from "react";
import './certificate-info.scss'

// import certificateImage from '../../../assest/images/certificateImage.PNG'
import {CertificateInfoBG1} from '../../../util/base64';
class CertificateInfo extends React.Component{
    constructor(props) {
        super(props);

        this.state = {};
    }

    render(){
        return (
            <div className={'certificate-info'}>

                <div className={'certificate-info-content'}>
                    <h1>证书</h1>

                    <div className={`certificate-info-content-value animate__animated ${this.props.props1}`}>
                        <span>大学英语四级(CET4)</span><span>通过</span>
                    </div>
                    <div
                        className={`certificate-info-content-value animate__animated ${this.props.props1}`}
                        style={{
                            animationDelay: '0.5s',
                            webkitAnimationDelay: '0.5s',
                        }}
                    >
                        <span>大学英语六级(CET6)</span><span>通过</span>
                    </div>
                    <div
                        className={`certificate-info-content-value animate__animated ${this.props.props1}`}
                         style={{
                             animationDelay: '1s',
                             webkitAnimationDelay: '1s',
                         }}
                    >
                        <span>全国计算机技术与软件专业技术资格——中级软件设计师证书</span><span>通过</span>
                    </div>

                   {/* <h1>荣誉</h1>

                    <div className="certificate-info-content-value">
                        <span>一等奖学金</span><span>校级</span>
                    </div>
                    <div className="certificate-info-content-value">
                        <span>“肇梦杯”创新科技大赛网页设计组一等奖</span><span>校级</span>
                    </div>*/}
                </div>

                <img src={CertificateInfoBG1} className={'certificate-info-backImage'}/>
            </div>
        )
    }
}

export default CertificateInfo;