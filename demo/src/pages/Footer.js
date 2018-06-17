import React from 'react';
import PropTypes from 'prop-types';
import {Button}from 'react-bootstrap'

const propTypes = {};

const defaultProps = {};

export default class Footer extends React.Component {
    render() {
        const {prefixCls} = this.props
        return (
            <div className={`${prefixCls}-footer`}>
                <Button bsStyle="link">Clear</Button>
                <Button bsStyle="link">Ok</Button>
            </div>
        );
    }
}

 Footer.propTypes = propTypes;
 Footer.defaultProps = defaultProps;
