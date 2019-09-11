import React, { Component } from "react";
import { connect } from "react-redux";
import "../../App.css";

class MyApp extends Component {
  state = {
    age: 12
  };

  render() {
    const { onDisable, onEnable, enability } = this.props;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column"
          //   alignItems: "center"
        }}
      >
        <span>Age : {this.props.age}</span>
        <br />
        <br />
        <button
          className="ageUp"
          onClick={enability === true ? onDisable : onEnable}
        >
          {enability ? "Enabled" : "Disabled"} age modifying
        </button>
        <button className="ageUp" onClick={this.props.onAgeUp}>
          AgeUp
        </button>
        <button className="ageDown" onClick={this.props.onAgeDown}>
          Age Down
        </button>
        <hr />

        <div style={{  display: "flex",
          flexDirection: "row",justifyContent:'center'}}>History</div>
        <hr />
        <ul>
          {this.props.history.map(item => (
            <li
              className="historyItem"
              key={item.id}
              onClick={() => this.props.onDelItem(item.id)}
            >
              {item.age}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    age: state.age,
    enability: state.enability,
    history: state.history,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAgeUp: () => dispatch({ type: "AgeUp", value: 1 }),
    onAgeDown: () => dispatch({ type: "AgeDown", value: 1 }),
    onEnable: () => dispatch({ type: "Enable", value: true }),
    onDisable: () => dispatch({ type: "Disable", value: false }),
    onDelItem: id => dispatch({ type: "Delete", key: id })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyApp);
