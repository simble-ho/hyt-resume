import React from 'react'
import "animate.css";
import './basis-info.scss'

import headImage from '../../../assest/images/微信图片_20210518153732.jpg'
import QRCodeImage from '../../../assest/images/微信图片_20210519155441.jpg'

import Transition from '../../../component/transition'

class BasisInfo extends React.Component {
    constructor(props) {
        super(props);
    }

/*    handleScroll() {
        console.log(document.documentElement.scrollTop)

        if (document.documentElement.scrollTop > 250) {
            this.setState({
                    className: 'animate__slideInUp'
            })
            console.log(this.state);
            // document.removeEventListener("mousewheel", this.handleScroll);
        }
    }*/


    componentDidUpdate(prevProps) {
        console.log(prevProps);
    }


        componentDidMount(){
            console.log(this.props);
            // document.addEventListener("mousewheel", this.handleScroll);
        // window.onscroll = () => this.handleScroll()
    }

    render(){
        return (
            <div className={'basis-info'}>
                <p className={`animate__animated basis-info-title ${this.props.className}`}>CONTACT ME</p>

                <div className={`animate__animated LF-layout basis-info-container ${this.props.className}`}>
                    <div className={'basis-info-QRCode'}>
                        {/*<img src={headImage} alt="何影婷" height="100px"></img>*/}
                        <img src={QRCodeImage} alt="扫码联系"></img>
                    </div>
                    <div className={'basis-info-content'}>
                        <ul className={'none-line-stle-type'}>
                            <li><span data-content={'微信'}>微信</span><span>17157869684</span></li>
                            <li><span data-content={'手机'}>手机</span><span>17157869684</span></li>
                            <li><span data-content={'邮箱'}>邮箱</span><span>904121445@qq.com</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default BasisInfo