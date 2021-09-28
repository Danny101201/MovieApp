import React, { useEffect } from 'react'
import './Home.scss'
import MovieListing from '../MovieListing/MovieListing'

import { useDispatch } from 'react-redux'
import { fetchShows, fetchMovies } from '../../features/Movie/MovieSlice'
function Home() {
    const dispatch = useDispatch()
    const movies = 'Harry'
    const shows = "Friends"

    useEffect(() => {
        dispatch(fetchMovies(movies))
        dispatch(fetchShows(shows))
    }, [dispatch])
    return (
        <div>
            <div className="banner-img"></div>
            <MovieListing></MovieListing>
        </div>
    )
}

export default Home
