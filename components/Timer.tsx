"use client";

import React, { useEffect, useState } from "react";

const Timer = ({ time }: { time: string }) => {
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    // Convert "4-5 minutes" format to seconds (taking the lowest value)
    const minTime = parseInt(time.split("-")[0]) * 60;
    setSecondsLeft(minTime);
    setIsRunning(false);
  }, [time]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && secondsLeft > 0) {
      timer = setInterval(() => {
        setSecondsLeft((prev) => prev - 1);
      }, 1000);
    } else if (secondsLeft === 0 && isRunning) {
      alert("⏰ Time’s up! Your egg is ready! 🍳");
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, secondsLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="text-center mt-4">
      <h3 className="text-xl font-semibold">⏳ Timer: {formatTime(secondsLeft)}</h3>
      <div className="flex gap-4 justify-center my-6">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md"
          onClick={() => setIsRunning(true)}
        >
           Start
        </button>
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded-md"
          onClick={() => setIsRunning(false)}
        >
           Pause
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md"
          onClick={() => setSecondsLeft(parseInt(time.split("-")[0]) * 60)}
        >
           Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
