import React from 'react'
import { Title } from '../../components/atoms'
import { Loading } from '../../components/atoms/Loading'

export function ExamplePage() {
  return (
    <div>
        <Title title="Example Title Component"></Title>
        <hr />
        <Loading />
    </div>
  )
}
