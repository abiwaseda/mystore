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
class ProductTravelDetailSchedule extends React.Component {

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
            <div>
                {this.props.others.schedule && this.props.others.schedule.length !== 0 ?
                <div>
                    <div className="product-page__description product-page__description-label">
                        <Heading size="medium">
                            <FormattedMessage
                                message={intlStore.getMessage(intlData, 'scheduleLabel')}
                                locales={intlStore.getCurrentLocale()} />
                        </Heading>
                    </div>
                    <div className="product-table">
                        <table>
                            <tr>
                                <th>Day</th>
                                <th>Schedule</th>
                            </tr>
                            {this.props.others.schedule.map((value) => {
                                return (
                                    <tr>
                                        <td>{value["day"]}</td>
                                        <td>{value["event"]}</td>
                                    </tr>
                                );
                            })}
                        </table>
                     </div>
                 </div>
                :
                null
                }
            </div>
         );
    }
}

/**
 * Exports
 */
export default ProductTravelDetailSchedule;