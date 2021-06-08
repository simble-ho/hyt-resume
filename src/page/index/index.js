import React, {Component} from "react";

import FirstScreen from '../index/first-screen/first-screen'
import BasisInfo from "./basis-info/basis-info";
import UniversityInfo from "./university-info/university-info";
import WorkInfo from "./work-info/work-info";
import SkillInfo from "./skill-info/skill-info";
// import ProjectInfo from "./project-info/project-info";
import CertificateInfo from "./certificateInfo/certificate-info";
import HonorInfo from "./honor-info/honor-info";
import ProjectDetail from "./project-detail/project-detail";

import LastScreen from "./last-screen/last-screen";

import '../../css/common-css.scss'
import "animate.css";

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            basisInfoProps: '',

            universityInfoProps1: '',
            universityInfoProps2: '',

            workInfoProps1: '',
            workInfoProps2: '',

            skillInfoProps1: '',
            skillInfoProps2: '',

            certificateInfoProps: '',
            honorInfoProps: '',

            scrollToTop: 0,


        }
    }

    handleScroll(){
        if (document.documentElement.scrollTop >= 250 && document.documentElement.scrollTop < 900) {
            this.setState({
                basisInfoProps: 'animate__slideInUp'
            })
        } else if (document.documentElement.scrollTop >= 900 && document.documentElement.scrollTop < 1500){
            this.setState({
                universityInfoProps1: 'animate__fadeInUp',
                universityInfoProps2: 'animate__fadeInLeft'
            })
        } else if (document.documentElement.scrollTop >= 1500 && document.documentElement.scrollTop < 2300){
            this.setState({
                workInfoProps1: 'animate__fadeInDown',
                workInfoProps2: 'animate__fadeInRight'
            })
        } else if (document.documentElement.scrollTop >= 2300 && document.documentElement.scrollTop < 3400){
            this.setState({
                skillInfoProps1: 'animate__flipInX',
                skillInfoProps2: 'animate__fadeIn',
            })
        } else if (document.documentElement.scrollTop >= 3400 && document.documentElement.scrollTop < 4000){
            this.setState({
                certificateInfoProps: 'animate__fadeInLeft',
            })
        } else if (document.documentElement.scrollTop >= 4000 && document.documentElement.scrollTop < 4700){
            this.setState({
                honorInfoProps: 'animate__fadeInRight',
            })
        } else if (document.documentElement.scrollTop >= 4700){
           this.setState({
               scrollToTop: document.documentElement.scrollTop,
           })
        }
    }

    componentDidMount(){
        // document.addEventListener("mousewheel", this.handleScroll);
        window.onscroll = () => this.handleScroll()
    }

    render(){
        return (
            <section>
                <FirstScreen></FirstScreen>
                <BasisInfo props1={this.state.basisInfoProps}></BasisInfo>
                <UniversityInfo props1={this.state.universityInfoProps1} props2={this.state.universityInfoProps2}></UniversityInfo>
                <WorkInfo props1={this.state.workInfoProps1} props2={this.state.workInfoProps2}></WorkInfo>
                <SkillInfo props1={this.state.skillInfoProps1} props2={this.state.skillInfoProps2}></SkillInfo>
                {/*<ProjectInfo></ProjectInfo>*/}
                <CertificateInfo props1={this.state.certificateInfoProps}></CertificateInfo>
                <HonorInfo props1={this.state.honorInfoProps}></HonorInfo>
                <ProjectDetail scrollToTop={this.state.scrollToTop}></ProjectDetail>
                <LastScreen></LastScreen>
            </section>
        )
    }
}

export default Index;