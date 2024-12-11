import React from "react";

import ReactDOM from "react-dom/client";
import { Appointment, AppointmentDayView } from "../src/Appointment";
import { act } from "react-dom/test-utils";

let container;

beforeEach(() => {
     container = document.createElement('div');
});

describe("Test Suite Name", () => {

    //ReactDOM.createRoot(container).render(component);

    it("test One", () => {

      
});

    describe("Appointment", () => {

        const render = async (component, container) => {

            await act(async () => {

                ReactDOM.createRoot(container).render(component);

            });
        };

    it("renders the customer first name", async ()=> {
        const customer = { firstName: "Ashley" }; // Customer data
        const component = <Appointment customer={customer} />; // Create component instance
       // const container = document.createElement('div');
        // Create a container for rendering
       // const container = document.createElement('div');

        // Render the component into the container using createRoot
        // Use act to handle the async rendering
     //   await act(async () => {
      //      ReactDOM.createRoot(container).render(component);
      //  });
        // Use the new render function
        await render(component, container);
        expect(container.textContent).toContain("Ashley");

    });

});


    //triangulate example
    describe("Appointment", () => {

    it("renders the customer first name", async ()=> {
        const customer = { firstName: "Ashley" }; // Customer data
        const component = <Appointment customer={customer} />; // Create component instance
       // const container = document.createElement('div');
        // Create a container for rendering
     //   const container = document.createElement('div');

        // Render the component into the container using createRoot
        // Use act to handle the async rendering
        await act(async () => {
            ReactDOM.createRoot(container).render(component);
        });
        expect(container.textContent).toContain("Ashley");

    });

    });

    //Create another describe test case, for another simple component. 
    // 1. first will add the div view in DOM
    // with a specific ID, so test case should be , check if that particular ID present in DOM

    describe("AppointmentBookingDayView",  () =>  {
        let container;//Here again one new container taken.


        //beforeEach(() => {
          //  container = document.createElement('div');
        //});

        beforeEach(() => {
            container = document.createElement('div');
        });

        //Here also we are creating a beforeEach section, that will create all the div container before running each test 
        // this is duplicate code, will be refractor.

        const render = async (component, container) => {

            await act(async () => {

                ReactDOM.createRoot(container).render(component);

            });
        };


        it("check the div is rendered with correct ID", async () => {

            const component = <AppointmentDayView appointments={[]} />; 

            await render(component, container);

            expect(

                container.querySelector(

                    "div#appointmentsDayView"

                )

            ).not.toBeNull();

        });


        //test case to check the 'ol' Element  present or not

        

        it("Check the ol element ", async () => {

            const listComponent = <AppointmentDayView appointments={[]} />;
            await render(listComponent, container);
            const listValue = container.querySelector("ol");
            expect(listValue).not.toBeNull();




        });






    });


});


