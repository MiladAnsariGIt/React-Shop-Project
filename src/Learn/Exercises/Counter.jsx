import { useState,useEffect } from "react";

function CounterCode () {
    const [Counter,setCounter] = useState(() => {
        const saved = localStorage.getItem('counter-value');
        return saved === null ? 0 : Number(saved);
    }
    )

    useEffect(() => {
        localStorage.setItem('counter-value',Counter)
    } ,[Counter])

    const increase = () => setCounter(prev => prev + 1);
    const decrease = () => setCounter(prev => prev - 1);
    const setZero = () => setCounter(0);



    return (
        <div>
            <h1 style={{textAlign: 'center' , marginTop: '50pz'}}>ذخیره گر عدد</h1>
            <span style={{fontSize:'2rem'}}>{Counter}</span>
            <br></br>
            <button onClick={increase}>افزایش +</button>
            <button onClick={decrease}>کاهش -</button>
            <button onClick={setZero}>ریست</button>
        </div>
    )

}

export default CounterCode