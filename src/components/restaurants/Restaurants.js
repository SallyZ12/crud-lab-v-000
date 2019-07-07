import React from 'react';
import Restaurant from './Restaurant'


const Restaurants = ({ restaurants, deleteRestaurant }) => {
  // console.log("restaurants:", restaurants)
  const restaurantcard = restaurants.map(restaurant =>
      <Restaurant   key={restaurant.id}
                    restaurant = {restaurant}
                    deleteRestaurant={deleteRestaurant}
                   />)

    return(
      <ul>
        {restaurantcard}
      </ul>
    );
};

export default Restaurants;
