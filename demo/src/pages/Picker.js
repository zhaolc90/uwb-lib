import React from 'react';
import PropTypes from 'prop-types';
import Footer from './Footer'
import Select from './Select'

const propTypes = {};

const defaultProps = {};

export default class Picker extends React.Component {
    render() {
        const {prefixCls} = this.props
        return (
            <React.Fragment>
                <Select />
                <Footer prefixCls={prefixCls}/>
            </React.Fragment>
        );
    }
}

 Picker.propTypes = propTypes;
 Picker.defaultProps = defaultProps;
