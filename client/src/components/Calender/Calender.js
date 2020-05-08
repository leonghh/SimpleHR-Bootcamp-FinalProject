import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import resourceTimelinePlugin from '@fullcalendar/resource-timeline';

class Calender extends Component {
    calendarComponentRef = React.createRef();

    state = {
        calendarWeekends: true,
        calendarEvents: [
            
        ]
    };

    handleDateClick = (arg) => {
        alert(arg.dateStr)
        console.log(arg)
    }

    render() {
        return (
            <FullCalendar 
                defaultView="dayGridMonth"
                header={{
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
                }}
                dateClick={this.handleDateClick}
                schedulerLicenseKey='GPL-My-Project-Is-Open-Source'
                plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
                ref={this.calendarComponentRef}
                weekends={this.state.calendarWeekends}
                events={this.state.calendarEvents}
                dateClick={this.handleDateClick}
            />
        )
    }

    
}

export default Calender;