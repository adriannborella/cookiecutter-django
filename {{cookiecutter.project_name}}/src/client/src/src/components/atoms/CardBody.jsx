import React from 'react'
import Card from 'react-bootstrap/Card';

export function CardBody({text}) {
  return (
    <Card>
      <Card.Body>{text}</Card.Body>
    </Card>
  )
}
