import React, { Component } from "react";
import './first-screen.scss';

// import nameImg from  "../../../assest/images/未标题-1.png";
import ReactCanvas from "./component/reactCanvas/react-canvas";

class FirstScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render(){
        return (
            <div className="first-screen">
                <span className={'first-screen-work-time animate__animated animate__fadeInUp'}>2019-2021</span>
                {/*<span className={'first-screen-work-head'}>PERSONAL RESUME</span>*/}
                {/*<span className={'first-screen-work-head-IN'}>IN</span>*/}
                <span className={'first-screen-title animate__flipInX animate__animated'}>何影婷</span>
                <span className={'first-screen-professional first-screen-professional-titles animate__animated animate__fadeInUp'}>初级  /  WEB  /  前端开发工程师</span>
                <span className={'first-screen-professional first-screen-professional-sub-titles animate__animated animate__fadeInUp'}>primary &nbsp;&nbsp; web &nbsp;&nbsp; developer</span>
                {/*<section className="first-screen-section">
                    <a href="" data-bf="求职简历" data-af="请多多指教">
                        <img src={nameImg} alt="" height="240"/>
                        <span className={'first-screen-section-title'}>何影婷</span>
                    </a>
                </section>*/}

                <ReactCanvas></ReactCanvas>
            </div>
        )
    }
}

export default FirstScreen;