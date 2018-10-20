import React from "react";
import { connect } from "react-redux";
import { setSortBy } from "../actions/filters";
import getDepartures from "../selectors/departures";
const Translate = require("react-redux-i18n").Translate;

class Filters extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSortChange = e => {
    this.props.setSortBy(e.target.value);
  };

  render() {
    return (
      <div className="d-flex justify-content-between my-3">
        {this.props.departures.length > 0 && (
          <form className="btn-group btn-group-toggle px-2">
            <label
              className={`btn btn-lg btn-primary ${
                this.props.sortBy === "earliest" ? "active" : ""
              }`}
            >
              <input
                type="radio"
                value="earliest"
                checked={this.props.sortBy === "earliest"}
                onChange={this.handleSortChange}
              />
              <Translate value="filters.earliest" />
            </label>
            <label
              className={`btn btn-lg btn-primary ${
                this.props.sortBy === "latest" ? "active" : ""
              }`}
            >
              <input
                type="radio"
                value="latest"
                checked={this.props.sortBy === "latest"}
                onChange={this.handleSortChange}
              />
              <Translate value="filters.latest" />
            </label>
            <label
              className={`btn btn-lg btn-primary ${
                this.props.sortBy === "cheapest" ? "active" : ""
              }`}
            >
              <input
                type="radio"
                value="cheapest"
                checked={this.props.sortBy === "cheapest"}
                onChange={this.handleSortChange}
              />
              <Translate value="filters.cheapest" />
            </label>
            <label
              className={`btn btn-lg btn-primary ${
                this.props.sortBy === "fastest" ? "active" : ""
              }`}
            >
              <input
                type="radio"
                value="fastest"
                checked={this.props.sortBy === "fastest"}
                onChange={this.handleSortChange}
              />
              <Translate value="filters.fastest" />
            </label>
          </form>
        )}

        <p className="text-center text-secondary px-2 d-none d-sm-block">
          {this.props.departures.length} <Translate value="filters.results" />
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  departures: getDepartures(state.search, state.filters.sortBy),
  sortBy: state.filters.sortBy
});

export default connect(
  mapStateToProps,
  {
    setSortBy
  }
)(Filters);
