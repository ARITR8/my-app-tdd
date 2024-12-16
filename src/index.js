import React from 'react';
import ReactDOM from 'react-dom/client'; // Importing ReactDOM for rendering
import { AppointmentDayView } from './Appointment'; // Adjust the import path as necessary

// Sample appointment data
const sampleAppointments = [
    {
        name: "Ashley",
        startsAt: new Date().setHours(12, 0, 0),
        customer: { firstName: "Ashley" }
    },
    {
        name: "Jordan",
        startsAt: new Date().setHours(13, 0, 0),
        customer: { firstName: "Jordan" }
    }
];

// Create a root for the application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the AppointmentDayView component with sample appointments
root.render(
    <React.StrictMode>
        <AppointmentDayView appointments={sampleAppointments} />
    </React.StrictMode>
);