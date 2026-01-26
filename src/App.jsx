import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChipsInput from './Components/InputChips'
import OTPValidation from './Components/OTPValidation'
import EvenOrOdd from "./Components/EvenOrOdd"; // adjust path if needed
function App() {
 

  return (
    <>
      
        <div>
<OTPValidation/>
{/* ..................second project........... */}
<ChipsInput/>
{/* ..........................third project check number is even or odd............ */}
   <div>
        <EvenOrOdd />
      </div> 
        </div>
    </>
  )
}

export default App
