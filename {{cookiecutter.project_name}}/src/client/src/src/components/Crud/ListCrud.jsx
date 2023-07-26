import React from 'react'
import { ButtonGroup, ListGroup } from 'react-bootstrap';
import { ButtonCircular } from '../Button';

export function ListCrud({data, displayFields, onHandleClickEdit, onHandleClickDelete}) {
  return (
    <ListGroup as="ul">
        {data.results.map((item, index) => {
            return (
                <ListGroup.Item key={item.id}>
                    {
                        Object.keys(displayFields).map((configItem, index) => 
                        {
                            const config = displayFields[configItem]
                            return (
                                <div className="ms-2 me-auto" key={`${item.id}-${configItem}`}>
                                    <div>{config.title}: {item[configItem]}</div>
                                </div>
                            )
                        })
                    }
                    <ButtonGroup className="mb-2">
                        <ButtonCircular text='Edit' variant='primary' onHandleClick={() => onHandleClickEdit(item)}/>
                        <ButtonCircular text='Delete' variant='danger' onHandleClick={() => onHandleClickDelete(item)}/>
                    </ButtonGroup>
                </ListGroup.Item>
            )
        })}
    </ListGroup>
  )
}
