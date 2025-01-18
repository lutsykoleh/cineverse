import styles from './styles.module.scss'

const NotFound = () => {
  return (
    <div className={styles.notFoundBlock}>
      <h2 className={styles.title}>OOPS...</h2>
      <p className={styles.text}>We are very sorry!</p>
      <p className={styles.text}>
        We don’t have any results matching your search.
      </p>
    </div>
  )
}

export default NotFound
