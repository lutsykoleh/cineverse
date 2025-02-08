import React, { useEffect, useState } from 'react';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import ListMovies from '../../components/ListMovies';
import NotFound from '../../components/NotFound';
import Pagination from '../../components/Pagination';

import styles from './styles.module.scss';

function Library() {
  const films = useSelector((state) => state.library.library);
  const [sortBy, setSortBy] = useState('date'); // date, title
  const [sortOrder, setSortOrder] = useState('desc'); // asc, desc
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    document.title = 'CineVerse | Library';
  }, []);

  const sortedFilms = [...films].sort((a, b) => {
    let comparison = 0;

    if (sortBy === 'date') {
      comparison = new Date(a.release_date) - new Date(b.release_date);
    } else if (sortBy === 'title') {
      comparison = a.title.localeCompare(b.title);
    }

    return sortOrder === 'asc' ? comparison : -comparison;
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentFilms = sortedFilms.slice(startIndex, startIndex + itemsPerPage);

  if (films.length === 0) {
    return (
      <NotFound
        title='OOPS...'
        message="You haven't added any movies to your library yet. You can do this on the movie page."
      />
    );
  }

  return (
    <div className={styles.library}>
      <div className={styles.sortContainer}>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className={styles.sortSelect}
        >
          <option value='date'>Release Date</option>
          <option value='title'>Title</option>
        </select>
        <button
          onClick={() => setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'))}
          className={styles.sortButton}
          type='button'
        >
          {sortOrder === 'asc' ? <FaArrowUp /> : <FaArrowDown />}
        </button>
      </div>
      <div className={styles.films}>
        <ListMovies movies={currentFilms} />
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(sortedFilms.length / itemsPerPage)}
        onChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}

export default Library;
