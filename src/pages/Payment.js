import React, { useEffect, useState } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'
const stripe_public_key = 'pk_test_51K2hOgIeOkjMY7keX64VPv0zZ8IJtdRmQ2j9522BueLVpilLWNebiAqtgVDdaMTYNaLv96q762nu4GfDjynIKMoe00QhTEkzm4'
const Payment = () => {
    const [tokenToInintPayment, settokenToInintPayment] = useState(null)
    const onToken = (token) => {
        console.log(token)
        settokenToInintPayment(token)
    }
    useEffect(() => {
        const functionToInit = async () => {
            if (tokenToInintPayment) {
                const res = await axios.post('http://localhost:5000/api/checkout/payment', {
                    tokenId: tokenToInintPayment.id,
                    amount: 1000
                })
                console.log("from backend===>", res.data)
            }
            functionToInit()
        }
    }, [tokenToInintPayment])
    return (
        <div>
            <StripeCheckout
                token={onToken}
                stripeKey={stripe_public_key}
                billingAddress
                shippingAddress
                //stipe uses cents so convert your dollars into cents.... :)
                amount={1000}
                description='your ammount to pay is $10'
            />
        </div>
    )
}

export default Payment
