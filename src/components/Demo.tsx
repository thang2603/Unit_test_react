import React, { useState } from 'react'

const Demo = () => {
    const [count, setCount] = useState<number>(10);
    const [name, setName]= useState<string>("thang")
  return (
    <div>
        <p>{count}</p>
        <p>{name}</p>
    </div>
  )
}

export default Demo