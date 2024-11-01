import React from 'react'
import './MovieCard.css'
import { API_IMG } from '../../constants/api';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom'

const MovieCard = ({ movie }) => {

    const { id, poster_path, vote_average } = movie;

    return (
        <Link to={`/${id}`}>
            <div className='Movie-Card'>
                <div className="gradient"></div>
                <img src={`${API_IMG}/${poster_path}`} alt={movie.title} />
                <div className="movie-info">
                    <div className="movie-rating">
                        <p>{vote_average?.toFixed(1)}</p>
                        <FaStar />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default MovieCard