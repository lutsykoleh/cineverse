import Button from '../UI/Button'
import Dropdown from '../UI/Dropdown'
import styles from './styles.module.scss'

const Filters = () => {
  return (
    <div className={styles.filters}>
      <input type="text" placeholder="Search" />
      <Dropdown placeholder="Year" />
      <Button icon="./images/search.svg" />
    </div>
  )
}

export default Filters
