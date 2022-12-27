import React, { useContext } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { MeilisearchContext } from '../../contexts/meilisearch-context/meilisearch-context';
import SearchItem from '../search-item/search-item';
import { SectionContext } from '../contextual-section/contextual-section'

import sass from "./search-list.module.sass";

export default function SearchList() {

    const index = useContext(MeilisearchContext);
    const [sectionData, setSectionData] = useContext(SectionContext);

    const [results, setResults] = useState();

    useEffect(() => {
        if (sectionData?.search)
            index.search(sectionData.search, {limit: 10}).then(res => {
                setResults(res.hits);
            })
    }, [sectionData, index]) // index
    

    return (
        <div className={sass.searchList}>
            {results?.map(result => <SearchItem key={result.id} item={result}/>)}
        </div>
    )
}
