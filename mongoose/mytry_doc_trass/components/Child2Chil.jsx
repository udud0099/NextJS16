'use client'


 
const Child2Chil = ({num, setNum}) => {
  const incNum = () => {
    // setNum(num + 1) 
    // setNum(num + 1) 
    const temp = setNum(num + 1) 
    setNum(temp + 1)  
  }
  return (
    <div>
      <h1>Child2Chil</h1>
      <button onClick={incNum} className="w-3xl bg-amber-500 p-4 cursor-pointer">inc {num}</button>
    </div>
  )
}

export default Child2Chil
