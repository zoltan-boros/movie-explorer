'use client';

import { useCallback, useState } from 'react';
import type { ChangeEvent, KeyboardEvent } from 'react';
import type { ISearchPanelProps } from './SearchPanel.types';
import { getMovies } from '@/api/get-movies';

export function SearchPanel(props: ISearchPanelProps) {
  const { setMovies } = props;

  // 'teach you a lesson', 'alice and steve'
  const [searchTerm, setSearchTerm] = useState<string>('fight club');

  const handleSearch = useCallback(() => {
    getMovies(searchTerm, setMovies);
  }, [searchTerm, setMovies]);

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
    <div>
      <input
        type="text"
        placeholder="Movie title"
        value={searchTerm}
        onChange={handleSearchTermChange}
        onKeyUp={handleSearchBoxKeyDown}
      />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
