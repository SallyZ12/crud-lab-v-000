import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'
import { addReview } from '../actions/reviews'
import { deleteReview } from '../actions/reviews'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput
          addReview={this.props.addReview}
          restaurantId={this.props.restaurant.id}
           />
        <Reviews
          reviews={this.props.reviews}
          restaurantId={this.props.restaurant.id}
          deleteReview={this.props.deleteReview}
          />
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log("reviews state", state)
  return ({
    reviews: state.reviews
  })
}
// const mapStateToProps = ({reviews}) => {
//   return {reviews}
// }

export default connect(mapStateToProps, { addReview, deleteReview })(ReviewsContainer)
