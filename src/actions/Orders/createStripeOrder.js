/**
 * Imports
 */
import ga from 'react-ga';

// Flux
import CheckoutStore from '../../stores/Checkout/CheckoutStore';
import CollectionsStore from '../../stores/Collections/CollectionsStore';
import IntlStore from '../../stores/Application/IntlStore';
import orderActions from '../../constants/orders';

import config from '../../config';

// Instantiate logger
let debug = require('debug')('nicistore');

/**
 * Create a new order
 */
export default function createStripeOrder(context, payload, done) {
    context.dispatch(orderActions.ORDER_CREATE);
    context.api.orders.create(payload.checkoutId, payload.cartAccessToken).then(function orderCreateSuccess(order) {
        function dispatchOrderCreatedSuccessfully() {

            let checkout = context.getStore(CheckoutStore).getCheckout();

            // Send hit to Google Analytics
            try {
                checkout.cart.products.forEach(function (product) {
                    let categoryName;
                    if (product.details.metadata.mainCollection) {
                        let collection = context.getStore(CollectionsStore).getCollection(product.details.metadata.mainCollection);
                        categoryName = context.getStore(IntlStore).getMessage(collection.name);
                    }
                    ga.plugin.execute('set', '&cu', product.details.pricing.currency);
                    ga.plugin.execute('ec', 'addProduct', {
                        id: product.id,
                        name: context.getStore(IntlStore).getMessage(product.details.name),
                        category: categoryName,
                        price: product.details.pricing.retail,
                        quantity: product.quantity
                    });
                });
                ga.plugin.execute('ec', 'setAction', 'purchase', {
                    id: order.id,
                    revenue: checkout.total,
                    tax: checkout.vatTotal,
                    shipping: checkout.shippingOptions.find(opt => opt.value === checkout.shippingMethod).price
                });
                ga.plugin.execute('send', 'pageview');
            } catch (err) {
                debug('Unable to send hit to Google Analytics', err);
            }

            // Send hit to Facebook Pixel
            try {
                fbq('track', 'Purchase', {
                    value: checkout.total,
                    currency: checkout.currency
                });
            } catch (err) {
                debug('Unable to send hit to Facebook Pixel', err);
            }

            // Dispatch action and execute callback
            context.dispatch(orderActions.ORDER_CREATE_SUCCESS, order);
            done && done();
        }

        // 1) Payment method provided by stripe
        // Create charge before notifying of successful order creation
        if (payload.paymentDetails.provider === 'stripe') {
            //console.log("OrderId: "+ order.id);
            payload.token.orderId = order.id;
            context.api.orders.createStripeOrder(payload.token
             ).then(function successFn() {
                payload.mailFun(order.id);
                dispatchOrderCreatedSuccessfully();
            }, function errorFn() {
                dispatchOrderCreatedSuccessfully();
            });
        }

        // 2) Payment method NOT provided by stripe
        else {
            dispatchOrderCreatedSuccessfully();
        }

    }, function orderCreateError(orderErr) {
        context.dispatch(orderActions.ORDER_CREATE_ERROR, orderErr.result);
        done && done();
    });
}
