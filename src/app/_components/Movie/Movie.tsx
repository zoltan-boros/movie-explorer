import { isEmpty } from '@/utils/array/isEmpty';
import type { IMovieProps } from './Movie.types';
import styles from './movie.module.css';
import { toDateString } from '@/utils/date-time/to-date-string';
import { useCallback } from 'react';
import { getWikipediaPageExtract } from '@/api/get-wikipedia-page-extract';
import type { IOnRequestChangeParams } from '@/api/request-change.types';
import type { IWikipediaPageExtract } from '@/api/wikipedia-page-extract.types';

export function Movie(props: IMovieProps) {
  const { movie } = props;

  const handleRequestCompletion = useCallback(
    (event: IOnRequestChangeParams<IWikipediaPageExtract>) => {
      console.log('Extract:', event.data.extract);
    },
    [],
  );

  const handleNameClick = useCallback(() => {
    console.log('Title clicked');
    getWikipediaPageExtract(movie.name, handleRequestCompletion);
  }, [movie.name, handleRequestCompletion]);

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
      <button
        type="button"
        className={styles.title}
        onClick={handleNameClick}
        data-testid="title"
      >
        {movie.name}
      </button>
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
