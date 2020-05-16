// write your custom hook here to control your checkout form
import React, { useState } from 'react';


export const useForm = (initialState) => {
    const [values, setValues] = useState(initialState)

    const handleChanges = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }
    return [values, handleChanges]
}