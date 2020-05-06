import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";

class Calender extends Component {

    render() {



        return (
            <FullCalendar defaultView="dayGridMonth"
                dateClick={this.handleDateClick}
                plugins={[dayGridPlugin, interactionPlugin]}
                weekends={false}

                events={[
                    { title: 'event 1', date: '2020-05-01' },
                    { title: 'event 2', date: '2020-05-02' }
                ]}
            />
        )
    }
}

export default Calender;