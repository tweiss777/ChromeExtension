import React from 'react';
import './styles/container.scss';

interface IProps{
  children: JSX.Element| JSX.Element[]
}

export default function Container({children}: IProps){



  return(
    <>
      <div className='container'>
        { children }
      </div>
    </>
  )

}