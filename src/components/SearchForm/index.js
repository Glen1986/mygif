import React, { useState } from 'react'
import { Link, useLocation } from 'wouter'

export default function SearchForm() {
    const [keyword, setKeyword] = useState('')
    const [_, pushLocation] = useLocation()

    const handleChange = (evt) => {
        setKeyword(evt.target.value)
    }
    const handleSubmit = (evt) => {
        evt.preventDefault()
        pushLocation(`search/${keyword}`)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    type="text"
                    value={keyword}
                ></input>
                <input type="submit" value="search" />
            </form>
        </>
    )
}
