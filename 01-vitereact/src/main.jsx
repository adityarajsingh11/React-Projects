import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Hello, Vite + React!</h1>
      </div>
  )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank',
//     },
//     children: "click me to go to google"
// }

const anotherElement = (
    <a href="https://google.com" target="_blank">Visit Google</a>
)

const anotherUser = "Golu Singh"

const ReactElement = React.createElement(
    'a',
    { href: 'https://google.com', target: '_blank' },
    'click me to go to google',
    anotherElement
)

createRoot(document.getElementById('root'))
.render(  // react element ka render hai
  
   ReactElement
  //  <App/>  
  
)
