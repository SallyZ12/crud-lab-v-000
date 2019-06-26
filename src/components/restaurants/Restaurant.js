import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'
import { updateRestaurant } from '../../actions/restaurants'
import { connect } from 'react-redux'


class Restaurant extends Component {

  render() {
    const { restaurant, deleteRestaurant, updateRestaurant, text } = this.props;

    return (
      <div>
      < br/>
        <li>
          {restaurant.text}
          <button onClick={() => deleteRestaurant(restaurant.id)}> DELETE </button>
          <button onClick={() => {
            const updatedRestaurant = {...restaurant, text }

            updateRestaurant(updatedRestaurant)


              }
            }> Update </button>



              <ReviewsContainer restaurant = {restaurant} />
        </li>
      </div>
    );
  }
};


const mapStateToProps = state => {
  return {
    text: state.text
  }
}



export default connect(mapStateToProps, {updateRestaurant})(Restaurant);
