import React, { Component } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Confirm } from 'semantic-ui-react'

class Calender extends Component {
    calendarComponentRef = React.createRef();

    state = {
        calendarWeekends: true,
        calendarEvents: [

        ],
        state: { open: false }
    };

    open = () => this.setState({ open: true })
    close = () => this.setState({ open: false })

    render() {
        return (
            <div>
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
                    dateClick={this.open}
                />
                <Confirm
                    open={this.state.open}
                    onCancel={this.close}
                    onConfirm={this.close}
                    confirmButton="Yes"
                    content='Will you like to block date?'
                />
            </div>

        )
    }


}

export default Calender;