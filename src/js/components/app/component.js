import React from "react"
import style from './style.scss'
// import List from "./List";
// import Form from "./Form";

import Login from '../../containers/login/component'

class Component extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={style.main}>
                <Login></Login>
            </div>
        )
    }
}

export default Component;
