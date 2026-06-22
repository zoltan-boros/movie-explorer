'use client';

import type { IMovie } from '@/api/schema/movie.types';
import { useCallback, useState } from 'react';
import { SearchPanel } from './_components/SearchPanel/SearchPanel';
import styles from './page.module.css';
import { Movies } from './_components/Movies/Movies';
import { NoSearchResult } from './_components/NoSearchResult/NoSearchResult';
import type { IOnSearchCompleteParams } from './_components/SearchPanel/SearchPanel.types';
import { isEmpty } from '@/utils/array/isEmpty';

export default function Home() {
  const [searchHasEverRun, setSearchHasEverRun] = useState(false);
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [searchCompletedForTerm, setSearchCompletedForTerm] = useState('');

  const handleSearchComplete = useCallback(
    (params: IOnSearchCompleteParams) => {
      const { searchTerm, movies } = params;
      setMovies(movies);
      setSearchCompletedForTerm(searchTerm);
      setSearchHasEverRun(true);
    },
    [],
  );

  return (
    <div className={styles.page}>
      <SearchPanel onSearchComplete={handleSearchComplete} />
      {!isEmpty(movies) && (
        <>
          <div
            className={styles.searchResultHint}
            data-testid="searchResultHint"
          >
            Found {movies.length} movie(s) for search term "
            {searchCompletedForTerm}"
          </div>
          <Movies movies={movies} />
        </>
      )}
      {searchHasEverRun && isEmpty(movies) && <NoSearchResult />}
    </div>
  );
}
