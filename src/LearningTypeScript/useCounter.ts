import { useState } from "react";


function useCounter(){
    const [counter,setCounter] = useState(0);

    function increase(){
        setCounter(prev => prev + 1);
    }

    return {counter,increase}
}

export default useCounter;