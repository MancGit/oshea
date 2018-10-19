import React from "react";
import { connect } from "react-redux";
import { setSortBy } from "../actions/filters";

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
        <form className="btn-group btn-group-toggle px-5">
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
            Earliest
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
            Latest
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
            Cheapest
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
            Fastest
          </label>
        </form>

        <p className="text-center text-secondary px-5">Results</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sortBy: state.filters.sortBy
});

export default connect(
  mapStateToProps,
  {
    setSortBy
  }
)(Filters);
