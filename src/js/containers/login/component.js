import loglevel from 'loglevel'
import React from "react"
import style from './style.scss'
import Panel from './../../components/panel/component'
import { FForm, FField } from './../../components/fform/component'
import { Button, Checkbox, Form, Segment } from 'semantic-ui-react'
import { logIn } from "../../store/actions"
import { connect } from 'react-redux'
import { Tween, Timeline, SplitWords, SplitLetters, Controls } from 'react-gsap'
import styled from 'styled-components';
loglevel.info('LOGIN CONTAINER')



class Component extends React.Component {

    constructor(props) {
        super(props)
        //this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.waka = this.waka.bind(this);
        this.state = {username: '', password: '', status: 'not_started'};
    }

    componentDidMount() {
        this.tween = this.tween.getGSAP();
        setTimeout(() => {
            this.tween.play()
        }, 1000);

    }

    waka() {
        this.setState({
            status: (this.state.status == 'not_started')?'started':'not_started'
        });
    }

    handleChangeUsername(event) {
        this.setState({username: event.target.value});
    }

    handleChangePassword(event) {
        this.setState({password: event.target.value});
    }

    render() {
        //if (this.props.isVisible) {
        const Square = styled.div`
            width: 100%;
            height: 100%;
            position: relative;
        `;

            return (
                <div>
                    <Tween
                        from={{ css: { rotationX: 180, yPercent: -220 }}}
                        duration={1}
                        playState="pause"
                        ease="Elastic.easeOut"
                        ref={ref => this.tween = ref}
                    >
                        <Square>
                            <Panel className={style.panel} style={{width: '400px', height: '300px', backgroundColor: '#fff'}}>
                                <Segment basic>
                                    <FForm>
                                        <FField />
                                        <FField />
                                        <FField />
                                    </FForm>

                                </Segment>
                            </Panel>
                        </Square>
                    </Tween>
                </div>
            )
        }
       //return null
    //}
}


const mapStateToProps = (state, ownProps) => {

    return {
        isVisible: state.loginForm.visible
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log(ownProps)
    return {
        handleSubmit: (e) => {
            console.log(this)
            dispatch(logIn('hello'))
        }
    }
}

const Login = connect(
    mapStateToProps,
    mapDispatchToProps
)(Component)

export default Login




