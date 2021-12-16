import React from 'react'
import { Button, } from 'react-bootstrap';

export default function Buttons({ debitValue, creditValue, isEqual ,save}) {
    return (
        <>

            <Button variant="success" disabled={!isEqual} onClick={save}>Save</Button>{' '}
            <Button variant="info">{debitValue}</Button>{' '}
            <Button variant="warning">{creditValue}</Button>{' '}
            <Button variant="danger">balance </Button>{' '}
        </>
    )
}
