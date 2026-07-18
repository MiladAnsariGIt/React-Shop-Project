import {useState,useEffect} from 'react';

function Countdown() {
  const [seconds, setSeconds] = useState(10);
  const [zero, setZero] = useState(false);

  useEffect (() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds - 1)
  },1000)

  if(seconds <= 0) {
    clearInterval(interval);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setZero(true)
  }

   return () => clearInterval(interval)
},[seconds])

if(zero) return <h1>زمان به پایان رسید!</h1>

  return (
    <div>
      <h1> شمارش معکوس : {seconds}</h1>
    </div>
  )
}

export default Countdown;