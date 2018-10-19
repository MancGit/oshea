import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="container text-white text-center">
        <form>
          <select className="form-control form-control-sm ml-auto mt-4">
            <option value="/en">English</option>
            <option value="/fr-ca">Francais</option>
          </select>
        </form>

        <h1 className="d-block d-md-none">Osheaga Musique Festival</h1>
        <h2 className="mb-3">Book Your Trip With Us</h2>
      </div>
    );
  }
}
