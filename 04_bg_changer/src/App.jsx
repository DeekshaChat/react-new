import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('Olive')

  return (
    <>
      {/* <h1>Bg changer</h1> */}
      <div className='w-screen h-screen duration-75' 
      style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap bottom-6 inset-x-0 px-2 justify-center'>
          
          <div className='flex flex-wrap rounded-3xl gap-5 justify-center bg-white px-2 py-2'>
            <button 
            onClick={() => setColor('red')}
            className='outline-none text-white rounded-3xl px-4 py-1' style={{backgroundColor: 'red'}}>
            Red</button></div>

            <div className='flex flex-wrap rounded-3xl gap-5 justify-center  bg-white px-2 py-2 '>
            <button
            onClick={() => setColor('green')}
             className='outline-none text-white rounded-3xl' style={{backgroundColor: 'green'}}>
            Green</button></div>

            <div className='flex flex-wrap rounded-3xl gap-5 justify-center bg-white px-2 py-2'>
            <button 
            onClick={() => setColor('blue')}
            className='outline-none text-white rounded-3xl' style={{backgroundColor: 'blue'}}>
            Blue</button></div>
        </div>
      </div>
    </>
  )
}

export default App
