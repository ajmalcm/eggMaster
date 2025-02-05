'use client'
import React, { useEffect, useState } from 'react'
import { AnimatePresence } from 'motion/react';
import MessageBubble from '@/components/MessageBox';
import * as motion from "motion/react-client";

const Chat2 = ({type,goBack,getRecipe}:{type:string,goBack:Function,getRecipe:Function}) => {

      const [d1, setD1] = useState(false);
      const [d2, setD2] = useState(false);
      const [d3, setD3] = useState(false);
      const [chat1,setChat1]=useState<string>("");
      const [chat2,setChat2]=useState<string>("");
      

      useEffect(() => {
        setTimeout(() => {
          setD1(true);
        }, 700);
    
        setTimeout(() => {
          setD2(true);
        }, 1600);

        setTimeout(() => {
            setD3(true);
          }, 1900);
    
        if(type==="runny")
        {
            setChat1("Oh, we’re keeping things dangerously runny? Living life on the edge, I see. 😏");
            setChat2("One wrong move, and I’m oozing all over your plate like a poorly managed life decision. 🍳💥")
        }
        else if(type==="soft")
        {
            setChat1("Ah, the Goldilocks of eggs—not too firm, not too runny. I see you have exquisite taste. 🎩✨");
            setChat2("I could be in a Michelin-starred ramen bowl, or I could be your sad Tuesday breakfast. Fate is wild. 🍜🤷‍♂️")
        }
        else if(type==="hard")
        {
            setChat1("Hard-boiled? Respect. I’m basically the ‘gym bro’ of eggs now. 💪🥚");
            setChat2( "You want nutrition and durability? You got it. Just don’t forget to peel me… gently. 😤")
        }
        else if(type==="overcooked")
        {
            setChat1("Buddy… you’re about to create something NASA might study. 🚀🥲");
            setChat2( "I hope you like your eggs with a side of existential dread because I am officially ruined. 😭🔥")
        }
      }, []);
    
  return (
      <AnimatePresence initial={false}>
      {d1 && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            key="box"
          >
            <MessageBubble text={chat1} sender="them" />
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
              text={chat2}
              sender="me"
            />
          </motion.div>
        )}
         <div className="w-full flex items-center justify-center gap-6" key="jj">
      {
        d3 && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            key="back"
            className="w-full flex justify-center items-center"
          >
          <button
              onClick={()=>goBack()}
              type="button"
              className="bg-blue-400 outline-none border-none rounded-md p-3 text-xs text-white font-pixel_p2 my-3 "
            >
              Change character
            </button>
          </motion.div>
        )
      }
      {
      d3 && (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            key="recipe"
            className="w-full flex justify-center items-center"
          >
          <button
              onClick={()=>getRecipe()}
              type="button"
              className="bg-blue-400 outline-none border-none rounded-md p-3 text-xs text-white font-pixel_p2 my-3 "
            >
              Get Recipe !
            </button>
          </motion.div>
        )
      }
      </div>
      </AnimatePresence>
  )
}

export default Chat2;