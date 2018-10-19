import React, { Component } from "react";
import Departure from "./Departure";
import { connect } from "react-redux";
import getSortedDepartures from "../selectors/departures";

class Departures extends Component {
  render() {
    return (
      <div className="container mt-3">
        {this.props.departures.map(departure => (
          <Departure departure={departure} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  departures: getSortedDepartures(state.departures, state.filters.sortBy),
  sortBy: state.filters.sortBy
});

export default connect(mapStateToProps)(Departures);
