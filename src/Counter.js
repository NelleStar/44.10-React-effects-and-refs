import { useState, useEffect } from "react";

function Counter() {
    const [num, setNum] = useState(0);

    const increment = () => {
        setNum(n => n + 1);
    }

    useEffect(() => {
        document.title = `${'!'.repeat(num)}`
    })

    return (
        <>
            Let's get excited!
            <button onClick={increment}>More excited?!</button>
            <p>Counter: {num}</p>
        </>
    )
}

export default Counter;