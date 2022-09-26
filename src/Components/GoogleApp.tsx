import React from 'react';
import './styles/googleApp.scss';




interface IProps{
  title: string;
  link: string;
  img_url: string;
  _alt_title?: string | '';
}


export default function GoogleApp({title, img_url,_alt_title,link}: IProps) {
  return(
    <div className="app">
      <a href={link} target="_blank">
        <img className="img_style" src={img_url} alt={_alt_title} />
        <h4 style={{margin: '0',textAlign: 'center'}}>{title}</h4>
      </a>
    </div>
  )
}