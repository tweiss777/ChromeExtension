import React from 'react';

interface IProps{
  children: JSX.Element| JSX.Element[]
}

export default function Container({children}: IProps){



  return(
    <>
      <div>
        { children }
      </div>
    </>
  )

}