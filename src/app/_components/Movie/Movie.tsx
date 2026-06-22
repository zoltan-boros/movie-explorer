import { isEmpty } from '@/utils/array/isEmpty';
import type { IMovieProps } from './Movie.types';
import styles from './movie.module.css';
import { toDateString } from '@/utils/date-time/to-date-string';
import { useCallback, useState } from 'react';
import { getWikipediaPageExtract } from '@/api/requests/get-wikipedia-page-extract';
import type { IOnRequestChangeParams } from '@/api/schema/request-change.types';
import type { IWikipediaPageExtract } from '@/api/schema/wikipedia-page-extract.types';
import type { Nullable } from '@/utils/types/nullable';
import { isBlank } from '@/utils/string/isBlank';
import Link from 'next/link';

export function Movie(props: IMovieProps) {
  const { movie } = props;

  const [detailsShown, setDetailsShown] = useState(false);
  const [details, setDetails] = useState<Nullable<string>>(null);
  const [wikipediaUrl, setWikipediaUrl] = useState<Nullable<string>>(null);

  const hideDetails = useCallback(() => setDetailsShown(false), []);

  const handleRequestCompletion = useCallback(
    (event: IOnRequestChangeParams<IWikipediaPageExtract>) => {
      const pageSections = event.data.extract.split(/\n\n\n/);
      const firstSection = pageSections[0];
      if (!isBlank(firstSection)) {
        setDetails(firstSection);
        setWikipediaUrl(event.data.url);
        setDetailsShown(true);
      }
    },
    [],
  );

  const handleNameClick = useCallback(() => {
    if (!details) {
      getWikipediaPageExtract(movie.name, handleRequestCompletion);
    } else if (!detailsShown) {
      setDetailsShown(true);
    }
  }, [movie.name, handleRequestCompletion, details, detailsShown]);

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
      {detailsShown && !isBlank(details) && (
        <div className={styles.detailsContainer} data-testid="detailsContainer">
          <p className={styles.detailsTitle} data-testid="detailsTitle">
            Further details from Wikipedia:
          </p>
          <p className={styles.detailsText} data-testid="detailsText">
            {details}
          </p>
          <button
            type="button"
            className={styles.hideDetails}
            data-testid="hideDetails"
            onClick={hideDetails}
          >
            Hide details
          </button>
          <Link
            href={wikipediaUrl!}
            target="_blank"
            className={styles.linkToWikipedia}
            data-testid="linkToWikipedia"
          >
            Go to Wikipedia article
          </Link>
        </div>
      )}
    </div>
  );
}
