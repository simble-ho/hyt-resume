import React from 'react'
import './skill-info.scss'

import {
    echartsImage,
    elementUiImage,
    es6Image,
    githubImage,
    H5JSC3Image,
    iviewImage,
    nginxImage,
    reactImage,
    sassImage,
    vueImage
} from '../../../util/base64'

/*import echartsImage from '../../../assest/images/skill-icon/echarts.png'
import elementUiImage from '../../../assest/images/skill-icon/element-ui.jpg'
import es6Image from '../../../assest/images/skill-icon/es6.jpg'
import githubImage from '../../../assest/images/skill-icon/github.jpg'
import H5JSC3Image from '../../../assest/images/skill-icon/h5,js,c3.png'
import iviewImage from '../../../assest/images/skill-icon/iview.png'
import nginxImage from '../../../assest/images/skill-icon/nginx.jpg'
import reactImage from '../../../assest/images/skill-icon/react.jpg'
import sassImage from '../../../assest/images/skill-icon/sass.jpg'
import vueImage from '../../../assest/images/skill-icon/vue.png'*/

import Proportion from "./component/proportion";

class SkillInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            className: '',
            data: [
                {
                    DataContent: 'html5+JS+CSS3',
                    src: H5JSC3Image,
                    proportion: '85%'
                },
                {
                    DataContent: 'es6',
                    src: es6Image,
                    proportion: '80%'
                },
                {
                    DataContent: 'vue',
                    src: vueImage,
                    proportion: '90%'
                },
                {
                    DataContent: 'sass',
                    src: sassImage,
                    proportion: '70%'
                },
                {
                    DataContent: 'echarts',
                    src: echartsImage,
                    proportion: '70%'
                },
                {
                    DataContent: 'iview',
                    src: iviewImage,
                    proportion: '90%'
                },
                {
                    DataContent: 'element-ui',
                    src: elementUiImage,
                    proportion: '60%'
                },
                {
                    DataContent: 'nginx',
                    src: nginxImage,
                    proportion: '60%'
                },
                {
                    DataContent: 'github',
                    src: githubImage,
                    proportion: '60%'
                },
                {
                    DataContent: 'react',
                    src: reactImage,
                    proportion: '20%'
                }
            ]
        }
    }
    render(){
        return (
            <div className={'skill-info'}>
                <h1 data-content={'专业技能'} className={`animate__animated ${this.props.props1}`}>专业技能</h1>
                <div className={`skill-info-icon-container`}>
                    {
                        this.state.data.map( (item,index)=> {
                            return (
                                <div
                                    className={'skill-info-icon-container-image'}
                                    data-content={item.DataContent}
                                    style={{
                                        width: index === 0 ? '240px' : ''
                                    }}
                                    key={index}
                                >
                                    <img
                                        className={`animate__animated ${this.props.props1}`}
                                        src={item.src}
                                        alt=""
                                        style={{
                                            animationDelay: `${(index + 5)/10}s`,
                                            webkitAnimationDelay: `${(index + 5)/10}s`,
                                        }}
                                    />
                                    <Proportion
                                        props1={this.props.props2}
                                        value={item.proportion}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default SkillInfo;