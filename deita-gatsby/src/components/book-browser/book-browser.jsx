import React from 'react'

import "./book-browser.sass"

import ButtonSelect from '../button-select/button-select'
import { useState } from 'react'
import { useEffect } from 'react'

export default function BookBrowser({ data }) {

    const chapters = data.Sprendimai.map(ex => ex.Skyrius)
    const [activeChapter, setActiveChapter] = useState(chapters[0])

    const getChapterExercises = chapter => {
        return data.Sprendimai.filter(ex => ex.Skyrius === chapter)
    }

    const [chapterExercises, setChapterExercises] = useState(
        getChapterExercises(chapters[0]).map(ex => ex.Pavadinimas)
    )
    const [activeExercise, setActiveExercise] = useState()

    useEffect(() => {

        const exercises = getChapterExercises(activeChapter)

        setChapterExercises( exercises.map(ex => ex.Pavadinimas) )
        setActiveExercise( exercises[0].Pavadinimas )

    }, [activeChapter])

    return (
        <section className='flex'>
            <div className='book-browser__side'>
                <ButtonSelect
                    options={chapters}
                    active={activeChapter}
                    setActiveCb={setActiveChapter}
                    style={{width: '100%'}}
                />
            </div>
            <div className='book-browser__content'>
                <ButtonSelect
                    options={chapterExercises}
                    active={activeExercise}
                    setActiveCb={setActiveExercise}
                    wrapperClassName={'book-browser__ex-nav'}
                />
            </div>
        </section>
    )
}
