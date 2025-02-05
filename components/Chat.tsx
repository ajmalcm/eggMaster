"use client";

import { useState, useEffect, useRef } from "react";
import MessageBubble from "./MessageBox";
import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import CharacterSelection from "./CharacterSelection";
import { useRouter } from "next/navigation";
import Chat2 from "./Chat2";

export default function Chat() {
  const [d1, setD1] = useState(false);
  const [d2, setD2] = useState(false);
  const [d3, setD3] = useState(false);
  const [d4, setD4] = useState(false);
  const [d5, setD5] = useState(false);
  const [d6, setD6] = useState(false);
  const [d7, setD7] = useState(false);
  const [d8, setD8] = useState(false);

  const [type, setType] = useState("");

  const router = useRouter();

  const notify = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setD1(true);
    }, 700);

    setTimeout(() => {
      setD2(true);
    }, 1600);

    setTimeout(() => {
      setD3(true);
    }, 2400);
  }, []);

  const letsGoHandler = () => {
    setD3(false);
    setTimeout(() => {
      setD4(true);
    }, 700);

    setTimeout(() => {
      setD5(true);
    }, 1300);
  };

  const startHandler = () => {
    setTimeout(() => {
      setD5(false);
    }, 500);
    setTimeout(() => {
      setD4(false);
    }, 800);
    setTimeout(() => {
      setD2(false);
    }, 1100);
    setTimeout(() => {
      setD1(false);
    }, 1400);
    setTimeout(() => {
      setD6(true);
    }, 1900);
    notify.current?.play();
    setTimeout(() => {
      setD7(true);
    }, 1300);
  };

  const onSelection = (route: string) => {
    setTimeout(() => {
      setD7(false);
    }, 700);
    setTimeout(() => {
      setD6(false);
      setD8(true);
    }, 1200);

    setType(route);
  };

  const goBack = () => {
    setTimeout(() => {
      setD6(true);
      setD8(false);
    }, 700);
    setTimeout(() => {
      setD7(true);
    }, 1200);
  };

  const getRecipe=()=>{
    setTimeout(()=>{
      setD8(false);
      router.push(`Boil/${type}`)
    },600)
  }

  return (
    <div className="p-4 space-y-2 font-pixel_p2 font-extralight">
      <AnimatePresence initial={false}>
        {d1 && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            key="box"
          >
            <MessageBubble text="Hey! How's it going?" sender="them" />
          </motion.div>
        )}

        {d2 && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            key="box1"
          >
            <MessageBubble
              text="Welcome to the ultimate egg-boiling experience! 🍳"
              sender="them"
            />
          </motion.div>
        )}

        {d3 && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            key="box2"
            className="w-full flex justify-center items-center"
          >
            <button
              onClick={letsGoHandler}
              type="button"
              className="bg-blue-400 outline-none border-none rounded-md p-3 text-xs text-white font-pixel_p2 my-3 "
            >
              Let,s Go
            </button>
          </motion.div>
        )}

        {d4 && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            key="box3"
          >
            <MessageBubble
              text="Nice! Don’t let them overcook. 😂"
              sender="me"
            />
          </motion.div>
        )}

        {d5 && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            key="box5"
            className="w-full flex justify-center items-center"
          >
            <button
              onClick={startHandler}
              type="button"
              className="bg-blue-400 outline-none border-none rounded-md p-3 text-xs text-white font-pixel_p2 my-3 "
            >
              START
            </button>
          </motion.div>
        )}
        {d6 && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            key="box5"
            className="w-full flex justify-center items-center"
          >
            <button
              onClick={startHandler}
              type="button"
              className=" outline-none border-none rounded-md p-3 text-xs text-black font-pixel_p2 my-3 "
            >
              Choose a character
            </button>
          </motion.div>
        )}
        {d7 && <CharacterSelection onSelection={onSelection} />}
        {d8 && <Chat2 type={type} goBack={goBack} getRecipe={getRecipe}/>}
       
      </AnimatePresence>

      {/* Correct audio path */}
      <audio ref={notify} src="/assets/notificationSm.mp3" preload="auto" />
    </div>
  );
}
