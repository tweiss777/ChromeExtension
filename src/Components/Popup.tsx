import React, { useRef, useEffect } from 'react'
import './styles/Popup.scss'
import { changeColor } from '../functions/SetBackgroundColor'
import Container from './Contrainer'

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
      <Container>
        {/* put all your google apps here */}
        <h1>All your google apps go here </h1>

      </Container>
    </>


  )
}