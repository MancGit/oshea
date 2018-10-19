import React from "react";
import spinner from "../../public/images/spinner.gif";

const Loading = () => {
  return (
    <div className="text-center mt-5">
      <h2 className="display-4">We're finding you the cheapest fares!</h2>
      <img src={spinner} alt="Loading..." />
    </div>
  );
};

export default Loading;
