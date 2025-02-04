import React from 'react'

const page = ({params}:{params:{type:string}}) => {
    
    const type=params.type;

  return (
    <div>types of boil {type}</div>
  )
}

export default page