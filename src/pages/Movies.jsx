import { useState } from 'react';
import toast from 'react-hot-toast';
import MoviesGallery from 'components/MoviesGallery';
import { RotatingLines } from 'react-loader-spinner';
import { useSearchParams } from 'react-router-dom';
import { getMoviesByQuery } from 'services/movies-api';
import { useEffect } from 'react';
import { Button, Form, Input } from './Movies.styled';

export default function Movies() {
  const [status, setStatus] = useState('idle');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query === '') {
      return;
    }

    setMovies([]);
    setStatus('pending');

    getMoviesByQuery(query)
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
  }, [query]);

  const handleSubmit = evt => {
    evt.preventDefault();
    const newQuery = evt.target.elements[0].value.trim().toLowerCase();

    if (newQuery === '') {
      toast.error('Please, enter your search request');
      setSearchParams({});
      return;
    }

    setSearchParams({ query: newQuery });
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies..."
          // value={query}
        />
        <Button type="submit">Search</Button>
      </Form>
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
    </>
  );
}
