export const Review = ({rating,votes,reviews}) => {
    return (
      <div className="reviews">
        <div className="rating-border">{rating}</div>
         <div className="details-p">{votes} Votes</div>
         <div className="details-p">{reviews} Reviews</div>
      </div>
    )
  }