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
                <div className={'proportion-bar'} style={{height: this.props.value}}></div>
            </div>
        )
    }
}

export default Proportion;