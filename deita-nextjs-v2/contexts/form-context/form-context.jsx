import React, { useState } from 'react'

export const FormContext = React.createContext();

export default function FormContextProvider({children}) {

    const [fields, setFields] = useState({})

    return (
        <FormContext.Provider value={{fields, setFields}}>
            {children}
        </FormContext.Provider>
    )
}
