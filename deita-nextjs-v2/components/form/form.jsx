import React, { useContext } from 'react'
import FormContextProvider from '../../contexts/form-context/form-context'

export default function Form({ children }) {

    return (
        <FormContextProvider>
            <form>
                {children}
            </form>
        </FormContextProvider>
    )
}
