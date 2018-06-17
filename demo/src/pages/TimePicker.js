import React from 'react';
import PropTypes from 'prop-types';
import {findDOMNode} from 'react-dom'
import './timepicker.less'
import classNames from 'classnames'
import {Overlay}from 'react-bootstrap'
import Placement from './Placement'
import Picker from './Picker'

const propTypes = {

};

const defaultProps = {
    prefixCls: 'uwb-timepicker',
    placeholder: 'hh:mm'
};

export default class TimePicker extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false
        }
    }
    toggle = () => {
        const {show} = this.state
        console.log('toggle', show)
        this.setState({
            show:!show
        })
    }
    render() {
        const { prefixCls, className, placeholder, ...props } = this.props
        
        const timepickerClassName = classNames({
            [className]: !!className,
            [prefixCls]: true,
            // [`${prefixCls}-disabled`]: disabled,
        });
        return (
            <div>
                <span ref='target' className={timepickerClassName}>
                    <input
                        className={`${prefixCls}-input`}
                        placeholder={placeholder}
                        onClick={this.toggle}
                    />
                    <span />
                </span>

                <Overlay
                    show={this.state.show}
                    onHide={() => this.setState({ show: false })}
                    placement={'bottom'}
                    container={this}
                    target={props => findDOMNode(this.refs.target)}
                    rootClose
                >
                    <Placement>
                        <Picker prefixCls={prefixCls}/>
                    </Placement>
                </Overlay>
            </div>
        );
    }
}

TimePicker.propTypes = propTypes;
TimePicker.defaultProps = defaultProps;
