import React, { useState, useMemo, useCallback } from 'react'
import Child from './Child';


// function wordCounte(word) {
//     let i = 0;
//     do {
//         i++
//     } while (i <= 999999999)

//     return word.length;
// }

export default function Counter() {
    const [counter1, setCounter1] = useState(0)
    const [counter2, setCounter2] = useState(0)

    //const randomNumber = useMemo(() => Math.random() * counter1, [counter1])
    //const randomNumber = Math.random() * counter1;
    // const count = useMemo(() => wordCounte('js'), [])

    const handle = useCallback(function handle(){ }, [])

    return (
        <div>
            {/* <p>Word Count: {count}</p>
            <p>Random number is: {randomNumber}</p> */}
            <p>Click count1: {counter1}</p>
            <p>Click count2: {counter2}</p>
            <div>
                <button onClick={() => setCounter1(c => c + 1)}>Increament1</button>
                <button onClick={() => setCounter1(c => c - 1)}>Decrease1</button>
            </div>
            <div>
                <button onClick={() => setCounter2(c => c + 1)}>Increament2</button>
                <button onClick={() => setCounter2(c => c - 1)}>Decrease2</button>
            </div>
            <Child handle={handle} />
        </div>
    )
}

