import React from 'react';

function Square(props) {

    return (
        <button style={{height: '50px', width: '50px'}} onClick = {props.onClick}>{props.value}</button>
    )

}

export default Square;