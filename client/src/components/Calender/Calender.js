import React, { Component } from "react";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

class Calender extends Component {
    render() {
        return (
            <FullCalendar defaultView="dayGridMonth" 
            plugins={[ dayGridPlugin ]} 
            weekends={false}
            events={[
                { title: 'event 1', date: '2020-05-01' },
                { title: 'event 2', date: '2020-05-02' }
            ]}
            />
        );
    }
}

export default Calender;