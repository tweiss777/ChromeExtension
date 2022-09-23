import React, { useRef, useEffect } from 'react'
import './Popup.scss'
import changeColor from '../functions/SetBackgroundColor'


export default function Popup(){
  
  const myBtn = useRef<HTMLButtonElement>()
  // you can change the color here after the component renders via useEffect.
  // but of cource 
  useEffect(() => {
    // Initialize button with user's preferred color
    chrome.storage.sync.get("color", ({ color }) => {
      myBtn.current.style.backgroundColor = color
    });
  })

  async function handleChangeColor(){


    
  }




  return(
    <>
    <button ref={myBtn}>Click Me</button>
    </>


  )
}