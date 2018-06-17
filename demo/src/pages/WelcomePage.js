import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

export default class WelcomePage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h1>Welcome</h1>
            </React.Fragment>
        );
    }
}

 WelcomePage.propTypes = propTypes;
 WelcomePage.defaultProps = defaultProps;
