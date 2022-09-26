import React, { useRef, useEffect } from 'react'
import './styles/Popup.scss'
import Container from './Contrainer'
import GoogleApp from './GoogleApp';
import Row from './Row';
import calendar from '../images/GoogleIcons/calendar.png'
import google from '../images/GoogleIcons/google.png'
import drive from '../images/GoogleIcons/drive.png'
import docs from '../images/GoogleIcons/google-docs.png'
import forms from '../images/GoogleIcons/google-forms.png'
import sheets from '../images/GoogleIcons/sheets.png'
import gmail from '../images/GoogleIcons/gmail.png'
import youtube from '../images/GoogleIcons/youtube.png'


export default function Popup() {

  const myBtn = useRef<HTMLButtonElement>()
  // you can change the color here after the component renders via useEffect.
  // but of cource 
  useEffect(() => {
    // Initialize button with user's preferred color
    chrome.storage.sync.get("color", ({ color }) => {
      myBtn.current.style.backgroundColor = color
    });
  })


  return (
    <>
      <Container>
        {/* put all your google apps here */}
        <Row>
          <GoogleApp img_url={calendar} title='Calendar' link='https://calendar.google.com/' />
          <GoogleApp img_url={google} title='Google' link='https://google.com/' />
          <GoogleApp img_url={drive} title='Drive' link='https://drive.google.com/' />
        </Row>
        <Row>
          <GoogleApp img_url={docs} title='Docs' link='https://calendar.google.com/' />
          <GoogleApp img_url={forms} title='Forms' link='https://calendar.google.com/' />
          <GoogleApp img_url={sheets} title='Sheets' link='https://calendar.google.com/' />
        </Row>
        <Row>
          <GoogleApp title='Mail' link='https://mail.google.com/' img_url={gmail} />
          <GoogleApp title='YouTube' link={'https://www.youtube.com/'} img_url={youtube} />
          <GoogleApp title={''} link={''} img_url={''} />
        </Row>

      </Container>
    </>


  )
}