import React from 'react';

export function ShowTimer(props) {

    return (
        <div className="timer">

            <h1 className="digits">
                {("0" + Math.floor((props.time / 60000) % 60)).slice(-2)} :
            </h1>

            <h1 className="digits">
                {("0" + Math.floor((props.time / 1000) % 60)).slice(-2)} :
            </h1>

            <h1 className="digits mili-sec">
                {("0" + ((props.time / 10) % 100)).slice(-2)}
            </h1>

        </div>
    );
    
}