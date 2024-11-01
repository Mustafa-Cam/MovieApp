import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getMovieDetailById } from '../../redux/slices/movieDetailSlice';
import { API_IMG } from '../../constants/api';
import { FaStar } from "react-icons/fa";
import './MovieDetail.css'

const MovieDetail = () => {

    const { movieDetail } = useSelector(store => store.movieDetail)
    const {
        title,
        overview,
        vote_average,
        backdrop_path,
        poster_path,
        genres,
        spoken_languages,
        release_date } = movieDetail

    const dispatch = useDispatch()
    const { id } = useParams();

    useEffect(() => {
        dispatch(getMovieDetailById(id))
    }, [id, dispatch])

    const release_year = new Date(release_date) 

    return (
        <div className='movie-detail'>
            <img className='backdrop' src={`${API_IMG}/${backdrop_path}`} alt={title} />
            <header>
                <p>{title}</p>
                <div className="add-remove-favorite"></div>
            </header>
            <div className="content">
                <div className="left">
                    <div className="movie-poster_path">
                        <img src={`${API_IMG}/${poster_path}`} alt={title} />
                    </div>
                </div>
                <div className="right">
                    <div className="movie-overview">
                        <p>{overview}</p>
                    </div>
                    <div className="movie-rating">
                        <FaStar />
                        <p>{vote_average?.toFixed(1)}</p>
                    </div>
                    <div className="release-date">
                        <span>Year:</span>
                        <p>{release_year?.getFullYear()}</p>
                    </div>
                    <div className="movie-info">
                        <div className="movie-genres">
                            <span>Genres:</span>
                            <ul>
                                {
                                    genres?.map((genre) => (
                                        <li key={genre.id}>{genre.name}</li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="movie-languages">
                            <span>Languages:</span>
                            <ul>
                                {
                                    spoken_languages?.map((language, i) => (
                                        <li key={i}>{language.name}</li>
                                    )
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetail