import React, { useState } from 'react'
import { useLocation } from 'wouter'
import ListOfGifs from 'components/ListOfGifs'
import { useGifs } from 'hooks/useGifs'
import TrendingSearches from 'components/TrendinSearches'

export default function Home() {
    const [keyword, setKeyword] = useState('')
    const [, pushLocation] = useLocation()
    const { gifs } = useGifs()

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
            <div className="App-main">
                <div className="App-results">
                    <h3 className="App-title">ultima busqueda</h3>
                    <ListOfGifs gifs={gifs} />
                </div>
                <div className="App-category">
                    <TrendingSearches />
                </div>
            </div>
        </>
    )
}
