import React, { Component } from 'react';
import { updateText } from '../../actions/restaurants'
import { clearText } from '../../actions/restaurants'
import { updateRestaurant } from '../../actions/restaurants'
import { connect } from 'react-redux'

class RestaurantInput extends Component {

  state = {
    text: ""
  }

 handleOnChange = event =>{
  // this.setState({
  //  text: event.target.value,
  // })
   this.props.updateText(event.target.value)

};

 handleOnSubmit = event => {
   event.preventDefault();
   this.props.addRestaurant(this.props.text)
   // use the following to clear text from input field when enter name
    this.props.clearText(this.props.text)
   // can delete
   // this.setState({
   //   text: ""
   // })
 }

  render() {
    return (
      <div>
    <h4> Please enter your Restaurant </h4>
      <form onSubmit={this.handleOnSubmit}>
      <input
        placeholder="restaurant name"
        type="text"
        value={this.props.text}
        name="text"
        onChange={this.handleOnChange}
      />
        <input type="submit" />
        </form>
      </div>
    );
  }
};

const mapStateToProps = state => {
  console.log("state in mstp:", state)
  return {
    text: state.restaurants.text,
    restaurant: state.restaurants.restaurant
  }
}


export default connect(mapStateToProps, { updateText, clearText, updateRestaurant})(RestaurantInput);
