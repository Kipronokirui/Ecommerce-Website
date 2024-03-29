"use client";
import React, { useState, useEffect } from 'react'

export default function Timer() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = "January, 31, 2024";

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    }

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);
    
        return () => clearInterval(interval);
    }, []);
  return (
    <div className='inline-flex items-center ms-2'>
        <p>{days < 10 ? "0" + days : days}</p>
        <p> : {hours < 10 ? "0" + hours : hours}</p>
        <p> : {minutes < 10 ? "0" + minutes : minutes}</p>
        <p> : {seconds < 10 ? "0" + seconds : seconds}</p>
    </div>
  )
}
