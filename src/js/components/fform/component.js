import loglevel from "loglevel"
import React from "react"
import style from './style.scss'
import uuidv4 from 'uuid/v4'
import {Button, Segment, Form} from "semantic-ui-react";
import validate from 'validate.js'

loglevel.info('FORM COMPONENT')

console.log(validate.validators.length)
validate.validators.length.options = {message: "tiene una longitud incorrecta."};

export class FForm extends React.Component {
    constructor(props) {
        super(props)
        this.constraints = {}
    }

    render() {
        if (this.props.isEnabled) {
            const id = this.props.id
            const children = React.Children.map(this.props.children, child => {
                if (child.props.constraints) {
                    this.constraints[this.props.id] = child.props.constraints
                }
                if (child.props.type == 'text') {

                    return React.cloneElement(child, {
                        id: this.props.id + '_' + uuidv4()
                    });
                }
                else {
                    return React.cloneElement(child);
                }
            });
            return (
                <Form className={style.main + (this.props.className)?this.props.className:'' } style={this.props.style} >
                    {children}
                </Form>
            )
        }
        return null
    }
}

FForm.defaultProps = {
    isEnabled: true,
    id: uuidv4(),
    className: ''
}

export class FField extends React.Component {
    constructor(props) {
        super(props)
        this.onBlur = this.onBlur.bind(this);
        this.state = {
            error: undefined
        }
    }

    onBlur(e) {
        console.log(e.currentTarget.value)
        this.setState({error: validate.single(e.currentTarget.value, this.props.constraints)})
        console.log(this.state)
    }

    render() {
        var input = <Form.Input fluid id={this.props.id} label={this.props.label} placeholder={this.props.placeholder} onBlur={this.onBlur} />
        if (this.state.error != undefined) {
            input = <Form.Input fluid id={this.props.id} label={this.props.label} placeholder={this.props.placeholder} onBlur={this.onBlur} error />
        }
        if (this.props.isEnabled) {
            return (
                <Form.Field>
                    {input}
                </Form.Field>
            )
        }
        return null
    }
}

FField.defaultProps = {
    label: 'default',
    isEnabled: true,
    id: uuidv4(),
    type: 'text',
    placeholder: '',
    className: '',
    constraints: {
        length: {is: 3}
    }
}


