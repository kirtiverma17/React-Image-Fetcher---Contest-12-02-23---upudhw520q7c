import React from 'react';
import "..styles/App.css"

export const PhotoFrame = ({url,title}) => {
   return(
      <div className='photoframes'>
      <div>{title}</div>
      <img src={url}/>
  )
   
}
