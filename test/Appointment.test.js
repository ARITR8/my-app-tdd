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

        //Now fill up the list with valid data.
        // First write down the test, then implement that.

        it("check the li data rendered", async  () => {

            const toDay = new Date();
            const twoAppointments = [
                { startAt: toDay.setHours(12, 0) }, { startAt: toDay.setHours(13, 0) },
            ];
            const divRender = <AppointmentDayView appointments={twoAppointments} />; 

            await render(divRender, container);
            const listChidren = container.querySelectorAll("ol>li");
            expect(listChidren).toHaveLength(2);

        });


        //Test the list of items should show the time for each of the items.
        it("Match the exact time form list items", async () => {

            // Will render after creating const.
            // and then in container using querySelector will check that.

            const today = new Date();

            const twoAppointments = [
                { startsAt: today.setHours(12, 0,0,0) },
                { startsAt: today.setHours(13, 0,0,0) },
            ];

            const divRender = <AppointmentDayView appointments={twoAppointments} />;

            await render(divRender, container);  // So after using props, passing props, rendered, 

            //now will fetch from dom

            const listChildrenVale = container.querySelectorAll("li"); // will return list.

            expect(listChildrenVale[0].textContent).toContain("12:00");
            expect(listChildrenVale[1].textContent).toContain("13:00");

        });


        //write a test to check a particular para with certain content present in DOM
        it("The paragraph with correct content present in DOM", async() => {

            const toRender = <AppointmentDayView appointments={[]} />;
            await render(toRender, container);
            expect(container.textContent).toContain("There are no appointments scheduled for today.") ;

        });


        //write a test to see customer first name shown in page
        it("customer first name shown on loading", async () => {

            //will pass name here. 
            const today = new Date();
            const data = [{
                name: "Ashley",
                startsAt: today.setHours(12, 0, 0, 0)
            },
                { name: "Jordan", startsAt: today.setHours(13, 0, 0, 0) },];

            const toRender = <AppointmentDayView appointments={data} />;

            await render(toRender, container);

            //after rendering will check the expected result

            const name = container.querySelectorAll("li");

            expect(name[0].textContent).toContain("12:00");

            //but appointments will take >> object of array. 


        });


        //Now test each "li" tag has button
        it("each 'li' element has button", async () => {

            const date = new Date();

            //Two appointments data 
            const twoAppointments = [{ name: "Ashley", startsAt: date.setHours(12, 0, 0, 0 )},
                { name: "Jordan", startsAt: date.setHours(13, 0, 0, 0) },];

            //render element.
            const toRender = <AppointmentDayView appointments={twoAppointments} />;

           await render(toRender, container);

            //Now fetch the button element from the li

            const button = container.querySelectorAll("li>button");

            //Now expect validation
            expect(button).toHaveLength(2); //two buttons will be there.

            expect(button[0].type).toEqual("button");

        });

        it("Render new element when selected the button", async () => {

            const date = new Date();

            //Two appointments data 
            const twoAppointments = [{ name: "Ashley", startsAt: date.setHours(12, 0, 0, 0) },
            { name: "Jordan", startsAt: date.setHours(13, 0, 0, 0) },];

            //render element.
            const toRender = <AppointmentDayView appointments={twoAppointments} />;

            await render(toRender, container);

            //will fetch the button then will click on it. 
            const button = container.querySelectorAll("button")[1]; //first element is "Ashley",
            //second is Jordan, 

            await act(() => button.click());//button will be clicked here. 

            //expectation will be "Jordan"

            expect(container.textContent).toContain("Selected Appointment: Jordan");


        });






    });


});


