import orderActions from '../../constants/orders';

export default function captureStripeOrder(context, payload, done) {
    context.dispatch(orderActions.ORDERS_UPDATE);
    context.api.orders.captureStripeOrder(payload).then(function successFn(result) {
        context.dispatch(orderActions.ORDERS_UPDATE_SUCCESS, result);
        done && done();
    }, function errorFn(err) {
        context.dispatch(orderActions.ORDERS_UPDATE_ERROR, err.result);
        done && done();
    });
}