import React from 'react'
import { Form } from 'react-bootstrap';

function PaymentPage() {
    return (
        <>
            <h1>Payment Page</h1>
            <Form.Select aria-label="Default Payment">
                <option value="paytm">Paytm</option>
                <option value="payu">Payu</option>
                <option value="phonepe">Phonpe</option>
                <option value="google_pay">Google Pay</option>
            </Form.Select>
        </>
    )
}

export default PaymentPage