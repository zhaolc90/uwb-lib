import React from 'react';
import PropTypes from 'prop-types';
import { Toggle } from '../../../lib'
import {Button} from 'react-bootstrap'

const propTypes = {};

const defaultProps = {};

export default class TogglePage extends React.Component {
    state = {
        disabled: false
    }
    toggle = () => {
        console.log(this.state.disabled)
        this.setState({
            disabled: !this.state.disabled
        })
    }
    render() {
        const {disabled} = this.state
        return (
            <React.Fragment>
                <h2>Toggle</h2>
                <Toggle
                    disabled={disabled}
                    onClick={(e) => { console.log(e, 'toggle clicked!') }}
                />
                <hr />
                <Button onClick={this.toggle}>tiggle disabled</Button>
            </React.Fragment>
        );
    }
}

TogglePage.propTypes = propTypes;
TogglePage.defaultProps = defaultProps;
