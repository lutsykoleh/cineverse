import Banner from '../components/Banner'
import UpcomingFilm from '../components/UpcomingFilm'
import WeeklyTrendsFilms from '../components/WeeklyTrendsFilms'

function Home() {
  return (
    <div className="container">
      <Banner />
      <WeeklyTrendsFilms />
      <UpcomingFilm />
    </div>
  )
}

export default Home
