import React from 'react'

const Job = (props) => {
    console.log("Inside of the Job component");
    return (
        <div>
           <h1>My current Job Title is {props.currentJob} </h1> 
        </div>
    )
}

export default Job
