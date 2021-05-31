import React, {Component} from "react";

import FirstScreen from '../index/first-screen/first-screen'
import BasisInfo from "./basis-info/basis-info";
import UniversityInfo from "./university-info/university-info";
import WorkInfo from "./work-info/work-info";
import SkillInfo from "./skill-info/skill-info";
import ProjectInfo from "./project-info/project-info";
import CertificateInfo from "./certificateInfo/certificate-info";
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


        }
    }

    handleScroll(){
        console.log(document.documentElement.scrollTop)
        if (document.documentElement.scrollTop > 250 && document.documentElement.scrollTop < 900) {
            this.setState({
                basisInfoProps: 'animate__slideInUp'
            })
            console.log(this.state);
        } else if (document.documentElement.scrollTop > 900 && document.documentElement.scrollTop < 1500){
            this.setState({
                universityInfoProps1: 'animate__fadeInUp',
                universityInfoProps2: 'animate__fadeInLeft'
            })
            console.log(this.state);
        } else if (document.documentElement.scrollTop > 1500 && document.documentElement.scrollTop < 2000){
            this.setState({
                workInfoProps1: 'animate__fadeInDown',
                workInfoProps2: 'animate__fadeInRight'
            })
            console.log(this.state);
        } else if (document.documentElement.scrollTop > 2000 && document.documentElement.scrollTop < 3500){
           /* this.setState({
                workInfoProps1: 'animate__fadeInDown',
                workInfoProps2: 'animate__fadeInRight'
            })
            console.log(this.state);*/
        } else if (document.documentElement.scrollTop > 3500 && document.documentElement.scrollTop < 4500){
            this.setState({
                workInfoProps1: 'animate__fadeInDown',
                workInfoProps2: 'animate__fadeInRight'
            })
            console.log(this.state);
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
                <BasisInfo className={this.state.basisInfoProps}></BasisInfo>
                <UniversityInfo className1={this.state.universityInfoProps1} className2={this.state.universityInfoProps2}></UniversityInfo>
                <WorkInfo className1={this.state.workInfoProps1} className2={this.state.workInfoProps2}></WorkInfo>
                <SkillInfo></SkillInfo>
                {/*<ProjectInfo></ProjectInfo>*/}
                <CertificateInfo></CertificateInfo>
                <ProjectDetail></ProjectDetail>
                <LastScreen></LastScreen>
            </section>
        )
    }
}

export default Index;