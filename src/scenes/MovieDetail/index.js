import React, { Component } from 'react'
import './styles.css'
import Rating from '../../components/Rating';
import Paper from '../../components/Paper';
import Button from '../../components/Button';
import ReactModal from 'react-modal'
import { withRouter } from 'react-router-dom'


class Detail extends Component {
    state = { 
        movie: {},
        isOpen: false
    }

    componentDidMount = () => {
        const { id } = this.props.match.params
        fetch('https://workshop-movie-api.herokuapp.com/movies/' + id).then(response => {
             return response.json()
         }).then(response => {
            this.setState({
                movie: response.movie
            })
         })
    }

    openModal = () => {
        this.setState({
            isOpen: true
        })
    }
    
    closeModal = () => {
        this.setState({
            isOpen: false
        })
    }

    goBack = () => {
        this.props.history.push('/movies')

    }
    render() {
        const { movie, isOpen } = this.state
        return (
            <div>

                <div className="detailContainer">
                    <Paper type="detail">
                        <div className="detailWrapper">
                            <div className="imgWrapper">
                                <div className="detailHeader">
                                    { movie.name }
                                </div>
                                <img src={movie.image} />
                                <Rating rating={movie.rated}/>
                            </div>
                            <div className="content">
                                <div className="info">
                                <div>
                                    Released on
                                </div>
                                { movie.released }
                                </div>
                                <div className="info">
                                <div>
                                    Director
                                </div>
                                { movie.director }
                                </div>
                                <div className="info">
                                <div>
                                    Stars
                                </div>
                                { movie.stars && (movie.stars).join(', ') }
                                </div>
                                <div className="info">
                                <div>
                                    Reviewers
                                </div>
                                { movie.reviewers } users
                                </div>
                            </div>
                            <div className="buttonWrapper">
                                <Button primary onClick={this.openModal} >View Detail</Button>
                                <Button onClick={this.goBack}>Back</Button>
                            </div>
                        </div>
                    </Paper>
                </div>
                <ReactModal
                    isOpen={isOpen}
                    onRequestClose={this.closeModal}
                    className="modal"
                    overlayClassName="overlay"
                >
                    <div>Detail</div>
                    <p>{movie.description}</p>
                </ReactModal>
            </div>
        )
    }
}

export default withRouter(Detail)