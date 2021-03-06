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
                        <h1 data-content={'- ???????????? -'}>- ???????????? -</h1>
                    </div>

                    <div className={'project-detail-main-single laboratory'}>

                        <div className={'project-detail-main-single-block laboratory-title'}>
                            <h2>????????????????????????????????????</h2>
                        </div>

                        <div className={`project-detail-main-single-block laboratory-describe1 ${this.props.scrollToTop > 5450 ? 'animate__animated animate__fadeInRight' : ''}`}>
                            <p className={'text-gray'}>????????????????????????????????????????????????,???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>
                            <p className={'text-gray-dark'}>???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>
                            {/*<a href=''>SHOW MORE</a>*/}
                        </div>
                        <div className={`project-detail-main-single-block laboratory-describe2 ${this.props.scrollToTop > 6150 ? 'animate__animated animate__fadeInLeft' : ''}`}>
                            <p className={'text-gray'}>?????????<span className={'highlight-blue-mktg'}>echarts</span>???????????????????????????????????????????????????????????????????????????????????????????????????????????????<span className={'highlight-blue-mktg'}>echarts</span>??????????????????????????????</p>
                            <p className={'text-gray'}>????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>
                            <p className={'text-gray-dark'}>
                                ????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????2s??????
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
                            <h2 data-content="????????????????????????">????????????????????????</h2>
                            <p className={'text-gray'}>?????????????????????,?????????????????????????????????????????????????????????????????????????????????????????????????????????</p>
                            <p className={'text-gray'}>?????????????????????????????????????????????????????????,??????????????????????????????????????????????????????????????????????????????</p>
                            <p className={'text-gray-dark'}>????????????<span className={'highlight-blue-mktg'}>websocket</span>???????????????????????????<span className={'highlight-blue-mktg'}>??????JS</span>??????????????????????????????100%??????ui?????????</p>
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
                            <h2>?????????????????????</h2>
                        </div>

                        <div className={`project-detail-main-single-block cloud-search-describe ${this.props.scrollToTop > 8100 ? 'animate__animated animate__fadeInLeft' : ''}`}>
                            <p className={'text-gray'}>????????????????????????????????????????????????,?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>
                            <p className={'text-gray-dark'}>?????????????????????????????????,??????????????????<span className={'highlight-blue-mktg'}>vue</span>,???????????????<span className={'highlight-blue-mktg'}>iview</span></p>
                            <p className={'text-gray'}>??????????????????<span className={'highlight-blue-mktg'}>ES6</span>??????????????????????????????</p>
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
                            <h2>????????????????????????</h2>
                        </div>

                        <div className={`project-detail-main-single-block hologram-describe ${this.props.scrollToTop > 9000 ? 'animate__animated animate__fadeInRight' : ''}`}>
                            <p className={'text-gray'}>????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>
                            {/*<p>??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>*/}
                            {/*<p>??????????????????echarts?????????????????????????????????echarts?????????????????????????????????</p>*/}
                            <p className={'text-gray'}>
                                ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                            </p>
                            <p className={'text-gray-dark'}>
                                ????????????????????????????????????????????????,????????????<span className={'highlight-blue-mktg'}>Nginx</span>??????,??????????????????<span className={'highlight-blue-mktg'}>Vue+Vue-router+axios+iview+sass</span>
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
                            <h2>????????????????????????</h2>
                        </div>

                        <div className={`project-detail-main-single-block dmc-describe1 ${this.props.scrollToTop > 9700 ? 'animate__animated animate__fadeInDown' : ''}`}>
                            <p className={'text-gray'}>???????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>
                            <p className={'text-gray'}>
                                ???????????????1.???????????????????????????????????????????????????2.???????????????????????????????????????3.??????????????????
                                {/*<br/>?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????*/}
                            </p>
                        </div>

                        <div className={`project-detail-main-single-block dmc-describe2 ${this.props.scrollToTop > 10700 ? 'animate__animated animate__fadeInDown' : ''}`}>
                            <p className={'text-gray'}>?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????</p>
                            <p className={'text-gray-dark'}>???????????????????????????????????????????????????????????????<span className={'highlight-blue-mktg'}>vuex</span>?????????????????????????????????<span className={'highlight-blue-mktg'}>git</span>??????????????????????????????????????????<span className={'highlight-blue-mktg'}>d3</span>???????????????</p>
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