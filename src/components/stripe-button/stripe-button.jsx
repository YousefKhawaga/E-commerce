import React from 'react';

import StripeCheckout from 'react-stripe-checkout';



const StripeCheckoutButton = ({ price }) => {
    const onToken = tokken => {
        console.log(tokken);
        alert('payment success')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN '
            billingAddress
            shippingAddress
            image='../../assets/crown.svg'
            description={`Your Total is ${price}`}
            amount={price*100}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey='pk_test_UJgbOEIIkExLnTYjSivStZQd00YQz2VLP9'
        />
    )
};

export default StripeCheckoutButton;