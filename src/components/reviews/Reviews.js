
import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  render() {

    const { reviews, restaurantId, deleteReview } = this.props;
    // console.log("restaurantId:", restaurantId)
    // console.log("review:", reviews)
    const associatedReviews = reviews.reviews.filter(review => review.restaurantId === restaurantId);

    const reviewRestList = associatedReviews.map((review, index) => {
      return <Review key={index} review={review} deleteReview={deleteReview} />
    })

    return (
      <div>
        <ul>
          {reviewRestList}
        </ul>
      </div>
    );
  }
};

export default Reviews;
