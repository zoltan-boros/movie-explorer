'use client';

import { useCallback, useState } from 'react';
import type { ChangeEvent, KeyboardEvent } from 'react';
import type { ISearchPanelProps } from './SearchPanel.types';
import { getMovies } from '@/api/get-movies';
import styles from './SearchPanel.module.css';
import { isBlank } from '@/utils/string/isBlank';

export function SearchPanel(props: ISearchPanelProps) {
  const { onSearchComplete } = props;

  // 0 finding for search term: 'alice and steve'
  // 1 finding for search term: 'teach you a lesson'
  // many finding for search term: 'fight club'
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = useCallback(() => {
    if (!isBlank(searchTerm)) {
      getMovies(searchTerm, onSearchComplete);
    }
  }, [searchTerm, onSearchComplete]);

  const handleSearchBoxKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        handleSearch();
      }
    },
    [handleSearch],
  );

  const handleSearchTermChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(event.target.value);
    },
    [],
  );

  return (
    <div className={styles.searchPanel} data-testid="searchPanel">
      <input
        type="text"
        placeholder="Movie title"
        value={searchTerm}
        className={styles.searchBox}
        onChange={handleSearchTermChange}
        onKeyUp={handleSearchBoxKeyDown}
        data-testid="searchBox"
      />
      <button
        type="button"
        className={styles.searchButton}
        onClick={handleSearch}
        data-testid="searchButton"
      >
        Search
      </button>
    </div>
  );
}
