'use client';

import type { IMovie } from '@/api/movie.types';
import { useState } from 'react';
import { SearchPanel } from './_components/SearchPanel/SearchPanel';
import styles from './page.module.css';
import { Movies } from './_components/Movies/Movies';

export default function Home() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  return (
    <div className={styles.page}>
      <SearchPanel setMovies={setMovies} />
      <Movies movies={movies} />
    </div>
  );
}
