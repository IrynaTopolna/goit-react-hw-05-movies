import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect, useRef, Suspense } from 'react';
import { RotatingLines } from 'react-loader-spinner';
import noPoster from '../noPoster.png';
import { getMovieDetails } from 'services/movies-api';
import { ArrowStyled, Img, MovieInfo, StyledLink } from './MovieDetails.styled';
// import { IoArrowUndoSharp } from 'react-icons/io5';

const posterWay = 'https://image.tmdb.org/t/p/original/';

export default function MovieCard() {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? '/movies');

  const [movie, setMovie] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');

    getMovieDetails(movieId)
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        return Promise.reject('Error');
      })
      .then(movie => {
        setMovie(movie);
        setStatus('resolved');
      })
      .catch(error => {
        setStatus('rejected');
      });
  }, [movieId]);

  return (
    <div>
      {status === 'pending' && (
        <RotatingLines
          strokeColor="#F9721F"
          strokeWidth="5"
          animationDuration="0.75"
          width="150"
          visible={true}
        />
      )}
      {status === 'rejected' && (
        <h1>Something went wrong. Please, try again</h1>
      )}
      {status === 'resolved' && (
        <>
          <StyledLink to={backLinkRef.current}>
            <ArrowStyled />
            <span>Go back</span>
          </StyledLink>

          <MovieInfo>
            {movie.poster_path ? (
              <Img
                src={`${posterWay}${movie.poster_path}`}
                alt={movie.title}
                width="142"
              />
            ) : (
              <Img src={noPoster} alt={movie.title} />
            )}

            <div>
              <h2>{movie.title}</h2>
              {movie.release_date ? (
                <p>Release date: {movie.release_date}</p>
              ) : (
                <p>Release date: no information</p>
              )}
              <h3>Overwiev</h3>
              {movie.overview ? <p>{movie.overview}</p> : <p>No overview</p>}

              <h3>Genres</h3>
              {movie.genres.length > 0 ? (
                <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
              ) : (
                <p>No information</p>
              )}
            </div>
          </MovieInfo>

          <h3>Additional information</h3>
          <ul>
            <li>
              <Link to="cast">Casts</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}
    </div>
  );
}
