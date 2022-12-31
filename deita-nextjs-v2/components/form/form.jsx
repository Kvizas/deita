import React from 'react'
import FormContextProvider from '../../contexts/form-context/form-context'

export default function Form({ children, style }) {

    return (
        <FormContextProvider>
            <form style={style}>
                {children}
            </form>
        </FormContextProvider>
    )
}
