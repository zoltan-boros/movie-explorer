import { Movie } from '../Movie/Movie';
import type { IMoviesProps } from './Movies.types';

export function Movies(props: IMoviesProps) {
  const { movies } = props;

  return movies.map((movie) => <Movie key={movie.id} movie={movie} />);
}
