import {
  useEffect,
  useState,
} from 'react';

import { Automatic } from './automatic';
import { Buttons } from './button';
import { ShowTimer } from './ShowTimer';

export const Timer = () => {

    const [isActive, setIsActive] = useState(false);

    const [isPaused, setIsPaused] = useState(true);

    const [stat,setStat]=useState(false)

    const [time, setTime] = useState(0);


    useEffect(() => {

        let interval = null;

        if (isActive && isPaused === false) {

            interval = setInterval(() => {

                setTime((time) => time + 10);

            }, 10);

        } else {

            clearInterval(interval);

        }
        return () => {

            clearInterval(interval);

        };
    }, [isActive, isPaused]);


    const handleStart = () => {
        setIsActive(true);
        setIsPaused(false);
    };

    const handlePauseResume = () => {
        setIsPaused(!isPaused);
    };

    const handleReset = () => {
        setIsActive(false);
        setTime(0);
    };

    return (
        <div>
            <h1 style={{ color: "blue", fontSize: "40px", fontStyle: "italic", }}>Google Timer</h1>

            {stat ? <Automatic /> : <div><ShowTimer time={time} />
                <Buttons
                    active={isActive}
                    isPaused={isPaused}
                    handleStart={handleStart}
                    handlePauseResume={handlePauseResume}
                    handleReset={handleReset}
                /></div>
            }

            <button  onClick={(() => setStat(!stat))}>{stat ? "Automatic stop Watch" : "Enter Manually"}</button>

        </div>
    )
}