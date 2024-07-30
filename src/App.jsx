import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from './redux/slice/counterSlice'



const App = () => {
  const count = useSelector((state)=>{
    return (state.counter.value)
  })

  const dispatch = useDispatch()
  return (
    <div className='flex gap-10 justify-center items-center h-screen'>

      <button onClick={()=>dispatch(increment())} className='bg-green-500 text-white rounded-md text-3xl p-2'>Increment</button>

      <button onClick={()=>dispatch(decrement())} className='bg-red-400 text-white rounded-md text-3xl p-2'>Decrement</button>

      <button onClick={()=>dispatch(reset())} className='bg-gray-500 rounded-md text-3xl p-2'>Reset</button>
      <div>
        <h1>counter: {count}</h1>
      </div>
    </div>
  )
}

export default App
