import React, { useEffect } from 'react'
import './MovieList.css'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieList, getMovieListByGenre } from '../../redux/slices/movieListSlice';
import MovieCard from '../MovieCard/MovieCard'
import Loading from '../Loading/Loading'
import Error from '../Error';
const excludedGenres = [18, 10749]; // Hariç tutulacak türlerin ID'leri


const MovieList = ({ selectedGenre }) => {

    const { movieList, status, error } = useSelector((store) => store.movieList)
    const dispatch = useDispatch();

    // excludedGenres dizisindeki elemanlardan herhngi birini içermeyen filmleri filtredim.
    const filteredMovies = movieList.filter((movie) =>
        !movie.genre_ids.some((genreId) => excludedGenres.includes(genreId))
    );

    useEffect(() => {
        if (!selectedGenre) {
            dispatch(getMovieList())
        } else {
            dispatch(getMovieListByGenre(selectedGenre.id))
        }
    }, [selectedGenre, dispatch])


    return (
        <div className='movie-list'>
            <h1>{selectedGenre ? selectedGenre.name : 'Discover'}</h1>
            <ul>
                {
                    status === 'fulfilled' ?
                        filteredMovies && filteredMovies.map(movie => (
                            <MovieCard key={movie.id} movie={movie} />
                        )) :
                        status === 'pending' ?
                            <Loading /> :
                            <Error error={error} />
                }
            </ul>
        </div>
    )
}

export default MovieList