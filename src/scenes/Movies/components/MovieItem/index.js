import React from 'react'
import Paper from '../../../../components/Paper';
import './styles.css'
import Rating from '../../../../components/Rating';

function MovieItem({ movie }) {
    return (
        <Paper type="card">
            <div className="itemContainer">
                <div className="itemHeader">
                    { movie.name }
                </div>
                <p>
                    { movie.released }
                </p>
                <img src={movie.image} />
                <Rating rating={movie.rated}/>
            </div>
        </Paper>
    )
}

export default MovieItem