import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import BookHeader from '../../components/book-header/book-header'
import BookBrowser from "../../components/book-browser/book-browser"

import pb from "../../helpers/pocketbase"; 

import { useRouter } from "next/router";

export default function Book() {

  const router = useRouter();
  const { knyga: book } = router.query;

  const [activeBook, setActiveBook] = useState(undefined);

  console.log(`slug="${book}"`)

  useEffect(() => {
    if(!book) return;
    pb.collection('books').getFirstListItem(`slug="${book}"`, {}).then(data => {
      setActiveBook(data);
    }).catch(e => {
      console.error(e);
    });
  }, [book]);
  
  return (
    <>
      <Navbar />
      {activeBook != undefined ? 
        <>
          <BookHeader book={activeBook} />
          <BookBrowser book={activeBook} />
        </>
        :
        <></>
      }
      <Footer />
    </>
  )
}