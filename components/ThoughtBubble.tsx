import React from 'react'
import { motion } from "framer-motion";

const ThoughtBubble = ({text}:{text:string}) => {
  return (
    <motion.div
                className="text-sm font-fredoka absolute -top-16 left-[14%] md:left-1/2 transform -translate-x-[1] md:-translate-x-1/2  w-40 bg-white text-black  rounded-lg shadow-lg p-2 text-center"
                initial={{ opacity: 0, scale: 0.5, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {text}
                {/* Thought Cloud Tail */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
              </motion.div>
  )
}

export default ThoughtBubble