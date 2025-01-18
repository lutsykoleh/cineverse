import { Rating } from 'react-simple-star-rating'

const RatingStars = ({ ...props }) => {
  return (
    <div>
      <Rating {...props} size={24} fillColor={'#f87719'} emptyColor={'#666'} />
    </div>
  )
}

export default RatingStars
