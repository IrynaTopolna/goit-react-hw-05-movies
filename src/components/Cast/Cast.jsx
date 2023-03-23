import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieActors } from 'services/movies-api';
import noPhoto from '../noPhoto.png';
import { CastCard, CastsList, Name } from './Cast.styled';

const posterWay = 'https://image.tmdb.org/t/p/original';

export default function Cast() {
  const { movieId } = useParams();
  const [actorsInfo, setActorsInfo] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    getMovieActors(movieId)
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        return Promise.reject('Error');
      })
      .then(actorsInfo => {
        setActorsInfo(actorsInfo.cast);
        setStatus('resolved');
      })
      .catch(error => {
        setStatus('rejected');
      });
  }, [movieId]);

  return (
    <div>
      {status === 'rejected' && (
        <h1>Something went wrong. Please, try again</h1>
      )}

      {status === 'resolved' && (
        <CastsList>
          {actorsInfo.length > 0 ? (
            actorsInfo.map(actor => (
              <CastCard key={actor.id}>
                {actor.profile_path ? (
                  <img
                    src={`${posterWay}${actor.profile_path}`}
                    alt={actor.name}
                    width="150"
                  />
                ) : (
                  <img src={noPhoto} alt={actor.name} width="150" />
                )}
                <Name>{actor.name}</Name>
                {actor.character ? (
                  <p>Character: {actor.character}</p>
                ) : (
                  <p>Character: no information</p>
                )}
              </CastCard>
            ))
          ) : (
            <p>There are no information about actors for this movie.</p>
          )}
        </CastsList>
      )}
    </div>
  );
}
