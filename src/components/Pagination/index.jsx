import RCPagination from 'rc-pagination'
import 'rc-pagination/assets/index.css'

import './styles.scss'

const Pagination = ({ currentPage, totalPages, onChange }) => {
  if (totalPages <= 1) return null

  return (
    <RCPagination
      current={currentPage}
      total={totalPages}
      onChange={onChange}
    />
  )
}

export default Pagination
