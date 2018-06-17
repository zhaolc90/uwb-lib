import React from 'react';
import PropTypes from 'prop-types';
import { Toggle } from '../../../lib'

const propTypes = {};

const defaultProps = {};

export default class TogglePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h2>Toggle</h2>
                <Toggle onClick={(e) => {console.log(e,'toggle clicked!')}}/>
                <hr/>
            </React.Fragment>
        );
    }
}

TogglePage.propTypes = propTypes;
TogglePage.defaultProps = defaultProps;
