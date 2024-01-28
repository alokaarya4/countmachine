import React, { useState } from 'react'

const CounterMachine = () => {

    const [count, setCount] = useState(0)
    const AddValue = () => {
        setCount(count + 1)
    }
     
    const RemoveValue = () => {
        if (count > 0) {
        setCount(count - 1)
    }
    }

  return (
    <>
       <div className='container p-14 m-10  shadow-slate-400 shadow-lg' >
      <div className='font-bold text-4xl mb-20'>Counter Machine</div>
       <div className=''>
      <button className='bg-blue-600 shadow-gray-400 shadow-lg mb-4 text-white outline-none' onClick={AddValue}>Add Count</button>
      <p className='font-semibold'>Start : {count}</p>
      <button className='bg-blue-600  shadow-gray-400 shadow-lg mt-4 text-white outline-none' onClick={RemoveValue}> Remove Count</button>
      </div>
      </div>
      </>
  )
}

export default CounterMachine