import React, { useState, useEffect, useRef } from 'react'
import Category from 'components/Category'
import getTrendingsTerms from 'services/getTrendingTerms'

function TrendingSearches() {
    const [trends, setTrends] = useState([])
    useEffect(() => {
        getTrendingsTerms().then(setTrends)
    }, [])
    return <Category name="tendencias" options={trends} />
}
export default function LazyTrending() {
    const [show, setShow] = useState(false)
    const elementRef = useRef()
    useEffect(() => {
        let observer
        const onChange = (entries, observer) => {
            const el = entries[0]
            console.log(el)
            if (el.isIntersecting) {
                setShow(true)
                observer.disconnect()
            }
        }
        Promise.resolve(
            typeof IntersectionObserver !== 'undefined'
                ? IntersectionObserver
                : import('intersection-observer')
        ).then(() => {
            observer = new IntersectionObserver(onChange, {
                rootMargin: '100px',
            })

            observer.observe(elementRef.current)
        })
        return () => observer && observer.disconnect()
    }, [])
    return <div ref={elementRef}>{show ? <TrendingSearches /> : null}</div>
}
