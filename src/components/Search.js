import React from "react";

export default class Search extends React.Component {
  state = {
    departureCity: "New York",
    destinationCity: "Montreal",
    departureDate: "Fri,Aug 2",
    passengers: 1
  };

  handleOnSubmit = () => {
    this.props.handleSearch(this.state);
  };

  render() {
    return (
      <div className="container">
        <div className="row no-gutters">
          <div className="col-md-3  mb-2">
            <div className="input-group input-group-lg">
              <div className="input-group-prepend">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-location-arrow" />
                  </span>
                </div>
              </div>
              <input
                type="text"
                className="form-control"
                value={this.state.departureCity}
              />
            </div>
          </div>
          <div className="col-md-3  mb-2">
            <div className="input-group input-group-lg">
              <div className="input-group-prepend">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-map-marker-alt" />
                  </span>
                </div>
              </div>
              <input
                type="text"
                className="form-control"
                value={this.state.destinationCity}
              />
            </div>
          </div>

          <div className="col-md-2 col-6 mb-2">
            <div className="input-group input-group-lg">
              <div className="input-group-prepend">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-calendar" />
                  </span>
                </div>
              </div>
              <input
                type="text"
                className="form-control"
                value={this.state.departureDate}
              />
            </div>
          </div>
          <div className="col-md-2 col-6 mb-2">
            <div className="input-group input-group-lg">
              <div className="input-group-prepend">
                <div className="input-group-prepend">
                  <span className="input-group-text">
                    <i className="fas fa-user" />
                  </span>
                </div>
              </div>
              <input
                type="text"
                className="form-control"
                value={`${this.state.passengers} Passenger`}
              />
            </div>
          </div>

          <div className="col-md-2">
            <button
              disabled={this.props.searchInitiated}
              onClick={this.handleOnSubmit}
              className="btn btn-orange btn-block btn-lg text-white"
            >
              {this.props.searchFinalised || this.props.searchInitiated
                ? "Update"
                : "Search"}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
