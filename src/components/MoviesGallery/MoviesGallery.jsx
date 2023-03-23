import { Img, List, StyledLink, Title } from './MoviesGallery.styled';
import noPoster from '../noPoster.png';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const posterWay = 'https://image.tmdb.org/t/p/original/';

export default function MoviesGallery({ movies }) {
  const location = useLocation();

  return (
    <List>
      {movies.map(movie => (
        <StyledLink
          to={`/movies/${movie.id}`}
          state={{ from: location }}
          key={movie.id}
        >
          {movie.poster_path ? (
            <Img
              src={`${posterWay}${movie.poster_path}`}
              alt={movie.title}
              width="142"
            />
          ) : (
            <Img src={noPoster} alt={movie.title} />
          )}
          <Title>{movie.title}</Title>
        </StyledLink>
      ))}
    </List>
  );
}

MoviesGallery.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
    })
  ),
};
