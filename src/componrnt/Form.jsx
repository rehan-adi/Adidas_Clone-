import React from 'react'
import { useState } from 'react';

function Form() {

    const [text, setText] = useState('')
    const [Pass, setPass] = useState('')

    const ChangeText = (e) => {
        setText(e.target.value)
    }
    const ChangePass = (e) => {
        setPass(e.target.value)
    }

    const SubmitForm = (f) => {
        f.preventDefault();
        alert("Your From is Submit ");
    }

  return (
   <>
   <form onSubmit={SubmitForm} className='From'>
     <input type="text"
     className='input1'
     placeholder='Entaer Your Email'
     onChange={ChangeText}
     value={text}
     required
      />
      <br />
     <input type="password"
     className='input2'
     placeholder='Entaer Your Passwoord'
     value={Pass}
     onChange={ChangePass}
     required
      />
      <br />
      <button type='submit' className='vod'>Submit</button>
   </form>
   </>
  )
}

export default Form;