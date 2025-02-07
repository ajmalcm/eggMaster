import { AnimatePresence ,motion} from 'motion/react'
import React from 'react'

const Message = ({align,text}:{align:string,text:string}) => {

    const props=align==="left"?'bg-pink-100 opacity-80 p-3 font-fredoka text-sm rounded-xl rounded-br-sm max-w-[200px]':"bg-white font-fredoka text-sm p-3 rounded-xl rounded-bl-sm  max-w-[200px]"

  return (
    <>
    <AnimatePresence>
        <motion.div
    initial={{ opacity: 0, scale: 0.5, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: -10 }}
                transition={{ duration: 0.3 }}>
    <p className={props}>
        {text}
    </p>
    </motion.div>
    </AnimatePresence>
    </>
  )
}

export default Message