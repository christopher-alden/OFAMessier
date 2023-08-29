"use client"

import { useState, useEffect } from "react"
const Clock = () =>{
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
      const interval = setInterval(() => {
        const time = new Date().toLocaleTimeString('en-US', { timeZone: 'Asia/Jakarta', hour: '2-digit', minute: '2-digit', second: '2-digit' });
        setCurrentTime(time);
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="suisse-bold w-fit h-fit">
        <h1 className="text-4xl">{currentTime}</h1>
      </div>
    );
}

export default Clock