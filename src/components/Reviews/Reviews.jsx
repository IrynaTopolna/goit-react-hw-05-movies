import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/movies-api';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviewsInfo, setReviewsInfo] = useState([]);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    getMovieReviews(movieId)
      .then(response => {
        if (response.ok) {
          return response.json();
        }

        return Promise.reject('Error');
      })
      .then(reviewsInfo => {
        setReviewsInfo(reviewsInfo.results);
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
        <ul>
          {reviewsInfo.length > 0 ? (
            reviewsInfo.map(review => (
              <li key={review.id}>
                <h3>Author: {review.author}</h3>

                <p>{review.content}</p>
              </li>
            ))
          ) : (
            <p>There are no reviews for this movie.</p>
          )}
        </ul>
      )}
    </div>
  );
}
