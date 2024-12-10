import React from "react";

import ReactDOM from "react-dom/client";
import { Appointment } from "../src/Appointment";
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

    it("renders the customer first name", async ()=> {
        const customer = { firstName: "Ashley" }; // Customer data
        const component = <Appointment customer={customer} />; // Create component instance
       // const container = document.createElement('div');
        // Create a container for rendering
       // const container = document.createElement('div');

        // Render the component into the container using createRoot
        // Use act to handle the async rendering
        await act(async () => {
            ReactDOM.createRoot(container).render(component);
        });
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


});


