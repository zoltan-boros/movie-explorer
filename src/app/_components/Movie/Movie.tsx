import type { IMovieProps } from './Movie.types';
import styles from './movie.module.css';

export function Movie(props: IMovieProps) {
  const { movie } = props;

  return (
    <div className={styles.movie} data-testid="movie">
      <div className={styles.title} data-testid="title">
        {movie.name}
      </div>
      <div className={styles.overview} data-testid="overview">
        {movie.overview}
      </div>
    </div>
  );
}
