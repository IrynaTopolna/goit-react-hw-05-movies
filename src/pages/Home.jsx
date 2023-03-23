import MoviesGallery from 'components/MoviesGallery';
import { RotatingLines } from 'react-loader-spinner';
import { useState, useEffect } from 'react';
import { getMovies } from 'services/movies-api';

const request = 'trending/movie/week';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');

    getMovies(request)
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        return Promise.reject('Error');
      })
      .then(movies => {
        if (movies.results.length === 0) {
          setStatus('rejected');
          return;
        }
        setMovies(movies.results);
        setStatus('resolved');
      })
      .catch(error => {
        setStatus('rejected');
      });
  }, []);

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
      {status === 'resolved' && <MoviesGallery movies={movies} />}
    </div>
  );
}
