"use client";

import React, { useEffect, useState } from "react";
import Boil from "@/public/assets/inWater.gif";
import Dancer from "@/public/assets/dancer.gif";
import Love from "@/public/assets/love.gif";
import Scared from "@/public/assets/scared.gif";
import Fork from "@/public/assets/fork.gif";
import Image from "next/image";
import Message from "./Message";
import * as motion from "motion/react-client";
import { useRouter } from "next/navigation";

const Timer = ({ time, type }: { time: string; type: string }) => {
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [gif, setGif] = useState(Boil);
  const [d1, setD1] = useState(false);
  const [d2, setD2] = useState(false);
  const [d3, setD3] = useState(false);
  const [m1, setM1] = useState("");
  const [m2, setM2] = useState("");
  const router=useRouter();
  let t1: ReturnType<typeof setTimeout>;
  let t2: ReturnType<typeof setTimeout>;
  let t3: ReturnType<typeof setTimeout>;

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
      setD3(true);
      if(type==="runny")
      {
        setM1("Welp, I survived… but I’m still a bit wobbly inside. 😵‍💫")
        setM2("I’m holding it together… barely. One wrong move and it’s an omelet disaster! 🍳💥")
      }
      else if(type==="soft")
      {
        setM1("Ah, the Michelin-star treatment. Soft but stable. Fancy, huh? 🍜✨")
        setM2("Perfectly balanced—like Thanos would want. Snap me into a ramen bowl already! 🥢")
      }
      else if(type==="hard")
      {
        setM1("Aight, we HARD now. Ain’t nobody messing with me. 💪🥚")
        setM2("Soft-boiled? Pfft. That’s for the weak. I’m basically the gym bro of eggs now. 🏋️‍♂️")
      }
      else if(type==="overcooked")
      {
        setM1("WHY DID YOU LEAVE ME HERE?! My insides are sawdust now. 😭")
        setM2("You didn’t just cook me… you cursed me. My yolk is a DESERT. 🏜️")
      }
      setIsRunning(false);
      setGif(Dancer);
      setD1(true);
      setTimeout(()=>{
        setD1(false);
        setD2(true);
      },4000)
    }

    return () => clearInterval(timer);
  }, [isRunning, secondsLeft]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  };

  const setMessages = () => {
    setIsRunning(true);
    console.log(isRunning);
    // if (isRunning) {
      console.log(isRunning);
      t1=setTimeout(() => {
        setD1(true);
        setM1("Ahh, warm water… like a spa day for me! 🛁");
        setTimeout(() => {
          setD1(false);
          setD2(true);
          setM2(
            "This is relaxing… wait… it’s getting HOTTER! Should I be worried? 😳"
          );
        }, 12000);
      }, 3000);

      t2=setTimeout(() => {
          setD2(false);
      }, 60000);

      t3=setTimeout(() => {
        setD1(true);
        setM1("half time");
        setGif(Scared);
        setTimeout(() => {
          setD1(false);
        }, 4000);
      }, ((parseInt(time) * 60) / 2) * 1000);

     
        setTimeout(()=>{
          setD1(true);
          setM1("We are almost there, lets goo.")
          setGif(Fork);
          setTimeout(()=>{
            setD1(false);
          },5000)
        },(((parseInt(time) * 60) / 2) + ((parseInt(time) * 60) / 2)/2 )* 1000);
      


  };

  const resetTimer = () => {
    setSecondsLeft(parseInt(time.split("-")[0]) * 60);
    setIsRunning(false);
    setD1(false);
    setD2(false);
    setGif(Boil);
    clearTimeout(t1);
    clearTimeout(t2);
    clearTimeout(t3);
  };

  const goHomehandler=()=>{
    router.push("/");
  }
  
  return (
    <div className="text-center mt-4">
      <h3 className="text-xl font-semibold">
        ⏳ Timer: {formatTime(secondsLeft)}
      </h3>
      <div className="flex gap-4 justify-center my-6">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md"
          onClick={setMessages}
          disabled={isRunning}
        >
          Start
        </button>

        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md"
          onClick={resetTimer}
        >
          Reset
        </button>
      </div>
      <div className="flex items-center justify-center w-full relative">
        {d1 && (
          <div className="absolute md:left-[12%] left-[3%] top-7 font-fredoka text-xl">
            <Message text={m1} align="left" />
          </div>
        )}
        {d2 && (
          <div className="absolute md:right-[10%] right-[5%] top-6 font-fredoka text-xl">
            <Message text={m2} align="right" />
          </div>
        )}
        <Image
          src={gif}
          alt="boil"
          className=" rounded-md my-10 md:my-0"
          objectFit="contain"
        />
      </div>
      {d3 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  key="box2"
                  className="w-full flex justify-center items-center"
                >
                  <button
                    onClick={goHomehandler}
                    type="button"
                    className="bg-blue-400 outline-none border-none rounded-md p-3 text-xs text-white font-pixel_p2 my-3 "
                  >
                    Go Home
                  </button>
                </motion.div>
              )}
    </div>
  );
};

export default Timer;
