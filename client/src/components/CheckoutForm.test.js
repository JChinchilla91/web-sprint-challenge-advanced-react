import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
});

test("form shows success message on submit with form details", () => {
    const { getByLabelText, getByRole, getByTestId } = render(<CheckoutForm />)


    const firstName = getByLabelText(/first name/i)
    fireEvent.change(firstName, { target: { value: 'Coach' } });

    const lastName = getByLabelText(/last name/i)
    fireEvent.change(lastName, { target: { value: 'McGuirk' } });

    const address = getByLabelText(/address/i)
    fireEvent.change(address, { target: { value: '123 Evergreen Terrace' } });

    const city = getByLabelText(/city/i)
    fireEvent.change(city, { target: { value: 'Blackhole City' } })

    const state = getByLabelText(/state/i)
    fireEvent.change(state, { target: { value: 'New York, I guess' } })

    const zip = getByLabelText(/zip/i)
    fireEvent.change(zip, { target: { value: '123922' } })

    const button = getByRole('button', /submit/i)
    fireEvent.click(button);

    let successElem = getByTestId('fullName')
    expect(successElem.textContent).toBe('Coach McGuirk')

    let addressElem = getByTestId('address')
    expect(addressElem.textContent).toBe('123 Evergreen Terrace')

    let secondAddressElem = getByTestId('secondAddress')
    expect(secondAddressElem.textContent).toBe('Blackhole City, New York, I guess 123922')


});
