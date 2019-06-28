import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'
import { addRestaurant } from '../actions/restaurants'
import { deleteRestaurant } from '../actions/restaurants'


class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput   addRestaurant={this.props.addRestaurant} />
        <Restaurants  restaurants={this.props.restaurants}
                      deleteRestaurant={this.props.deleteRestaurant}
                    />
      </div>
    )
  }
}

const mapStateToProps = state => {
  // console.log("state", state)
  return ({
    restaurants: state.restaurants
  })
}


export default connect(mapStateToProps, { addRestaurant, deleteRestaurant })(RestaurantsContainer)
