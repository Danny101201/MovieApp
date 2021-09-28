import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies, getAllShows } from '../../features/Movie/MovieSlice'
import MovieCard from '../MovieCard/MovieCard'
import './MovieListing.scss'

import Slider from "react-slick";
import settings from '../../common/setting'
function MovieListing() {
    const Movies = useSelector(getAllMovies)
    const Shows = useSelector(getAllShows)
    console.log(Movies)
    let renderMovies, renderShows = ""

    renderMovies = Movies.Response === 'True' ? (
        Movies.Search.map((movie, index) => (
            <MovieCard key={index} data={movie}></MovieCard>
        ))
    ) : (
        <div className="movie-error">
            <h3>{Movies.Error}</h3>
        </div>
    )
    renderShows = Shows.Response === 'True' ? (
        Shows.Search.map((show, index) => (
            <MovieCard key={index} data={show}></MovieCard>
        ))
    ) : (
        <div className="show-error">
            <h3>{Shows.Error}</h3>
        </div>
    )
    return (
        <div className="movie-wrapper">
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">
                    <Slider {...settings}>{renderMovies}</Slider>
                </div>
            </div>
            <div className="show-list">
                <h2>Shows</h2>
                <div className="show-container">
                    <Slider {...settings}>{renderShows}</Slider>
                </div>
            </div>
        </div>
    )
}

export default MovieListing
