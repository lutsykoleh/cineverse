import { useEffect } from 'react';

import Banner from '../components/Banner';
import UpcomingFilm from '../components/UpcomingFilm';
import WeeklyTrendsFilms from '../components/WeeklyTrendsFilms';

function Home() {
  useEffect(() => {
    document.title = 'CineVerse | Home';
  }, []);

  return (
    <main>
      <Banner />
      <WeeklyTrendsFilms />
      <UpcomingFilm />
    </main>
  );
}

export default Home;
