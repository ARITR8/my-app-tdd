import React, { useState } from 'react';

// Correctly define the Appointment component to render a JSX element
export const Appointment = ({ customer }) => {
    return <div>{ customer.firstName }</div>; // Wrap the string in a <div> or any other element
};

//export const AppointmentDayView = () => {

  //  return <div id="appointmentsDayView">
        
 //       <ol />
//    </div>

//};


const appointmentTimeOfDay = (startsAt) => {

    const [h, m] = new Date(startsAt)

        .toTimeString()

        .split(":");

    return `${h}:${m}`;

};



// AppointmentsDayView component definition
export const AppointmentDayView = ({ appointments }) => {
    const [selectedAppointment, setSelectedAppointment] =

        useState(0);
    return (
        <div id="appointmentsDayView">
            <ol>
                {appointments.length == 0 ? (<p>There are no appointments scheduled for today.</p>) : (
                appointments.map((appointment,i) => ( 
                    <li key={appointment.startsAt}>
                        <button type="button" onClick={() => setSelectedAppointment(i)}>
                            {appointmentTimeOfDay(appointment.startsAt)}
                        </button>
                            </li> // Assuming appointment is a string or an object with a meaningful toString output
                )
                ))}
            </ol>

            {/* Display the selected appointment details clearly */}
            {appointments.length > 0 && (
                <p style={{ marginTop: '10px' }}>Selected Appointment: {appointments[selectedAppointment].name}</p>
            )}
        </div>
    );
};