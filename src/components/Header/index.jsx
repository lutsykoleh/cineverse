import { Link, NavLink } from 'react-router-dom'
import styles from './styles.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <Link className={styles.logo} to="/">
          <img src="../images/popcorn-svgrepo-com.svg" alt="logo" />
          <p>CineVerse</p>
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.navItem}>
            <NavLink to="/" className={styles.navLink}>
              Home
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/catalog" className={styles.navLink}>
              Catalog
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink to="/library" className={styles.navLink}>
              My library
            </NavLink>
          </li>
        </ul>
      </nav>
      <label className={styles.switch}>
        <input type="checkbox" id="checkBox" />
        <span className={styles.slider}></span>
      </label>
    </header>
  )
}

export default Header
