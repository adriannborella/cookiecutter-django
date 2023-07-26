import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import multiMonthPlugin from '@fullcalendar/multimonth'
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

import './CustomCalendar.css'

export function CustomCalendar({ events }) {
    const [show, setShow] = useState(false);
    const [currentEvent, setCurrentEvent] = useState({})

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const headerToolbar = {
        left: 'today',
        center: 'title',
        right: ''
    }


    const handleClick = (event) => {
        setCurrentEvent(event.event)
        handleShow()
    }

    return (
        <>
            <FullCalendar
                plugins={[dayGridPlugin, multiMonthPlugin, interactionPlugin]}
                initialView="multiMonthYear"
                events={events}
                themeSystem='bootstrap5'
                headerToolbar={headerToolbar}
                eventClick={handleClick}
                // dayHeaderClassNames="dayHeaderClassNames"
                // dayCellClassNames='dayCellClassNames'
                viewClassNames='viewClassNames'
                // nowIndicatorClassNames='nowIndicatorClassNames'
                // weekNumberClassNames='weekNumberClassNames'
                // eventClassNames='eventClassNames'
                // slotLaneClassNames='slotLaneClassNames'
                // slotLabelClassNames='slotLabelClassNames'
                // allDayClassNames='allDayClassNames'
                // moreLinkClassNames='moreLinkClassNames'
            />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>{currentEvent.start?.toLocaleDateString('es-ar')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{currentEvent.title}</Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}