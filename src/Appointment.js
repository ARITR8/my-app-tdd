import React from 'react';

// Correctly define the Appointment component to render a JSX element
export const Appointment = ({ customer }) => {
    return <div>{ customer.firstName }</div>; // Wrap the string in a <div> or any other element
};

//export const AppointmentDayView = () => {

  //  return <div id="appointmentsDayView">
        
 //       <ol />
//    </div>

//};

// AppointmentsDayView component definition
export const AppointmentDayView = ({ appointments }) => {
    return (
        <div id="appointmentsDayView">
            <ol>
                {appointments.map(() => ( 
                    <li key={appointments.startsAt} /> // Assuming appointment is a string or an object with a meaningful toString output
                ))}
            </ol>
        </div>
    );
};