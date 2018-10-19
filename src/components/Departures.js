import React, { Component } from "react";
import Departure from "./Departure";
import { connect } from "react-redux";
import getDepartures from "../selectors/departures";

class Departures extends Component {
  render() {
    return (
      <div className="mt-3">
        {this.props.departures.map(departure => (
          <Departure key={departure.id} departure={departure} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  departures: getDepartures(state.search, state.filters.sortBy),
  sortBy: state.filters.sortBy
});

export default connect(mapStateToProps)(Departures);
