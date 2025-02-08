import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchGenres,
  setSortBy,
  setSelectedGenres,
  setSelectedYear,
} from '../../redux/slices/moviesSlice';
import Dropdown from '../UI/Dropdown';

import styles from './styles.module.scss';

const sortOptions = [
  { value: 'popularity.desc', label: 'Popularity (Descending)' },
  { value: 'popularity.asc', label: 'Popularity (Ascending)' },
  { value: 'vote_average.desc', label: 'Rating (Descending)' },
  { value: 'vote_average.asc', label: 'Rating (Ascending)' },
  { value: 'primary_release_date.desc', label: 'Release Date (Descending)' },
  { value: 'primary_release_date.asc', label: 'Release Date (Ascending)' },
  { value: 'title.asc', label: 'Title (A-Z)' },
  { value: 'title.desc', label: 'Title (Z-A)' },
];

const generateYears = (from, to) => {
  const years = [{ value: '', label: 'All Years' }];
  for (let year = from; year >= to; year--) {
    years.push({ value: year, label: year.toString() });
  }
  return years;
};

const MoviesFilter = () => {
  const dispatch = useDispatch();
  const { genres, sortBy, selectedGenres, selectedYear, statusGenres } = useSelector(
    (state) => state.movies,
  );

  useEffect(() => {
    if (genres.length === 0 && statusGenres !== 'loading') {
      dispatch(fetchGenres());
    }
  }, [dispatch, genres, statusGenres]);

  const yearOptions = generateYears(new Date().getFullYear(), new Date().getFullYear() - 5);

  return (
    <div className={styles.moviesFilters}>
      <Dropdown
        placeholder='Select Genres'
        options={genres}
        value={selectedGenres}
        onChange={(selectedOptions) =>
          dispatch(setSelectedGenres(selectedOptions.map((option) => option.value)))
        }
        isMulti
      />
      <Dropdown
        placeholder='Select Year'
        options={yearOptions}
        value={selectedYear}
        onChange={(option) => dispatch(setSelectedYear(option.value))}
      />
      <Dropdown
        placeholder='Sort by'
        options={sortOptions}
        value={sortBy}
        onChange={(option) => dispatch(setSortBy(option.value))}
      />
    </div>
  );
};

export default MoviesFilter;
