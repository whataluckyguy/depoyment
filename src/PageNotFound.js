import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div>
      <h1>
        This route does not exist. Please Go to Home page by clicking{" "}
        <Link to="/">here</Link>.
      </h1>
    </div>
  );
}

export default PageNotFound;
