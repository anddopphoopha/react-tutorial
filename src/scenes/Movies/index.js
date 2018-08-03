import React, { Component } from 'react'
import MovieItem from './components/MovieItem'
import './styles.css'
import { withRouter } from 'react-router-dom'

class Movies extends Component {
    state = { 
            movies: []
     }

     componentDidMount = () => {
         fetch('https://workshop-movie-api.herokuapp.com/movies').then(response => {
             return response.json()
         }).then(response => {
            this.setState({
                movies: response.movies
            })
         })
     }

     handleSelectMovie = id => {
         console.log('hello')
        const { history } = this.props
        history.push('/movies/' + id)
     }
    render() {
        return (
            <div className="movieContainer">
                { 
                    this.state.movies.map((movie) => (
                        <div onClick={() => this.handleSelectMovie(movie.id)}>
                            <MovieItem movie={movie} key={movie.id}/>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default withRouter(Movies)