import React, { Component } from "react";
import Search from "./Search";
import Departures from "./Departures";
import Loading from "./Loading";
import Header from "./Header";
import { connect } from "react-redux";
import {
  setSearchFinalised,
  setSearchInitiated
} from "../actions/searchStatus";
import { getDepartures } from "../actions/departures";
import Filters from "./Filters";

class Onboarding extends Component {
  handleSearch = props => {
    this.props.getDepartures();
  };

  render() {
    return (
      <div>
        <div id="search">
          <div className="dark-overlay">
            <Header />
            <Search
              handleSearch={this.handleSearch}
              searchInitiated={this.props.searchInitiated}
              searchFinalised={this.props.searchFinalised}
            />
          </div>
        </div>
        {this.props.searchInitiated && <Loading />}
        {this.props.searchFinalised && (
          <div>
            <Filters />
            <Departures />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    searchInitiated: state.searchStatus.searchInitiated,
    searchFinalised: state.searchStatus.searchFinalised
  };
};

export default connect(
  mapStateToProps,
  {
    getDepartures,
    setSearchFinalised,
    setSearchInitiated
  }
)(Onboarding);
