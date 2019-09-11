import React, { Component } from "react";
import "../../App.css";
import { connect } from "react-redux";
import * as actionCreators from "./Actions/actions";
import logo from '../../logo.svg'

import PropTypes from 'prop-types'



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Age-label">
          your age: <span>{this.props.age}</span>
        </div>
        <button onClick={this.props.onAgeUp}>Age UP</button>
        <button onClick={this.props.onAgeDown}>Age Down</button>
        {this.props.loading && <img src={logo} className='App-logo'/>}
      </div>
    );
  }
}
App.propTypes = {
  age : PropTypes.number,
  loading : PropTypes.bool
}
const mapStateToProps = state => {
  return {
    age: state.age,
    loading : state.loading
  };
};

const mapDispachToProps = dispatch => {
  return {
    onAgeUp: () => dispatch(actionCreators.ageUp(1)),
    onAgeDown: () => dispatch(actionCreators.ageDown(1))
  };
};



export default connect(
  mapStateToProps,
  mapDispachToProps
)(App);
