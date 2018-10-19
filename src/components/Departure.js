import React, { Component } from "react";
import moment from "moment";

const Departure = props => {
  const {
    arrivalTime,
    currency,
    departureCity,
    departurePort,
    departureTime,
    destinationCity,
    destinationPort,
    providerLogo,
    duration,
    price
  } = props.departure;

  return (
    <div className="card">
      <div className="card-body">
        <div className="row d-flex justify-content-between">
          <img className="d-flex" src={providerLogo} alt="" />
          <h2 className="text-orange flex-end p-3">
            <b>{Math.ceil(price) / 100}</b> <small>{currency}</small>
          </h2>
        </div>
        <div className="row">
          <div className="col-3">
            <i className="fas fa-dot-circle text-primary" />

            <span className="text-primary font-weight-bold">
              {moment(departureTime).format("h:mm a")}
            </span>
          </div>
          <div className="col-9">
            <span className="font-weight-bold">
              <em>{departureCity}</em> - {departurePort}
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <i className="fas fa-map-marker-alt text-secondary" />
            <span className="text-secondary font-weight-bold">
              {moment(arrivalTime).format("h:mm a")}
            </span>
          </div>
          <div className="col-9">
            <span className="text-secondary">
              <em>{destinationCity}</em> - {destinationPort}
            </span>
          </div>
        </div>
        <div className="row text-secondary px-4 pt-1">
          <i className="fas fa-bus p-1" />
          <span>
            {(duration / 60) | 0}h {duration % 60 | 0}m
          </span>
        </div>
      </div>
    </div>
  );
};

export default Departure;
