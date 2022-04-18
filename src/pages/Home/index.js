import React, { useState } from 'react'
import { Link, useLocation } from 'wouter'
import ListOfGifs from 'components/ListOfGifs'
import { useGifs } from 'hooks/use'
import Spiner from 'components/Spiner'

export default function Home() {
    const [keyword, setKeyword] = useState('')
    const [, pushLocation] = useLocation()
    const { gifs, loading } = useGifs()

    const handleChange = (evt) => {
        setKeyword(evt.target.value)
    }
    const handleSubmit = (evt) => {
        evt.preventDefault()
        pushLocation(`/search/${keyword}`)
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
            <br />
            <litle className="App-title">ultima busqueda</litle>
            {loading ? <Spiner /> : <ListOfGifs gifs={gifs} />}
        </>
    )
}
