/*global chrome*/
import React, { useEffect, useRef } from 'react';




export function App() {
  
  
  const btnRef = useRef<HTMLButtonElement>()
  
  // you can change the color here after the component renders via useEffect.
  // but of cource 
  useEffect(() => {
    let color1 = '#000000';
    // Initialize button with user's preferred color
    chrome.storage.sync.get("color", ({ color }) => {
      btnRef.current.style.backgroundColor = color1
    });
  })

  return (
    <>
      <h1>The basis of our chrome extension</h1>
      <button ref={btnRef}>Change Color</button>
    </>
  )

}