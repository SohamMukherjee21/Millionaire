import { useEffect, useState } from "react";

export default function Timer({ setStop, questionNumber }) {
  const [timer, setTimer] = useState(30);

  useEffect(() => {
    if (timer === 0) return setStop(true);
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
    //52:25 --> Clear interval
  }, [timer, setStop]);

  useEffect(() => {
    setTimer(30);
  }, [questionNumber]);
  //When the question number changes timer will be set to 30s again
  return timer;
}

//50:00 --> Timer logic
