import React from 'react'
import './project-info.scss'

import icon1 from '../../../assest/images/icon/hologramIcon.png'//全息画像
import icon2 from '../../../assest/images/icon/logo-定版.png'//实战平台
import icon3 from '../../../assest/images/icon/logo.png'//数据魔方
import icon4 from '../../../assest/images/icon/云搜索.png'//云搜索
import icon5 from '../../../assest/images/icon/电子实验室分析子系统.png'//电子实验室分析子系统

class ProjectInfo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render(){
        return (
            <div className={'project-info'}>
                <span className={'project-info-title'}>项目经验</span>

                <div className={'project-detail-container'}>
                    <div className={'project-classify'}>
                        <h2 data-content={'II  广州缉私实战平台'}>II  广州缉私实战平台</h2>
                        <p>广州缉私实战平台广州缉私实战平台广州缉私实战平台广州缉私实战平台广州缉私实战平台广州缉私实战平台广州缉私实战平台广州缉私实战平台</p>

                        <img src={icon2} alt=""/>
                    </div>
                    <div className={'project-classify'}>
                        <h2 data-content={'II  广州缉私全息画像系统'}>II  广州缉私全息画像系统</h2>
                        <p>大数据平台其中一个数据可视化系统</p>
                        <p>提供数据检索功能，检索结果以人员为主体，全方位展示人员相关信息</p>
                        <p>具备数据管理工具，系统所有数据均可通过打标签工具打上标记，方便警员对数据进行二次加工</p>

                        <img src={icon1} alt=""/>
                    </div>
                    <div className={'project-classify'}>
                        <h2 data-content={'II  广州海关云搜索系统'}>II  广州海关云搜索系统</h2>
                        <p>广州海关云搜索广州海关云搜索广州海关云搜索广州海关云搜索广州海关云搜索广州海关云搜索广州海关云搜索广州海关云搜索广州海关云搜索</p>

                        <img src={icon4} alt=""/>
                    </div>
                    <div className={'project-classify'}>
                        <h2 data-content={'II  广州海关电子取证分析系统'}>II  广州海关电子取证分析系统</h2>
                        <p>大数据平台其中一个数据可视化系统</p>
                        <p>进入公司后首个接触的项目，我作为前端组成员参与其中项目的后期完善及项目维护</p>
                        <p>XXX 项目出现 XXX 问题，我作为 XXX，负责其中的 XXX 部分，我通过 XXX 方式（或技术方案）成功解决了该问题，使 XXX 提高了 XXX，XXX 增长了 XXX。</p>

                        <img src={icon5} alt=""/>
                    </div>
                    <div className={'project-classify'}>
                        <h2 data-content={'II  广州尚融数据魔方'}>II  广州尚融数据魔方</h2>
                        <p>广州尚融数据魔方广州尚融数据魔方广州尚融数据魔方广州尚融数据魔方广州尚融数据魔方广州尚融数据魔方广州尚融数据魔方广州尚融数据魔方</p>

                        <img src={icon3} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectInfo;