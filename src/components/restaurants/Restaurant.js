import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'
import { updateRestaurant } from '../../actions/restaurants'
import { clearText } from '../../actions/text'
import { connect } from 'react-redux'

// not yet using updatedRestaurant or clearText
class Restaurant extends Component {

  render() {
    const { restaurant, deleteRestaurant, updateRestaurant, clearText, text } = this.props;

    return (
      <div>
      < br/>
        <li>
          {restaurant.text}
          <button onClick={() => deleteRestaurant(restaurant.id)}> DELETE </button>

          <button onClick={() => {
            const updatedRestaurant = {...restaurant, text }
            updateRestaurant(updatedRestaurant)
            const clearUpdateText = {...restaurant, text}
            clearText(clearUpdateText)

            }}> Update </button>

          <ReviewsContainer restaurant = {restaurant} />
        </li>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    text: state.restaurants.text
  }
}

export default connect(mapStateToProps, {updateRestaurant, clearText})(Restaurant);
