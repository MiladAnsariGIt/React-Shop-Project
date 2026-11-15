import useCounter from "./useCounter";


function Counter(){
    const {counter,increase} = useCounter();

    return(
        <div>
            <p>{counter}</p>
            <button onClick={increase}>increase</button>
        </div>
    )
}