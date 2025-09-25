// import { useState ,useCallback ,useEffect, useRef} from 'react'

// function App() {
//   const [length, setLength] = useState(8)
//   const [numberAllowed, setNumberAllowed] = useState(false)
//   const [charAllowed, setCharAllowed] = useState(false)
//   const [password, setPassword] = useState("")

//   // useRef is not used in this code, but it can be useful for performance optimization
//   const passwordRef = useRef(null)
  

//   const passwordGenerator = useCallback(() => {
//     let pass = ""
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

//     if(numberAllowed) {
//       str += "0123456789"
//     }
//     if(charAllowed) {
//       str += "!@#$%^&*()_+[]{}|;:,.<>?/"
//     }

//     for( let i = 1; i <= length; i++) 
//     {
//       let char = Math.floor(Math.random() * str.length + 1)
//       pass = str.charAt(char)+pass
//     }
//     setPassword(pass)
//   } , [length,numberAllowed,charAllowed , setPassword])


//   useEffect(() => {
//     passwordGenerator()
//   }, [length, numberAllowed, charAllowed, passwordGenerator])

//   const copyPasswordToClipboard = useCallback(() => {
//     passwordRef.current?.select();
//     window.navigator.clipboard.writeText(password)
//   },
//    [password]
//   )


//   return (
//     <>
//      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
//       <h1 className='text-white text-center my-3'>Password Generator</h1>
//       <div className='flex shadow rounded-lg overflow-hidden mb-4'>
//         <input
//         type = "text"
//         value={password}
//         className='outline-none w-full py-1 px-3'
//         placeholder='Password'
//         readOnly
//         ref={passwordRef}
//         />
//         <button 
//         onClick={copyPasswordToClipboard}
//         className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
//         >copy</button>

//       </div>

//       <div className='flex text-sm gap-x-2'>
//         <div className='flex items-center gap-x-1'>
//           <input 
//           type="range" 
//           min={6}
//           max={50}
//           value={length}
//           className='cursor-pointer'
//           onChange={(e) => {setLength(e.target.value)}}
//            />
//            <label>Length : {length} </label>
//         </div>

        
//         <div className="flex items-center gap-x-1">
//           <input
//           type="checkbox"
//           defaultChecked={numberAllowed}
//           id="numberInput"
//           onChange={() => {
//               setNumberAllowed((prev) => !prev);
//           }}
//           />
//           <label htmlFor="numberInput">Numbers</label>
//         </div>

//         <div className="flex items-center gap-x-1">
//           <input
//               type="checkbox"
//               defaultChecked={charAllowed}
//               id="characterInput"
//               onChange={() => {
//                   setCharAllowed((prev) => !prev )
//               }}
//           />
//           <label htmlFor="characterInput">Characters</label>
//         </div>


//       </div>
//      </div>
//     </>
//   )
// }

// export default App




// This code is Improved the UI and functionality of the password generator application.
// But the logic remains the same, allowing users to generate a password based on specified criteria such as length, inclusion of numbers, and special characters.

import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+[]{}|;:,.<>?/";

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    alert("Copied to clipboard!");
  }, [password]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-700 flex items-center justify-center px-4">
      <div className="w-full max-w-md shadow-xl rounded-xl p-6 bg-white">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          🔐 Password Generator
        </h1>

        <div className="flex items-center mb-4">
          <input
            type="text"
            value={password}
            className="w-full px-3 py-2 rounded-l-md border border-gray-300 focus:outline-none"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-all"
          >
            Copy
          </button>
        </div>

        <div className="space-y-4 text-sm text-gray-800">
          <div className="flex items-center justify-between">
            <label htmlFor="length" className="font-medium">Length: {length}</label>
            <input
              id="length"
              type="range"
              min={6}
              max={30}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-2/3 accent-blue-600"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="numbers"
              checked={numberAllowed}
              onChange={() => setNumberAllowed(prev => !prev)}
              className="accent-blue-600"
            />
            <label htmlFor="numbers">Include Numbers</label>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="characters"
              checked={charAllowed}
              onChange={() => setCharAllowed(prev => !prev)}
              className="accent-blue-600"
            />
            <label htmlFor="characters">Include Special Characters</label>
          </div>

          <button
            onClick={passwordGenerator}
            className="w-full mt-4 bg-purple-700 text-white py-2 rounded-md hover:bg-purple-800 transition-all"
          >
            Generate New Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;



