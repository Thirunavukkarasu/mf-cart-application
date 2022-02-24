import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useRecoilState } from "recoil";

import { CounterState } from 'core/CounterState';

function ProductPage() {
    const [counter, setCounter] = useRecoilState(CounterState);

    const onClickCounter = () => {
        setCounter(counter + 2);
    }

    return (
        <>
            <h1>Product Page</h1>
            <Form.Select aria-label="Default Product">
                <option value="electronics">Electronics</option>
                <option value="groceries">Groceries</option>
                <option value="fashion">Fashion</option>
            </Form.Select>
            <Button onClick={onClickCounter}>+</Button>
        </>
    )
}

export default ProductPage