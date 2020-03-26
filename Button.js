import React from 'react'

const Button = (props) => {
    console.log("Inside of the Button component");
    return (
        <div>
            <button onClick={props.myFunc}>Change Job</button>
        </div>
    )
}

export default Button
