import React, { Component } from "react";
import Departure from "./Departure";
import { connect } from "react-redux";
import getDepartures from "../selectors/departures";
import uuid from "uuid";

class Departures extends Component {
  render() {
    return (
      <div className="mt-3">
        {this.props.departures.map(departure => (
          <Departure key={uuid()} departure={departure} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  departures: getDepartures(state.search.data, state.filters.sortBy),
  sortBy: state.filters.sortBy
});

export default connect(mapStateToProps)(Departures);
