import React from 'react';
import PropTypes from 'prop-types';
import Scrollbar from 'react-custom-scrollbars'

const propTypes = {
    options: PropTypes.array,
    
};

const defaultProps = {};

export default class Select extends React.Component {
    render() {
        return (
            <ul>
                <li>an item</li>
            </ul>
        );
    }
}

 Select.propTypes = propTypes;
 Select.defaultProps = defaultProps;
