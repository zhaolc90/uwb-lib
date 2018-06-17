import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {};

const defaultProps = {};

export default class Placement extends React.Component {

    render() {
        const {children, ...props} =this.props
        
        return (
            <div>
                {children}
            </div>
        );
    }
}

 Placement.propTypes = propTypes;
 Placement.defaultProps = defaultProps;
