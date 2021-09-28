import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchMovies, fetchShows } from '../../features/Movie/MovieSlice'
import user from '../../images/user.png'
import './Header.scss'
function Header() {
    const [term, setTerm] = useState('')
    const dispatch = useDispatch()

    const submitHandler = e => {
        e.preventDefault();
        if (!term) return alert('please enter a search term !')
        dispatch(fetchMovies(term))
        dispatch(fetchShows(term))
        setTerm('')
    }
    return (
        <div className="header">
            <div className="logo">
                <Link to="/">Movie App</Link>
            </div>
            <div className="search-bar">
                <form onSubmit={submitHandler}>
                    <input type="text" placeholder="Search Movies or Shows" value={term} onChange={e => setTerm(e.target.value)} />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
            </div>
            <div className="user-image">
                <img src={user} alt="" />
            </div>
        </div>
    )
}

export default Header
