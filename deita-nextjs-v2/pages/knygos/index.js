import React, { useState, useEffect } from 'react'

import sass from "./book-list.module.sass";

import Navbar from '../../components/navbar/navbar'
import Footer from '../../components/footer/footer'
import Heading from '../../components/heading/heading';

import pb from "../../helpers/pocketbase";

export default function Books() {

    const [books, setBooks] = useState(undefined);

    useEffect(() => {
        pb.collection('books').getList(1, 50, {
            sort: '+title',
        }).then(data => {
            console.log(data);
            setBooks(data);
        }).catch(console.error);
      }, []);

    return (
        <>
            <Navbar />
            <section>
                <Heading styleLevel={2} level={1}>Knygų uždavinių sprendimai</Heading>
                {books ? 
                    <div className={sass.bookList}>
                        {books.items.map(book => (
                            <div className={sass.bookList__book}>
                                <div className={sass.bookList__book__image} style={{backgroundImage: `url(${pb.getFileUrl(book, book.image)})`}}></div>
                                <div className={sass.bookList__book__information}>
                                    <div className={sass.bookList__book__information__title}>{book.title}</div>
                                    <div className={sass.bookList__book__information__description}>{book.description}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    :
                    <></>
                }
            </section>
            <Footer />
        </>
    )
}
