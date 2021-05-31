import React from "react";
import './certificate-info.scss'

import certificateImage from '../../../assest/images/certificateImage.png'
class CertificateInfo extends React.Component{
    constructor(props) {
        super(props);

        this.state = {};
    }

    render(){
        return (
            <div className={'certificate-info'}>


                <img src={certificateImage} className={'certificate-info-backImage'}/>
            </div>
        )
    }
}

export default CertificateInfo;