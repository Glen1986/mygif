import React from 'react'
import ListOfGifs from 'components/ListOfGifs'
import Spiner from 'components/Spiner'
import { useGifs } from 'hooks/useGifs'

export default function SearchResults({ params }) {
    const { keyword } = params
    const { loading, gifs } = useGifs({ keyword })
    return <>{loading ? <Spiner /> : <ListOfGifs gifs={gifs} />}</>
}
