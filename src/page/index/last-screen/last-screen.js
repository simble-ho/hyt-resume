import React, { Component } from "react";
import './last-screen.scss';

// import nameImg from  "../../../assest/images/未标题-1.png";
import QRCode from '../../../assest/images/微信图片_20210519155441.jpg'
// import selfPhotoImage from '../../../assest/images/微信图片_20210518153732.jpg'
class LastScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render(){
        return (
            <div className="last-screen">
                <h1>THANKS</h1>
                <p>FOR WATCHING</p>
                <div>
                    {/*<img src={selfPhotoImage} className={'last-screen-QRCode'}/>*/}
                    <img src={QRCode} className={'last-screen-QRCode'} alt=""/>

                </div>
                <p>期待与您见面</p>
            </div>
        )
    }
}

export default LastScreen;