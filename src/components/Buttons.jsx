import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap';

export default function Buttons({debitValue, creditValue, isEqual}) {
    return (
        <>
        {/* {{isEqual}} */}
        <Button variant="success" disabled={!isEqual}>Save</Button>{' '}
        <Button variant="info">{debitValue}</Button>{' '}
        <Button variant="warning">{creditValue}</Button>{' '}
        <Button variant="danger">balance </Button>{' '}
        </>
    )
}
