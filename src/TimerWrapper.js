import { useState } from "react";
import Timer from "./Timer";

const TimerWrapper = () => {
    const [timerVisable, setTimerViasable] = useState(true)
    const toggleTimer = () => {
        setTimerViasable(!timerVisable)
    }

    return (
      <div>
        <button onClick={toggleTimer}>Toggle Timer</button>
        {timerVisable && <Timer />}
      </div>
    );

}

export default TimerWrapper;