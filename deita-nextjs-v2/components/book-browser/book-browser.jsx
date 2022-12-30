import React, { useState, useEffect} from 'react';

import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import accessibleOnClick from "../../functions/accessibility";

import sass from "./book-browser.module.sass";
import pb from "../../helpers/pocketbase"; 


export default function BookBrowser({ book }) {

    const [bookSections, setBookSections] = useState([]);
    const [selectedSection, setSelectedSection] = useState(undefined);
    const [sectionExercises, setSectionExercices] = useState([]);
    const [selectedExercise, setSelectedExercise] = useState(undefined);

    useEffect(() => {
        pb.collection('bookSections').getFullList(200, {
            sort: '+title',
            filter: `book = "${book.id}"`
        }).then(data => {
            setBookSections(data);
        }).catch(e => {
            console.error(e);
        });
    }, []);

    useEffect(() => {
        if (!selectedSection) return;
        pb.collection('exercises').getFullList(200, {
            sort: '+title',
            filter: `section = "${selectedSection.id}"`
        }).then(data => {
            setSectionExercices(data);
            console.log(data);
        }).catch(e => {
            console.error(e);
        });
        setSelectedExercise(undefined);
    }, [selectedSection])

    return (
        <section className='flex' style={{gap: "25px"}}>
            {bookSections && bookSections.length > 0 ? 
                <>
                    <div className={sass.bookBrowser__sections}>
                        {bookSections.map(section => (
                            <div 
                                key={section.id}
                                {...accessibleOnClick(() => setSelectedSection(section))}
                                className={sass.bookBrowser__sections__section + " " + (selectedSection && section.id == selectedSection.id ? sass.bookBrowser__sections__section__active : "")}

                            >
                                {section.title}
                            </div>
                        ))}
                    </div>
                    <div className={sass.bookBrowser__exercises}>
                        <div className={sass.bookBrowser__exercises__selector}>
                            {sectionExercises.map(exercise => (
                                <div 
                                    key={exercise.id}
                                    {...accessibleOnClick(() => setSelectedExercise(exercise))}
                                    className={sass.bookBrowser__exercises__selector__selection + " " + (selectedExercise && exercise.id == selectedExercise.id ? sass.bookBrowser__exercises__selector__selection__active : "")}

                                >
                                    {exercise.title}
                                </div>
                            ))}
                        </div>
                        {selectedExercise ? 
                            <div className={sass.bookBrowser__exercises__solution}>
                                <Latex>{selectedExercise.solution}</Latex>
                            </div>
                            :
                            <></>
                        }
                        
                    </div>
                </>
                :
                <div>Deja, šis turinys prieinamas tik Premium nariams.</div>
            }
        </section>
    )
}
