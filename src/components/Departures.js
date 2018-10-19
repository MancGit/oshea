import React, { Component } from "react";
import Departure from "./Departure";
import { connect } from "react-redux";
import Filters from "./Filters";
import getSortedDepartures from "../selectors/departures";

class Departures extends Component {
  render() {
    return (
      <div className="mt-3">
        <Filters length={this.props.departures.length} />
        {this.props.departures.map(departure => (
          <Departure departure={departure} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  departures: getSortedDepartures(state.departures, state.filters.sortBy)
});

export default connect(mapStateToProps)(Departures);
