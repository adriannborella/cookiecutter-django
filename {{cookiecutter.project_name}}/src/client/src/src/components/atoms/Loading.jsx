import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

export function Loading({animation='border', variant='primary'}) {
  return (
    <Spinner animation={animation} variant={variant} role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  )
}
