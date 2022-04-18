import React from 'react'
import Spinner from 'react-bootstrap/Spinner'

export default function Spiner() {
    return (
        <>
            <Spinner animation="border" role="status">
                <span className="visually-hidden"></span>
            </Spinner>
        </>
    )
}
