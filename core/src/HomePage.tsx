import React from 'react'
import { Button } from 'react-bootstrap'
import { useRecoilState } from 'recoil';

import DetailsPage from './DetailsPage'
import { CounterState } from './states/CounterState';

function HomePage() {
    const [counter, setCounter] = useRecoilState(CounterState);

    const onClickCounter = () => {
        setCounter(counter + 1);
    }

    return (
        <>
            <Button onClick={onClickCounter}>Add To Cart</Button>
            <DetailsPage />
        </>
    )
}

export default HomePage
