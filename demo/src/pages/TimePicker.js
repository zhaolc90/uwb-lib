import React from 'react';
import PropTypes from 'prop-types';
import { Toggle } from '../../../lib'

const propTypes = {};

const defaultProps = {};

export default class TimePickerPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h2>TimePicker</h2>
                <input/>
                <hr/>
                ...
            </React.Fragment>
        );
    }
}

TimePickerPage.propTypes = propTypes;
TimePickerPage.defaultProps = defaultProps;
