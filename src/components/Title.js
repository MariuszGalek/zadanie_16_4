import React from 'react';

const Title = (props) => {
    return (
        <div>
            <h1>TO-DO LIST</h1>
            <p>You have {props.counter} tasks left</p>
        </div>
    )
}

export default Title;