import React from "react";
import './ proportion.scss'

class Proportion extends React.Component{
    constructor(props) {
        super(props);

        this.state = {}
    }

    render(){
        return (
            <div className={'proportion'} data-content={this.props.value}>
                {/*{this.props.value}*/}
                <div
                    className={`proportion-bar animate__animated ${this.props.props1}`}
                    style={{
                        height: this.props.value,
                        animationDelay: `${1.5}s`,
                        webkitAnimationDelay: `${1.5}s`
                    }}
                ></div>
            </div>
        )
    }
}

export default Proportion;