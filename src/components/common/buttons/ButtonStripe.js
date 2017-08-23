/**
 * Imports
 */
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import config from '../../../config';

// Instantiate logger
let debug = require('debug')('nicistore');

/**
 * Component
 */
class Button extends React.Component {

    //*** Component Lifecycle ***//

    componentDidMount() {

        // Component styles
        require('./Button.scss');
    }

    //*** View Controllers ***//

    handleClick = (token) => {
        if (this.props.disabled !== true && this.props.loading !== true) {
            this.props.onClick(token);
        }
    };

    //*** Template ***//

    render() {
        //console.log("key :"+ this.props.pkey);
        let buttonClass = 'button';

        if (['stripe', 'primary'].indexOf(this.props.type) != -1) {
            buttonClass += ` button-${this.props.type}`;
        } else {
            buttonClass += ' button-default';
        }

        if (this.props.disabled === true) {
            buttonClass += ' button--disabled';
        }

        if (this.props.loading === true) {
            buttonClass += ' button--disabled';
        }

        if (['small', 'medium', 'large'].indexOf(this.props.fontSize) != -1) {
            buttonClass += ` button-font-${this.props.fontSize}`;
        } else {
            buttonClass += ' button-font-medium';
        }

        if (this.props.className) {
            buttonClass += ` ${this.props.className}`;
        }

        return (

            <StripeCheckout className={buttonClass} token={this.handleClick}
                      stripeKey={this.props.pkey}
                     />
        );
    }
}

/**
 * Default Props
 */
Button.defaultProps = {
    onClick: function () { debug('onClick not defined'); }
};

/**
 * Exports
 */
export default Button;
