import React, {useState} from "react";

export default {
    title: ' useState demo'
}


function generateData() {
    // difficult counting
    console.log("HelpsToReactMemo")
    return 3455232
}

export const HelpsToReactMemo = () => {
    console.log("HelpsToReactMemo")
    // let initValue = useMemo( generateData,[])
    const [counter, setCounter] = useState(generateData)
    return <>
        <button onClick={() => setCounter(state => state + 1)}>+</button>
        {counter}
    </>
}