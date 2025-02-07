import Image from 'next/image';
import React from 'react'
import Pan from "@/public/assets/pan.gif"
import Recipe from '@/components/Recipe';

const page = ({params}:{params:{type:string}}) => {

    const type= params.type;

  return (
    <div className='w-full md:w-[600px] max-w-[600px] bg-yellow-200 border-[1px] rounded-md h-[100vh] max-h-[100vh]  text-black p-2'>
      <div className='flex gap-3 items-center justify-center'>
      <p className="text-sm p-2">
      "Egg Master !"
      </p>
      <Image src={Pan} alt="scared" width={75} height={75} objectFit="contain"/>
      </div>
      <Recipe type={type}/>
    </div>
  )
}

export default page