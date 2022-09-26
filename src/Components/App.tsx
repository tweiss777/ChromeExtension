/*global chrome*/
import React, { useEffect, useRef } from 'react';
import './styles/style.scss'
import Popup from './Popup';



export function App() {
  return (
    <>
      {/* this will be where our options show up */}
      <Popup />
    </>
  )

}