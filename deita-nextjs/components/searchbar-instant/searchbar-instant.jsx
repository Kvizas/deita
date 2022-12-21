import React, { useState } from 'react'

import sass from "./searchbar-instant.module.sass"

import SearchSvg from "../../images/search.svg"
import PdfSvg from "../../images/pdf.svg";
import ArrowRightSvg from "../../images/arrow-right.svg";

import SearchbarItem from './searchbar-item'
import Button from '../button/button';

import { useRef } from 'react';
import { useContext } from 'react';
import { SectionContext } from '../contextual-section/contextual-section';
import { MeilisearchContext } from '../../contexts/meilisearch-context/meilisearch-context';
import { useEffect } from 'react';
import accessibleOnClick from '../../functions/accessibility';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function SearchbarInstant({ disableList, search_query = "", small, transform }) {

  const router = useRouter();

  const [, setSectionData] = useContext(SectionContext);
  const index = useContext(MeilisearchContext);
  const [value, setValue] = useState(search_query);
  const [focused, setFocused] = useState(false);
  const [results, setResults] = useState([]);

  const inputElement = useRef();
  
  const list_el = useRef();

  useEffect(() => {
    setSectionData(data => ({...data, search: value}))
  }, [value, setSectionData])

  const search = event => {

    const value = event.target.value;

    setValue(value);

    if (!disableList)
      if (value !== '')
        index.search(value, {limit: 5}).then(res => {
          setResults(res.hits);
        })
      else setResults([]);
  }

  const calcListBottomLength = () => {
    if (!focused) return undefined;

    var pixels = 5;

    if (!disableList) {
      pixels += 49 * results.length;
      if (results.length) pixels += 30;
    }

    return -pixels + 'px'

  }

  const focus = () => {
    setFocused(true);
    window.addEventListener('keydown', onEnter)
  }

  const blur = () => {
    setFocused(false)
    window.removeEventListener('keydown', onEnter)
  }

  const onEnter = event => {
    if (event.key === "Enter") onSearchBtn();
  }
  
  const onSearchBtn = () => {
    router.push({
      pathname: '/paieska',
      query: {
        q: inputElement.current.value
      }
    })
  }

  const getWrapperClass = () => {
    return sass.searchbar__wrapper + (small ? ' ' + sass.searchbar__wrapper__small : '')
  }

  const getWrapperStyle = () => {
    return transform ? {transformOrigin: transform} : {}
  }

  const getListClass = () => {
    return sass.searchbar__list + (focused ? ' active' : '')
  }

  return (
    <>
    <div
      className={getWrapperClass()}
      style={getWrapperStyle()}  
    >
      <div style={{bottom: calcListBottomLength()}} ref={list_el} className={getListClass()}>
        {focused && !disableList ? 
          results.map(hit => <SearchbarItem key={hit.id} title={hit.Pavadinimas} source={"DEITA " + hit.Kategorija.Pavadinimas} img_src={PdfSvg}/>)
          :
          <></>
        }
        {focused && results.length && !disableList ? 
          <div className={sass.searchbar__more}>Rasti daugiau <Image src={ArrowRightSvg} alt=''/></div>
          :
          <></>
        }

      </div>
      <input
          placeholder='Ieškoti tarp šaltinių'
          spellCheck='false'
          className={sass.searchbar}
          onChange={search}
          onFocus={focus}
          onBlur={blur}
          value={value}
          ref={inputElement}
      />
      <Image className={sass.searchbar__icon} src={SearchSvg} alt='Paieška'/>
      <Button className={sass.searchbar__btn} onClick={onSearchBtn}>Ieškoti</Button>
    </div>
    </>
  )
}
