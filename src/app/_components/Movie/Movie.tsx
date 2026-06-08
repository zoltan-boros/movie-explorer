import type { IMovieProps } from './Movie.types';

export function Movie(props: IMovieProps) {
  const { movie } = props;

  return (
    <div data-testid="movie">
      <div>{movie.name}</div>
      <div>{movie.overview}</div>
    </div>
  );
}
