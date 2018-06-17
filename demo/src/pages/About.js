import React from 'react';
import PropTypes from 'prop-types';
import { Toggle } from '../../../lib'
const ReactMarkdown = require('react-markdown')

const input = require('./todo.md')

const propTypes = {};

const defaultProps = {};

export default class About extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h2>todo</h2>
                <ReactMarkdown source={input} />
            </React.Fragment>
        );
    }
}

 About.propTypes = propTypes;
 About.defaultProps = defaultProps;
