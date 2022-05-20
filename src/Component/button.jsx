import React from 'react';

export function Buttons(props) {

    const StartButton = (

        <div className="btn btn-one "
            onClick={props.handleStart}>
            Start
        </div>

    );
    const ActiveButtons = (

        <div className="ActiveButtons">

            <div className="btn btn-two"
                onClick={props.handleReset}>
                Reset
            </div>


            <div className="btn btn-one"

                onClick={props.handlePauseResume}>

                {props.isPaused ? "Resume" : "Pause"}

            </div>

        </div>
    );

    return (

        <div className="Control-Buttons">

            <div>{props.active ? ActiveButtons : StartButton}</div>

        </div>
    );
}