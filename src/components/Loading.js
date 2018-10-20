import React from "react";
import spinner from "../../public/images/spinner.gif";
const Translate = require("react-redux-i18n").Translate;

const Loading = () => {
  return (
    <div className="text-center mt-5">
      <h2 className="display-4">
        <Translate value="loading.message" />
      </h2>
      <img src={spinner} />
    </div>
  );
};

export default Loading;
