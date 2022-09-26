import React from "react";
import './styles/Row.scss';
interface IProps{
  children: JSX.Element | JSX.Element[];
}

export default function Row({children}: IProps){


  return(
      <div className="row">
        {children}
      </div>

  )
}