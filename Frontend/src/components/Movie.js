import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Movie({movie}) {
    const{name,domain,img,duration} = movie;
    return (
        <article className="movie">
            <div className="img-container">
                {/* <img src={images[0]} alt="Empfohlener Film" /> */}
                <img src={img} alt="Filmcover" />
                <div className="duration-top">
                    <h6>{duration} min</h6>
                </div>
                <Link to={`/program/${domain}`} className="btn-primary movie-link">
                    Details
                </Link>
            </div>
            <p className="movie-info">{name}</p>
        </article>
    );
}

Movie.propTypes = {
    movie: PropTypes.shape({
        name:PropTypes.string.isRequired,
        domain:PropTypes.string.isRequired,
        images:PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired
    })
}