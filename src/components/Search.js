import React from "react";
const Translate = require("react-redux-i18n").Translate;

export default class Search extends React.Component {
  handleOnSubmit = () => {
    this.props.handleSearch();
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
                defaultValue="New York"
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
                defaultValue="Montreal"
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
                defaultValue="2/08/2018"
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
                defaultValue="1 Adult"
              />
            </div>
          </div>

          <div className="col-md-2">
            <button
              disabled={this.props.searchInitiated}
              onClick={this.handleOnSubmit}
              className="btn btn-orange btn-block btn-lg text-white"
            >
              {this.props.searchFinalised || this.props.searchInitiated ? (
                <Translate value="search.update" />
              ) : (
                <Translate value="search.submit" />
              )}
            </button>
          </div>
        </div>
      </div>
    );
  }
}
