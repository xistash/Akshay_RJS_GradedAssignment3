import { Fragment, useEffect, useState } from "react"
import { useLocation } from "react-router-dom"
import IMovieList from "../model/IMovieList"
import { fetchMovie } from "../service/FetchData"
import "../styles/MovieDetails.css"

function MovieDetails() {
    const location = useLocation()
    const tabName = location.state?.tab
    const movieId = location.state?.id

    const [movieData, setMovieData] = useState<IMovieList[]>([])

    const fetchMovieDetails = async (movieId: string) => {
        try {
            const movie = await fetchMovie(tabName, movieId)
            setMovieData(movie)
        } catch (error: any) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchMovieDetails(movieId)
    })

    return (
        <>
            {movieData.map((movie) => {
                return (
                    <Fragment key={movie.id}>
                        <div className="movie-container">
                            <div className="movie-image">
                                <img src={movie.posterurl} alt={movie.title} />
                            </div>
                            <div className="movie-details">
                                <h2>{`${movie.title} (${movie.releaseDate?.slice(0, 4)})`}</h2>
                                <div className="movie-rating">
                                    <div className="movie-label">IMDb Rating:</div>
                                    <div className="movie-value">{movie.imdbRating}</div>
                                </div>
                                <div className="movie-rating">
                                    <div className="movie-label">Content Rating:</div>
                                    <div className="movie-value">
                                        <strong>{movie.contentRating}</strong>
                                    </div>
                                </div>
                                <div className="movie-rating">
                                    <div className="movie-label">Average Rating:</div>
                                    <div className="movie-value">
                                        {movie.averageRating}
                                    </div>
                                </div>
                                <div className="movie-rating">
                                    <div className="movie-label">Duration:</div>
                                    <div className="movie-value">{movie.duration}</div>
                                </div>
                                <div className="movie-rating">
                                    <div className="movie-label">Genres:</div>
                                    <div className="movie-value">
                                        {movie.genres?.join()}
                                    </div>
                                </div>
                                <div className="movie-rating">
                                    <div className="movie-label">Actors:</div>
                                    <div className="movie-value">
                                        {movie.actors?.join()}
                                    </div>
                                </div>
                                <div className="movie-rating">
                                    <div className="movie-label">Release Date:</div>
                                    <div className="movie-details-value">{movie.releaseDate}</div>
                                </div>
                                <div className="movie-rating">
                                    <div className="movie-label">Storyline:</div>
                                    <div className="movie-value">{movie.storyline}</div>
                                </div>
                            </div>
                        </div>
                    </Fragment>
                )
            })}
        </>
    )
}
export default MovieDetails