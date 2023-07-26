import React from 'react'
import { Button } from 'react-bootstrap'
import './Button.css'

export function ButtonCircular({text, variant='secondary', onHandleClick, ...props}) {
  return (
    <Button 
      {...props}
      className='ButtonCircular' 
      variant={variant}
      onClick={onHandleClick}
    >{text}</Button>
  )
}
