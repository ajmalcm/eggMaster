'use client'

import React, { useEffect, useState } from 'react'
import Boil from "@/public/assets/inWater.gif";
import Dancer from "@/public/assets/dancer.gif";
import Love from "@/public/assets/love.gif";
import Scared from "@/public/assets/scared.gif"
import Fork from "@/public/assets/fork.gif"
import Image from 'next/image'
import MessageBubble from './MessageBox';

const ProgressDialogues = ({type}:{type:string}) => {

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

      const setMessages=()=>{

      }

      useEffect(()=>{

      },)
      
      

  return (
    <div className='flex items-center justify-center w-full relative'>
        {/* <MessageBubble text=''/> */}
        <Image src={Boil} alt="boil" className='bg-yellow-50 rounded-md' objectFit='contain'/>
    </div>
  )
}

export default ProgressDialogues