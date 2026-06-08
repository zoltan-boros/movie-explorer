'use client';

import { useCallback, useState } from 'react';
import type { ChangeEvent, KeyboardEvent } from 'react';
import type { ISearchPanelProps } from './SearchPanel.types';
import { getMovies } from '@/api/get-movies';

export function SearchPanel(props: ISearchPanelProps) {
  const { setMovies } = props;

  const [searchText, setSearchText] = useState<string>('');

  const handleSearch = useCallback(() => {
    getMovies(searchText, setMovies);
  }, [searchText, setMovies]);

  const handleSearchBoxKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        handleSearch();
      }
    },
    [handleSearch],
  );

  const handleSearchTextChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearchText(event.target.value);
    },
    [],
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Movie title"
        value={searchText}
        onChange={handleSearchTextChange}
        onKeyUp={handleSearchBoxKeyDown}
      />
      <button type="button" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}
