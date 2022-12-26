import React from 'react'

import { MeiliSearch } from 'meilisearch'

export const MeilisearchContext = React.createContext();

export default function MeilisearchContextProvider({ children }) {

    const client = new MeiliSearch({
        host: 'http://127.0.0.1:7700', // Need to change into env variable
    })
    
    const index = client.index('medziaga');

    return (
        <MeilisearchContext.Provider value={index}>
            {children}
        </MeilisearchContext.Provider>
    )
}
