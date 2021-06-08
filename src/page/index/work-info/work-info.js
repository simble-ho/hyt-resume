import React from 'react'
import './work-info.scss'


// import bgImage from '../../../assest/images/2236649599(2).png'
import {WorkInfoBG2} from '../../../util/base64'
class WorkInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render(){
        return (
            <div className={'work-info'}>

                <div className={`work-info-main animate__animated ${this.props.props1}`}>

                    <h2 data-content="广州尚融网络科技有限公司">广州尚融网络科技有限公司</h2>
                    <h2 data-content="2019.06 - 2021.04">2019.06 - 2021.04</h2>
                    {/*<h2 data-content="前端开发工程师">前端开发工程师</h2>*/}


                    <p className="work-info-main-p">
                        19年6月份加入尚融，我所在部门是大数据事业部，在其中担任前端开发工程师一职，期间部门主要业务是为海关缉私部门搭建大数据平台，包括数据提取、数据清洗、数据展示、数据管理系统等。
                    </p>
                    <p className="work-info-main-p">
                        我主要工作内容为：
                        <blockquote>
                            1、大数据组系统的前端页面设计，完成各系统的大数据可视化展示。
                            <br/>2、完成针对海关缉私业务开发的系统的前端项目的搭建、部署及维护。
                            <br/>3、参与了公司自有的较大型中后台数据处理系统的前端页面搭建
                        </blockquote>
                    </p>
                    <p className="work-info-main-p">
                        目前已有完整的项目经验，累积了丰富的实战技巧,求带走~
                    </p>
                </div>


                <img src={WorkInfoBG2} className={'work-info-background'} alt=""/>

                <div className={`work-info-title-container animate__animated ${this.props.props2}`}>
                    <p>工作经历</p>
                    <p>WORKING</p>
                    <p>EXPERIENCE</p>
                </div>
            </div>
        )
    }
}

export default WorkInfo;