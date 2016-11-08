/**
 * Imports
 */
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

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
//        if (this.props.disabled !== true && this.props.loading !== true) {
            this.props.onClick(token);
//        }
    };

    //*** Template ***//

    render() {

        let buttonClass = 'button';

        if (['default', 'primary'].indexOf(this.props.type) != -1) {
            buttonClass += ` button-${this.props.type}`;
        } else {
            buttonClass += ' button-default';
        }

//        if (this.props.disabled === true) {
//            buttonClass += ' button--disabled';
//        }

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

            <StripeCheckout className='button button-primary' token={this.handleClick}
                      stripeKey="pk_test_t0BfAy7tqOvA3O7XYDUMbTJZ"
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
