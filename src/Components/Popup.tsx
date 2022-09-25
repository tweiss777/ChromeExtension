import React, { useRef, useEffect } from 'react'
import './Popup.scss'
import { changeColor } from '../functions/SetBackgroundColor'


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
    // get the current tab
    let [tab] = await chrome.tabs.query({active: true, currentWindow: true})
    const tabId = tab.id
    // execute your script here
    chrome.scripting.executeScript({
      target: { tabId },
      func: changeColor,
    })
    
  }




  return(
    <>
    <button onClick={handleChangeColor} ref={myBtn}>Click Me</button>
    </>


  )
}