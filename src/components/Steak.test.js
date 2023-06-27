import {render, fireEvent }from "@testing-library/react";
import Steak from "./Steak";
import React from 'react';

describe(Steak, () => {
    //testing the count function if it counts perfectly    
    it("counter displays correct initial count", () => {
        const { getByTestId } = render(<Steak initialCount={0}/>);
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).not.toEqual(0);
    })
    //Testind the button to increment
    it("count should increment by 1 if increment button is clicked", () => {
        const {getByTestId, getByRole} = render(<Steak initialCount={0}/>);
        const incrementBttn = getByRole("button", {name: "Cook 2 or more"});
        fireEvent.click(incrementBttn);
        const countValue = Number(getByTestId("count").textContent);
        expect(countValue).not.toEqual(0);
    })
})