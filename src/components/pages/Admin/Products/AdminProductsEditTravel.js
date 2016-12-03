/**
 * Imports
 */
import React from 'react';
import {FormattedMessage} from 'react-intl';

// Required components
import InlineItems from '../../../common/forms/InlineItems';
import InputField from '../../../common/forms/InputField';
import FormLabel from '../../../common/forms/FormLabel';
import Button from '../../../common/buttons/Button'

// Flux
import IntlStore from '../../../../stores/Application/IntlStore';
import ApplicationStore from '../../../../stores/Application/ApplicationStore';

// Translation data for this component
import intlData from './AdminProductsEdit.intl';

/**
 * Component
 */
class AdminProductsEditTravel extends React.Component {

    static contextTypes = {
        getStore: React.PropTypes.func.isRequired
    };

    //*** Component Lifecycle ***//

    componentDidMount() {

        // Component styles
        require('./AdminProductsEdit.scss');
     }


    state = {
        newDay: "",
        newEvent: "",
        schedule: this.props.schedule,
        local: this.props.local
    }

    handleAddButtonClick = () => {
       //let a = evt.target.value;
       let schedule = this.state.schedule;
       if (typeof(schedule) !== "object") {schedule = []};
       let newData = {day:this.state.newDay, event:this.state.newEvent}
       schedule.push(newData);
       this.setState({schedule: schedule});
       this.props.onChangeSchedule(schedule.length-1, this.state.local, "day", this.state.newDay);
       this.props.onChangeSchedule(schedule.length-1, this.state.local, "event", this.state.newEvent);
    }

    handleDeleteButtonClick = (idx) => {
       let schedule = this.state.schedule;
       schedule.splice(idx,1);
       this.setState({schedule: schedule})
    }

    handleNewInput = (param, value) => {
        if(param === "day") {this.setState({newDay:value});}
        if(param === "event") {this.setState({newEvent:value});}
    }

    generateId = () => {
        return `input-field-${this.context.getStore(ApplicationStore).uniqueId()}`;
    }

    render() {
        //
        // Helper methods & variables
        //
        let intlStore = this.context.getStore(IntlStore);
        let routeParams = {locale: this.context.getStore(IntlStore).getCurrentLocale()}; // Base route params
        let id = `input-field-${this.context.getStore(ApplicationStore).uniqueId()}`;

        let mapobject = function(object, callback) {
          return Object.keys(object).map(function (key) {
            return callback(key, object[key]);
          });
        }

        return(
        <div className="admin-products-edit__form-item">
            <div className="admin-products-edit__form-item">
                <InlineItems label={<FormattedMessage
                    message={intlStore.getMessage(intlData, 'others')}
                    locales={intlStore.getCurrentLocale()} />}>
                    <InputField label={intlStore.getMessage(intlData, 'location')}
                                labelSize="small" labelWeight="normal"
                                value={this.props.others.location}
                                onChange={this.props.onChange.bind(null, this.state.local, 'location')}
                                error={this.props.fieldError('others.location')} />
                    <InputField label={intlStore.getMessage(intlData, 'duration')}
                                labelSize="small" labelWeight="normal"
                                value={this.props.others.duration}
                                onChange={this.props.onChange.bind(null, this.state.local, 'duration')}
                                error={this.props.fieldError('others.duration')} />
                </InlineItems>
                <InlineItems>
                    <InputField label={intlStore.getMessage(intlData, 'provided')}
                                labelSize="small" labelWeight="normal"
                                value={this.props.others.provided}
                                onChange={this.props.onChange.bind(null, this.state.local, 'provided')}
                                error={this.props.fieldError('others.location')} />
                </InlineItems>
            </div>
            <div className="admin-products-edit__form-item admin-products-edit__form-item-schedule">
                <FormLabel for={this.generateId}>
                    {intlStore.getMessage(intlData, 'schedule')}
                </FormLabel>
                <InlineItems>
                    <FormLabel for={this.generateId} size="small" weight="bold">
                        {intlStore.getMessage(intlData, 'day')}
                    </FormLabel>
                    <FormLabel for={this.generateId} size="small" weight="bold">
                        {intlStore.getMessage(intlData, 'schedule')}
                    </FormLabel>
                </InlineItems>
                {this.state.schedule && this.state.schedule.length !== 0 ?
                this.state.schedule.map((val, idx) => {
                    return(
                    <InlineItems>
                        <InputField className="admin-products-edit__schedule-day" value={val.day}
                                    onChange={this.props.onChangeSchedule.bind(null, idx, this.state.local, "day")} />
                        <InputField className="admin-products-edit__schedule-event" value={val.event}
                                    onChange={this.props.onChangeSchedule.bind(null, idx, this.state.local, "event")} />
                        <Button className="admin-products-edit__schedule-button"
                                onClick={this.handleDeleteButtonClick.bind(null,idx)}>
                                Del</Button>
                    </InlineItems>
                                )
                })
                :
                null
                }
                <InlineItems>
                    <InputField className="admin-products-edit__schedule-day" value={this.state.day}
                                onChange={this.handleNewInput.bind(null, "day")} />
                    <InputField className="admin-products-edit__schedule-event" value={this.state.event}
                                onChange={this.handleNewInput.bind(null, "event")} />
                    <Button className="admin-products-edit__schedule-button"
                            type="primary"
                            onClick={this.handleAddButtonClick}> Add</Button>
                </InlineItems>
            </div>
        </div>
        );
    }
}

/**
 * Exports
 */
export default AdminProductsEditTravel;