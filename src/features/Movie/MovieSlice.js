import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import movieApi from '../../common/Api/MovieApi'
import { Apikey } from '../../common/Api/MovieApiKey'

export const fetchMovies = createAsyncThunk("movies/fetchMovies",
    async (term) => {
        
        const response = await movieApi
            .get(`?apiKey=${Apikey}&s=${term}&type=movie`)

        return response.data
    }
)
export const fetchShows = createAsyncThunk("movies/fetchShows",
    async (term) => {
        const response = await movieApi
            .get(`?apiKey=${Apikey}&s=${term}&type=series`)

        return response.data
    }
)
export const fetchShowsOrMovie = createAsyncThunk("movies/fetchShowsOrMovie",
    async (id) => {
        const response = await movieApi
            .get(`?apiKey=${Apikey}&i=${id}&plot=full`)

        return response.data
    }
)
const initialState = {
    movies: {},
    shows: {},
    ShowOrMovie: {}
}
const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovie: (state, { payload }) => {
            state.movies = payload
        },
        initionalMovie: (state, { payload }) => {
            state = initialState
        },
        romoveFetchShowsOrMovie: (state) => {
            state.ShowOrMovie = {}
        }
    },
    extraReducers: {
        [fetchMovies.pending]: () => {
            console.log('pending')
        },
        [fetchMovies.fulfilled]: (state, { payload }) => {
            console.log('Fetch success')
            return { ...state, movies: payload }
        },
        [fetchMovies.reject]: (state, { payload }) => {
            console.log('Fetch rejected')
        },
        [fetchShows.fulfilled]: (state, { payload }) => {
            console.log('Fetch success')
            return { ...state, shows: payload }
        },
        [fetchShowsOrMovie.fulfilled]: (state, { payload }) => {
            console.log('Fetch success')
            return { ...state, ShowOrMovie: payload }
        }
    }
})
console.log(movieSlice)
export const { addMovie, initionalMovie, romoveFetchShowsOrMovie } = movieSlice.actions
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getAllShowsOrMovies = (state) => state.movies.ShowOrMovie
export default movieSlice.reducer