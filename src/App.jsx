import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ChipsInput from './Components/InputChips'
import OTPValidation from './Components/OTPValidation'

function App() {
 

  return (
    <>
      
        <div>
<OTPValidation/>
{/* ..................second project........... */}
<ChipsInput/>

        </div>
    </>
  )
}

export default App
