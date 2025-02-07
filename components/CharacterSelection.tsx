"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Runny from "@/public/assets/runny-removebg-preview.png";
import Soft from "@/public/assets/soft-removebg-preview.png";
import Hard from "@/public/assets/hardegg-removebg-preview.png";
import Over from "@/public/assets/overcokkedegg-removebg-preview.png";
import Image from "next/image";
import ThoughtBubble from "./ThoughtBubble";

const eggCharacters = [
  { id: "runny", name: "Runny Yolk", image: Runny, dialogue: "Still gooey inside! 🍳" },
  { id: "soft", name: "Soft-Boiled", image: Soft, dialogue: "Perfectly balanced, like all things should be! 😋" },
  { id: "hard", name: "Hard-Boiled", image: Hard, dialogue: "Tough and reliable! 💪" },
  { id: "overcooked", name: "Over-cooked", image: Over, dialogue: "Help... I'm a rubbery mess! 🥲" },
];

export default function CharacterSelection({onSelection}:{onSelection:Function}) {
  const [selected, setSelected] = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const hoverRef=useRef<HTMLAudioElement | null>(null);

  const mouseEnter=(id:string)=>{
    setHovered(id);
    hoverRef.current?.play();
  }

  const mouseLeave=()=>{
    setHovered(null);
  }

  const onSelect=(id:string)=>{
    setSelected(id);
    onSelection(id);
  }

  return (
    <div className="flex justify-center items-center p-6">
      <AnimatePresence>
      <motion.div
        className="grid grid-cols-2 gap-3 md:gap-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeIn" }}
      >
        {eggCharacters.map((egg) => (
          <motion.div
            key={egg.id}
            className={`relative p-4 rounded-2xl bg-white shadow-lg cursor-pointer transition-all ${
              selected === egg.id ? "scale-110 shadow-xl border-2 border-yellow-500" : "hover:scale-105"
            }`}
            onClick={() => onSelect(egg.id)}
            onMouseEnter={() => mouseEnter(egg.id)}
            onMouseLeave={mouseLeave}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              animate={
                selected === egg.id
                  ? { rotate: [0, -5, 5, 0], transition: { repeat: 2, duration: 0.4 } }
                  : {}
              }
            >
              <Image src={egg.image} alt={egg.name} width={100} height={100} objectFit="contain" />
            </motion.div>

            <motion.h3
              className="text-center text-black text-xs mt-3"
              animate={selected === egg.id ? { scale: 1.2, color: "#FFD700" } : {}}
            >
              {egg.name}
            </motion.h3>

            {/* Thought Bubble on Hover */}
            {hovered === egg.id && (
              <ThoughtBubble text={egg?.dialogue}/>
              // <motion.div
              //   className="text-sm font-fredoka absolute -top-16 left-[14%] md:left-1/2 transform -translate-x-[1] md:-translate-x-1/2  w-40 bg-white text-black  rounded-lg shadow-lg p-2 text-center"
              //   initial={{ opacity: 0, scale: 0.5, y: -10 }}
              //   animate={{ opacity: 1, scale: 1, y: 0 }}
              //   exit={{ opacity: 0, scale: 0.5, y: -10 }}
              //   transition={{ duration: 0.3 }}
              // >
              //   {egg.dialogue}
              //   {/* Thought Cloud Tail */}
              //   <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
              // </motion.div>
            )}

            {/* Selection Highlight Effect */}
            {selected === egg.id && (
              <motion.div
                className="absolute inset-0 bg-yellow-500/10 rounded-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.div>
        ))}
      </motion.div>
      </AnimatePresence>
      <audio ref={hoverRef} src="/assets/hover1.mp3" preload="auto"/>
    </div>
  );
}
