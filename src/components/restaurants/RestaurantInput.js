import React, { Component } from 'react';
import { updateText } from '../../actions/text'
import { clearText } from '../../actions/text'
import { updateRestaurant } from '../../actions/restaurants'
import { connect } from 'react-redux'

// not yet using updateRestaurant or clearText

class RestaurantInput extends Component {

  state = {
    text: ""
  }

 handleOnChange = event =>{
   // console.log("hoc:", event.target.value)
  this.setState({
   [event.target.name]: event.target.value
 })

   // this.props.updateText(event.target.value)
};

 handleOnSubmit = event => {
   event.preventDefault();

   this.props.addRestaurant(this.state)
   // use the following to clear text from input field when enter name
    // this.props.clearText(this.props.text)
   // can delete
   this.setState({
     text: ""
   })
 }

  render() {
    return (
      <div>
    <h4> Please enter your Restaurant </h4>
      <form onSubmit={this.handleOnSubmit}>
      <input
        placeholder="restaurant name"
        type="text"
        value={this.state.text}
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
  // console.log("state in mstp:", state)
  return {
    text: state.text,
    restaurant: state.restaurant
  }
}

export default connect(mapStateToProps, { updateText, clearText, updateRestaurant})(RestaurantInput);
