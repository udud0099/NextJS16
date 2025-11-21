

'use client'
import { useState } from "react"
import Chil1 from "./Chil1"
import Chil2 from "./Chil2"

 
 

const MainParant1 = () => {
    const [num, setNum] = useState(0)

  return (
    <div>
       <div>
      <h1>MainParant1 {num}</h1>
      <Chil1 num={num} setNum={setNum} />
      <Chil2 num={num} setNum={setNum} />
    </div>
    </div>
  )
}

export default MainParant1

