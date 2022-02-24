import React from 'react'

function Button() {
    return (
        <button onClick={
            () => alert("Clicked")}> Add To Cart</button >
    )
}

export default Button