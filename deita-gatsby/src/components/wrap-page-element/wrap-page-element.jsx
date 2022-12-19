import React from 'react'
import MeilisearchContextProvider from '../../contexts/meilisearch-context/meilisearch-context'
import UserContextProvider from '../../contexts/user-context/user-context'

export const wrapPageElement = ({ element }) => {
    return <div>
        <UserContextProvider>
            <MeilisearchContextProvider>
                {element}
            </MeilisearchContextProvider>
        </UserContextProvider>
    </div>
}