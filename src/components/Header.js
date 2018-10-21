import React, { Component } from "react";
import { connect } from "react-redux";
const Translate = require("react-redux-i18n").Translate;
import { setLocale } from "react-redux-i18n";

class Header extends Component {
  state = {
    locale: this.props.locale
  };
  onChangeLanguage = e => {
    this.setState({ locale: e.target.value });
    this.props.setLocale(e.target.value);
  };

  render() {
    return (
      <div className="container text-white text-center">
        <select
          id="locale"
          value={this.state.locale}
          onChange={this.onChangeLanguage}
          className="form-control ml-auto"
        >
          <option value="en">En</option>
          <option value="fr">Fr</option>
        </select>

        <h1 className="mt-0">
          <Translate value="header.title" />
        </h1>
        <h2 className="mb-3">
          <Translate value="header.subtitle" />
        </h2>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setLocale: locale => dispatch(setLocale(locale))
});

const mapStateToProps = state => ({
  locale: state.i18n.locale
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
