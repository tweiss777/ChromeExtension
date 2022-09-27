import React, { useRef, useEffect } from 'react'
import './styles/Popup.scss'
import Container from './Contrainer'
import GoogleApp from './GoogleApp';
import Row from './Row';
import calendar from '../images/GoogleIcons/calendar.png'
import drive from '../images/GoogleIcons/drive.png'
import docs from '../images/GoogleIcons/docs.png'
import forms from '../images/GoogleIcons/google-forms.png'
import sheets from '../images/GoogleIcons/sheets.png'
import gmail from '../images/GoogleIcons/gmail.png'
import youtube from '../images/GoogleIcons/youtube.png'
import meet from '../images/GoogleIcons/meet.png'
import translate from '../images/GoogleIcons/translate.png'
export default function Popup() {
  return (
    <>
      <Container>
        <Row>
          <GoogleApp img_url={calendar} title='Calendar' link='https://calendar.google.com/' />
          <GoogleApp img_url={translate} title='translate' link='https://translate.google.com/' />
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
          <GoogleApp title={'Meet'} link={'https://meet.google.com/'} img_url={meet} />
        </Row>
      </Container>
    </>


  )
}