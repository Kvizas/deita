import React, { useContext } from 'react'
import { FormContext } from '../../contexts/form-context/form-context'
import Button from '../button/button'

export default function ButtonSubmit({ style, children, onSubmit }) {

    const { fields } = useContext(FormContext)

    const submit = () => {
        onSubmit(fields)
    }

    return (
        <Button style={style} onClick={submit}>{children}</Button>
    )
}
