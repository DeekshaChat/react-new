import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState('');
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (charAllowed) {
      str += '~`!@#$%^&*()_+:";,./?><[]{}';
    }
    if (numberAllowed) {
      str += '01234567890';
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    
    setPassword(pass);

  }, [length, charAllowed, numberAllowed, setPassword]);
  
  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(()=>{
    passwordGenerator();
  },[length, charAllowed, numberAllowed, passwordGenerator]);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className='w-full max-w-lg mx-auto text-orange-500 bg-gray-700 rounded-lg px-2 py-2' >
          <h2 className='text-white text-center mb-4'>Password Generator</h2>
          <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input
              type='text'
              value={password}
              className='outline-none w-full py-1 px-3'
              placeholder='Password'
              readOnly
              ref={passwordRef}
            />
            <button 
            onClick={copyPassword}
            className='text-white bg-blue-700 rounded-none'>Copy</button>
          </div>
          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input
                type='range'
                min={8}
                max={20}
                value={length}
                className='cursor-pointer'
                onChange={(e)=> {setLength(e.target.value)}}
                />
              <label>Length({length})</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input
                type='checkbox'
                id='numberInput'
                defaultChecked={numberAllowed}
                onChange={() => {
                  setNumberAllowed(prev => !prev);
                }}
                />
              <label>Number Allowed</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input
                type='checkbox'
                id='charInput'
                defaultChecked={charAllowed}
                onChange={() => {
                  setCharAllowed(prev => !prev);
                }}
                />
              <label>Char Allowed</label>
            </div>
          </div>
        </div>
    </div>
  )
}

export default App
