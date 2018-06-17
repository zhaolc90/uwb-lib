import React from 'react';
import PropTypes from 'prop-types';
import { Toggle } from '../../../lib'

const propTypes = {};

const defaultProps = {};

export default class About extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h2>Toggle</h2>
                <Toggle onClick={(e) => {console.log(e,'toggle clicked!')}}/>
                <hr/>
                <h2>TimePicker</h2>
                <input/>
                <hr/>
                ...
            </React.Fragment>
        );
    }
}

 About.propTypes = propTypes;
 About.defaultProps = defaultProps;
