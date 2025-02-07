"use client";

import React, { useEffect, useState } from "react";
import Boil from "@/public/assets/inWater.gif";
import Dancer from "@/public/assets/dancer.gif";
import Love from "@/public/assets/love.gif";
import Scared from "@/public/assets/scared.gif"
import Fork from "@/public/assets/fork.gif"
import Image from 'next/image'
import MessageBubble from './MessageBox';
import ThoughtBubble from "./ThoughtBubble";
import Message from "./Message";

const Timer = ({ time ,type}: { time: string,type:string }) => {
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [d1,setD1]=useState("");
  const [d3,setD2]=useState("");
      const [m1,setM1]=useState("");
      const [m2,setM2]=useState("");
  
      const eggDialogues = [
          {
            type: "Runny Yolk",
            messages: [
              "Oh, we’re keeping things dangerously runny? Living life on the edge, I see. 😏",
              "One wrong move, and I’m oozing all over your plate like a poorly managed life decision. 🍳💥"
            ]
          },
          {
            type: "Soft-Boiled",
            messages: [
              "Ah, the Goldilocks of eggs—not too firm, not too runny. I see you have exquisite taste. 🎩✨",
              "I could be in a Michelin-starred ramen bowl, or I could be your sad Tuesday breakfast. Fate is wild. 🍜🤷‍♂️"
            ]
          },
          {
            type: "Hard-Boiled",
            messages: [
              "Hard-boiled? Respect. I’m basically the ‘gym bro’ of eggs now. 💪🥚",
              "You want nutrition and durability? You got it. Just don’t forget to peel me… gently. 😤"
            ]
          },
          {
            type: "Overcooked",
            messages: [
              "Buddy… you’re about to create something NASA might study. 🚀🥲",
              "I hope you like your eggs with a side of existential dread because I am officially ruined. 😭🔥"
            ]
          }
        ];


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
          className="bg-red-500 text-white px-4 py-2 rounded-md"
          onClick={() => setSecondsLeft(parseInt(time.split("-")[0]) * 60)}
        >
           Reset
        </button>
      </div>
      <div className='flex items-center justify-center w-full relative'>
        <div className="absolute left-1/4 top-10 font-fredoka text-xl">
        <Message text="boiling started" align="left"/>
        </div>
        <div className="absolute right-1/4 top-2 font-fredoka text-xl">
        <Message text='boiling nicely and staedy' align="right"/>
        </div>
        <Image src={Boil} alt="boil" className='bg-yellow-50 rounded-md' objectFit='contain'/>
    </div>
    </div>
  );
};

export default Timer;
