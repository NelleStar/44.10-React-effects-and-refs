// Dont use the commented out portion! This the old way we would set a timer - but because React rerenders every time there is a change it counts up too fast


    // setInterval(() => {
    //     setSeconds(seconds => seconds + 1)
    // }, 1000)

import { useEffect, useState, useRef } from "react";

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const timerId = useRef(); //acts like a global variabl but scoped to Timer

    useEffect(() => {
        timerId.current = setInterval(() => {
          setSeconds((seconds) => seconds + 1);
        }, 1000);

        return () => {
            // console.log("cleanup function!")
            clearInterval(timerId.current)
        }
    }, [])

    const stopTimer = () => {
        clearInterval(timerId.current)
    }

    return (
      <>
        <h1>{seconds}</h1>
        <button onClick={stopTimer}>Stop</button>
      </>
    );
}

export default Timer;