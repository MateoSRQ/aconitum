import loglevel from "loglevel"
import React from "react"
import style from './style.scss'

loglevel.info('PANEL COMPONENT')

class Component extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {count: 1}
    }

    handleClick(e) {
        this.setState((prevState, props) => {
            return { count: prevState.count + 1 }
        });
    }

    render() {
        if (this.props.isVisible) {
            return (
                <div className={style.main + (this.props.className)?this.props.className:'' } style={this.props.style} onClick={this.handleClick}>
                    {this.props.children}
                </div>
            )
        }
        return null
    }
}

Component.defaultProps = {
    isVisible: true
}


export default Component;
