import React from "react";
import './project-detail.scss'

/*import {
    combatPlatformImage1,
    combatPlatformImage2,
    combatPlatformImage4,
    hologramImage1,
    hologramImage2,
    cloudSearchImage1,
    cloudSearchImage2,
    laboratoryImage1,
    laboratoryImage2,
    laboratoryImage3,
    laboratoryImage4,
    dmcImage1,
    dmcImage2,
    dmcImage3,
    dmcImage4,
    dmcImage6
} from  '../../../util/base64'*/
import combatPlatformImage1 from '../../../assest/images/project-image/combatPlatformImage1.png'
import combatPlatformImage2 from '../../../assest/images/project-image/combatPlatformImage2.png'
import combatPlatformImage4 from '../../../assest/images/project-image/combatPlatformImage4.png'

import hologramImage1 from '../../../assest/images/project-image/hologramImage1.png'
import hologramImage2 from '../../../assest/images/project-image/hologramImage2.png'

import cloudSearchImage1 from '../../../assest/images/project-image/cloudSearchImage1.png'
import cloudSearchImage2 from '../../../assest/images/project-image/cloudSearchImage2.png'

import laboratoryImage1 from '../../../assest/images/project-image/laboradataImage1.png'
import laboratoryImage2 from '../../../assest/images/project-image/laboradataImage2.png'
import laboratoryImage3 from '../../../assest/images/project-image/laboratoryImage3.png'
import laboratoryImage4 from '../../../assest/images/project-image/laboratoryImage4.png'

import dmcImage1 from '../../../assest/images/project-image/dmcImage1.png'
import dmcImage2 from '../../../assest/images/project-image/dmcImage2.png'
import dmcImage3 from '../../../assest/images/project-image/dmcImage3.png'
import dmcImage4 from '../../../assest/images/project-image/dmcImage4.png'
import dmcImage6 from '../../../assest/images/project-image/dmcImage6.png'
// import dmcImage7 from '../../../assest/images/project-image/dmcImage7.png'

class ProjectDetail extends React.Component{
    constructor(props) {
        super(props);


        this.state = {}
    }


    render(){
        return (
            <div className={'project-detail'}>

                <div className={'project-detail-main'}>

                    <div className={`project-detail-main-title ${this.props.scrollToTop > 5100 ? 'animate__animated animate__flipInX' : ''}`}>
                        <h1 data-content={'- 项目实战 -'}>- 项目实战 -</h1>
                    </div>

                    <div className={'project-detail-main-single laboratory'}>

                        <div className={'project-detail-main-single-block laboratory-title'}>
                            <h2>广州海关电子取证分析系统</h2>
                        </div>

                        <div className={`project-detail-main-single-block laboratory-describe1 ${this.props.scrollToTop > 5450 ? 'animate__animated animate__fadeInRight' : ''}`}>
                            <p className={'text-gray'}>大数据平台其中一个数据可视化系统,提供嫌疑人设备信息可视化展示，包括嫌疑人社交聊天内容、消费信息、出行信息、位置信息等都可视化为聊天界面方便警员取证</p>
                            <p className={'text-gray-dark'}>该系统为我进入公司后首个接触的项目，我作为前端组成员参与项目后期代码完善及项目维护</p>
                            {/*<a href=''>SHOW MORE</a>*/}
                        </div>
                        <div className={`project-detail-main-single-block laboratory-describe2 ${this.props.scrollToTop > 6150 ? 'animate__animated animate__fadeInLeft' : ''}`}>
                            <p className={'text-gray'}>在使用<span className={'highlight-blue-mktg'}>echarts</span>各图表搭建设备要素数据大屏界面、实现热力图，轨迹迁移图同时，我熟练掌握使用<span className={'highlight-blue-mktg'}>echarts</span>制作所需要的图表样式</p>
                            <p className={'text-gray'}>项目到后期因前期搭建结构不合理，冗余文件越来越多，项目越发庞大。最终出现因首屏加载文件过多，项目结构混乱等问题导致的首屏加载极慢、部署项目打包不全等问题</p>
                            <p className={'text-gray-dark'}>
                                我作为后期项目主要负责人，重构了部分代码，合理复用组件并优化首屏加载速度，使项目部署成功并保证首屏加载速度稳定在2s内。
                            </p>
                            {/*<a href=''>SHOW MORE</a>*/}
                        </div>

                        <img src={laboratoryImage1} className={'laboratory-image1'} alt=""/>
                        <img src={laboratoryImage2} className={`laboratory-image2 ${this.props.scrollToTop > 6150 ? 'animate__animated animate__fadeInUp' : ''}`} alt=""/>
                        <img src={laboratoryImage3} className={'laboratory-image3'} alt=""/>
                        <img src={laboratoryImage4} className={`laboratory-image4 ${this.props.scrollToTop > 5450 ? 'animate__animated animate__fadeInDown' : ''}`} alt=""/>
                    </div>

                    <div className={'project-detail-main-single combat-platform'}>


                        <div className={`project-detail-main-single-block combat-platform-describe ${this.props.scrollToTop > 6800 ? 'animate__animated animate__fadeInDown' : ''}`}>
                            <h2 data-content="广州缉私实战平台">广州缉私实战平台</h2>
                            <p className={'text-gray'}>海关大数据平台,实现操作系统桌面设计，整合海关大数据各子系统平台，实现子系统统一管理。</p>
                            <p className={'text-gray'}>该系统为我进入公司后首个独立负责的项目,项目业务逻辑较简单，难点在于实现操作系统的操作逻辑。</p>
                            <p className={'text-gray-dark'}>系统借助<span className={'highlight-blue-mktg'}>websocket</span>实现实时预警，使用<span className={'highlight-blue-mktg'}>原生JS</span>实现窗口拖拽、点击，100%还原ui设计。</p>
                            <p></p>
                            {/*<a href=''>SHOW MORE</a>*/}
                        </div>

                        <img
                            src={combatPlatformImage1}
                            className={`combat-platform-image1 ${this.props.scrollToTop > 6900 ? 'animate__animated animate__fadeInDown' : ''}`}
                            alt=""
                        />
                        <img
                            src={combatPlatformImage2}
                            className={`combat-platform-image2 ${this.props.scrollToTop > 6900 ? 'animate__animated animate__bounceIn' : ''}`}
                            alt=""
                            style={{
                                animationDelay: '0.6s',
                                webkitAnimationDelay: '0.6s',
                            }}
                        />
                        {/*<img src={combatPlatformImage3} className={'combat-platform-image3'} alt=""/>*/}
                        <img
                            src={combatPlatformImage4}
                            className={`combat-platform-image4 
                            ${this.props.scrollToTop > 6900 ? 'animate__animated animate__bounceIn' : ''}`}
                            alt=""
                            style={{
                                animationDelay: '0.8s',
                                webkitAnimationDelay: '0.8s',
                            }}
                        />
                    </div>



                    <div className={'project-detail-main-single cloud-search'}>

                        <div className={'project-detail-main-single-block cloud-search-title'}>
                            <h2>广州海关云搜索</h2>
                        </div>

                        <div className={`project-detail-main-single-block cloud-search-describe ${this.props.scrollToTop > 8100 ? 'animate__animated animate__fadeInLeft' : ''}`}>
                            <p className={'text-gray'}>大数据平台其中一个数据可视化系统,该系统提供数据检索功能，带有多种搜索方式，包括基础搜索，空格多关键字搜索、划词搜索、高级搜索等多种方法，以提高搜索精度</p>
                            <p className={'text-gray-dark'}>该系统前端为我独立开发,前端框架选用<span className={'highlight-blue-mktg'}>vue</span>,样式库选用<span className={'highlight-blue-mktg'}>iview</span></p>
                            <p className={'text-gray'}>系统大量使用<span className={'highlight-blue-mktg'}>ES6</span>语法，代码更简洁高效</p>
                            {/*<a href=''>SHOW MORE</a>*/}
                        </div>

                        <img
                            src={cloudSearchImage1}
                            className={`cloud-search-image1 ${this.props.scrollToTop > 7900 ? 'animate__animated animate__fadeInRight' : ''}`}
                            alt=""
                        />
                        <img
                            src={cloudSearchImage2}
                            className={`cloud-search-image2 ${this.props.scrollToTop > 7900 ? 'animate__animated animate__fadeInRight' : ''}`}
                            alt=""
                            style={{
                                animationDelay: '0.6s',
                                webkitAnimationDelay: '0.6s',
                            }}
                        />
                    </div>

                    <div className={'project-detail-main-single hologram'}>


                        <div className={'project-detail-main-single-block hologram-title'}>
                            <h2>广州缉私全息画像</h2>
                        </div>

                        <div className={`project-detail-main-single-block hologram-describe ${this.props.scrollToTop > 9000 ? 'animate__animated animate__fadeInRight' : ''}`}>
                            <p className={'text-gray'}>大数据平台其中一个数据可视化系统，该系统同样提供数据检索功能，检索结果以人员为主体，通过合理的大数据展示方式整合查询到的数据，塑造立体人员形象。</p>
                            {/*<p>具备数据管理工具，系统所有数据均可通过打标签工具打上标记，方便警员对数据进行二次加工</p>*/}
                            {/*<p>系统大量借助echarts搭建数据大屏界面，集成echarts地图展示人员轨迹播放。</p>*/}
                            <p className={'text-gray'}>
                                在此项目前，我已参与了两个中型项目建设，吸取了以往经验，此项目完成高效高质。
                            </p>
                            <p className={'text-gray-dark'}>
                                该系统前端为我独立开发及部署维护,项目采用<span className={'highlight-blue-mktg'}>Nginx</span>代理,项目技术栈为<span className={'highlight-blue-mktg'}>Vue+Vue-router+axios+iview+sass</span>
                            </p>
                            {/*<a href=''>SHOW MORE</a>*/}
                        </div>

                        <img
                            src={hologramImage1}
                            className={`hologram-image1 ${this.props.scrollToTop > 8500 ? 'animate__animated animate__fadeInLeft' : ''}`}
                            alt=""
                        />
                        <img
                            src={hologramImage2}
                            className={`hologram-image2 ${this.props.scrollToTop > 8500 ? 'animate__animated animate__fadeInLeft' : ''}`}
                            alt=""
                            style={{
                                animationDelay: '0.6s',
                                webkitAnimationDelay: '0.6s',
                            }}
                        />
                    </div>

                    <div className={'project-detail-main-single dmc'}>

                        <div className={'project-detail-main-single-block dmc-title'}>
                            <h2>广州尚融数据魔方</h2>
                        </div>

                        <div className={`project-detail-main-single-block dmc-describe1 ${this.props.scrollToTop > 9700 ? 'animate__animated animate__fadeInDown' : ''}`}>
                            <p className={'text-gray'}>该系统是公司重点项目之一，现已有多家公司及政府部门使用这套系统，系统提供数据采集、数据治理、数据建模、数据服务一站式的数据操作，项目难点在于数据建模时的建模工具。</p>
                            <p className={'text-gray'}>
                                使用步骤为1.根据业务场景，选择合适的基础算子，2.编排任务流，保存模型配置，3.配置算子节点
                                {/*<br/>运行任务，等待执行成功后，右键节点查看运行结果数据，若运行失败，则可查看日志定位问题。*/}
                            </p>
                        </div>

                        <div className={`project-detail-main-single-block dmc-describe2 ${this.props.scrollToTop > 10700 ? 'animate__animated animate__fadeInDown' : ''}`}>
                            <p className={'text-gray'}>我参与后期该系统的完善与维护，该项目是我首次参与偏中后台、较大型、多人协同合作的项目。</p>
                            <p className={'text-gray-dark'}>通过该项目我学习到了多人合作开发，熟练使用<span className={'highlight-blue-mktg'}>vuex</span>管理项目数据，熟练使用<span className={'highlight-blue-mktg'}>git</span>维护代码，维护系统时也了解了<span className={'highlight-blue-mktg'}>d3</span>的使用方法</p>
                            {/*<a href=''>SHOW MORE</a>*/}
                        </div>

                        <img
                            src={dmcImage1}
                            className={`dmc-image1 ${this.props.scrollToTop > 9800 ? 'animate__animated animate__fadeInDown' : ''}`}
                            alt=""
                        />
                        <img
                            src={dmcImage2}
                            className={`dmc-image2 ${this.props.scrollToTop > 9800 ? 'animate__animated animate__bounceIn' : ''}`}
                            alt=""
                            style={{
                                animationDelay: '0.6s',
                                webkitAnimationDelay: '0.6s',
                            }}
                        />
                        <img
                            src={dmcImage3}
                            className={`dmc-image3 ${this.props.scrollToTop > 9800 ? 'animate__animated animate__bounceIn' : ''}`}
                            alt=""
                            style={{
                                animationDelay: '0.9s',
                                webkitAnimationDelay: '0.9s',
                            }}
                        />
                        <img
                            src={dmcImage4}
                            className={`dmc-image4 ${this.props.scrollToTop > 9800 ? 'animate__animated animate__bounceIn' : ''}`}
                            alt=""
                            style={{
                                animationDelay: '1.2s',
                                webkitAnimationDelay: '1.2s',
                            }}
                        />
                        {/*<img src={dmcImage5} className={'dmc-image5'}/>*/}
                        <img
                            src={dmcImage6}
                            className={`dmc-image6 ${this.props.scrollToTop > 10850 ? 'animate__animated animate__fadeInDown' : ''}`}
                            alt=""
                        />
                        {/*<img src={dmcImage7} className={'dmc-image7'}/>*/}

                        <span className={'dmc-image-dot dot1'}></span>
                        <span className={'dmc-image-dot dot2'}></span>
                        <span className={'dmc-image-dot dot3'}></span>
                        <span className={'dmc-image-dot dot4'}></span>
                        <span className={'dmc-image-line'}></span>
                        {/*<img src={hologram2} className={'dmc-image2'}/>*/}
                    </div>



                </div>
            </div>
        )
    }

}

export default ProjectDetail;