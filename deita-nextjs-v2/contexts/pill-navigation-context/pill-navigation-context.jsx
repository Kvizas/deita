import React, { useState } from 'react'

export const PillNavContext = React.createContext();

export default function PillNavContextProvider({ children }) {

    const [active, setActive] = useState()

    return (
        <PillNavContext.Provider value={{active, setActive}}>
            {children}
        </PillNavContext.Provider>
    )
}
