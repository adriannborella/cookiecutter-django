import React from 'react'
import { ButtonGroup, Table } from 'react-bootstrap'
import { ButtonCircular } from '../Button'

export function TableCrud({data, displayFields, onHandleClickEdit, onHandleClickDelete}) {
  return (
    <Table striped="columns">
        <thead>
            <tr>
                {
                    Object.keys(displayFields).map((item, index) => {
                        const config = displayFields[item]
                        return (<th key={index}>{config.title}</th>)
                    })
                }
                <th></th>
            </tr>
        </thead>
        <tbody>
            {data.results.map((item, index) => {
                return (
                <tr key={item.id}>
                    {
                        Object.keys(displayFields).map((configItem, index) => {
                            return (<td key={index}>{item[configItem]}</td>)
                        })
                    }
                    <td>
                        <ButtonGroup className="mb-2">
                            <ButtonCircular text='Edit' variant='primary' onHandleClick={() => onHandleClickEdit(item)}/>
                            <ButtonCircular text='Delete' variant='danger' onHandleClick={() => onHandleClickDelete(item)}/>
                        </ButtonGroup>
                    </td>
                </tr>)
            })}
        </tbody>
    </Table>
  )
}
