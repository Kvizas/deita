import React, { useContext } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { MeilisearchContext } from '../../contexts/meilisearch-context/meilisearch-context';
import SearchItem from '../search-item/search-item';
import { SectionContext } from '../contextual-section/contextual-section'

import "./search-list.sass";

export default function SearchList() {

    const index = useContext(MeilisearchContext);
    const [sectionData, setSectionData] = useContext(SectionContext);

    const [results, setResults] = useState();

    useEffect(() => {
        if (sectionData?.search)
            index.search(sectionData.search, {limit: 10}).then(res => {
                setResults(res.hits);
            })
    }, [sectionData])
    

    return (
        <div className='searchlist'>
            {results?.map(result => <SearchItem key={result.id} item={result}/>)}
        </div>
    )
}
