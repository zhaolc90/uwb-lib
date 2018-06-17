import React from 'react';
import PropTypes from 'prop-types';
import './timepicker.less'
import classNames from 'classnames'

const propTypes = {

};

const defaultProps = {
    prefixCls: 'uwb-timepicker',
    placeholder: 'hh:mm'
};

export default class TimePicker extends React.Component {
    render() {
        const { prefixCls, className, placeholder, ...props } = this.props
        
        const timepickerClassName = classNames({
            [className]: !!className,
            [prefixCls]: true,
            // [`${prefixCls}-disabled`]: disabled,
        });
        return (
            <div>
                <span className={timepickerClassName}>
                    <input
                        className={`${prefixCls}-input`}
                        placeholder={placeholder}
                    />
                    {/* <i className={'iconfont icon-huatong'}/> */}
                    <span/>
                </span>
            </div>
        );
    }
}

TimePicker.propTypes = propTypes;
TimePicker.defaultProps = defaultProps;
