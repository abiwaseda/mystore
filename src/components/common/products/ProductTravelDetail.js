/**
 * Imports
 */
import React from 'react';
import {FormattedMessage, FormattedNumber} from 'react-intl';

// Flux
import IntlStore from '../../../stores/Application/IntlStore';

// Required components
import Breakpoint from '../../core/Breakpoint';
import Text from '../../common/typography/Text';
import Heading from '../../common/typography/Heading';

// Translation data for this component
import intlData from './ProductTravelDetail.intl';

/**
 * Component
 */
class ProductTravelDetail extends React.Component {

    static contextTypes = {
        getStore: React.PropTypes.func.isRequired
    };

    //*** Component Lifecycle ***//

    componentDidMount() {

        // Component styles
        require('./ProductTravelDetail.scss');
    }


    //*** Template ***//

    render() {

        //
        // Helper methods & variables
        //
        let intlStore = this.context.getStore(IntlStore);

        //
        // Return
        //
        return (
            <div className="product-table">
                <table>
                {this.props.others.location ?
                    <tr>
                        <th>{intlStore.getMessage(intlData, 'location')}</th>
                        <td>{this.props.others.location}</td>
                    </tr>
                 :
                 null
                 }
                {this.props.others.duration ?
                    <tr>
                        <th>{intlStore.getMessage(intlData, 'duration')}</th>
                        <td>{this.props.others.duration}</td>
                    </tr>
                 :
                 null
                 }
                {this.props.others.provided ?
                    <tr>
                        <th>{intlStore.getMessage(intlData, 'provided')}</th>
                        <td>{this.props.others.provided}</td>
                    </tr>
                 :
                 null
                 }
                </table>
            </div>
         );
    }
}

/**
 * Exports
 */
export default ProductTravelDetail;
