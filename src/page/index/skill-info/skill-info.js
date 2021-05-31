import React from 'react'
import './skill-info.scss'

import echartsImage from '../../../assest/images/skill-icon/echarts.png'
import elementUiImage from '../../../assest/images/skill-icon/element-ui.jpg'
import es6Image from '../../../assest/images/skill-icon/es6.jpg'
import githubImage from '../../../assest/images/skill-icon/github.jpg'
import H5JSC3Image from '../../../assest/images/skill-icon/h5,js,c3.png'
import iviewImage from '../../../assest/images/skill-icon/iview.png'
import nginxImage from '../../../assest/images/skill-icon/nginx.jpg'
import reactImage from '../../../assest/images/skill-icon/react.jpg'
import sassImage from '../../../assest/images/skill-icon/sass.jpg'
import vueImage from '../../../assest/images/skill-icon/vue.png'
import Proportion from "./component/proportion";

class SkillInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render(){
        return (
            <div className={'skill-info'}>

                {/*<div className={'skill-info-background-title'}>PROFESSIONAL SKILLS</div>*/}


                <h1 data-content={'专业技能'}>专业技能</h1>
                <div className={'skill-info-icon-container'}>
                    <div className={'skill-info-icon-container-image H5JSC3Image'} data-content="html5+JS+CSS3">
                        <img src={H5JSC3Image}/>
                        <Proportion value={'90%'}></Proportion>
                    </div>
                    <div className={'skill-info-icon-container-image'} data-content="es6">
                        <img src={es6Image}/>
                        <Proportion value={'80%'}></Proportion>
                    </div>
                    <div className={'skill-info-icon-container-image'} data-content="vue">
                        <img src={vueImage}/>
                        <Proportion value={'90%'}></Proportion>
                    </div>
                    <div className={'skill-info-icon-container-image'} data-content="sass">
                        <img src={sassImage}/>
                        <Proportion value={'70%'}></Proportion>
                    </div>
                    <div className={'skill-info-icon-container-image'}  data-content="echarts">
                      <img src={echartsImage}/>
                        <Proportion value={'70%'}></Proportion>
                    </div>
                    <div className={'skill-info-icon-container-image'} data-content="iview">
                        <img src={iviewImage}/>
                        <Proportion value={'80%'}></Proportion>
                    </div>
                    <div className={'skill-info-icon-container-image'} data-content="element-ui">
                         <img src={elementUiImage}/>
                        <Proportion value={'60%'}></Proportion>
                    </div>
                    <div className={'skill-info-icon-container-image'} data-content="nginx">
                        <img src={nginxImage}/>
                        <Proportion value={'60%'}></Proportion>
                    </div>
                    <div className={'skill-info-icon-container-image'} data-content="github">
                        <img src={githubImage}/>
                        <Proportion value={'60%'}></Proportion>
                    </div>
                    <div className={'skill-info-icon-container-image'} data-content="react">
                        <img src={reactImage}/>
                        <Proportion value={'20%'}></Proportion>
                    </div>
                </div>
            </div>
        )
    }
}

export default SkillInfo;