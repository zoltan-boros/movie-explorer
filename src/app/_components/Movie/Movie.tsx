import { isEmpty } from '@/utils/array/isEmpty';
import type { IMovieProps } from './Movie.types';
import styles from './movie.module.css';
import { toDateString } from '@/utils/date-time/to-date-string';

export function Movie(props: IMovieProps) {
  const { movie } = props;

  const movieData: React.ReactNode[] = [
    movie.releaseDate ? (
      <div
        key="releaseDate"
        className={styles.releaseDate}
        data-testid="releaseDate"
      >
        {toDateString(movie.releaseDate)}
      </div>
    ) : null,
    isEmpty(movie.genres) ? null : (
      <div key="genre" className={styles.genre} data-testid="genre">
        {movie.genres.map((genre) => genre.name).join(', ')}
      </div>
    ),
    movie.runtime ? (
      <div key="runtime" className={styles.runtime} data-testid="runtime">
        {movie.runtime} minutes
      </div>
    ) : null,
    <div key="score" className={styles.score} data-testid="score">
      Score: {movie.score}
    </div>,
  ].filter((node) => node != null);

  return (
    <div className={styles.movie} data-testid="movie">
      <div className={styles.title} data-testid="title">
        {movie.name}
      </div>
      {movie.tagline && (
        <div className={styles.tagline} data-testid="tagline">
          {movie.tagline}
        </div>
      )}
      <div className={styles.movieData}>{movieData}</div>
      <div className={styles.overview} data-testid="overview">
        {movie.overview}
      </div>
    </div>
  );
}
